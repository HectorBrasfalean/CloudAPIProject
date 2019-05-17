import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
	selector:'app-home',
	moduleId:module.id,
	templateUrl:'home.component.html',
	styleUrls:['home.component.css']
})

export class HomeComponent{
	constructor(private AuthServ : AuthService){
	}
}