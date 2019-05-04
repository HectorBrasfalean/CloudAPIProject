import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  searchedIdFootballer : number = 1;
  id : number;
  name : string;
  weight : number;
  length : number;
  nationality : string;
  born : string;

  authKey : string = "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik1UWTBPVGRCTmpjeVJVSkdRamRETURoRU16TTBNMEV6UmpJM05qZEZOVVU1TXpoRVJqaEdOZyJ9.eyJpc3MiOiJodHRwczovL2Rldi1tbW0xeHhtMS5ldS5hdXRoMC5jb20vIiwic3ViIjoiY1Z0bEhHaHVUZmVCYjV0VFZ0SWJHV3FDYzZJRkowUDVAY2xpZW50cyIsImF1ZCI6Imh0dHBzOi8vbG9jYWxob3N0OjQ0MzE2L2FwaS9mb290YmFsbGVycyIsImlhdCI6MTU1NzAwMDkzOSwiZXhwIjoxNTU3MDg3MzM5LCJhenAiOiJjVnRsSEdodVRmZUJiNXRUVnRJYkdXcUNjNklGSjBQNSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.uoy3AUypdFH_XRYjIZOsPSNACk5RNu5wPhw9HsFo833nmfNb9vKwSzOCyHSYxWgzNoapwQocTzy8rnEK9gAcTijzNve0ye-Pv0qdaZ3pNysBRHNWu-i-KPfk8go_CymGCfVw3_tcaVuqQt2rV0C8CYss9zPGuG9lLSXBSYJibuJlB9nUGjFhE77c6MTjrsGnGn4uR8XCyG6NkcL0ySWTy8MgMlynVRBavznBLuht0Zx_VdVuMmE-I-_sEczqu8C-nl1_nN138ZTCyP8EtIGo4Yw-5XXOJPD5_uLr_ZZRIeTxMPrJbsdlPBI9U2InGVW4O__QfFs0EwoH6aIs8hSuBg"

  header = {
    headers: new HttpHeaders()
      .set('Authorization', `${this.authKey}`)
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
    return this.http.get<IFootballer>(`https://localhost:44316/api/footballers/${id}`, this.header);
  }
  
  GetFootballers(){
    if(this.weightFilter == null){
      this.weightFilter = "";
    }
    return this.http.get<IFootballer[]>(`https://localhost:44316/api/footballers?page=${this.pageNumberFootballer}
                                                                                    &pageSize=${this.pageSizeFootballer}
                                                                                    &direction=${this.direction}
                                                                                    &weight=${this.weightFilter}
                                                                                    &nationality=${this.nationalityFilter}
                                                                                    &sortBy=${this.sortBy}`, this.header);
  }


  AddFootballer(footballer : IFootballer){
    return this.http.post(`https://localhost:44316/api/footballers`,footballer, this.header);
  }

  DeleteFootballer(id : number){
    return this.http.delete(`https://localhost:44316/api/footballers/${id}`, this.header);
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

