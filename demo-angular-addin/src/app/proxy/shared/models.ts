import type { PagedResultRequestDto } from '@abp/ng.core';

export interface LookupDto<TKey> {
  id: TKey;
  displayName?: string;
}

export interface LookupRequestDto extends PagedResultRequestDto {
  filter?: string;
}

export interface PpmLookupRequestDto extends PagedResultRequestDto {
  filter?: string;
  isInActive: boolean;
}
