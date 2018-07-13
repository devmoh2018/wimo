import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { RoutingModule } from './routing.module';

import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UpdatetaskComponent } from './updatetask/updatetask.component';
import { MaptaskComponent } from './maptask/maptask.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    UpdatetaskComponent,
    MaptaskComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RoutingModule),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
