import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {



  constructor(private http:HttpClient) { }

getcatfacts()
{
  return this.http.get("https://catfact.ninja/fact")
}


postEmployee(go:any){
  return this.http.post("http://catodotest.elevadosoftwares.com/Employee/InsertEmployee",go);
}

GetEmployee(){
return this.http.get("http://catodotest.elevadosoftwares.com/Employee/GetAllEmployeeDetails")
}

}
