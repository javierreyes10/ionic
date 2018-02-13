import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from "rxjs/Observable";

@Injectable()
export class EliteApi{
    
    private baseUrl = 'https://elite-schedule-app-i2-b3b76.firebaseio.com'; 
    constructor(public http: Http) {}

    getTournaments(): Observable<any>{
        return this.http.get(this.baseUrl+'/tournaments.json');
    }
}