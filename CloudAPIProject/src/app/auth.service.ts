import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as auth0 from 'auth0-js';
import { HttpClient } from '@angular/common/http';
import { APIServiceService } from './apiservice.service';


@Injectable()
export class AuthService {

  private _idToken: string;
  private _accessToken: string;
  private userProfile : any;
  private _expiresAt: number;
  authenticated : boolean;

  grantToken : IGrantToken = {
    audience: "https://localhost:44316/api/footballers",
    grant_type: "client_credentials",
    client_id: "cVtlHGhuTfeBb5tTVtIbGWqCc6IFJ0P5",
    client_secret: "-OS3kuLnSSmw-Ogg26JKU4zzn6K7sn4340FAfYQmfFrT6UQW41vS8t4kv9Adza43"
  }

  auth0 = new auth0.WebAuth({
    clientID: 'cVtlHGhuTfeBb5tTVtIbGWqCc6IFJ0P5',
    domain: 'dev-mmm1xxm1.eu.auth0.com',
    responseType: 'token',
    redirectUri: 'http://localhost:4200/callback',
    scope: 'openid',
    client_secret: '-OS3kuLnSSmw-Ogg26JKU4zzn6K7sn4340FAfYQmfFrT6UQW41vS8t4kv9Adza43'
  });

  

  constructor(public router: Router,private http : HttpClient,
    private APIServ : APIServiceService) {
    this.getAccessToken();
  }

  getAccessToken(){
    this.auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken) {
        this.getUserInfo(authResult);
      }
    });
  }

  getUserInfo(authResult) {
    // Use access token to retrieve user's profile and set session
    this.auth0.client.userInfo(authResult.accessToken, (err, profile) => {
      if (profile) {
        this._setSession(authResult, profile);
      }
    });
  
  }

  private _setSession(authResult, profile) {
    // Save authentication data and update login status subject
    this._expiresAt = authResult.expiresIn * 1000 + Date.now();
    this._accessToken = authResult.accessToken;
    this.userProfile = profile;
    this.authenticated = true;
  }

  handleLoginCallback() {
    // When Auth0 hash parsed, get profile
    this.auth0.parseHash(async (err, authResult) => {
      if (authResult && authResult.accessToken) {
        let apiKey = await this.getToken();
        this.APIServ.AuthKey = apiKey.access_token;
        //window.location.hash = '';
        this.getUserInfo(authResult);
      } else if (err) {
        console.error(`Error: ${err.error}`);
      }
      this.router.navigate(['/all']);
    });
  }

  public login() : void{
    this.auth0.authorize();
  }

  async getToken(){
    return await this.http.post<IReceivedToken>(`https://dev-mmm1xxm1.eu.auth0.com/oauth/token`,this.grantToken).toPromise();
  }

  logout() {
    // Log out of Auth0 session
    // Ensure that returnTo URL is specified in Auth0
    // Application settings for Allowed Logout URLs
    this.auth0.logout({
      returnTo: 'http://localhost:4200/home',
      clientID: 'cVtlHGhuTfeBb5tTVtIbGWqCc6IFJ0P5'
    });
  }

  get isLoggedIn(): boolean {
    // Check if current date is before token
    // expiration and user is signed in locally
    console.log(`expire :${this._expiresAt}`);
    console.log(`auth :${this.authenticated}`);
    return Date.now() < this._expiresAt && this.authenticated;
  }
}
export interface IGrantToken {
  audience: string;
  grant_type: string;
  client_id: string;
  client_secret: string;
}  
export interface IReceivedToken {
  access_token: string;
  expires_in: number;
  token_type: string;
}