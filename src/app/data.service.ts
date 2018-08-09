import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private Http: HttpClient) { }


  getUsers() {
    return this.Http.get('https://jsonplaceholder.typicode.com/users')
  }
}
