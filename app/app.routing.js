"use strict";
var router_1 = require('@angular/router');
var HeroDetail_1 = require('./component/HeroDetail/HeroDetail');
var Heroes_1 = require("./component/Heroes/Heroes");
var Dashboard_1 = require("./component/Dashboard/Dashboard");
/**
 * Created by Administrator on 16/9/21.
 */
var appRoutes = [
    {
        path: 'heroes',
        component: Heroes_1.HeroesComponent
    },
    {
        path: 'dashboard',
        component: Dashboard_1.DashboardComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: HeroDetail_1.HeroDetailComponent
    }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map