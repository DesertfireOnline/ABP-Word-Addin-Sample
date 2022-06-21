import { mapEnumToOptions } from '@abp/ng.core';

export enum SubscriptionGatewayType {
  Paypal = 1,
  Stripe = 2,
  Manual = 3,
}

export const subscriptionGatewayTypeOptions = mapEnumToOptions(SubscriptionGatewayType);
