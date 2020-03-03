import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SuggestionService {

  constructor(private httpCleint: HttpClient) { }

  getSuggestions(term: string): Observable<SuggestionResponse> {
    let params = new HttpParams();
    params = params.append('q', term);
    return this.httpCleint.get<SuggestionResponse>
      ('/suggestions', { params });
  }
}


export interface SuggestionResponse {
  suggestions: string[];
}
