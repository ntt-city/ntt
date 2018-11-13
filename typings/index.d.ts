declare interface Action {
    type: string;
}

declare type Content = SimpleObject | ValueType;

declare interface FlatArray extends Array<ValueType> { }

declare interface FlatObject {
    [key: string]: FlatArray | ValueType;
}

declare type Key = number | string;

declare type KeyPath = Iterable<Key>;

declare interface KeyPathMap {
    [key: string]: KeyPath;
}

// Omit type https://github.com/Microsoft/TypeScript/issues/12215#issuecomment-377567046
declare type Omit<T, K extends keyof any> = T extends any ? Pick<T, Exclude<keyof T, K>> : never;

declare type PartialPick<T, K extends keyof T> = Partial<T> & Pick<T, K>;

declare interface SimpleArray extends Array<SimpleObject | ValueType> { }

declare interface SimpleObject {
    [key: string]: SimpleArray | SimpleObject | ValueType;
}

declare type Stringify<T> = { [K in keyof T]: string };

declare type ValueType = boolean | Date | number | string | symbol;

declare interface Vector extends Array<number> { }

declare interface Matrix extends Array<Vector> { }
/*
interface Iterator<T> {
    next(value?: any): IteratorResult<T>;
    return?(value?: any): IteratorResult<T>;
    throw?(e?: any): IteratorResult<T>;
}

declare interface Iterable<T> {
    [Symbol.iterator](): Iterator<T>;
}
*/