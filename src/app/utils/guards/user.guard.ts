import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { LocalStorage } from './../local-storage/LocalStorage';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private router: Router, private storage: LocalStorage) {}

    canActivate() {
        const identify = this.storage.getUserStorage();

        if (identify && (identify.role === 'ROLE_USER' || identify.role === 'ROLE_ADMIN')) {
            return true;
        } else {
            this.router.navigate(['/home']);
            return false;
        }
    }
}
