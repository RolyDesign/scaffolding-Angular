import { HttpClient } from '@angular/common/http';
import {  Observable} from 'rxjs';

export class HttpService<TCreate,TResponse,TUpdate,TParam> {

  constructor(protected http: HttpClient, private Url: string) { }

  getAll$:Observable<TResponse[]> = this.http.get<TResponse[]>(this.Url)

  create$(item:TCreate):Observable<TResponse>{
    return this.http.post<TResponse>(this.Url, item,);
  }

  getById$(param:TParam):Observable<TResponse>{
    return this.http.get<TResponse>(`${this.Url}/${param}`)
  }

  update$(item:TUpdate, param:TParam):Observable<void>{
    return this.http.put<void>(`${this.Url}/${param}`,item)
  }

  delete$(param:TParam):Observable<any>{
    return this.http.delete<any>(`${this.Url}/${param}`)
  }
}

