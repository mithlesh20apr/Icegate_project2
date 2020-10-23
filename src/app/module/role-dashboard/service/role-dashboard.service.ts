import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RoleDashboardService {
  serviceUrl: string;

  constructor(private http: HttpClient) {
    this.serviceUrl = environment.dashboardUrl;
  }
  

  getWidgets(icegateId: string): Observable<any> {
    let url = this.serviceUrl + 'get-widgets/'+icegateId;
    return this.http.get<any>(url)
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }

  customizeWidgets(icegateId: string): Observable<any> {
    let url = this.serviceUrl + 'set-widgets';
    return this.http.get<any>(url)
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }


  handleError(errorObj: HttpErrorResponse) {
    // console.log(errorObj.error);
    return throwError(errorObj.error)
  }



}
