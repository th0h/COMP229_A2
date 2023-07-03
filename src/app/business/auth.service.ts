import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
  apiurl='http://localhost:3000/business';
  //mongodb+srv://taehyunoh5:thth0206@cluster0.7kmopiz.mongodb.net/?retryWrites=true&w=majority

  GetAll(){
    return this.http.get(this.apiurl);
  }
  Getbycode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  Proceedregister(inputdata:any){
    return this.http.post(this.apiurl, inputdata);
  }
  Updatebusiness(code: any, inputdata: any){
    return this.http.put(this.apiurl+'/'+code, inputdata);
  }
  Deletebusiness(code: any) {
    return this.http.delete(this.apiurl + '/' + code);
  }
  
}
