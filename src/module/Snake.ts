export default class Snake {
  // 蛇的整体
  snake: HTMLElement
  // 蛇头
  head: HTMLElement
  // 蛇身
  bodies: HTMLCollection

  constructor() {
    this.snake = document.querySelector('.snake')!
    this.head = document.querySelector('.snake > div')!
    this.bodies = this.snake.getElementsByTagName('div')
  }

  // 获取蛇头坐标
  get X() {
    return this.head.offsetLeft
  }
  // 获取蛇头坐标
  get Y() {
    return this.head.offsetTop
  }

  // 设置蛇头坐标
  set X(value: number) {
    // 如果蛇的X轴坐标没有变化就不去改变位置
    if (this.X === value) {
      return
    }

    this.moveBody()

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了 Game Over')
    }

    this.head.style.left = value + 'px'
    this.eatSelf()
  }
  // 设置蛇头坐标
  set Y(value: number) {
    // 如果蛇的X轴坐标没有变化就不去改变位置
    if (this.Y === value) {
      return
    }

    this.moveBody()

    if (value < 0 || value > 290) {
      throw new Error('蛇撞墙了 Game Over')
    }
    this.head.style.top = value + 'px'
    this.eatSelf()
  }

  // 给蛇添加长度
  // insertAdjacentHTML() 是将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定位置。
  // 第一个参数代表元素插入的位置 第二个参数代表插入的元素类型
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }

  moveBody() {
    for (let i = this.bodies.length - 1; i > 0; i--) {
      let lastBody = this.bodies[i - 1] as HTMLElement
      let thisBody = this.bodies[i] as HTMLElement
      let X = lastBody.offsetLeft
      let Y = lastBody.offsetTop
      thisBody.style.left = X + 'px'
      thisBody.style.top = Y + 'px'
    }
  }

  eatSelf() {
    for (let i = 1; i < this.bodies.length; i++) {
      let thisBody = this.bodies[i] as HTMLElement
      let X = thisBody.offsetLeft
      let Y = thisBody.offsetTop
      if (X === this.X && Y === this.Y) {
        throw new Error('撞到自己了')
      }
    }
  }
}
