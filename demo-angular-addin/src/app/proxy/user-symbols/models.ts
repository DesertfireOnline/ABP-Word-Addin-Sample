import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { SymbolDto } from '../symbols/models';
import type { BlobDto } from '../storage/models';

export interface GetUserSymbolsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  userId?: string;
  symbolId?: string;
}

export interface UserSymbolCreateDto {
  userId?: string;
  symbolId?: string;
}

export interface UserSymbolDto extends FullAuditedEntityDto<string> {
  userId?: string;
  symbolId?: string;
}

export interface UserSymbolUpdateDto {
  userId?: string;
  symbolId?: string;
}

export interface UserSymbolWithBlobDto {
  userId?: string;
  symbolDto: SymbolDto;
  blobDto: BlobDto;
}

export interface UserSymbolWithNavigationPropertiesDto {
  userSymbol: UserSymbolDto;
  symbol: SymbolDto;
}
