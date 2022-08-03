import { Component, ElementRef, Inject, ViewChild } from '@angular/core';
import { Picture, Reason, UserData, SendData } from '@data/models';
import { DataService } from '@data/service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import imageCompression from 'browser-image-compression';

@Component({
  selector: 'app-data-collection',
  templateUrl: './data-collection.component.html',
  styleUrls: ['./data-collection.component.scss']
})
export class DataCollectionComponent{

  @ViewChild('imgUpload') imageUpload: ElementRef | undefined;

  public userData: SendData = new SendData;

  public reasons: Reason[] = [];

  public selectedFile: string | undefined = '';

  public msg = '';

  constructor(
    private service: DataService,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private dialog: MatDialogRef<DataCollectionComponent>
  ) { this.populateReasons(); }

  public populateReasons() {
    this.service.getReasons().subscribe((r: Reason[]) => {
      this.reasons = r;
    });
  }

  public form = new FormGroup({
    name: new FormControl('', {
      validators: [
        Validators.required,
        Validators.minLength(3)
      ]
    }),
    email: new FormControl('', {
      validators: [
        Validators.email
      ]
    }),
    reason: new FormControl('', {
      validators: [
        Validators.required
      ]
    }),
    imageName: new FormControl('', {})
  });

  public onSubmit() {

    const { name, email, reason, imageName } = this.form.getRawValue();
    const image = this.selectedFile;

    if (image != null) {

      const picObj = Object.assign(new Picture(), {
        imageName,
        image
      });

      const user = Object.assign(new UserData(), {
        name,
        email,
        reasonId: reason,
        picture: picObj
      });

      this.service.postUser(user);

    } else {

      const user = Object.assign(new UserData(), {
        name,
        email,
        reasonId: reason
      });

      this.service.postUser(user);
    }

    this.close();
  }

  public async onFileSelected(event: any) {
    const options = {
      maxSizeMB: .5,
      maxWidthOrHeight: 1920,
      useWebWorker: true
    }

    if (event.target.files[0]) {
      var file = event.target.files[0];
      var mimeType = file.type;

      if (mimeType.match(/image\/*/) == null) {
        this.msg = "Only images are supported";
        this.imageUpload!.nativeElement.value = '';
        return;
      }

      try {
        const compressedFile = await imageCompression(file, options);

        var reader = new FileReader();
        reader.readAsDataURL(compressedFile);

        reader.onload = (_event) => {
          this.msg = "";
          this.selectedFile = reader.result?.toString();
        }

      } catch (error) {
        console.log(error);
      }

      this.form.controls.imageName.addValidators([Validators.required, Validators.minLength(3)]);
      this.form.controls.imageName.updateValueAndValidity();
    } else{
      this.selectedFile = '';
      this.form.controls.imageName.clearValidators();
      this.form.controls.imageName.updateValueAndValidity();
    }
  }

  public close() {
    this.dialog.close();
  }
}
