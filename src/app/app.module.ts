import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TaskRoutingModule } from './tasks/tasks-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(TaskRoutingModule),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
