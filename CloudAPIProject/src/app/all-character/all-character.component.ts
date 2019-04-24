import { Component, OnInit } from '@angular/core';
import { APIServiceService, ICharacter } from '../apiservice.service';

@Component({
  selector: 'app-all-character',
  templateUrl: './all-character.component.html',
  styleUrls: ['./all-character.component.css']
})
export class AllCharacterComponent implements OnInit {

  Characters : ICharacter[];
  PageNr : number = 1;
  PageSize : number = 5;
  Gender : string = "";

  constructor(private APIServ : APIServiceService) { }

  ngOnInit() {
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
