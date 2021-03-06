import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';
import { BaseComponent } from './base/base.component';

export const AppRoutes: Routes = [{
        path: '',
    redirectTo: 'pages/login', /* dashboard/overview */
        pathMatch: 'full',
    }, {
        path: '',
        component: AdminLayoutComponent,
        children: [{
            path: 'dashboard',
            loadChildren: './dashboard/dashboard.module#DashboardModule'
        }, {
            path: 'colprojects',
            loadChildren: './colprojects/colprojects.module#ColprojectsModule'
        }, {
            path: 'colourspages',
            loadChildren: './colourspages/colourspages.module#ColourspagesModule'
        }, {
            path: 'colpersonal',
            loadChildren: './colpersonal/colpersonal.module#ColpersonalModule'
        }, {
            path: 'colenterprise',
            loadChildren: './colenterprise/colenterprise.module#ColenterpriseModule'
        }, {
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        }, {
            path: 'components',
            loadChildren: './components/components.module#ComponentsModule'
        }, {
            path: 'forms',
            loadChildren: './forms/forms.module#Forms'
        }, {
            path: 'tables',
            loadChildren: './tables/tables.module#TablesModule'
        }, {
            path: 'maps',
            loadChildren: './maps/maps.module#MapsModule'
        }, {
            path: 'charts',
            loadChildren: './charts/charts.module#ChartsModule'
        }, {
            path: 'calendar',
            loadChildren: './calendar/calendar.module#CalendarModule'
        }, {
            path: '',
            loadChildren: './userpage/user.module#UserModule'
          }, {
            path: '',
            loadChildren: './timeline/timeline.module#TimelineModule'
          }, {
            path: 'mycal',
            component: BaseComponent
          }]
        }, {
            path: '',
            component: AuthLayoutComponent,
            children: [{
                path: 'pages',
                loadChildren: './pages/pages.module#PagesModule'
            }]
        }
];
