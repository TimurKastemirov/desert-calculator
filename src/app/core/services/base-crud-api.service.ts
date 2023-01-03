import { Observable } from 'rxjs';
import { StorageEntity } from '@core/models/storage-entity';
import { BaseStorageService } from '@core/storage/base-storage.service';

export class BaseCrudApiService<T extends StorageEntity> {
    constructor(protected storage: BaseStorageService<T>) {}

    getList(): Observable<T[]> {
        return this.storage.getList();
    }

    getById(id: number): Observable<T> {
        return this.storage.getById(id);
    }

    addItem(element: T): Observable<T> {
        return this.storage.add(element);
    }

    updateItem(id: number, element: Partial<T>): Observable<T> {
        return this.storage.update(id, element);
    }

    deleteItem(id: number): Observable<T> {
        return this.storage.remove(id);
    }
}
