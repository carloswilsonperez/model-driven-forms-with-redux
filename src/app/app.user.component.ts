import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';


@Component({
    selector: 'app-users',
    templateUrl: './app.user.component.html'
})
export class AppUserComponent implements OnInit {
    itemsRef;
    users: AngularFireList<any>;
    users$: Observable<any[]>;

    constructor(
        private db: AngularFireDatabase,
        private _router: Router
    ) {
        // this.users$ = this.users.snapshotChanges();
        this.users = db.list('/');
        this.users$ = this.users.snapshotChanges().map(changes => {
            return changes.map(c => ({ key: c.payload.key, ...c.payload.val()
        }));
    });
    }

    ngOnInit () {
        console.log('############## ' + this.users$);
    }

    add() {
        this._router.navigate(['add']);
    }

    delete(user) {
        console.log(user);
        this.db.object(user.key).remove();
        // this.users.remove(user.key); WORKS TOO
    }

}
