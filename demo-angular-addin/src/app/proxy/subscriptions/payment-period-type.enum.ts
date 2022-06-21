import { mapEnumToOptions } from '@abp/ng.core';

export enum PaymentPeriodType {
  Daily = 1,
  Weekly = 7,
  Monthly = 30,
  Annual = 365,
}

export const paymentPeriodTypeOptions = mapEnumToOptions(PaymentPeriodType);
