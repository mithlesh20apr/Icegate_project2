import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
//import { Observable } from "rxjs/Rx";
//import { Headers, RequestOptions } from "@angular/http";
import { environment } from "../../../../environments/environment";
import { ɵvalidateStyleProperty } from "@angular/animations/browser";
@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpClient) { }
  createBillOfEntry(data) {
    return this.http.post(
        `${environment.apiUrl}post`,
        data,
        {
          observe: "body",
          headers: new HttpHeaders().append(
              "Content-Type",
              "application/json"
          )
      }
    );
}

}
