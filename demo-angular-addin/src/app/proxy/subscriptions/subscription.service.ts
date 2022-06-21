import type { EditionPaymentType } from './edition-payment-type.enum';
import type { GetSubscriptionsInput, SubscriptionCreateDto, SubscriptionDto, SubscriptionUpdateDto, SubscriptionWithNavigationPropertiesDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupDto, LookupRequestDto } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class SubscriptionService {
  apiName = 'Default';

  create = (input: SubscriptionCreateDto) =>
    this.restService.request<any, SubscriptionDto>({
      method: 'POST',
      url: `/api/app/subscription`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/subscription/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SubscriptionDto>({
      method: 'GET',
      url: `/api/app/subscription/${id}`,
    },
    { apiName: this.apiName });

  getByStripeSubscriptionId = (stripeSubscriptionId: string) =>
    this.restService.request<any, SubscriptionWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/app/subscription/by-stripe-subscription-id/${stripeSubscriptionId}`,
    },
    { apiName: this.apiName });

  getCurrentTenant = () =>
    this.restService.request<any, SubscriptionWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/app/subscription/current-tenant`,
    },
    { apiName: this.apiName });

  getEditionLookup = (input: LookupRequestDto) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>({
      method: 'GET',
      url: `/api/app/subscription/edition-lookup`,
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (input: GetSubscriptionsInput) =>
    this.restService.request<any, PagedResultDto<SubscriptionWithNavigationPropertiesDto>>({
      method: 'GET',
      url: `/api/app/subscription`,
      params: { filterText: input.filterText, description: input.description, gateway: input.gateway, gatewaySessionId: input.gatewaySessionId, gatewaySubscriptionId: input.gatewaySubscriptionId, gatewayCustomerId: input.gatewayCustomerId, licensedUserCount: input.licensedUserCount, status: input.status, amountMin: input.amountMin, amountMax: input.amountMax, dayCountMin: input.dayCountMin, dayCountMax: input.dayCountMax, paymentPeriodType: input.paymentPeriodType, invoiceId: input.invoiceId, invoicePdf: input.invoicePdf, isRecurring: input.isRecurring, successUrl: input.successUrl, errorUrl: input.errorUrl, editionPaymentType: input.editionPaymentType, editionId: input.editionId, tenantId: input.tenantId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getStripeSubscriptionIdByEditionPaymentType = (editionPaymentType: EditionPaymentType, stripeSubscriptionId: string) =>
    this.restService.request<any, SubscriptionWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/app/subscription/stripe-subscription-id-by-edition-payment-type/${stripeSubscriptionId}`,
      params: { editionPaymentType: editionPaymentType },
    },
    { apiName: this.apiName });

  getTenantLookup = (input: LookupRequestDto) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>({
      method: 'GET',
      url: `/api/app/subscription/tenant-lookup`,
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getWithNavigationProperties = (id: string) =>
    this.restService.request<any, SubscriptionWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/app/subscription/${id}/with-navigation-properties`,
    },
    { apiName: this.apiName });

  isTenantNameAlreadyExist = (newTenantName: string) =>
    this.restService.request<any, boolean>({
      method: 'POST',
      url: `/api/app/subscription/is-tenant-name-already-exist`,
      params: { newTenantName: newTenantName },
    },
    { apiName: this.apiName });

  update = (id: string, input: SubscriptionUpdateDto) =>
    this.restService.request<any, SubscriptionDto>({
      method: 'PUT',
      url: `/api/app/subscription/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
