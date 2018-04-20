import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule, MatTableModule, MatPaginatorModule, MatSortModule, MatGridListModule, MatCardModule, MatMenuModule, MatTreeModule, MatBadgeModule } from '@angular/material';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MainTableComponent } from './main-table/main-table.component';
import { MainDashComponent } from './main-dash/main-dash.component';

import { AppRoutingModule } from './app-routing.module';
import { TablePageComponent } from './table-page/table-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { TreePageComponent } from './tree-page/tree-page.component';

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    MainTableComponent,
    MainDashComponent,
    TablePageComponent,
    DashboardPageComponent,
    TreePageComponent
  ],
  imports: [
    AppRoutingModule,

    BrowserModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,

    NoopAnimationsModule,

    MatTableModule,

    MatPaginatorModule,

    MatSortModule,

    MatGridListModule,

    MatCardModule,

    MatMenuModule,
    MatTreeModule,
    MatBadgeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
