import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    WelcomeSectionComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    WelcomeSectionComponent
  ]
})
export class SharedModule { }
