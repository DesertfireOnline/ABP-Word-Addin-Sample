import type { ExtensibleFullAuditedEntityDto, ExtensibleObject, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { SubscriptionGatewayType } from './subscription-gateway-type.enum';
import type { SubscriptionPaymentStatus } from './subscription-payment-status.enum';
import type { PaymentPeriodType } from './payment-period-type.enum';
import type { EditionPaymentType } from './edition-payment-type.enum';
import type { EditionDto, SaasTenantDto } from '../volo/saas/host/dtos/models';

export interface GetSubscriptionsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  description?: string;
  gateway?: SubscriptionGatewayType;
  gatewaySessionId?: string;
  gatewaySubscriptionId?: string;
  gatewayCustomerId?: string;
  licensedUserCount: number;
  status?: SubscriptionPaymentStatus;
  amountMin?: number;
  amountMax?: number;
  dayCountMin?: number;
  dayCountMax?: number;
  paymentPeriodType?: PaymentPeriodType;
  invoiceId?: string;
  invoicePdf?: string;
  isRecurring?: boolean;
  successUrl?: string;
  errorUrl?: string;
  editionPaymentType?: EditionPaymentType;
  editionId?: string;
  tenantId?: string;
}

export interface SubscriptionCreateDto extends ExtensibleObject {
  description?: string;
  gateway: SubscriptionGatewayType;
  gatewaySessionId?: string;
  gatewaySubscriptionId?: string;
  gatewayCustomerId?: string;
  licensedUserCount: number;
  status: SubscriptionPaymentStatus;
  amount: number;
  dayCount: number;
  paymentPeriodType?: PaymentPeriodType;
  invoiceId?: string;
  invoicePdf?: string;
  isRecurring: boolean;
  successUrl?: string;
  errorUrl?: string;
  editionPaymentType: EditionPaymentType;
  editionId?: string;
  tenantId?: string;
}

export interface SubscriptionDto extends ExtensibleFullAuditedEntityDto<string> {
  description?: string;
  gateway: SubscriptionGatewayType;
  gatewaySessionId?: string;
  gatewaySubscriptionId?: string;
  gatewayCustomerId?: string;
  licensedUserCount: number;
  status: SubscriptionPaymentStatus;
  amount: number;
  dayCount: number;
  paymentPeriodType?: PaymentPeriodType;
  invoiceId?: string;
  invoicePdf?: string;
  isRecurring: boolean;
  successUrl?: string;
  errorUrl?: string;
  editionPaymentType: EditionPaymentType;
  editionId?: string;
  tenantId?: string;
}

export interface SubscriptionUpdateDto extends ExtensibleObject {
  description?: string;
  gateway: SubscriptionGatewayType;
  gatewaySessionId?: string;
  gatewaySubscriptionId?: string;
  gatewayCustomerId?: string;
  licensedUserCount: number;
  status: SubscriptionPaymentStatus;
  amount: number;
  dayCount: number;
  paymentPeriodType?: PaymentPeriodType;
  invoiceId?: string;
  invoicePdf?: string;
  isRecurring: boolean;
  successUrl?: string;
  errorUrl?: string;
  editionPaymentType: EditionPaymentType;
  editionId?: string;
  tenantId?: string;
}

export interface SubscriptionWithNavigationPropertiesDto {
  subscription: SubscriptionDto;
  edition: EditionDto;
  tenant: SaasTenantDto;
}
