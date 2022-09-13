import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccessOk } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private URLACCESS = "http://192.168.100.4/guacharos/paths/Access.php";

  constructor(
    private readonly http: HttpClient
  ) { }

  createAccess(body: any): Observable<any>{
    return this.http.post<any>(this.URLACCESS, body);
  }
}
