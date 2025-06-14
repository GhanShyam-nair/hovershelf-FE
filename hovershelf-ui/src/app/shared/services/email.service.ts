import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    private apiUrl = 'http://localhost:5159/Email'; 

    constructor(private http: HttpClient) {}

    sendEmail(emailData: { to: string; subject: string; body: string }): Observable<any> {
        return this.http.post(this.apiUrl, emailData);
    }
}
