import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  apiurl= 'http://localhost:3000/users';

  GetAll(){
    return this.http.get(this.apiurl);
  }

  GetbyCode(code:any){
    return this.http.get(this.apiurl+'/'+code);
  }

  ProceedRegister(data:any){
    return this.http.post(this.apiurl,data);
  }

  Updateuser(code:any,data:any){
    return this.http.put(this.apiurl+ '/'+code,data)
  }
  deleteuser(id : number){
    return this.http.delete<any>(this.apiurl+'/'+id)
  }
}
