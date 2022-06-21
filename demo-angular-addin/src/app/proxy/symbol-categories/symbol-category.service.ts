import type { GetSymbolCategoriesInput, SymbolCategoryCreateDto, SymbolCategoryDto, SymbolCategoryUpdateDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SymbolCategoryService {
  apiName = 'Default';

  create = (input: SymbolCategoryCreateDto) =>
    this.restService.request<any, SymbolCategoryDto>({
      method: 'POST',
      url: `/api/app/symbol-category`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/symbol-category/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SymbolCategoryDto>({
      method: 'GET',
      url: `/api/app/symbol-category/${id}`,
    },
    { apiName: this.apiName });

  getByHostId = (id: string) =>
    this.restService.request<any, SymbolCategoryDto>({
      method: 'GET',
      url: `/api/app/symbol-category/${id}/by-host-id`,
    },
    { apiName: this.apiName });

  getHostList = () =>
    this.restService.request<any, PagedResultDto<SymbolCategoryDto>>({
      method: 'GET',
      url: `/api/app/symbol-category/host-list`,
    },
    { apiName: this.apiName });

  getList = (input: GetSymbolCategoriesInput) =>
    this.restService.request<any, PagedResultDto<SymbolCategoryDto>>({
      method: 'GET',
      url: `/api/app/symbol-category`,
      params: { filterText: input.filterText, name: input.name, description: input.description, reminderLocationMin: input.reminderLocationMin, reminderLocationMax: input.reminderLocationMax, isInActive: input.isInActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  importFromHostLibrary = () =>
    this.restService.request<any, PagedResultDto<SymbolCategoryDto>>({
      method: 'POST',
      url: `/api/app/symbol-category/import-from-host-library`,
    },
    { apiName: this.apiName });

  update = (id: string, input: SymbolCategoryUpdateDto) =>
    this.restService.request<any, SymbolCategoryDto>({
      method: 'PUT',
      url: `/api/app/symbol-category/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
