import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment.development';
@Injectable({
  providedIn: 'root'
})
export class ImgService {
  Url= environment.API_URL

  constructor(protected http: HttpClient) { }

  addImg$(img:FormData):Observable<string>{
    return this.http.post(`${this.Url}img`, img ,{responseType: 'text'});
  }
}


