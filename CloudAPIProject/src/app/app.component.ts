import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CloudAPIProject';

  constructor(private AuthServ:AuthService){
    AuthServ.handleLoginCallback();
    // if(!(AuthServ.isAuthenticated())){
    //   window.location.href="http://localhost:4200/login";
    // }
    console.log(AuthServ.isLoggedIn);
  }

  ngOnInit(){
    // if (this.AuthServ.isLoggedIn) {
    //   this.AuthServ.renewTokens();
    // }
    
  }
}


