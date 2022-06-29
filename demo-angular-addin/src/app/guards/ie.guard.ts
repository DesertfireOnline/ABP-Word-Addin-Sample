import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class IeGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    // Internet Explorer 6-11 check
    const isIE = /*@cc_on!@*/ false || !!document['documentMode'];

    if (isIE) {
      return this.router.createUrlTree(['ie']);
    }

    return true;
  }
}
