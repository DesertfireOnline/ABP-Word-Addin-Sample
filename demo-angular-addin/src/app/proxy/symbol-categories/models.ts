import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetSymbolCategoriesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  description?: string;
  reminderLocationMin?: number;
  reminderLocationMax?: number;
  isInActive: boolean;
}

export interface SymbolCategoryCreateDto {
  name: string;
  description?: string;
  reminderLocation: number;
  hostSymbolCategoryId?: string;
  isInActive: boolean;
}

export interface SymbolCategoryDto extends FullAuditedEntityDto<string> {
  name?: string;
  description?: string;
  reminderLocation: number;
  hostSymbolCategoryId?: string;
  isInActive: boolean;
}

export interface SymbolCategoryUpdateDto {
  name: string;
  description?: string;
  reminderLocation: number;
  hostSymbolCategoryId?: string;
  isInActive: boolean;
}
