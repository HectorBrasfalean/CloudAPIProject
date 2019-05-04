import { Component, OnInit } from '@angular/core';
import { IFootballer, APIServiceService } from '../apiservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-specific-footballer',
  templateUrl: './specific-footballer.component.html',
  styleUrls: ['./specific-footballer.component.css']
})
export class SpecificFootballerComponent implements OnInit {

  Footballer : IFootballer;
  Id : number;
  constructor(private APIServ : APIServiceService) {
    this.Id = this.APIServ.searchedIdFootballer;
  }

  Save(){
    this.APIServ.searchedIdFootballer = this.Id;
  }

  ngOnInit() {
  }

  GetAFootballer(){
    this.APIServ.GetFootballer(this.Id).subscribe(footballer => {
      this.Footballer = footballer;
    })
  }
}
