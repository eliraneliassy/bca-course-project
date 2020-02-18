import { Item } from './item.interface';
import { db } from './db';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  item: Item = db[0];

}
