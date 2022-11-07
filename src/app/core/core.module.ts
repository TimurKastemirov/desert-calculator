import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { storageInjectionToken } from './storage/storage-injection-token';
import { LocalStorageStorage } from './storage/storage-strategies/local-storage.storage';

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    providers: [
        {
            provide: storageInjectionToken,
            useFactory: () => ((/* here deps */) => {
                return (tableName: string) => new LocalStorageStorage(tableName, localStorage);
            }),
            deps: [],
        }
    ],
})
export class CoreModule {
}
