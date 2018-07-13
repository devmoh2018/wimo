import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})

  
// Service for Task data.

    
export  class  TaskService {


constructor(private  http:  HttpClient) {}

    getTasks(){

        return  this.http.get('http://localhost:9999/getAll');
    }

    searchTasks(){

        return  this.http.get('http://localhost:9999/search');
    }
    getTask(){

        return  this.http.get('http://localhost:9999/getone');
    }
    updateTask(){

        return  this.http.get('http://localhost:9999/update');
    }



}