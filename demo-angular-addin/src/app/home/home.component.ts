import { Component } from '@angular/core';
import { AuthService } from '@abp/ng.core';
import { OAuthService } from 'angular-oauth2-oidc';
import { IdentityUserService } from '../proxy/volo/abp/identity';
import { Router } from '@angular/router';
import { PermissionService } from '@abp/ng.core';
import { SubscriptionService } from '../proxy/subscriptions/subscription.service';
import { UserService } from '../services/users/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

/* The Home component contains all the logic for the splash screen, login/logout and the application menus */
export class HomeComponent {
  title = 'word-angular';

  users = [];

  showAdminMenu: boolean;
  toggleHelp: boolean;

  UserName: string;
  TenantName: string;

  desktopVersion: boolean;
  isIE: boolean;

  loginBtnClicked: boolean;

  get hasLoggedIn(): boolean {
    return this.oAuthService.hasValidAccessToken();
  }

  constructor(
    private oAuthService: OAuthService,
    private authService: AuthService,
    private identityService: IdentityUserService,
    private router: Router,
    private permissionService: PermissionService,
    private subscriptionService: SubscriptionService,
    private userService: UserService,
  ) {

  }

  ngOnInit() {

    // Internet Explorer 6-11 check
    this.isIE = /*@cc_on!@*/false || !!document["documentMode"];

    if (window.top?.window == window) {
      // Add-in is running in Word Desktop
      this.desktopVersion = true;
    } else {
      // Add-in is running in Word Online
      this.desktopVersion = false;
    }

    this.UserName = this.userService.getUserName();
    this.TenantName = this.userService.getTenantName();

  }

  async Reload() {
    await this.router.navigate(['start'])
      .then(() => {
        window.location.reload();
      });
  }

  disabled:boolean;
  Login() {
    this.disabled = true;
    this.authService.navigateToLogin();
  }

  Logout() {
    this.authService.logout();
  }

  navigateTo(path: string) {
    this.router.navigate([path]);
  }

}
