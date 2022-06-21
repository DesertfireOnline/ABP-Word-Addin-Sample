import type { FullAuditedEntityDto, PagedAndSortedResultRequestDto } from '@abp/ng.core';

export interface ColorStandardCreateDto {
  name: string;
  color: string;
  hostColorStandardId?: string;
  isInActive: boolean;
}

export interface ColorStandardDto extends FullAuditedEntityDto<string> {
  name?: string;
  color?: string;
  hostColorStandardId?: string;
  isInActive: boolean;
}

export interface ColorStandardUpdateDto {
  name: string;
  color: string;
  hostColorStandardId?: string;
  isInActive: boolean;
}

export interface GetColorStandardsInput extends PagedAndSortedResultRequestDto {
  filterText?: string;
  name?: string;
  color?: string;
  hostColorStandardId?: string;
  isInActive: boolean;
}
