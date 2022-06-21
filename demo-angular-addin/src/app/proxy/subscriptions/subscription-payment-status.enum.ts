import { mapEnumToOptions } from '@abp/ng.core';

export enum SubscriptionPaymentStatus {
  NotPaid = 1,
  Paid = 2,
  Failed = 3,
  Cancelled = 4,
  Completed = 5,
}

export const subscriptionPaymentStatusOptions = mapEnumToOptions(SubscriptionPaymentStatus);
