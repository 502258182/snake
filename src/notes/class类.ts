// class 类

class Person {
  // 定义实例属性
  name: string = '小明'
  // 在属性前使用 static 关键字可以定义类属性(静态属性)
  static age: number = 18
  // 属性前加 readonly 就会变成只读属性
  readonly sex: string = 'male'
  // 实例方法
  sayHello() {
    console.log('Hello')
  }
  // 类方法
  static sayHi() {
    console.log('hi')
  }
}

let person = new Person()

console.log(person)

// person.name 实例属性需要通过创建实例来访问

// Person.age 类属性通过类直接访问

// person.sex = 'female' 只读属性不能修改

// person.sayHi() 属性“sayHi”在类型“Person”上不存在。你的意思是改为访问静态成员“Person.sayHi”吗?

class Dog {
  // 构造函数 会在创建对象时调用
  name: string
  age: number
  constructor(name: string, age: number) {
    // 在实例方法中, this就表示当前的实例
    this.name = name
    this.age = age
  }
  bark() {
    // 在方法中可以通过this来表示当前调用方法的对象
    console.log(this)
  }
}

const dog1 = new Dog('旺财', 18) // 这时候 this 指向 dog1

console.log(dog1)

// 继承  extends

// 以 abstract 开头类 是抽象类
// 抽象类只能用来被继承,不能用来创建对象

abstract class Animal {
  // 构造函数 会在创建对象时调用
  name: string
  age: number
  constructor(name: string, age: number) {
    // 在实例方法中, this就表示当前的实例
    this.name = name
    this.age = age
  }
  // 以 abstract 开头的方法叫 抽象方法 没有方法体也就是后面的花括号
  // 抽象方法只能定义在抽象类中 子类必须对抽象方法进行重写
  abstract bark(): void

  eat() {
    console.log('吃')
  }
}

// 使Cat类继承Animal类
// 使用继承后,子类将会拥有父类的所有方法和属性
// 我们可以将 多个类共有的方法属性写在一个父类中
class Cat extends Animal {
  // 可以自己给子类加属性和方法
  // 如果给子类加属性 必须使用super将父类的值传进去
  sex: string
  constructor(name: string, age: number, sex: string) {
    // 在子类写了构造函数,就必须在子类的构造函数中对父类的构造函数进行调用
    super(name, age) // 调用父类的构造函数
    this.sex = sex
  }
  run() {
    console.log('跑')
  }
  // 如果再子类中加入和父类中相同的方法 则子类的方法会覆盖父类的方法 这种形式叫方法的重写
  bark(): void {
    console.log('喵喵喵')
  }
  eat(): void {
    // super就表示当前类的父类
    super.eat()
  }
}

const cat1 = new Cat('mimi', 2, 'male')
// const an = new Animal() 无法创建抽象类的实例。
cat1.bark()

// class中的修饰符

class SomeThing {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
