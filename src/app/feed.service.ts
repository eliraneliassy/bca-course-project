import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.interface';
import { delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private BASE_URL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getFeed(): Observable<Item[]> {
    return this.httpClient.get<Item[]>(`${this.BASE_URL}/feed`);
  }
}
