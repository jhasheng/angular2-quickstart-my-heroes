import {ModuleWithProviders} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HeroDetailComponent} from './component/HeroDetail/HeroDetail'
import {HeroesComponent} from "./component/Heroes/Heroes";
import {DashboardComponent} from "./component/Dashboard/Dashboard";

/**
 * Created by Administrator on 16/9/21.
 */
const appRoutes:Routes = [
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const routing:ModuleWithProviders = RouterModule.forRoot(appRoutes);
