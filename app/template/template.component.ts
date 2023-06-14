import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.scss']
})
export class TemplateComponent implements OnInit {
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
