import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface GetTemplateTypesInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  description?: string;
  thumbnail?: string;
  isInActive: boolean;
}

export interface TemplateTypeCreateDto {
  name: string;
  description?: string;
  thumbnail: string;
  hostTemplateTypeId?: string;
  isInActive: boolean;
}

export interface TemplateTypeDto extends FullAuditedEntityDto<string> {
  name?: string;
  description?: string;
  thumbnail?: string;
  hostTemplateTypeId?: string;
  isInActive: boolean;
}

export interface TemplateTypeUpdateDto {
  name: string;
  description?: string;
  thumbnail: string;
  hostTemplateTypeId?: string;
  isInActive: boolean;
}
