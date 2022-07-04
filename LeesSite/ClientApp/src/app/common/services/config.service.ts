import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@common/interfaces';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  public config: ApplicationConfig;

  constructor(private httpClient: HttpClient) {
    this.config = {
      API_BASE_URL: ""
    }
  }

  public loadConfig(): Promise<void> {
    return this.httpClient.get<ApplicationConfig>('assets/configs/config.json')
      .toPromise()
      .then((config: ApplicationConfig) => {
        this.config = config;
      });
  }
}
