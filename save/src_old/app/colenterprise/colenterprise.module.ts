import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { ColenterpriseRoutes } from './colenterprise.routing';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
// import { CalendarComponent } from 'app/colenterprise/calendar/calendar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ColenterpriseRoutes),
        FormsModule
    ],
  declarations: [OverviewComponent, StatsComponent, ProjectsComponent, CalendarComponent]
})
export class ColenterpriseModule {}
