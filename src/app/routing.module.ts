import {Routes} from '@angular/router';
import {TasksComponent} from "./tasks/tasks.component";
import {MaptaskComponent} from "./maptask/maptask.component";

export const RoutingModule:Routes = [
    {
        path: 'tasks',
        component: TasksComponent
    },
    {
        path: 'search',
        component: TasksComponent
    },
    {
        path: 'task/:id',
        component: TasksComponent
    },
    {
        path: 'update/:id',
        component: MaptaskComponent
    }
];



