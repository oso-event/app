import { AuthenticationService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';


@Injectable()
export class AuthGuard implements CanActivate {
    constructor(
      public authenticationService: AuthenticationService
        ) {}

    canActivate(): boolean {
      return this.authenticationService.isAuthenticated();
    }

}
