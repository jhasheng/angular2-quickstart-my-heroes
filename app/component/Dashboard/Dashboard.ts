/**
 * Created by Administrator on 16/9/21.
 */

import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from "./../../service/Hero/Hero";
import {Hero} from "./../../model/hero";

@Component({
    moduleId: module.id,
    selector: 'my-dashboard',
    templateUrl: 'Dashboard.html',
    styleUrls: ['Dashboard.css']
})

export class DashboardComponent implements OnInit {
    heroes:Hero[] = [];

    constructor(private router:Router, private heroServer:HeroService) {
    }

    ngOnInit():void {
        this.heroServer.getHeroes().then(heroes => this.heroes = heroes.slice(1, 5));
    }

    gotoDetail(hero:Hero):void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }
}
