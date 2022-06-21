import type { EntityDto, FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';
import type { SymbolCategoryDto } from '../symbol-categories/models';
import type { BlobDto } from '../storage/models';

export interface GetSymbolsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  description?: string;
  icon?: string;
  isInActive: boolean;
  symbolCategoryId?: string;
}

export interface SelectedHostSymbol extends EntityDto<string> {
  name: string;
  description?: string;
  icon: string;
  hostSymbolId?: string;
  isInActive: boolean;
  symbolCategoryId?: string;
}

export interface SelectedHostSymbolsInput {
  selectedSymbols: SelectedHostSymbol[];
}

export interface SymbolCreateDto {
  name: string;
  description?: string;
  icon: string;
  hostSymbolId?: string;
  isInActive: boolean;
  symbolCategoryId?: string;
}

export interface SymbolDto extends FullAuditedEntityDto<string> {
  name?: string;
  description?: string;
  icon?: string;
  hostSymbolId?: string;
  isInActive: boolean;
  symbolCategoryId?: string;
}

export interface SymbolUpdateDto {
  name: string;
  description?: string;
  icon: string;
  hostSymbolId?: string;
  isInActive: boolean;
  symbolCategoryId?: string;
}

export interface SymbolWithCategoryAndCategoryBlobDto {
  symbol: SymbolDto;
  symbolCategory: SymbolCategoryDto;
  symbolCategoryBlob: BlobDto;
}

export interface SymbolWithCategoryAndSymbolBlobDto {
  symbol: SymbolDto;
  symbolCategory: SymbolCategoryDto;
  symbolBlob: BlobDto;
}

export interface SymbolWithImageDto {
  symbolDto: SymbolDto;
  blobDto: BlobDto;
}

export interface SymbolWithNavigationPropertiesDto {
  symbol: SymbolDto;
  symbolCategory: SymbolCategoryDto;
}
