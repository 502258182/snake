import Food from './Food'
import ScorePane from './ScorePane'
import Snake from './Snake'
import _ from 'lodash'

export default class GamgControl {
  food: Food
  scorePane: ScorePane
  snake: Snake
  direction = 'ArrowRight'
  isAlive = true
  constructor() {
    this.food = new Food()
    this.scorePane = new ScorePane()
    this.snake = new Snake()
  }
  // 初始化游戏 也就是开始游戏的方法

  init() {
    document.addEventListener(
      'keydown',
      _.throttle(this.keydownHandle, 300 - (this.scorePane.level - 2) * 30)
    )
    this.move()
  }
  keydownHandle = (e: KeyboardEvent) => {
    console.log(e.key)

    if (this.direction === 'ArrowRight' && e.key === 'ArrowLeft') {
      return
    }
    if (this.direction === 'ArrowLeft' && e.key === 'ArrowRight') {
      return
    }
    if (this.direction === 'ArrowUp' && e.key === 'ArrowDown') {
      return
    }
    if (this.direction === 'ArrowDown' && e.key === 'ArrowUp') {
      return
    }
    this.direction = e.key
  }

  move() {
    // 获取蛇的当前坐标
    let X = this.snake.X
    let Y = this.snake.Y

    switch (this.direction) {
      case 'ArrowUp':
        //上
        Y -= 10
        break
      case 'ArrowRight':
        //右
        X += 10
        break
      case 'ArrowDown':
        //下
        Y += 10
        break
      case 'ArrowLeft':
        //左
        X -= 10
        break
    }

    this.eatFood(X, Y)

    try {
      this.snake.X = X
      this.snake.Y = Y
    } catch (e) {
      alert((e as Error).message)
      this.isAlive = false
    }

    this.isAlive &&
      setTimeout(() => this.move(), 300 - (this.scorePane.level - 2) * 30)
  }

  eatFood(X: number, Y: number) {
    if (X === this.food.X && Y === this.food.Y) {
      // 当蛇吃到食物时
      // 1. 重置食物的位置
      this.food.change()
      // 2. 加分
      this.scorePane.addScore()
      // 3. 增加蛇的长度
      this.snake.addBody()
    }
  }
}
