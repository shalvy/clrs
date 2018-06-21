import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';

export const ColpersonalRoutes: Routes = [{
    path: '',
    children: [{
        path: 'overview',
        component: OverviewComponent
    }, {
        path: 'stats',
        component: StatsComponent
    }, {
        path: 'projects',
        component: ProjectsComponent
    }, {
        path: 'work',
        component: WorkComponent
    }, {
        path: 'calendar',
        component: CalendarComponent
    }]
}];
