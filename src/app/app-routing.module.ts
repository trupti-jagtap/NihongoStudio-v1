import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { AboutusComponent } from './modules/aboutus/aboutus.component';
import { BeginnerComponent } from './modules/beginner/beginner.component';
import { ContactusComponent } from './modules/contactus/contactus.component';
import { CoursesMainComponent } from './modules/courses-main/courses-main.component';
import { FindYourLevelMainComponent } from './modules/find-your-level-main/find-your-level-main.component';
import { HomepageComponent } from './modules/homepage/homepage.component';
import { JLPTPreparationMainComponent } from './modules/jlptpreparation-main/jlptpreparation-main.component';
import { MiddleComponent } from './modules/middle/middle.component';
import { PracticeMainComponent } from './modules/practice-main/practice-main.component';
import { UpperComponent } from './modules/upper/upper.component';

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children: [{
      path: 'courses',
      component: CoursesMainComponent,
    },
    {
      path: 'courses/beginner',

      component: BeginnerComponent
    },
    {
      path: 'courses/middle',

      component: MiddleComponent
    },
    {
      path: 'courses/upper',

      component: UpperComponent
    },
    {
      path: 'practice',
      component: PracticeMainComponent
    },
    {
      path: 'jlptpreparation',
      component: JLPTPreparationMainComponent
    },
    {
      path: 'findyourlevel',
      component: FindYourLevelMainComponent
    },
    {
      path: 'home',
      component: HomepageComponent
    },
    {
      path: 'about_us',
      component: AboutusComponent
    },
    {
      path: 'contact_us',
      component: ContactusComponent
    }]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
