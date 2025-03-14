import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', data: {breadcrumb: 'MAIN'}, loadChildren: () => import('./banking/banking.dashboard.module').then(m => m.BankingDashboardModule)  },
        { path: 'main', data: {breadcrumb: 'MAIN'}, loadChildren: () => import('./banking/banking.dashboard.module').then(m => m.BankingDashboardModule) }
    ])],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
