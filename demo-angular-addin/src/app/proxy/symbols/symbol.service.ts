import type { GetSymbolsInput, SelectedHostSymbolsInput, SymbolCreateDto, SymbolDto, SymbolUpdateDto, SymbolWithCategoryAndCategoryBlobDto, SymbolWithCategoryAndSymbolBlobDto, SymbolWithImageDto, SymbolWithNavigationPropertiesDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupDto, PpmLookupRequestDto } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class SymbolService {
  apiName = 'Default';

  create = (input: SymbolCreateDto) =>
    this.restService.request<any, SymbolDto>({
      method: 'POST',
      url: `/api/app/symbol`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/symbol/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, SymbolDto>({
      method: 'GET',
      url: `/api/app/symbol/${id}`,
    },
    { apiName: this.apiName });

  getHostList = (input: GetSymbolsInput) =>
    this.restService.request<any, PagedResultDto<SymbolWithCategoryAndCategoryBlobDto>>({
      method: 'GET',
      url: `/api/app/symbol/host-list`,
      params: { filterText: input.filterText, name: input.name, description: input.description, icon: input.icon, isInActive: input.isInActive, symbolCategoryId: input.symbolCategoryId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getList = (input: GetSymbolsInput) =>
    this.restService.request<any, PagedResultDto<SymbolWithNavigationPropertiesDto>>({
      method: 'GET',
      url: `/api/app/symbol`,
      params: { filterText: input.filterText, name: input.name, description: input.description, icon: input.icon, isInActive: input.isInActive, symbolCategoryId: input.symbolCategoryId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getListWithSymbolBlob = (input: GetSymbolsInput) =>
    this.restService.request<any, PagedResultDto<SymbolWithCategoryAndSymbolBlobDto>>({
      method: 'GET',
      url: `/api/app/symbol/with-symbol-blob`,
      params: { filterText: input.filterText, name: input.name, description: input.description, icon: input.icon, isInActive: input.isInActive, symbolCategoryId: input.symbolCategoryId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getNewHostList = (input: GetSymbolsInput) =>
    this.restService.request<any, PagedResultDto<SymbolWithNavigationPropertiesDto>>({
      method: 'GET',
      url: `/api/app/symbol/new-host-list`,
      params: { filterText: input.filterText, name: input.name, description: input.description, icon: input.icon, isInActive: input.isInActive, symbolCategoryId: input.symbolCategoryId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getSymbolCategoryLookup = (input: PpmLookupRequestDto) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>({
      method: 'GET',
      url: `/api/app/symbol/symbol-category-lookup`,
      params: { filter: input.filter, isInActive: input.isInActive, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getSymbolWithImage = (id: string) =>
    this.restService.request<any, SymbolWithImageDto>({
      method: 'GET',
      url: `/api/app/symbol/${id}/symbol-with-image`,
    },
    { apiName: this.apiName });

  getWithNavigationProperties = (id: string, isInActive?: boolean) =>
    this.restService.request<any, SymbolWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/app/symbol/${id}/with-navigation-properties`,
      params: { isInActive: isInActive },
    },
    { apiName: this.apiName });

  importFromHostLibrary = () =>
    this.restService.request<any, PagedResultDto<SymbolWithNavigationPropertiesDto>>({
      method: 'POST',
      url: `/api/app/symbol/import-from-host-library`,
    },
    { apiName: this.apiName });

  importSelectedFromHostLibrary = (input: SelectedHostSymbolsInput) =>
    this.restService.request<any, PagedResultDto<SymbolWithNavigationPropertiesDto>>({
      method: 'POST',
      url: `/api/app/symbol/import-selected-from-host-library`,
      body: input,
    },
    { apiName: this.apiName });

  update = (id: string, input: SymbolUpdateDto) =>
    this.restService.request<any, SymbolDto>({
      method: 'PUT',
      url: `/api/app/symbol/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
