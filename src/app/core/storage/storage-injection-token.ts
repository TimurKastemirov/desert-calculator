import { InjectionToken } from '@angular/core';
import { MyStorage } from './my-storage';
import { StorageEntity } from '../models/storage-entity';

export const storageInjectionToken = new InjectionToken<MyStorage<StorageEntity>>('MyStorage injection token');
