import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent} from './home.component';
import { AppNotFoundComponent } from './app.notfound.component';
import { AppSearchGithubComponent } from './app.search-github.component';
import { AppGitHubUserComponent } from './app.githubuser.component';
import { AuthGuard } from './auth-guard.service';
import { LoginComponent } from './login.component';
import { AppUserComponent } from './app.user.component';
import { UserFormComponent } from './app.userform.component';

// forRoot returns a module object and we assign it to variable routing.
// We need to export routes so that we can later import it in App Module.
export const routes = RouterModule.forRoot([
    {path: '',
    component: HomeComponent},
    {path: 'github',
    component: AppSearchGithubComponent,
    canActivate: [AuthGuard]},
    {path: 'github/user/:login/:score',
    component: AppGitHubUserComponent},
    {path: 'login',
    component: LoginComponent},
    {path: 'users',
    component: AppUserComponent},
    {path: 'add',
    component: UserFormComponent},
    { path: 'add/:id',
    component: UserFormComponent },
    {path: '**',
    component: AppNotFoundComponent}
]);

