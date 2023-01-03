import { IMyStorage, MyStorage } from '@core/storage/my-storage';
import { Observable } from 'rxjs';
import { StorageEntity } from '@core/models/storage-entity';

export class BaseStorageService<Type extends StorageEntity> implements IMyStorage<Type> {
    constructor(
        protected storage: MyStorage<Type>,
    ) {}

    add(element: Partial<Type>): Observable<Type> {
        return this.storage.add(element);
    }

    update(id: number, element: Partial<Type>): Observable<Type> {
        return this.storage.update(id, element);
    }

    getById(id: number): Observable<Type> {
        return this.storage.getById(id);
    }

    getList(): Observable<Type[]> {
        return this.storage.getList();
    }

    remove(id: number): Observable<Type> {
        return this.storage.remove(id);
    }
}
