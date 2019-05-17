import { Component, OnInit } from '@angular/core';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { AuthService } from '../auth.service';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  constructor(private AuthServ : AuthService) { 
  }

  ngOnInit() {
    console.log(this.AuthServ.isLoggedIn);
  }

  LogIn(){
    this.AuthServ.login(); 
  }

  LogOut(){
    this.AuthServ.logout();
  }

}
