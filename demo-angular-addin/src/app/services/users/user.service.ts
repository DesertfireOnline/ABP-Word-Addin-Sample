import { Injectable } from '@angular/core';
import { ConfigStateService } from '@abp/ng.core';

@Injectable({
  providedIn: 'root'
})
// This service contains functions for tenants and user privileges 
export class UserService {
  constructor(private configStateService: ConfigStateService) { }

  // Get logged in user name 
  getUserName(): string {
    if (this.configStateService.getAll().currentUser) {
      return this.configStateService.getAll().currentUser.email;
    }
    else {
      return 'Undefined';
    }
  }

  // Get logged in tenant name
  getTenantName(): string {
    if (this.configStateService.getAll().currentTenant) {
      return this.configStateService.getAll().currentTenant.name;
    }
    else {
      return 'Undefined';
    }
  }

}
