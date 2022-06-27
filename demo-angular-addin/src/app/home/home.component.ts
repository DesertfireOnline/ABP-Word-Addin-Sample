import { Component } from '@angular/core';
import { AuthService } from '@abp/ng.core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IdentityUserService } from '../proxy/volo/abp/identity';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})

/* The Home component contains all the logic for the splash screen, login/logout and the application menus */
export class HomeComponent {
  title = 'word-angular';

  users = [];

  showAdminMenu: boolean;
  toggleHelp: boolean;

  loginBtnClicked: boolean;
  disabled: boolean;

  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService,
    private identityService: IdentityUserService,
    private router: Router
  ) {}

  Login() {
    this.disabled = true;
    this.authService.navigateToLogin();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }
}
