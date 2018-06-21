import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TimelineComponent } from './timeline.component';
import { TimelineRoutes } from './timeline.routing';
import { BaseComponent } from '../base/base.component'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(TimelineRoutes),
        FormsModule
    ],
    declarations: [TimelineComponent],

  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})

export class TimelineModule {}
