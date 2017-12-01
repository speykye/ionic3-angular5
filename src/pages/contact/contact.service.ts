import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContectService {
    dataUrl: string = '../../assets/mock-data/userInfo.json';
    constructor(private http: HttpClient) { }

    public getData(id: any): Observable<any> {
        return this.http.get(this.dataUrl);
    }
}