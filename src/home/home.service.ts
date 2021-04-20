import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable()

export class HomeService {
    private apiUrl: string;
    constructor(
        private http: HttpClient
    ) {
        this.apiUrl = environment.apiUrl + 'db.json';
    }

    fetch(): Observable<any> {

        return this.http.get(this.apiUrl);
    }
}