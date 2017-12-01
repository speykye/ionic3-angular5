import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class AboutService {
    dataUrl: string = '../../assets/mock-data/contact.json';
    headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    constructor(private http: HttpClient) { }

    public getData(): Observable<any> {
        return this.http.get(this.dataUrl);
    }

}