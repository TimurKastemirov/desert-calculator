import { MyStorage } from '../my-storage';
import { StorageEntity } from '../../models/storage-entity';
import { iif, map, Observable, of, tap, throwError } from 'rxjs';

export class LocalStorageStorage<T extends StorageEntity> extends MyStorage<T> {
    private storage: Storage;

    constructor(tableName: string, innerStorage: Storage) {
        super(tableName);
        this.storage = innerStorage;
        if (!this.storage.getItem(this.getTable())) {
            this.storage.setItem(this.getTable(), JSON.stringify([]));
        }
    }

    add(entity: Partial<T>): Observable<T> {
        const entities = this.entities;
        entity.id = this.generateId();
        entities.push(entity as T);
        this.entities = entities;
        return of(entity as T);
    }

    getById(id: number): Observable<T> {
        const entity: T = this.entities.find((value) => value.id === id) as T;
        const notFoundError$ = throwError(() =>
            new Error(`${this.getTable()} element with id ${id} is not found`)
        );
        return iif(() => !!entity, of(entity), notFoundError$);

    }

    getList(): Observable<T[]> {
        return of(this.entities || []);
    }

    remove(id: number): Observable<T> {
        return this.getById(id)
            .pipe(tap(() => this.entities = this.entities.filter(el => el.id !== id)));
    }

    update(id: number, entity: Partial<T>): Observable<T> {
        return this.getById(id)
            .pipe(
                map((oldEntity) => {
                    const newEntity: T = {} as T;
                    for (const [prop, val] of Object.entries(oldEntity)) {
                        // @ts-ignore
                        newEntity[prop] = entity[prop] ? entity[prop] : val;
                    }

                    const entities = this.entities;
                    const index = entities.findIndex(el => el.id === id);
                    entities.splice(index, 1, newEntity);
                    this.entities = entities;
                    return newEntity;
                }),
            );
    }

    get entities(): T[] {
        return JSON.parse(this.storage.getItem(this.getTable()) as string);
    }

    set entities(debts: T[]) {
        this.storage.setItem(this.getTable(), JSON.stringify(debts));
    }

    private generateId(): number {
        const entities = this.entities;
        return entities.length === 0
            ? 1
            : entities[entities.length - 1].id + 1;
    }
}
