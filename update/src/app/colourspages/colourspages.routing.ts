import { Routes } from '@angular/router';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';

import { SubmenuComponent } from './submenu/submenu.component';

import { SubdashComponent } from './subdash/subdash.component';
import { SubplanComponent } from './subplan/subplan.component';
import { SubstandComponent } from './substand/substand.component';
import { SubreportComponent } from './subreport/subreport.component';
import { SubimplePersonalComponent } from './subimple-personal/subimple-personal.component';
import { SubimpleEnterpriseComponent } from './subimple-enterprise/subimple-enterprise.component';
import { SubimpleProjectComponent } from './subimple-project/subimple-project.component';
import { SubsetupPersonalComponent } from './subsetup-personal/subsetup-personal.component';
import { SubsetupEnterpriseComponent } from './subsetup-enterprise/subsetup-enterprise.component';
import { SubsetupProjectComponent } from './subsetup-project/subsetup-project.component';

export const ColourspagesRoutes: Routes = [{
    path: '',
    children: [{
        path: 'overview',
        component: OverviewComponent
    }, {
        path: 'stats',
        component: StatsComponent
    }, {
        path: 'submenu',
        component: SubmenuComponent
    }, {
        path: 'subdash',
        component: SubdashComponent
    }, {
        path: 'subsetup-personal',
        component: SubsetupPersonalComponent
    }, {
        path: 'subsetup-project',
        component: SubsetupProjectComponent
    }, {
        path: 'subsetup-enterprise',
        component: SubsetupEnterpriseComponent
    }, {
        path: 'subplan',
        component: SubplanComponent
    }, {
        path: 'substand',
        component: SubstandComponent
    }, {
        path: 'subreport',
        component: SubreportComponent
    }, {
        path: 'subimple-enterprise',
        component: SubimpleEnterpriseComponent
    }, {
        path: 'subimple-personal',
        component: SubimplePersonalComponent
    }, {
        path: 'subimple-project',
        component: SubimpleProjectComponent
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
