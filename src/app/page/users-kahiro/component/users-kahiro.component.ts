import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GithubUserInfoService,
  IUserInfo,
} from '@/app/service/github-user-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './users-kahiro.component.html',
  styles: ['p { font-size: 100px; }']
})
export class UsersKahiroComponent implements OnInit, OnDestroy {

  someText = '';
  user: IUserInfo;
  subscription: Subscription;

  constructor(private githubUserInfoService: GithubUserInfoService) { }

  ngOnInit() {
    this.githubUserInfoService.fetchUser('kahirokunn');
    this.subscription = this
      .githubUserInfoService
      .user$
      .subscribe(user => this.user = user);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
