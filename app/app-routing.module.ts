import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { LoginComponent } from './login/login.component';
import { ShoppingkartComponent } from './shoppingkart/shoppingkart.component';
import { SkillsComponent } from './skills/skills.component';
import { CertificatesComponent } from './certificates/certificates.component';
import { AboutheadComponent } from './abouthead/abouthead.component';
import { TypescriptComponent } from './typescript/typescript.component';
import { OttComponent } from './ott/ott.component';
import { TemplateComponent } from './template/template.component';
import { DemoComponent } from './demo/demo.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { ApiService } from './Services/api.service';
import { ApiworkComponent } from './apiwork/apiwork.component';
import { SiginComponent } from './sigin/sigin.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'feedback',component:FeedbackComponent},
  {path:'calculator',component:CalculatorComponent},
  {path:'login',component:LoginComponent},
  {path:'shoppingkart',component:ShoppingkartComponent},
  {path:'skills',component:SkillsComponent},
  {path:'certficates',component:CertificatesComponent},
  {path:'Abouthead',component:AboutheadComponent},
  {path:'typescript',component:TypescriptComponent},
  {path:'ott',component:OttComponent},
  {path:'template',component:TemplateComponent},
  {path:'demo', component:DemoComponent},
  {path:'Reactive',component:ReactiveComponent},
  {path:'api',component:ApiworkComponent},
  {path:'signin',component:SiginComponent},
  {path:'profile',component:ProfileComponent},
  {path:'nav',component:NavComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes),ReactiveFormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
