import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.scss']
})
export class FeedbackComponent implements OnInit {  
  fName : string = "";
  model: any = {};
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form:any)
  {
alert(JSON.stringify(form.value));
  }

}
