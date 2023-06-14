import { Component, OnInit } from '@angular/core';
import { resourceUsage } from 'process';
import { first } from 'rxjs';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit {
  firstNumber: string = "";
  secondNumber: string = "";
  isOperatorClicked: boolean = false;
  display: string = "";
  selectedOperator = "";
  

  constructor() { }

  ngOnInit(): void {}
  Press7() {

    if (this.isOperatorClicked) {
      this.secondNumber += "7"
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "7";
      this.display = this.firstNumber;
    }
    
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  Press8() {

    if (this.isOperatorClicked) {
      this.secondNumber += "8"
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "8";
      this.display = this.firstNumber;
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press9() {
    if (this.isOperatorClicked) {
      this.secondNumber += "9"
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "9";
      this.display = this.firstNumber;
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press4() {
    if (this.isOperatorClicked) {
      this.secondNumber += "4";
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "4";
      this.display = this.firstNumber;
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press6() {
    if (this.isOperatorClicked) {
      this.secondNumber += "6";
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "6";
      this.display = this.firstNumber;
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press5() {
    if (this.isOperatorClicked) {
      this.secondNumber += "5";
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "5";
      this.display = this.firstNumber;
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press1() {
    if (this.isOperatorClicked) {
      this.secondNumber += "1";
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "1";
      this.display = this.firstNumber
    }
    console.log(this.isOperatorClicked);
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press2() {
    if (this.isOperatorClicked) {
      this.secondNumber += "2";
      this.display = this.secondNumber;
    }
    else {
      this.firstNumber += "2";
      this.display = this.firstNumber
    }
    console.log(this.isOperatorClicked)
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press3() {
    if (this.isOperatorClicked) {
      this.secondNumber += "3"
      this.display = this.secondNumber
    }
    else {
      this.firstNumber += "3"
      this.display = this.firstNumber
    }
    console.log(this.isOperatorClicked)
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  press0() {
    if (this.isOperatorClicked) {
      this.secondNumber += "0"
      this.display = this.secondNumber
    }
    else {
      this.firstNumber += "0"
      this.display = this.firstNumber
    }
    console.log(this.isOperatorClicked)
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }
  pressHalf() {
    let num= parseInt(this.display)
    if(num < 0)
    {
      num = Math.abs(num);
      this.display=num.toString();
    }
    else{
      this.display = "-" + num.toString();
    }
    this.Setdisplayvalue();
  }

  pressSquare() {
    if(this.isOperatorClicked)
    {
     this.Calculate();
    }
    this.isOperatorClicked = false;    
    this.display = (parseFloat(this.display) * parseFloat(this.display)).toString()
  }
   
  pressSroot() {
    if(this.isOperatorClicked)
    {
     this.Calculate();
    }
   let x=Math.sqrt(parseInt(this.display));
   this.display=x.toString();
   this.firstNumber = this.display;
  }

  Dot(){
    if (this.isOperatorClicked) {
      this.secondNumber += "."
      this.display = this.secondNumber
    }
    else {
      this.firstNumber += "."
      this.display = this.firstNumber
    }
    console.log(this.isOperatorClicked)
    console.log(this.firstNumber)
    console.log(this.secondNumber)
  }

  pressC() {
    this.isOperatorClicked = false;
    this.display = ""
    this.selectedOperator = ""
    this.firstNumber = "";
    this.secondNumber = "";
  }

  pressAC() {
    this.isOperatorClicked = false;
    this.display = "";
    this.firstNumber = ""
    this.secondNumber = ""
  }

  pressSub() {
    if(this.isOperatorClicked)
    {
     this.Calculate();
    }
    this.isOperatorClicked = true;
    this.display = "-";
    this.selectedOperator = "-"
  }

  pressDiv() {
    if(this.isOperatorClicked)
    {
     this.Calculate();
    }
    this.isOperatorClicked = true;
    this.display = "÷";
    this.selectedOperator = "÷"
  }

  pressMulti() {

    if(this.isOperatorClicked)
    {
     this.Calculate();
    }
    this.isOperatorClicked = true;
    this.display = "*";
    this.selectedOperator = "*"
  }

  PressPlus() {
   
   if(this.isOperatorClicked)
   {
    this.Calculate();
   }
      this.isOperatorClicked = true;
      this.display = "+";
      this.selectedOperator = "+";
  }

  PressMod() {
   this.display = (parseFloat(this.display) / 100).toString()

  }
  PressOneByX()
  {
   let x =1/parseInt(this.display);
   this.display=x.toString();
   this.firstNumber = this.display;
  }

  pressback(){
    let len =this.display.length
    this.display =this.display.substring(0,len -1)
    if(this.isOperatorClicked)
    {
      this.secondNumber = "";
    }
    else{
      this.firstNumber = ""
    }
  }

  Calculate() {
    let first = parseFloat(this.firstNumber);
    let second = parseFloat(this.secondNumber);
    let res = 0;
    if (this.selectedOperator == "+") {
      res = first + second
    }
    else if (this.selectedOperator == "-") {
      res = first - second 
    }
    else if (this.selectedOperator == "÷") {
      res = first / second
    }
    else if (this.selectedOperator == "*") {
      res = first * second
    }
    else if (this.selectedOperator == "%") {
      res =  first % second
    }
    else if (this.selectedOperator == "x²"){
    }
    else if(this.selectedOperator == "¹/x"){
      res= 1/(first)
    }
    else if(this.selectedOperator == "²√x"){
    }
    

    this.display = res.toString();
    
    this.isOperatorClicked = false;
    this.firstNumber = res.toString();
    this.secondNumber = "";
    
  }


Setdisplayvalue()
{
if(this.isOperatorClicked)
{
  this.secondNumber=this.display;
}
else
{
  this.firstNumber =this.display;
}
}
}