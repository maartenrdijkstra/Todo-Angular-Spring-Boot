import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {API_URL} from '../../app.constants';

export class HelloWorldBean {
  constructor(public message: string) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(
    private http: HttpClient
  ) {
  }

  executeHelloWorldBeanService(): Observable<HelloWorldBean> {
    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world-bean`);
  }

  executeHelloWorldServiceWithPathVariable(name: string): Observable<any> {

    return this.http.get<HelloWorldBean>(`${API_URL}/hello-world/path-variable/${name}`
      // {headers: header}
    );
  }
}
