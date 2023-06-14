import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.GetEmployee()
  }
EmpDatas:any

  GetEmployee(){

    this.service.GetEmployee().subscribe((data:any)=>{
      this.EmpDatas=data.employeeList
    })
  }


}
