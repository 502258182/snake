// 描述一个对象的类型
// 类型的声明不能重复

type myType = {
  name: string
  age: number
}

const obj: myType = {
  name: 'xiaoming',
  age: 18
}

// 接口用来定义一个类的结构 用来定义一个类中应该包含那些属性和方法
// 同时接口也可以当成类型声明去使用
// 接口的声明可以重复 重复声明之后会合并
interface myInterface {
  name: string
  age: number
}

interface myInterface {
  gender: string
}
const obj2: myInterface = {
  name: 'xiaozhang',
  age: 19,
  gender: '男'
}

// 接口可以在定义类的时候去显示类的结构
// 接口中所有的属性都不能有实际的值
// 接口只定义对象的结构,不考虑实际的值
interface classInterface {
  name: string
  sayHi(): void
}

// 定义类时, 可以是类去实现一个接口
//

class MyClass implements classInterface {
  name: string
  constructor(name: string) {
    this.name = name
  }
  sayHi(): void {
    throw new Error('Method not implemented.')
  }
}
