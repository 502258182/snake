// 创建一个Food类
export default class Food {
  // 食物元素
  element: HTMLElement
  constructor() {
    this.element = document.querySelector('.food')!
  }
  // 获取食物的坐标
  get X() {
    return this.element.offsetLeft
  }
  get Y() {
    return this.element.offsetTop
  }
  // 改变食物位置
  change() {
    let x = Math.round(Math.random() * 29) * 10
    let y = Math.round(Math.random() * 29) * 10
    this.element.style.left = x + 'px'
    this.element.style.top = y + 'px'
  }
}
