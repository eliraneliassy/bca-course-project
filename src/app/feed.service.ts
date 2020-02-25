import { environment } from './../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item.interface';
import { map, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  private BASE_URL = environment.baseUrl;

  constructor(private httpClient: HttpClient) { }

  getFeed(page?: number): Observable<Item[]> {
    let params: HttpParams = new HttpParams();
    if (page) {

      params = params.append('page', page.toString());
    }

    return this.httpClient.get<Item[]>(`${this.BASE_URL}/feed`, { params });
  }

  getProductById(id: string): Observable<Item> {
    return this.getFeed().pipe(
      delay(3000),
      map((items: Item[]) => {
        return items.find((item: Item) => item._id === id);
      })
    );
  }
}
