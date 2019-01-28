import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'model-driven-forms';
  users;
  constructor(private db: AngularFireDatabase,
    private _http: HttpClient) {}

  ngOnInit(): void {
    console.log(this.db);
    this.users = this.db.list('/');
    console.log(this.users);
    this.fetchData();
  }

  fetchData() {
    const token = '74585b6d070c7052fbb4fdb9dbb0e93393785119';
    const headers = new HttpHeaders().set('Authorization', token);
    this._http.get('http://13.58.37.162/data?token=${token}', {headers}).subscribe(data => {
      console.log('----------------');
      console.log(data);
    });
  }


}
