import { Component, OnInit } from '@angular/core';
import { APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-settings-footballers',
  templateUrl: './settings-footballers.component.html',
  styleUrls: ['./settings-footballers.component.css']
})
export class SettingsFootballersComponent implements OnInit {

  Nationality : string;
  PageSize : number;
  Direction : string;
  Weight : string;
  SortBy : string;

  constructor(private APIServ : APIServiceService) {
    this.Nationality = this.APIServ.nationalityFilter;
    this.PageSize = this.APIServ.pageSizeFootballer;
    this.Direction = this.APIServ.direction;
    this.Weight = this.APIServ.weightFilter;
    this.SortBy = this.APIServ.sortBy;
   }

  ngOnInit() {
  }

  Save(){
    this.APIServ.nationalityFilter = this.Nationality;
    this.APIServ.pageSizeFootballer = this.PageSize;
    this.APIServ.weightFilter = this.Weight;
    this.APIServ.direction = this.Direction;
    this.APIServ.sortBy = this.SortBy;
  }

}
