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
    this.head.style.left = value + 'px'
  }
  // 设置蛇头坐标
  set Y(value: number) {
    this.head.style.top = value + 'px'
  }
  // 给蛇添加长度
  // insertAdjacentHTML() 是将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定位置。
  // 第一个参数代表元素插入的位置 第二个参数代表插入的元素类型
  addBody() {
    this.snake.insertAdjacentHTML('beforeend', '<div></div>')
  }
}
