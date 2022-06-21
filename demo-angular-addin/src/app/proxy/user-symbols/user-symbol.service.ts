import type { GetUserSymbolsInput, UserSymbolCreateDto, UserSymbolDto, UserSymbolUpdateDto, UserSymbolWithBlobDto, UserSymbolWithNavigationPropertiesDto } from './models';
import { RestService } from '@abp/ng.core';
import type { ListResultDto, PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { LookupDto, LookupRequestDto } from '../shared/models';

@Injectable({
  providedIn: 'root',
})
export class UserSymbolService {
  apiName = 'Default';

  create = (input: UserSymbolCreateDto) =>
    this.restService.request<any, UserSymbolDto>({
      method: 'POST',
      url: `/api/app/user-symbol`,
      body: input,
    },
    { apiName: this.apiName });

  createCurrentUserSymbolFav = (input: UserSymbolCreateDto) =>
    this.restService.request<any, UserSymbolDto>({
      method: 'POST',
      url: `/api/app/user-symbol/current-user-symbol-fav`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/user-symbol/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, UserSymbolDto>({
      method: 'GET',
      url: `/api/app/user-symbol/${id}`,
    },
    { apiName: this.apiName });

  getList = (input: GetUserSymbolsInput) =>
    this.restService.request<any, PagedResultDto<UserSymbolWithNavigationPropertiesDto>>({
      method: 'GET',
      url: `/api/app/user-symbol`,
      params: { filterText: input.filterText, userId: input.userId, symbolId: input.symbolId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getListForCurrentUserWithSymbolBlob = () =>
    this.restService.request<any, ListResultDto<UserSymbolWithBlobDto>>({
      method: 'GET',
      url: `/api/app/user-symbol/for-current-user-with-symbol-blob`,
    },
    { apiName: this.apiName });

  getSymbolLookup = (input: LookupRequestDto) =>
    this.restService.request<any, PagedResultDto<LookupDto<string>>>({
      method: 'GET',
      url: `/api/app/user-symbol/symbol-lookup`,
      params: { filter: input.filter, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  getWithNavigationProperties = (id: string) =>
    this.restService.request<any, UserSymbolWithNavigationPropertiesDto>({
      method: 'GET',
      url: `/api/app/user-symbol/${id}/with-navigation-properties`,
    },
    { apiName: this.apiName });

  update = (id: string, input: UserSymbolUpdateDto) =>
    this.restService.request<any, UserSymbolDto>({
      method: 'PUT',
      url: `/api/app/user-symbol/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  updateCurrentUserSymbolFav = (id: string, input: UserSymbolUpdateDto) =>
    this.restService.request<any, UserSymbolDto>({
      method: 'PUT',
      url: `/api/app/user-symbol/${id}/current-user-symbol-fav`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
