import {  Routes } from '@angular/router';

import { HomeComponent } from './home/home.component'


export const elaktaRoutes: Routes = [
    {
        path: 'home',
        component: HomeComponent 
    },
    {
        path: '', 
        redirectTo: '/home', 
        pathMatch: 'full'
    }]