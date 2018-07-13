import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';
import { Task } from '../task';
import {HttpClient} from '@angular/common/http';

@Component({

  templateUrl: './maptask.component.html',
  styleUrls: ['./maptask.component.css']
})
export class MaptaskComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
