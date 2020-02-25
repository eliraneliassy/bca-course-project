import { FeedService } from './feed.service';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Item } from './item.interface';

@Injectable({
  providedIn: 'root'
})
export class ProductResolveService implements Resolve<Item> {


  constructor(private feedService: FeedService) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<Item> {
    const id = route.params.id;

    return this.feedService.getProductById(id);

  }
}
