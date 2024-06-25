const adminRoutes: Routes = [
    {
      path: 'dashboard',
      loadChildren: () =>
        import('./views/dashboard/dashboard.module').then(
          (m) => m.DashboardModule
        ),
    },
    {
      path: 'reports',
      loadChildren: () =>
        import('./views/reports/reports.module').then((m) => m.ReportsModule),
    },
  ];

  const routes: Routes = [
    {
      path: '',
      component: BlankLayoutComponent,
      children: [
        {
          path: 'error',
          loadChildren: () =>
            import('./views/error/error.module').then((m) => m.ErrorModule),
        },
        {
          path: 'drive-status',
          loadChildren: () =>
            import('./views/abela-modules/drive-status/drive-status.module').then(
              (m) => m.ExampleModule
            ),
        },
      ],
    },
    {
      path: '',
      component: MainLayoutComponent,
      canActivate: [AuthGaurd],
      children: adminRoutes,
    },
    {
      path: '**',
      redirectTo: 'error/404',
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forRoot(routes, {
      useHash: false,
      scrollPositionRestoration: 'enabled',
      relativeLinkResolution: 'legacy'
  }),
    ],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}