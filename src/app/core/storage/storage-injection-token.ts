import { InjectionToken } from '@angular/core';
import { MyStorage } from './my-storage';

export const storageInjectionToken = new InjectionToken<MyStorage>('MyStorage injection token');
