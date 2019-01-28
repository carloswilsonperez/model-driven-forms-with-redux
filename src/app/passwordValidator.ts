import { FormControl } from '@angular/forms';

// This class will include all validation rules for the password field
export class PasswordValidator {
    static cannotContainSpace(formControl: FormControl) {
        if (formControl.value.indexOf(' ') >= 0) {
            return {
                cannotContainSpace: true
            };
        }
        return null;
    }
}
/*
Note that Angular validators work this way; If the validation passes, return
null. If it fails, return {<validationRule>:<value>} where <value> can be anything.
*/
