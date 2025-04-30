type Prop = string | number | symbol;
declare global {
    interface Array<T> {
        firstObject: T;
        lastObject: T;
        mapBy: (prop: string) => T;
        filterBy: (prop: Prop, value: unknown, isInclude?: boolean) => T[];
    }
}
export {};
