import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { PracticeMainComponent } from 'src/app/modules/practice-main/practice-main.component';
import { CoursesMainComponent } from 'src/app/modules/courses-main/courses-main.component';
import { FindYourLevelMainComponent } from 'src/app/modules/find-your-level-main/find-your-level-main.component';
import { JLPTPreparationMainComponent } from 'src/app/modules/jlptpreparation-main/jlptpreparation-main.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BeginnerComponent } from 'src/app/modules/beginner/beginner.component';
import { MiddleComponent } from 'src/app/modules/middle/middle.component';
import { UpperComponent } from 'src/app/modules/upper/upper.component';
import { CommonWordsComponent } from 'src/app/practice_component/common-words/common-words.component';
import { DaysMonthWordsComponent } from 'src/app/practice_component/days-month-words/days-month-words.component';
import { FoodWordsComponent } from 'src/app/practice_component/food-words/food-words.component';
import { NumbersComponent } from 'src/app/practice_component/numbers/numbers.component';
import { TravellingWordsComponent } from 'src/app/practice_component/travelling-words/travelling-words.component';
import { WritingComponent } from 'src/app/practice_component/writing/writing.component';
import { ContactusComponent } from 'src/app/modules/contactus/contactus.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from "@angular/material/input";
import { HomepageComponent } from 'src/app/modules/homepage/homepage.component';



@NgModule({
  declarations: [
    DefaultComponent,
    PracticeMainComponent,
    CoursesMainComponent,
    FindYourLevelMainComponent,
    JLPTPreparationMainComponent,
    BeginnerComponent,
    MiddleComponent,
    UpperComponent,
    CommonWordsComponent,
    FoodWordsComponent,
    NumbersComponent,
    TravellingWordsComponent,
    WritingComponent,
    DaysMonthWordsComponent,
    ContactusComponent,
    HomepageComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatInputModule
  ]
})
export class DefaultModule { }
