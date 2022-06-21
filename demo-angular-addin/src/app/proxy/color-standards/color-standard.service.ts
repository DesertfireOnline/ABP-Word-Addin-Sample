import type { ColorStandardCreateDto, ColorStandardDto, ColorStandardUpdateDto, GetColorStandardsInput } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ColorStandardService {
  apiName = 'Default';

  create = (input: ColorStandardCreateDto) =>
    this.restService.request<any, ColorStandardDto>({
      method: 'POST',
      url: `/api/app/color-standard`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/color-standard/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, ColorStandardDto>({
      method: 'GET',
      url: `/api/app/color-standard/${id}`,
    },
    { apiName: this.apiName });

  getByHostId = (id: string) =>
    this.restService.request<any, ColorStandardDto>({
      method: 'GET',
      url: `/api/app/color-standard/${id}/by-host-id`,
    },
    { apiName: this.apiName });

  getHostList = () =>
    this.restService.request<any, PagedResultDto<ColorStandardDto>>({
      method: 'GET',
      url: `/api/app/color-standard/host-list`,
    },
    { apiName: this.apiName });

  getList = (input: GetColorStandardsInput) =>
    this.restService.request<any, PagedResultDto<ColorStandardDto>>({
      method: 'GET',
      url: `/api/app/color-standard`,
      params: { filterText: input.filterText, name: input.name, color: input.color, hostColorStandardId: input.hostColorStandardId, isInActive: input.isInActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  importFromHostLibrary = () =>
    this.restService.request<any, PagedResultDto<ColorStandardDto>>({
      method: 'POST',
      url: `/api/app/color-standard/import-from-host-library`,
    },
    { apiName: this.apiName });

  update = (id: string, input: ColorStandardUpdateDto) =>
    this.restService.request<any, ColorStandardDto>({
      method: 'PUT',
      url: `/api/app/color-standard/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
