import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { ColpersonalRoutes } from './colpersonal.routing';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { SearchComponent } from './search/search.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ColpersonalRoutes),
        FormsModule
    ],
  declarations: [OverviewComponent, StatsComponent, ProjectsComponent, CalendarComponent, WorkComponent, SearchComponent ]
})

export class ColpersonalModule {}
