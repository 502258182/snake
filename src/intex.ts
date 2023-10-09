import Food from './Food'
import ScorePane from './ScorePane'
import './style/index.less'

const food = new Food()
// 每次调用change方法都可以改变食物的位置
food.change()

let score = new ScorePane(20, 3)

for (let index = 0; index < 15; index++) {
  score.addScore()
}
