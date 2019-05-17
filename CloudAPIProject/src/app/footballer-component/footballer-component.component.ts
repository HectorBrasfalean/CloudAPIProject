import { Component, OnInit } from '@angular/core';
import { APIServiceService, IFootballer } from '../apiservice.service';

@Component({
  selector: 'app-footballer-component',
  templateUrl: './footballer-component.component.html',
  styleUrls: ['./footballer-component.component.css']
})
export class FootballerComponentComponent implements OnInit {

  Footballers : IFootballer[];
  footballer : IFootballer = {
    id : 0,
    name : "ar",
    born : "d",
    weight : 0,
    length : 0,
    nationality : "d"
  };
  Id : number;
  Name : string;
  Weight : number;
  Length : number;
  Nationality : string;
  Born : string;

  Page:number;

  constructor(private APIServ : APIServiceService) { 
    this.Id = APIServ.id;
    this.Name = APIServ.name;
    this.Weight = APIServ.weight;
    this.Length = APIServ.length;
    this.Nationality = APIServ.nationality;
    this.Born = APIServ.born;
    this.Page = APIServ.pageNumberFootballer;
  }

  ngOnInit() {
   
  }

  Save(){
    this.APIServ.id = this.Id;
    this.APIServ.name = this.Name;
    this.APIServ.weight = this.Weight;
    this.APIServ.length = this.Length;
    this.APIServ.nationality = this.Nationality;
    this.APIServ.born = this.Born;
  }

  AddFootballer(){
    this.footballer.born = this.Born;
    this.footballer.weight = this.Weight;
    this.footballer.length = this.Length;
    this.footballer.name = this.Name;
    this.footballer.nationality = this.Nationality;
    this.APIServ.AddFootballer(this.footballer).subscribe((res) => {
      console.log("Created the footballer");
      this.Name = "";
      this.Weight = NaN;
      this.Length = NaN;
      this.Nationality = "";
      this.Born = "";
    });
    this.GetFootballers();
  }

  DeleteFootballer(){
    this.APIServ.DeleteFootballer(this.Id).subscribe((res) => {
      console.log("Deleted the footballer");
      this.Id = NaN;
    });
    this.GetFootballers();
  }

  GoToPrevPage(){
    if(this.APIServ.pageNumberFootballer != 0){
      this.APIServ.pageNumberFootballer--;
      this.GetFootballers();
      this.Page = this.APIServ.pageNumberFootballer;
    }
 }

 GoToNextPage(){
   this.APIServ.pageNumberFootballer++;
   this.GetFootballers();
   this.Page = this.APIServ.pageNumberFootballer;
 }

  GetFootballers(){
    this.APIServ.GetFootballers().subscribe(footballers => {
      this.Footballers = footballers;
    })
  }

}
