import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) { }

  sendEmail(email) {
  	return this._http.post('/send', email)
  }

}
