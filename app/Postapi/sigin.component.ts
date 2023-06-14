import { Component, OnInit } from '@angular/core';
import { ApiService } from '../Services/api.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigin',
  templateUrl: './sigin.component.html',
  styleUrls: ['./sigin.component.scss']
})
export class SiginComponent implements OnInit {
  Employeeform: any;

  prodList = [{ prodId: 1, Title: "tesdkmv,dv,cnv, cn, vnmcx", desc: "kfvdljgdfj", price: "100.00",imgUrl:"/assets/amc2.jpg" }, 
  { prodId: 1, Title: "tesdkmv,dv,cnv, cn, vnmcx", desc: "kfvdljgdfj", price: "100.00",imgUrl:"/assets/amc3.jpg"  }, 
  { prodId: 1, Title: "tesdkmv,dv,cnv, cn, vnmcx", desc: "kfvdljgdfj", price: "100.00",imgUrl:"" }, 
  { prodId: 1, Title: "tesdkmv,dv,cnv, cn, vnmcx", desc: "kfvdljgdfj", price: "100.00" ,imgUrl:""}]


  // constructor(,private fb:FormBuilder) {
  // }
  constructor(private fb: FormBuilder, private service: ApiService, private router: Router) {

    this.Employeeform = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
      cpassword: ['', Validators.required],
    })
  }
  ngOnInit(): void { }


  submit() {
    function xx(){
      
    }

    // alert(
    // this.Employeeform.controls['name'].value+
    // +this.Employeeform.controls['mobile'].value+
    // +this.Employeeform.controls['username'].value+
    // +this.Employeeform.controls['password'].value+
    // this.Employeeform.controls['cpassword']
    // )
    this.postEmployee()
  }

  postEmployee() {
    let x = {
      "employeeId": 0,
      "employeeName": this.Employeeform.controls['name'].value,
      "mobile": this.Employeeform.controls['mobile'].value, 
      "userName": this.Employeeform.controls['username'].value,
      "password": this.Employeeform.controls['password'].value,
      "confirmPassword": this.Employeeform.controls['cpassword'].value,
      "createdBy": 1
    }
    this.service.postEmployee(x).subscribe((data: any) => {
      alert(JSON.stringify(data))
      if (data.success == true) {
        this.router.navigateByUrl("/profile");
      }


    })

  }
}
