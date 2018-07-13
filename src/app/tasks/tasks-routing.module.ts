import {Routes} from '@angular/router';
import {TasksComponent} from "./tasks.component";

export const TaskRoutingModule:Routes = [
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'search',
        component: TasksComponent
    },
    {
        path: 'map',
        component: TasksComponent
    }
];



