import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {HeroService} from "./../../service/Hero/Hero";
import {Hero} from "./../../model/hero";

@Component({
    moduleId: module.id,
    selector: 'my-hero-detail',
    templateUrl: 'HeroDetail.html',
    styleUrls: ['HeroDetail.css']
})

export class HeroDetailComponent implements OnInit {
    hero:Hero;

    constructor(private heroService:HeroService, private route:ActivatedRoute) {
    }

    ngOnInit():void {
        this.route.params.forEach((params:Params) => {
            let id = +params['id'];
            this.heroService.getHero(id).then(hero => this.hero = hero);
        });
    }

    goBack():void {
        window.history.back()
    }
}
