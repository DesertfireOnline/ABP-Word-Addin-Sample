import { Injectable } from '@angular/core';
import { CanActivate, Router, UrlTree } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DesktopGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean | UrlTree {
    const isDesktop = window.top?.window == window;

    if (isDesktop) {
      return true;
    }

    return this.router.createUrlTree(['desktop']);
  }
}
