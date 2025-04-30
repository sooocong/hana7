class WithProperty {
  myProperty!: () => void; // Type 정의

  initialize() {
    // getInstance
  }
}

console.log(new WithProperty().myProperty === new WithProperty().myProperty); // true??? false!
const instance = new WithProperty();
instance.myProperty(); // OK?

class WithProperty2 {
  myProperty: () => void; // call signature
  constructor() {
    this.myProperty = () => {
      console.log("Hello, this is myProperty!");
    };
  }
}

const instance2 = new WithProperty2();
instance2.myProperty();

class Animal {
  constructor(public name: string, public mouse: string = "x") {
    this.mouse = mouse;
  }
  feed(food: string) {
    this.mouse = food;
  }
}
