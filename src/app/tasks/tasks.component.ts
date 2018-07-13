import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import {HttpClient} from '@angular/common/http';

@Component({
    templateUrl: './tasks.component.html',
    styleUrls: ['./tasks.component.css']
   
})
 
export class TasksComponent implements OnInit {
 
   
    private  tasks:  Array<object> = []; 
    // initialize productService to retrieve list products in the ngOnInit()
    constructor(public taskService: TaskService){}
    

    // Read Tasks from API.
    ngOnInit(){
            this.getTasks()
      
    }
                 
    public  getTasks(){

        this.taskService.getTasks().subscribe((data:  Array<object>) => {
            this.tasks  =  data;
            console.log(data);
        });

    }
        
}
