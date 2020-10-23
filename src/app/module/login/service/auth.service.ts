import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpErrorResponse, HttpParams } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  serviceUrl: string;
  otpUrl: string;
  forgetPassVal: boolean;
  unlockVal: boolean;
  private loginStatus = false;

  constructor(private http: HttpClient) {
    this.serviceUrl = environment.serviceUrl;
    this.otpUrl = environment.otpUrl
  }

  setForgetPassValue(value: boolean) {
    this.forgetPassVal = value;
  }

  getForgetPassValue() {
    return this.forgetPassVal;
  }

  setUnlockAccountValue(value: boolean) {
    this.unlockVal = value;
  }

  getUnlockAccountValue() {
    return this.unlockVal
  }


  setLoggedIn(status: boolean, token: string) {
    //for route guard
    this.loginStatus = status;
    sessionStorage.setItem("loggedIn", "true");
    sessionStorage.setItem("token", token);
  }

  get isLoggedIn() {
    if (sessionStorage.getItem('loggedIn') === 'true') {
      this.loginStatus = true;
    }
    return this.loginStatus;
  }


  login(icegateId: string, password: string): Observable<any> {
    let authData = {
      icegateId: icegateId,
      password: password
    }
    console.log(authData);
    let url = this.serviceUrl + 'login';
    return this.http.post<any>(url, authData)
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }

  getVerificationOptions(icegateId: string): Observable<any> {
    let url = this.serviceUrl + 'get-email-mobile/' + icegateId;
    return this.http.get<any>(url)
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }

  getEmailOtp(email: string): Observable<any> {
    let url = this.serviceUrl + 'send-email-otp/?email=' + email;
    return this.http.get<any>(url)
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }

  getMobileOtp(mobile: string): Observable<any> {
    let url = this.serviceUrl + 'send-mobile-otp/' + mobile;
    return this.http.get<any>(url)
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }

  verifyOtp(icegateId: string, otp: string): Observable<any> {
    let url = this.otpUrl + 'verify-otp/' + icegateId;
    return this.http.post<any>(url, { otp: otp })
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }


  resetPassword(icegateId: string, password: string): Observable<any> {
    let url = this.serviceUrl + 'reset-password/' + icegateId;
    return this.http.post<any>(url, { password: password })
      .pipe(map((data: any) => data),
        catchError(this.handleError))
  }


  handleError(errorObj: HttpErrorResponse) {
    // console.log(errorObj.error);
    return throwError(errorObj.error)
  }



}
