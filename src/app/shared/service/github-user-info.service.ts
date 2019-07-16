import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

export type IUserInfo = {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
  name: string;
  company: string;
  blog: string;
  location: string;
  email: string | null;
  hireable?: any;
  bio: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  created_at: Date;
  updated_at: Date;
}

@Injectable({
  providedIn: 'root'
})
export class GithubUserInfoService {

  private _user$: Subject<IUserInfo> = new Subject()

  get user$(): Observable<IUserInfo> {
    return this._user$
  }

  constructor(private httpClient: HttpClient) { }

  fetchUser(userName: string) {
    this
      .httpClient
      .get(`https://api.github.com/users/${userName}`)
      .subscribe(this._user$)
  }
}
