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
import { CommonWordsComponent } from './practice_component/common-words/common-words.component';
import { DaysMonthWordsComponent } from './practice_component/days-month-words/days-month-words.component';
import { FoodWordsComponent } from './practice_component/food-words/food-words.component';
import { NumbersComponent } from './practice_component/numbers/numbers.component';
import { TravellingWordsComponent } from './practice_component/travelling-words/travelling-words.component';
import { WritingComponent } from './practice_component/writing/writing.component';

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
    },
    {
      path:'practice/1000_common_words',
      component: CommonWordsComponent
    },
    {
      path:'practice/days_and_months',
      component: DaysMonthWordsComponent
    },
    {
      path:'practice/food_words',
      component:FoodWordsComponent
    },
    {
      path:'practice/numbers',
      component: NumbersComponent
    },
    {
      path:'practice/travelling_words',
      component:TravellingWordsComponent
    },
    {
      path:'practice/hiragana_katakana',
      component:WritingComponent
    },
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
