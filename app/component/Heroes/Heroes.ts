import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {HeroService} from "./../../service/Hero/Hero";
import {Hero} from "./../../model/hero";

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    templateUrl: 'Heroes.html',
    styleUrls: ['Heroes.css']
})

export class HeroesComponent implements OnInit {
    heroes:Hero[];

    selectedHero:Hero;

    constructor(private router:Router, private heroService:HeroService) {};

    onSelect(hero:Hero):void {
        this.selectedHero = hero;
    };

    getHeroes():void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit():void {
        this.getHeroes();
    }

    gotoDetail():void {
        this.router.navigate(['/detail', this.selectedHero.id])
    }
}


