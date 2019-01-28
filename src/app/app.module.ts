import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppSearchGithubComponent } from './app.search-github.component';
import { HomeComponent} from './home.component';
import { LoginComponent} from './login.component';
import { LoginService} from './login.service';
import { GitHubService } from './github.service';
import { AppNotFoundComponent } from './app.notfound.component';
import { AppGitHubUserComponent } from './app.githubuser.component';
import { routes } from './app.routing';
import { AuthGuard } from './auth-guard.service';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AppUserComponent } from './app.user.component';
import { environment } from '../environments/environment';
import { UserFormComponent } from './app.userform.component';

import { NgRedux, NgReduxModule } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    AppSearchGithubComponent,
    AppNotFoundComponent,
    AppGitHubUserComponent,
    AppUserComponent,
    UserFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routes,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    NgReduxModule,
  ],
  providers: [LoginService, GitHubService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor (ngRedux: NgRedux<IAppState>) {
    ngRedux.configureStore(rootReducer, INITIAL_STATE);
  }
}
