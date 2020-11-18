
```
├── README.md
├── angular-cli.json
├── documentation
│   ├── css
│   │   └── documentation.css
│   └── elements.html
├── e2e
├── karma.conf.js
├── package.json
├── protractor.conf.js
├── src
│   ├── app
│   │   ├── app.component.css
│   │   ├── app.component.html
│   │   ├── app.component.spec.ts
│   │   ├── app.component.ts
│   │   ├── app.module.ts
│   │   ├── app.routing.ts
│   │   ├── calendar
│   │   │   ├── calendar.component.html
│   │   │   ├── calendar.component.ts
│   │   │   ├── calendar.module.ts
│   │   │   └── calendar.routing.ts
│   │   ├── charts
│   │   │   ├── charts.component.html
│   │   │   ├── charts.component.ts
│   │   │   ├── charts.module.ts
│   │   │   └── charts.routing.ts
│   │   ├── components
│   │   │   ├── buttons
│   │   │   │   ├── buttons.component.html
│   │   │   │   └── buttons.component.ts
│   │   │   ├── components.module.ts
│   │   │   ├── components.routing.ts
│   │   │   ├── grid
│   │   │   │   ├── grid.component.html
│   │   │   │   └── grid.component.ts
│   │   │   ├── icons
│   │   │   │   ├── icons.component.html
│   │   │   │   └── icons.component.ts
│   │   │   ├── notifications
│   │   │   │   ├── notifications.component.html
│   │   │   │   └── notifications.component.ts
│   │   │   ├── panels
│   │   │   │   ├── panels.component.html
│   │   │   │   └── panels.component.ts
│   │   │   ├── sweetalert
│   │   │   │   ├── sweetalert.component.html
│   │   │   │   └── sweetalert.component.ts
│   │   │   └── typography
│   │   │       ├── typography.component.html
│   │   │       └── typography.component.ts
│   │   ├── dashboard
│   │   │   ├── dashboard.module.ts
│   │   │   ├── dashboard.routing.ts
│   │   │   ├── overview
│   │   │   │   ├── overview.component.html
│   │   │   │   └── overview.component.ts
│   │   │   └── stats
│   │   │       ├── stats.component.html
│   │   │       └── stats.component.ts
│   │   ├── forms
│   │   │   ├── equal-validator.directive.ts
│   │   │   ├── extendedforms
│   │   │   │   ├── extendedforms.component.html
│   │   │   │   └── extendedforms.component.ts
│   │   │   ├── forms.module.ts
│   │   │   ├── forms.routing.ts
│   │   │   ├── regularforms
│   │   │   │   ├── regularforms.component.html
│   │   │   │   └── regularforms.component.ts
│   │   │   ├── validationforms
│   │   │   │   ├── password-validator.component.ts
│   │   │   │   ├── validationforms.component.html
│   │   │   │   └── validationforms.component.ts
│   │   │   └── wizard
│   │   │       ├── wizard.component.html
│   │   │       └── wizard.component.ts
│   │   ├── layouts
│   │   │   ├── admin
│   │   │   │   ├── admin-layout.component.html
│   │   │   │   └── admin-layout.component.ts
│   │   │   └── auth
│   │   │       ├── auth-layout.component.html
│   │   │       └── auth-layout.component.ts
│   │   ├── maps
│   │   │   ├── fullscreenmap
│   │   │   │   ├── fullscreenmap.component.html
│   │   │   │   └── fullscreenmap.component.ts
│   │   │   ├── googlemaps
│   │   │   │   ├── googlemaps.component.html
│   │   │   │   └── googlemaps.component.ts
│   │   │   ├── maps.module.ts
│   │   │   ├── maps.routing.ts
│   │   │   └── vectormaps
│   │   │       ├── vectormaps.component.html
│   │   │       └── vectormaps.component.ts
│   │   ├── pages
│   │   │   ├── lock
│   │   │   │   ├── lock.component.html
│   │   │   │   └── lock.component.ts
│   │   │   ├── login
│   │   │   │   ├── login.component.html
│   │   │   │   └── login.component.ts
│   │   │   ├── pages.module.ts
│   │   │   ├── pages.routing.ts
│   │   │   └── register
│   │   │       ├── register.component.html
│   │   │       └── register.component.ts
│   │   ├── shared
│   │   │   ├── fixedplugin
│   │   │   │   ├── fixedplugin.component.html
│   │   │   │   ├── fixedplugin.component.ts
│   │   │   │   └── fixedplugin.module.ts
│   │   │   ├── footer
│   │   │   │   ├── footer.component.html
│   │   │   │   ├── footer.component.ts
│   │   │   │   └── footer.module.ts
│   │   │   └── navbar
│   │   │       ├── navbar.component.html
│   │   │       ├── navbar.component.ts
│   │   │       └── navbar.module.ts
│   │   ├── sidebar
│   │   │   ├── sidebar.component.html
│   │   │   ├── sidebar.component.ts
│   │   │   └── sidebar.module.ts
│   │   ├── tables
│   │   │   ├── bootstraptable
│   │   │   │   ├── bootstrap.component.html
│   │   │   │   └── bootstrap.component.ts
│   │   │   ├── datatable.net
│   │   │   │   ├── datatable.component.html
│   │   │   │   └── datatable.component.ts
│   │   │   ├── extendedtable
│   │   │   │   ├── extendedtable.component.html
│   │   │   │   └── extendedtable.component.ts
│   │   │   ├── regulartable
│   │   │   │   ├── regulartable.component.html
│   │   │   │   └── regulartable.component.ts
│   │   │   ├── tables.module.ts
│   │   │   └── tables.routing.ts
│   │   ├── timeline
│   │   │   ├── timeline.component.html
│   │   │   ├── timeline.component.ts
│   │   │   ├── timeline.module.ts
│   │   │   └── timeline.routing.ts
│   │   └── userpage
│   │       ├── user.component.html
│   │       ├── user.component.ts
│   │       ├── user.module.ts
│   │       └── user.routing.ts
│   ├── assets
│   │   ├── css
│   │   ├── fonts
│   │   ├── img
│   │   ├── js
│   │   │   ├── jquery-jvectormap.js
│   │   │   ├── jquery.validate.min.js
│   │   │   ├── perfect-scrollbar.min.js
│   │   │   └── sweetalert2.js
│   │   └── sass
│   │       ├── paper
│   │       └── paper-dashboard.scss
│   ├── environments
│   │   ├── environment.prod.ts
│   │   └── environment.ts
│   ├── favicon.ico
│   ├── index.html
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles.css
│   ├── test.ts
│   ├── tsconfig.app.json
│   ├── tsconfig.spec.json
│   └── typings.d.ts
├── tsconfig.json
├── tslint.json
├── typings
└── typings.json

```

## Useful Links
