import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  constructor(private obj2 : HttpClient) { }

  fun()
  {
    return this.http.get("http://localhost:1235/MyLogic")
  }

}
