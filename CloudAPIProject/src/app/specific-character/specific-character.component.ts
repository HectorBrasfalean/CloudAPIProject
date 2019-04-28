import { Component, OnInit } from '@angular/core';
import { ICharacter, APIServiceService } from '../apiservice.service';

@Component({
  selector: 'app-specific-character',
  templateUrl: './specific-character.component.html',
  styleUrls: ['./specific-character.component.css']
})
export class SpecificCharacterComponent implements OnInit {

  Character : ICharacter;
  Id : number;
  constructor(private APIServ : APIServiceService) {
    this.Id = this.APIServ.searchedId;
  }

  Save(){
    this.APIServ.searchedId = this.Id;
  }

  ngOnInit() {
  }

  GetACharacter(){
    this.APIServ.GetCharacter(this.Id).subscribe(character => {
      this.Character = character;
    })
  }

}
