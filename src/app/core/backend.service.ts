import { environment } from './../../environments/environment.dev';
import { HttpClient,
         HttpRequest,
         HttpResponse, 
         HttpParams, 
         HttpHeaders,
         HttpEventType } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Point } from '../shared/models/point';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';


enum httpMethods {
  GET = 1,
  POST = 2,
  PUT = 3,
  DELETE = 4
};

@Injectable()
export class BackendService {
  baseUrl: string;
  constructor(private hc: HttpClient){
    this.baseUrl = environment.http.baseUrl;
  }

  ngOnInit(): void {
  }
  private findMethod(methodId: httpMethods){
    let method: string;
    switch(methodId){
      case httpMethods.GET:
        method = 'GET';
        break;
      case httpMethods.POST:
        method = 'POST';
        break;
      case httpMethods.PUT:
        method = 'PUT';
        break;
      case httpMethods.DELETE:
        method = 'DELETE';
        break;
    }
    return method;
  }

  executeRequest(methodId: httpMethods, url: string, addToken = true, options?: {
    headers?: HttpHeaders;
    reportProgress?: boolean;
    params?: HttpParams;
    responseType?: 'arraybuffer' | 'blob' | 'json' | 'text';
    withCredentials?: boolean;
    body?: any
  }): Observable<any> {

    const body = options ? options.body : '';

    let httpRequest = new HttpRequest(this.findMethod(methodId), url, body, options);

    // if (addToken) {
    //   httpRequest = this.addTokenToRequest(httpRequest);
    // }

    return this.hc.request(httpRequest)
      .filter(req => req.type === HttpEventType.Response)
      // .do(() => console.log(`after filter`))
      .map(req => req as HttpResponse<any>)
      // .do(() => console.log(`after first map`))
      .map(req => req.body.data ? req.body.data : req.body)
      // .do((req) => console.log(`after second map, req is ${(JSON.stringify(req)).substr(0, 100)}`))
      // .catch(error => {
      //   // console.log(`now in catch, error is ${JSON.stringify(error)}`);
      //   if (this.isAuthenticationError(error)) {
      //     // console.log(`there is an authentication error!`);
      //     return this.refreshToken()
      //       .flatMap(() => {
      //         // console.log(`in flatmap`);
      //         const requestWithRefreshToken = this.addTokenToRequest(httpRequest);
      //         return this.http.request(requestWithRefreshToken)
      //           .filter(req => req.type === HttpEventType.Response)
      //           .map(req => req as HttpResponse<any>)
      //           .map(req => req.body.data ? req.body.data : req.body)
      //           .catch(afterRefreshError => {
      //             if (this.isAuthenticationError(afterRefreshError)) {
      //               this.authService.signout();
      //             }
      //             return this.handleError(afterRefreshError);
      //           });
      //       })
      //       .catch(refreshError => {
      //         if (this.isAuthenticationError(refreshError)) {
      //           this.authService.signout();
      //         }
      //         return this.handleError(refreshError);
      //       });
      //   } else {
      //     return this.handleError(error);
      //   }
      // });
  }

  getAllPoints(): Observable<any>{
    // return this.hc.get('http://yay-server.herokuapp.com/movies');
   // .do((data)=> console.log(data))
  return this.hc.post('http://localhost:5000/add/',{name: "independance day"});
  }

  addPoint(xCoor: Number, yCoor: Number){
    return this.executeRequest(httpMethods.POST,`${this.baseUrl}/addPoint`,false,{
      body: {x_coordinates: xCoor,y_coordinates: yCoor}
    });
  //  this.hc.post('http://localhost:5000/addPoint',{x_coordinates: xCoor,y_coordinates: yCoor}).subscribe();
  }
}
