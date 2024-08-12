import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.unsplash.com/search/photos';
  private accessKey = '-tr0Rnz8jAuNdzaJdFjWCmG3SAp35AacM_cLndcvdKI  '; // Replace with your actual Unsplash Access Key

  constructor(private http: HttpClient) {}

  getData(query: string, page: number = 1, perPage: number = 10): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.accessKey}`,
    });

    const params = {
      query,
      page: page.toString(),
      per_page: perPage.toString(),
    };

    return this.http.get(this.apiUrl, { headers, params });
  }
}
