import { Component, OnInit } from '@angular/core';
import { AuthService, IReceivedToken } from '../auth.service';
import { APIServiceService } from '../apiservice.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private AuthServ : AuthService,private APIServ : APIServiceService) { }
  keyAPI : IReceivedToken;

  ngOnInit() {
  }
 
  Authorize(){
    this.AuthServ.login(); 
    
  }

}
