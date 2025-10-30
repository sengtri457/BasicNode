import { Injectable } from "@angular/core";
import { enviroment } from "../env/enviroment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { userInterface } from "../models/userModels";

@Injectable({
  providedIn: "root",
})
export class Apiservices {
  private apiUrl = enviroment.apiBase;

  constructor(private http: HttpClient) {}

  getUser(url: String): Observable<userInterface> {
    return this.http.get<userInterface>(this.apiUrl + url);
    // http://localhost:4000/api/product or Category
  }
  addUsers(url: String, payloard: any): Observable<any> {
    return this.http.post(this.apiUrl + url, payloard);
  }
}
