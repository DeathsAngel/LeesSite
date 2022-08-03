import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserData, Picture, Reason } from '../models';
import { DataDaoService } from './dao';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private dataService: DataDaoService) { }

  public getData(): Observable<UserData[]> {
    return this.dataService.getUserData();
  }

  public getUser(id: number): Observable<UserData> {
    return this.dataService.getUser(id);
  }

  public postUser(user: UserData) {
    this.dataService.createUserData(user).subscribe(e => console.log(e));
  }

  public getReasons(): Observable<Reason[]> {
    return this.dataService.getReasons();
  }

  public postReason(reason: Reason) {
    this.dataService.postReason(reason);
  }

  public postPic(pic: Picture) {
    this.dataService.postPic(pic);
  }

  public async getPics(): Promise<Observable<Picture[]>> {
    return await this.dataService.getPics();
  }

  public getPic(id: number): Observable<Picture> {
    return this.dataService.getPic(id);
  }
}
