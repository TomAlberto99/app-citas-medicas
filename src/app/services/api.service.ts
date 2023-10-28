import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Lista, User } from '../interfaces/models';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private logUrl="http://localhost:3000/user";
  private listaUrl = "http://localhost:3000/lista";

  constructor(private http: HttpClient) { }

  public getApiLog():Observable<User[]>{
    return this.http.get<User[]>(this.logUrl);
  }
  public getApiList():Observable<Lista[]>{
    return this.http.get<Lista[]>(this.listaUrl);
  }



}
