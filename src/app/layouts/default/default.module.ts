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



@NgModule({
  declarations: [
    DefaultComponent,
    PracticeMainComponent,
    CoursesMainComponent,
    FindYourLevelMainComponent,
    JLPTPreparationMainComponent,
    BeginnerComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    SharedModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule
  ]
})
export class DefaultModule { }
