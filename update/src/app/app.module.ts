import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SidebarModule } from './sidebar/sidebar.module';
import { FixedPluginModule } from './shared/fixedplugin/fixedplugin.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

// import { CalendarComponent } from '/colourspages/calendar';
import { AppRoutes } from './app.routing';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFireAuthModule } from 'angularfire2/auth';
import { DataService } from './services/data.service';
import { AuthService } from 'providers/auth/auth';
import { environment } from 'environments/environment';
// import { CalendarComponent } from './colourspages/calendar/calendar.component';
import { BaseComponent } from './base/base.component';

@NgModule({

    imports:      [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot(AppRoutes),
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FixedPluginModule,
        // AngularFireModule.initializeApp(environment.firebase),
        // AngularFireAuthModule
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        AuthLayoutComponent, BaseComponent
    ],
    providers: [
        // [AuthService],
        DataService
    ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],
    // entryComponents: [CalendarComponent],
    bootstrap:    [ AppComponent ]
})

export class AppModule { }
