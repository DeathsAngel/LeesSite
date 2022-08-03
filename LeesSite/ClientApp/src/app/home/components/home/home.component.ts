import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DataCollectionComponent } from '@data/components';
import { DataService } from '@data/service';
import { Picture } from '@data/models';
import { async } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public picture: Picture | null | undefined = null;

  constructor(private dialog: MatDialog, private dataService: DataService) { }

  ngOnInit(){
    this.dialog.open(DataCollectionComponent);
    this.loadPic();
  }

  protected async loadPic() {
    this.dataService.getPic(4).subscribe(e => this.picture = e);
  }

}
