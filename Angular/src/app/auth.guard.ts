import { Injectable, RootRenderer } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuard implements CanActivate {

    userDetails = JSON.parse(localStorage.getItem('token'));

    constructor(private auth: AuthService) { }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const expectedRoleArray = route.data.expectedRole;
        let expectedRole;
        for (const index in expectedRoleArray) {
            if (this.userDetails && this.userDetails.role === expectedRoleArray[index]) {
                expectedRole = expectedRoleArray[index];
                return true;
            } else {
                return false;
            }
        }
        if (this.userDetails && this.userDetails.role === expectedRole) {
            console.log('user loggedIn');
            return true;
        } else {
            console.log(expectedRole);
            console.log(this.userDetails.role);
            console.log('user not loggedin');
            return false;
        }
    }

}
