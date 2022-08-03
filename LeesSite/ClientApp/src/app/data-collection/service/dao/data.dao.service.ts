import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Reason, UserData, Picture } from '@data/models';
import { ConfigService } from '@common/services';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataDaoService {

  constructor(private client: HttpClient, private config: ConfigService) { }

  public getUserData(): Observable<UserData[]> {
    return this.client.get<UserData[]>(`${this.config.config.API_BASE_URL}home`);
  }

  public getUser(id: number): Observable<UserData> {
    return this.client.get<UserData>(`${this.config.config.API_BASE_URL}home/${id}`);
  }

  public createUserData(data: UserData): Observable<Object> {
    return this.client.post(`${this.config.config.API_BASE_URL}home`, data);
  }

  public getReasons(): Observable<Reason[]> {
    return this.client.get<Reason[]>(`${this.config.config.API_BASE_URL}home/reason`);
  }

  public postReason(reason: Reason): Observable<Object> {
    return this.client.post(`${this.config.config.API_BASE_URL}home/reason`, reason);
  }

  public postPic(pic: Picture): Observable<Object> {
    return this.client.post(`${this.config.config.API_BASE_URL}home/picture`, pic);
  }

  public getPic(id: number): Observable<Picture> {
    return this.client.get<Picture>(`${this.config.config.API_BASE_URL}home/picture/${id}`);
  }

  public async getPics(): Promise<Observable<Picture[]>> {
    return this.client.get<Picture[]>(`${this.config.config.API_BASE_URL}home/picture`);
  }
}
