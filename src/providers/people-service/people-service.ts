import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the PeopleServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class PeopleServiceProvider {

apiUrl="https://randomuser.me/api/?results=10";
  constructor(public http: HttpClient) {
    console.log('Hello PeopleServiceProvider Provider');

  }
getUsers() {
  return new Promise(resolve => {
    this.http.get(this.apiUrl).subscribe(data => {
      resolve(data);
    }, err => {
      console.log(err);
    });
  });
}
}
