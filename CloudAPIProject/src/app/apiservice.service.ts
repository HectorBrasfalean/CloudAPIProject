import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  pageSizeFootballer : number = 6;
  pageNumberFootballer : number = 0;
  nationalityFilter : string = "";
  weightFilter : string = "";
  direction : string = "asc";
  sortBy : string = "id";

  pageSize : number = 5;
  pageNumber : number = 1;
  gender : string = "";
  searchedId : number = 1;
  id : number;
  name : string;
  weight : number;
  length : number;
  nationality : string;
  born : string;

  constructor(private http : HttpClient) { }

  GetAllCharacters(pageSize:number = 10,pageNr:number = 1,gender:string){
    return this.http.get<ICharacter[]>(`https://anapioficeandfire.com/api/characters?pageSize=${pageSize}&page=${pageNr}&gender=${gender}`);
  }

  GetCharacter(id:number){
    return this.http.get<ICharacter>(`https://anapioficeandfire.com/api/characters/${id}`);
  }
  
  GetFootballers(){
    if(this.weightFilter == null){
      this.weightFilter = "";
    }
    return this.http.get<IFootballer[]>(`https://localhost:44316/api/footballers?page=${this.pageNumberFootballer}&pageSize=${this.pageSizeFootballer}
                                                                                    &direction=${this.direction}&weight=${this.weightFilter}&nationality=${this.nationalityFilter}
                                                                                    &sortBy=${this.sortBy}`);
  }


  AddFootballer(footballer : IFootballer){
    return this.http.post(`https://localhost:44316/api/footballers`,footballer);
  }

  DeleteFootballer(id : number){
    return this.http.delete(`https://localhost:44316/api/footballers/${id}`);
  }
}

export interface IFootballer {
  id: number;
  name: string;
  born: string;
  nationality: string;
  length: number;
  weight: number;
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

