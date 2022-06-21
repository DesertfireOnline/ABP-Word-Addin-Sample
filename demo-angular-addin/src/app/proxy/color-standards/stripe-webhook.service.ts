import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { IActionResult } from '../microsoft/asp-net-core/mvc/models';

@Injectable({
  providedIn: 'root',
})
export class StripeWebhookService {
  apiName = 'Default';

  index = () =>
    this.restService.request<any, IActionResult>({
      method: 'POST',
      url: `/api/app/stripewebhook`,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
