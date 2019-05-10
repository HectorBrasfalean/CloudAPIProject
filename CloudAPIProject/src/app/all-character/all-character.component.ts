import { Component, OnInit } from '@angular/core';
import { APIServiceService, ICharacter } from '../apiservice.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-all-character',
  templateUrl: './all-character.component.html',
  styleUrls: ['./all-character.component.css']
})
export class AllCharacterComponent implements OnInit {

  Characters : ICharacter[];
  PageNr : number;
  PageSize : number;
  Gender : string;

  constructor(private APIServ : APIServiceService,private AuthServ:AuthService) {
    this.Gender = this.APIServ.gender;
    this.PageNr = this.APIServ.pageNumber;
    this.PageSize = this.APIServ.pageSize;
    
  }

  ngOnInit() {
  }

  Save(){
    this.APIServ.gender = this.Gender;
    this.APIServ.pageNumber = this.PageNr;
    this.APIServ.pageSize = this.PageSize;
  }

  GoToPrevPage(){
     if(this.PageNr != 1){
       this.PageNr--;
       this.GetAllCharacters();
     }
  }

  GoToNextPage(){
    this.PageNr++;
    this.GetAllCharacters();
  }
  
  GetAllCharacters(){
    this.APIServ.GetAllCharacters(this.PageSize,this.PageNr,this.Gender).subscribe(characters => {
      this.Characters = characters;
    })
  }

}
