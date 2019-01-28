import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AngularFireDatabase } from 'angularfire2/database';
import { User } from './user';

@Component({
    selector: 'app-user-form',
    templateUrl: 'app.userform.component.html'
})

export class UserFormComponent implements OnInit {
    id;
    form: FormGroup;
    title: string;
    user = new User();
    item;

    constructor(
        fb: FormBuilder,
        private _router: Router,
        private db: AngularFireDatabase,
        private _route: ActivatedRoute
    ) {
        this.form = fb.group({
            name: ['', Validators.required],
            email: ['', Validators.required]});
    }
    ngOnInit() {
        this._route.params.subscribe(params => {
            this.id = params['id'];
        });
        if (!this.id) {
            this.title = 'New User';
        } else {
            this.title = 'Edit User';
            this.item = this.db.object(this.id);
        }
    }

    submit() {
        if (this.id) {
            this.db.object(this.id).update({ name: this.user.name, email: this.user.email });
        } else {
            this.db.list('/').push({ name: this.user.name, email: this.user.email });
        }
        this._router.navigate(['']);
    }
}


