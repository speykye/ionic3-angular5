import { FormControl } from '@angular/forms';

export function nicknameValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^[(\u4e00-\u9fa5)0-9a-zA-Z\_\s@]+$/)) {
            return { invalidNickname: true };
    }
}