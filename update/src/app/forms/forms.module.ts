import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EqualValidator } from './equal-validator.directive';

import { FormsRoutes } from './forms.routing';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { ValidationFormsComponent } from './validationforms/validationforms.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardComponent } from './wizardboq/wizardboq.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(FormsRoutes),
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [
          ExtendedFormsComponent,
          RegularFormsComponent,
          ValidationFormsComponent,
          WizardComponent,
          WizardboqComponent,
          EqualValidator
    ]
})

export class Forms {}
