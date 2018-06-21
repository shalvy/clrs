import { Routes } from '@angular/router';

import { ExtendedFormsComponent } from './extendedforms/extendedforms.component';
import { RegularFormsComponent } from './regularforms/regularforms.component';
import { ValidationFormsComponent } from './validationforms/validationforms.component';
import { WizardComponent } from './wizard/wizard.component';
import { WizardvftComponent } from './wizardvft/wizardvft.component';
import { WizardboqSummaryComponent } from './wizardboq-summary/wizardboq-summary.component';
import { WizardboqComponent } from './wizardboq/wizardboq.component';

export const FormsRoutes: Routes = [
    {
        path: '',
        children: [{
            path: 'regular',
            component: RegularFormsComponent
        }]
    },{
        path: '',
        children: [{
            path: 'extended',
            component: ExtendedFormsComponent
        }]
    },{
        path: '',
        children: [{
            path: 'validation',
            component: ValidationFormsComponent
        }]
    },{
        path: '',
        children: [{
            path: 'wizard',
            component: WizardComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'wizardboq',
            component: WizardboqComponent
        }]
    },{
        path: '',
        children: [{
            path: 'wizardboqsummary',
            component: WizardboqSummaryComponent
        }]
    }, {
        path: '',
        children: [{
            path: 'wizardvft',
            component: WizardvftComponent
        }]
    }
];
