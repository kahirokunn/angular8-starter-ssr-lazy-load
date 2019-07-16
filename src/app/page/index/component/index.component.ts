import { Component, OnInit, OnDestroy } from '@angular/core';
import {
  GithubUserInfoService,
  IUserInfo,
} from '@/app/service/github-user-info.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit, OnDestroy {

  user: IUserInfo
  subscription: Subscription

  constructor(private githubUserInfoService: GithubUserInfoService) { }

  ngOnInit() {
    this.githubUserInfoService.fetchUser('kahirokunn')
    this.subscription = this
      .githubUserInfoService
      .user$
      .subscribe(user => this.user = user)
  }

  ngOnDestroy() {
    this.subscription.unsubscribe()
  }
}
