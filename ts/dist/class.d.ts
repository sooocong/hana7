declare class WithProperty {
    myProperty: () => void;
    initialize(): void;
}
declare const instance: WithProperty;
declare class WithProperty2 {
    myProperty: () => void;
    constructor();
}
declare const instance2: WithProperty2;
declare class Animal {
    name: string;
    mouse: string;
    constructor(name: string, mouse?: string);
    feed(food: string): void;
}
