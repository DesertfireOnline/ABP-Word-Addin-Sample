import { Component } from '@angular/core';
import { AuthService, noop, PermissionService } from '@abp/ng.core';
import { SubscriptionService } from '../proxy/subscriptions';
import { UserService } from '../services/users/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
})
export class AppLayoutComponent {
  UserName: string;
  TenantName: string;

  constructor(
    private permissionService: PermissionService,
    private subscriptionService: SubscriptionService,
    private userService: UserService,
    private authService: AuthService,
    private router: Router
  ) {
    console.log('reconstruct');
  }

  Logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.UserName = this.userService.getUserName();
    this.TenantName = this.userService.getTenantName();
  }

  async Reload() {
    // navigation to same path can be hack with this way reconstruct writes before navigated in the console when reload method executed.
    const { shouldReuseRoute } = this.router.routeReuseStrategy;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.navigated = false;
    await this.router.navigateByUrl('start').catch(console.log);
    console.log('navigated');
    this.router.routeReuseStrategy.shouldReuseRoute = shouldReuseRoute;
    /*
    await this.router.navigate(['start']).then(() => {
      window.location.reload();
    });
    */
  }
}
