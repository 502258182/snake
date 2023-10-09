export default class ScorePane {
  // 分数
  score = 0
  // 等级
  level = 1
  // 分数元素
  scoreEle: HTMLElement
  // 等级元素
  levelEle: HTMLElement
  // 最大等级
  maxLevel: number
  upScore: number

  constructor(maxLevel: number = 10, upScore: number = 10) {
    this.scoreEle = document.querySelector('.score')!
    this.levelEle = document.querySelector('.level')!
    this.maxLevel = maxLevel
    this.upScore = upScore
  }

  addScore() {
    // 分数增加
    this.score++
    // 将分数赋值给新的元素
    this.scoreEle.innerHTML = this.score + ''
    // 当分数增加到设定值时升级
    if (this.score % this.upScore === 0) {
      this.levelUp()
    }
  }

  levelUp() {
    if (this.level < this.maxLevel) {
      this.level++
      this.levelEle.innerHTML = this.level + ''
    }
  }
}
