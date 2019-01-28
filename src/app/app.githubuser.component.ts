import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-user',
    template: `
    <h1>User Login: {{ login }}</h1>
    <h2>User Score: {{ score }}</h2>`
})

export class AppGitHubUserComponent implements OnInit, OnDestroy {
    login;
    score;
    subscription;
    constructor(private _route: ActivatedRoute) { }

    ngOnInit() {
        this.subscription = this._route.params.subscribe(params => {
            this.login = params['login'];
            this.score = params['score'];
        });
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}


