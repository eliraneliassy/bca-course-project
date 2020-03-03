import { FeedService } from './../feed.service';
import { SuggestionService, SuggestionResponse } from './../suggestion.service';
import { AuthService, User } from './../auth.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: User;

  search$: Subject<string> = new Subject<string>();
  suggestions: string[];

  constructor(
    private authService: AuthService,
    private suggestionService: SuggestionService,
    private feedService: FeedService) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe((user: User) => this.user = user);

    this.search$.
      pipe(
        debounceTime(300),
        distinctUntilChanged(),
        switchMap((term: string) => this.suggestionService.getSuggestions(term))
      )
      .subscribe((res: SuggestionResponse) =>
        console.log(res)
      );
  }
  logout() {
    this.authService.logout();
  }

  search(term: string) {
    this.search$.next(term);
  }

}
