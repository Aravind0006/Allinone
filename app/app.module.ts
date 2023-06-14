import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ReportComponent } from './report/report.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { LoginComponent } from './login/login.component';
import { ShoppingkartComponent } from './shoppingkart/shoppingkart.component';
import { NavComponent } from './nav/nav.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AboutheadComponent } from './abouthead/abouthead.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OttComponent } from './ott/ott.component';
import { TemplateComponent } from './template/template.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ApiworkComponent } from './apiwork/apiwork.component';
import {HttpClientModule} from '@angular/common/http';
import { CmdComponent } from './cmd/cmd.component';
import { SiginComponent } from './sigin/sigin.component';
import { ProfileComponent } from './profile/profile.component'
@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ContactComponent,
    CalculatorComponent,
    ReportComponent,
    FeedbackComponent,
    LoginComponent,
    ShoppingkartComponent,
    NavComponent,
    SkillsComponent,
    CertificatesComponent,
    AboutheadComponent,
    TypescriptComponent,
    OttComponent,
    TemplateComponent,
    DemoComponent,
    ReactiveComponent,
    ApiworkComponent,
    CmdComponent,
    SiginComponent,
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
