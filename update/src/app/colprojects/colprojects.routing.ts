import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
// import { CalendarComponents } from './calendar/calendar.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';

export const ColprojectsRoutes: Routes = [{
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
        path: 'calendar',
        component: CalendarComponent
    }]
}];
