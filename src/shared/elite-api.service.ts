import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from "rxjs/Observable";
import 'rxjs';

@Injectable()
export class EliteApi{
    
    private baseUrl = 'https://elite-schedule-app-i2-b3b76.firebaseio.com'; 
    currentTourney: any = {};

    constructor(public http: Http) {}

    getTournaments(): Observable<any>{
        return this.http.get(this.baseUrl+'/tournaments.json');
    }

    getTournamentData(tourneyId) : Observable<any>{
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyId}.json`)
        .map((response: Response) =>{
            this.currentTourney = response.json();
            return this.currentTourney;
        });
    }

}