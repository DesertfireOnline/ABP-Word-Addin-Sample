import type { BlobDto, GetBlobRequestDto, SaveBlobInputDto } from './models';
import { RestService } from '@abp/ng.core';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  apiName = 'Default';

  deleteSymbol = (fileName: string) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/app/storage/symbol`,
      params: { fileName: fileName },
    },
    { apiName: this.apiName });

  deleteTemplate = (fileName: string) =>
    this.restService.request<any, boolean>({
      method: 'DELETE',
      url: `/api/app/storage/template`,
      params: { fileName: fileName },
    },
    { apiName: this.apiName });

  getSymbol = (input: GetBlobRequestDto) =>
    this.restService.request<any, BlobDto>({
      method: 'GET',
      url: `/api/app/storage/symbol`,
      params: { name: input.name },
    },
    { apiName: this.apiName });

  getTemplate = (input: GetBlobRequestDto) =>
    this.restService.request<any, BlobDto>({
      method: 'GET',
      url: `/api/app/storage/template`,
      params: { name: input.name },
    },
    { apiName: this.apiName });

  saveSymbol = (input: SaveBlobInputDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/storage/save-symbol`,
      body: input,
    },
    { apiName: this.apiName });

  saveTemplate = (input: SaveBlobInputDto) =>
    this.restService.request<any, void>({
      method: 'POST',
      url: `/api/app/storage/save-template`,
      body: input,
    },
    { apiName: this.apiName });

  constructor(private restService: RestService) {}
}
