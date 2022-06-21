import type { ExtensibleEntityDto } from '@abp/ng.core';

export interface EditionDto extends ExtensibleEntityDto<string> {
  displayName?: string;
}

export interface SaasTenantDto extends ExtensibleEntityDto<string> {
  name?: string;
  editionId?: string;
  editionName?: string;
  hasDefaultConnectionString: boolean;
}
