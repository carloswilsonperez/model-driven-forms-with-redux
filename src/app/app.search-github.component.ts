import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Rx';
import { filter, debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { GitHubService } from './github.service';
import { FormControl } from '@angular/forms';
import { IGithubResults } from './app.github-results.interface';


@Component({
  selector: 'app-search-github',
  templateUrl: './app.search-github.component.html',
  styleUrls: []
})
export class AppSearchGithubComponent implements OnInit {
    searchControl = new FormControl();
    isLoading = false;
    users = [];

    constructor(private _githubService: GitHubService) {}
    ngOnInit(): void { // adding the lifecycle hook ngOnInit
        this.searchControl.valueChanges
        .pipe(filter(text => text.length >= 3))
        .pipe(debounceTime(400))
        .pipe(distinctUntilChanged())
        .subscribe(value => {
            this.isLoading = true;
            this._githubService.getGitHubData(value)
            .subscribe(data => {
                console.log(data);
                this.isLoading = false;
                this.users = <IGithubResults[]>data.items;
            });
        });
    }
}
