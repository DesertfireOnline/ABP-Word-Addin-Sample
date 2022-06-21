import { mapEnumToOptions } from '@abp/ng.core';

export enum EditionPaymentType {
  NewRegistration = 0,
  BuyLicensedUsers = 1,
  Upgrade = 2,
  Extend = 3,
  Manual = 4,
  Cancelled = 5,
}

export const editionPaymentTypeOptions = mapEnumToOptions(EditionPaymentType);
