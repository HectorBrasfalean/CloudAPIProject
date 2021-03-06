import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class APIServiceService {

  urlAPI : string = "https://localhost:44316"; //https://footballerapi.appspot.com

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
  searchedIdFootballer : number = 1;
  id : number;
  name : string;
  weight : number;
  length : number;
  nationality : string;
  born : string;
  header = {};
  private authKey : string;

  get AuthKey(){
    return this.authKey;
  }

  set AuthKey(key : string){
    this.authKey = key;
    this.header = {
      headers: new HttpHeaders()
        .set('Authorization', `Bearer ${this.authKey}`)
    }
  }
  
  constructor(private http : HttpClient) { 
    
  }


  GetAllCharacters(pageSize:number = 10,pageNr:number = 1,gender:string){
    return this.http.get<ICharacter[]>(`https://anapioficeandfire.com/api/characters?pageSize=${pageSize}
                                                                                        &page=${pageNr}
                                                                                        &gender=${gender}`);
  }

  GetCharacter(id:number){
    return this.http.get<ICharacter>(`https://anapioficeandfire.com/api/characters/${id}`);
  }

  GetFootballer(id:number){
    return this.http.get<IFootballer>(`${this.urlAPI}/api/footballers/${id}`, this.header);
  }
  
  GetFootballers(){
    if(this.weightFilter == null){
      this.weightFilter = "";
    }
    console.log(this.authKey);
    return this.http.get<IFootballer[]>(`${this.urlAPI}/api/footballers?page=${this.pageNumberFootballer}
                                                                                    &pageSize=${this.pageSizeFootballer}
                                                                                    &direction=${this.direction}
                                                                                    &weight=${this.weightFilter}
                                                                                    &nationality=${this.nationalityFilter}
                                                                                    &sortBy=${this.sortBy}`, this.header);
  }


  AddFootballer(footballer : IFootballer){
    return this.http.post(`${this.urlAPI}/api/footballers`,footballer, this.header);
  }

  DeleteFootballer(id : number){
    return this.http.delete(`${this.urlAPI}/api/footballers/${id}`, this.header);
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

