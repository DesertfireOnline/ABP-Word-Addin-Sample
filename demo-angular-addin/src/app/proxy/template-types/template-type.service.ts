import type { GetTemplateTypesInput, TemplateTypeCreateDto, TemplateTypeDto, TemplateTypeUpdateDto } from './models';
import { RestService } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TemplateTypeService {
  apiName = 'Default';

  create = (input: TemplateTypeCreateDto) =>
    this.restService.request<any, TemplateTypeDto>({
      method: 'POST',
      url: `/api/app/template-type`,
      body: input,
    },
    { apiName: this.apiName });

  delete = (id: string) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/app/template-type/${id}`,
    },
    { apiName: this.apiName });

  get = (id: string) =>
    this.restService.request<any, TemplateTypeDto>({
      method: 'GET',
      url: `/api/app/template-type/${id}`,
    },
    { apiName: this.apiName });

  getByHostId = (id: string) =>
    this.restService.request<any, TemplateTypeDto>({
      method: 'GET',
      url: `/api/app/template-type/${id}/by-host-id`,
    },
    { apiName: this.apiName });

  getHostList = () =>
    this.restService.request<any, PagedResultDto<TemplateTypeDto>>({
      method: 'GET',
      url: `/api/app/template-type/host-list`,
    },
    { apiName: this.apiName });

  getList = (input: GetTemplateTypesInput) =>
    this.restService.request<any, PagedResultDto<TemplateTypeDto>>({
      method: 'GET',
      url: `/api/app/template-type`,
      params: { filterText: input.filterText, name: input.name, description: input.description, thumbnail: input.thumbnail, isInActive: input.isInActive, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName });

  importFromHostLibrary = () =>
    this.restService.request<any, PagedResultDto<TemplateTypeDto>>({
      method: 'POST',
      url: `/api/app/template-type/import-from-host-library`,
    },
    { apiName: this.apiName });

  update = (id: string, input: TemplateTypeUpdateDto) =>
    this.restService.request<any, TemplateTypeDto>({
      method: 'PUT',
      url: `/api/app/template-type/${id}`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
