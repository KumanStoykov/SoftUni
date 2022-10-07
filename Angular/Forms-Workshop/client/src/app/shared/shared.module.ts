import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WelcomeSectionComponent } from './welcome-section/welcome-section.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { CustomValidatorDirective } from './custom-validator.directive';



@NgModule({
  declarations: [
    WelcomeSectionComponent,
    CustomValidatorDirective
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    RouterModule
  ],
  exports: [
    WelcomeSectionComponent,
    CustomValidatorDirective
  ]
})
export class SharedModule { }
