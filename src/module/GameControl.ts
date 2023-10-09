import Food from './Food'
import ScorePane from './ScorePane'
import Snake from './Snake'

export default class GamgControl {
  food: Food
  scorePane: ScorePane
  snake: Snake
  direction = ''
  constructor() {
    this.food = new Food()
    this.scorePane = new ScorePane()
    this.snake = new Snake()
  }
  // 初始化游戏 也就是开始游戏的方法

  init() {
    document.addEventListener('keydown', this.keydownHandle)
  }
  keydownHandle = (e: KeyboardEvent) => {
    this.direction = e.key
  }
}
