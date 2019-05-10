import { Component, OnInit } from '@angular/core';
import { AuthService, IReceivedToken } from '../auth.service';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private AuthServ : AuthService,private APIServ : APIServiceService) { }

  ngOnInit() {
  }

  Authorize(){
    this.AuthServ.login();
    this.AuthServ.getToken().subscribe( result => {
      console.log(result.access_token);
      this.APIServ.authKey = result.access_token;
    });
    console.log(this.APIServ.authKey);
    // Needs fix, async problem 
  }

}
