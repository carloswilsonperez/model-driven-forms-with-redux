import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { IGithub } from './app.github.interface';
import { Observable } from 'rxjs';

@Injectable()
export class GitHubService {
    constructor(private _http: HttpClient) { }
    getGitHubData(_searchTerm): Observable<IGithub> {
        return this._http.get<IGithub>('https://api.github.com/search/users?q=' + _searchTerm);
    }
}

/*
The return type of get() is an Observable of <Response>.
So we will return this Observable in our service and our component will
subscribe to it and when an ajax call is completed,
the response is fed to the Observable and then pushed to the component.
See:
https://stackoverflow.com/questions/37208801/property-map-does-not-exist-on-type-observableresponse
*/

