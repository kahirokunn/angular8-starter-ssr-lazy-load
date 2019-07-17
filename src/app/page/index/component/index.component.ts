import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GithubUserInfoService,
  IUserInfo,
} from '@/app/service/github-user-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styles: ['p { font-size: 100px; }']
})
export class IndexComponent implements OnInit, OnDestroy {

  someText = ''
  user: IUserInfo
  subscription: Subscription

  constructor(private githubUserInfoService: GithubUserInfoService) { }

  ngOnInit() {
    this.subscription = this
      .githubUserInfoService
      .user$
      .subscribe(user => this.user = user)
    this.githubUserInfoService.fetchUser('kahirokunn')
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
