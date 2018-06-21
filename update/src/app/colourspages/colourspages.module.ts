import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OverviewComponent } from './overview/overview.component';
import { StatsComponent } from './stats/stats.component';
import { ColourspagesRoutes } from './colourspages.routing';
import { CalendarComponent } from './calendar/calendar.component';
import { ProjectsComponent } from './projects/projects.component';
import { WorkComponent } from './work/work.component';
import { SubmenuComponent } from './submenu/submenu.component';
import { NewEntComponent } from './new-ent/new-ent.component';
import { SubreportComponent } from './subreport/subreport.component';
import { SubdashComponent } from './subdash/subdash.component';
import { SubimplePersonalComponent } from './subimple-personal/subimple-personal.component';
import { SubimpleEnterpriseComponent } from './subimple-enterprise/subimple-enterprise.component';
import { SubimpleProjectComponent } from './subimple-project/subimple-project.component';
import { SubstandComponent } from './substand/substand.component';
import { SubplanComponent } from './subplan/subplan.component';
import { SubsetupPersonalComponent } from './subsetup-personal/subsetup-personal.component';
import { ProjectDirectoryComponent } from './project-directory/project-directory.component';
import { ProjectDescriptionComponent } from './project-description/project-description.component';
import { ProjectLabourReturnsComponent } from './project-labour-returns/project-labour-returns.component';
import { ProjectPlantReturnsComponent } from './project-plant-returns/project-plant-returns.component';
import { SubsidiariesComponent } from './subsidiaries/subsidiaries.component';
import { DepartmentsComponent } from './departments/departments.component';
import { EntProjectsComponent } from './ent-projects/ent-projects.component';
import { StaffRegisterComponent } from './staff-register/staff-register.component';
import { ClientAccountsComponent } from './client-accounts/client-accounts.component';
import { AssertRegisterComponent } from './assert-register/assert-register.component';
import { ThingsToDoPersonalComponent } from './things-to-do-personal/things-to-do-personal.component';
import { WeeklyCalendarComponent } from './weekly-calendar/weekly-calendar.component';
import { DailyDiaryComponent } from './daily-diary/daily-diary.component';
import { InTrayForWholeProjectComponent } from './in-tray-for-whole-project/in-tray-for-whole-project.component';
import { InTrayForEachCompanyComponent } from './in-tray-for-each-company/in-tray-for-each-company.component';
import { TaskSchedularComponent } from './task-schedular/task-schedular.component';
import { PersonalDashComponent } from './personal-dash/personal-dash.component';
import { ProjectDashComponent } from './project-dash/project-dash.component';
import { EnterpriseDashComponent } from './enterprise-dash/enterprise-dash.component';
import { SubsetupEnterpriseComponent } from './subsetup-enterprise/subsetup-enterprise.component';
import { SubsetupProjectComponent } from './subsetup-project/subsetup-project.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(ColourspagesRoutes),
        FormsModule
    ],
  declarations: [
      OverviewComponent,
      StatsComponent,
      ProjectsComponent,
      CalendarComponent,
      WorkComponent,
      SubmenuComponent,
      SubreportComponent,
      SubdashComponent,
      SubimplePersonalComponent,
      SubimpleEnterpriseComponent,
      SubimpleProjectComponent,
      SubstandComponent,
      SubsetupPersonalComponent,
      SubplanComponent,
      NewEntComponent,
      ProjectDirectoryComponent,
      ProjectDescriptionComponent,
      ProjectLabourReturnsComponent,
      ProjectPlantReturnsComponent,
      SubsidiariesComponent,
      DepartmentsComponent,
      EntProjectsComponent,
      StaffRegisterComponent,
      ClientAccountsComponent,
      AssertRegisterComponent,
      ThingsToDoPersonalComponent,
      WeeklyCalendarComponent,
      DailyDiaryComponent,
      InTrayForWholeProjectComponent,
      InTrayForEachCompanyComponent,
      TaskSchedularComponent,
      PersonalDashComponent,
      ProjectDashComponent,
      SubsetupEnterpriseComponent,
      SubsetupProjectComponent,
      EnterpriseDashComponent ]
})

export class ColourspagesModule {}
