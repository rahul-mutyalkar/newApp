import { AbstractControl, FormControl } from '@angular/forms';

export class Passwordmatch {
    // Custom validator to check that two fields match.
    static matchPassword(ac: AbstractControl) {
        const pwd = ac.get('password');
        const cnfpwd = ac.get('confPassword');
        if (!cnfpwd.value || cnfpwd.value.length == 0) {
            ac.get('confPassword').setErrors({ required: true });
            return true;
        }
        if (pwd.value === cnfpwd.value) {
            return null;
        }

        ac.get('confPassword').setErrors({ mustMatch: true });
        return true;
    }
}

