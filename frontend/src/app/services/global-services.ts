import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GlobalServices {
  constructor(private httpClient:HttpClient){}

  private apiUrl = 'http://localhost:8000';

  sendEmail(name:string, subject:string, to:string, cc:string, bcc:string, body:string, attachment:any){
    const formData = new FormData();

    formData.append('name', name);
    formData.append('subject', subject);
    formData.append('to', to);
    formData.append('cc', cc);
    formData.append('bcc', bcc);
    formData.append('body', body);

    if(attachment){
      formData.append('attachment', attachment);
    }

    return this.httpClient.post(`${this.apiUrl}/api/sendmail`, formData);
    // return this.httpClient.post(this.apiUrl+'/api/sendmail', {name, subject, to, cc, bcc, body, attachment});
  }
}
