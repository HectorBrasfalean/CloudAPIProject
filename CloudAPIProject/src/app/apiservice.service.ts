import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  constructor(private http : HttpClient) { }

  GetAllCharacters(pageSize:number = 10,pageNr:number = 1,gender:string){
    return this.http.get<ICharacter[]>(`https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&page=${pageNr}&gender=${gender}`);
  }

  GetCharacter(id:number){
    return this.http.get<ICharacter>(`https://anapioficeandfire.com/api/characters/${id}`);
  }
}

export interface ICharacter {
  url: string;
  name: string;
  gender: string;
  culture: string;
  born: string;
  died: string;
  titles: string[];
  aliases: string[];
  father: string;
  mother: string;
  spouse: string;
  allegiances: string[];
  books: string[];
  povBooks: any[];
  tvSeries: string[];
  playedBy: string[];
}

