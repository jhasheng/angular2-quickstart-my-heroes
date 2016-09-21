import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {HeroDetailComponent} from './component/HeroDetail/HeroDetail'
import {HeroesComponent} from "./component/Heroes/Heroes";
import {DashboardComponent} from "./component/Dashboard/Dashboard";
import {HeroService} from "./service/Hero/Hero";
import {routing} from "./app.routing";

@NgModule({
    imports: [BrowserModule, FormsModule, routing],
    declarations: [AppComponent, DashboardComponent, HeroDetailComponent, HeroesComponent],
    bootstrap: [AppComponent],
    providers: [HeroService]
})

export class AppModule {
}