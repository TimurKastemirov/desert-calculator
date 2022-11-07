import { Observable } from 'rxjs';
import { StorageEntity } from '../models/storage-entity';

export interface IMyStorage<T extends StorageEntity> {
    add(entity: Partial<T>): Observable<T>;

    update(id: number, entity: Partial<T>): Observable<T>;

    getList(): Observable<T[]>;

    getById(id: number): Observable<T>;

    remove(id: number): Observable<T>;
}

export abstract class MyStorage<T extends StorageEntity> implements IMyStorage<T> {
    protected constructor(tableName: string) {
        this.tableName = tableName;
    }

    private readonly tableName!: string;

    getTable(): string {
        return this.tableName;
    }

    abstract add(entity: Partial<T>): Observable<T>;

    abstract update(id: number, entity: Partial<T>): Observable<T>;

    abstract getList(): Observable<T[]>;

    abstract getById(id: number): Observable<T>;

    abstract remove(id: number): Observable<T>;
}
