import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TablePageComponent } from './table-page/table-page.component';
import { TreePageComponent } from './tree-page/tree-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component:  DashboardPageComponent },
  { path: 'table', component:  TablePageComponent },
  { path: 'tree', component:  TreePageComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
