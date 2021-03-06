import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { ColprojectsRoutes } from './colprojects.routing';
import { CalendarComponents } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
// import { CalendarComponent } from 'app/colprojects/calendar/calendar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ColprojectsRoutes),
        FormsModule
    ],
  declarations: [OverviewComponent, StatsComponent, ProjectsComponent, CalendarComponents]
})

export class ColprojectsModule {}
