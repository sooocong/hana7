"use strict";
class WithProperty {
    myProperty; // Type 정의
    initialize() {
        // getInstance
    }
}
console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!
const instance = new WithProperty();
instance.myProperty(); // OK?
class WithProperty2 {
    myProperty; // call signature
    constructor() {
        this.myProperty = () => {
            console.log("Hello, this is myProperty!");
        };
    }
}
const instance2 = new WithProperty2();
instance2.myProperty();
class Animal {
    name;
    mouse;
    constructor(name, mouse = "x") {
        this.name = name;
        this.mouse = mouse;
        this.mouse = mouse;
    }
    feed(food) {
        this.mouse = food;
    }
}
