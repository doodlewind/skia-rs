const { promises } = require('fs')
const { join } = require('path')

const { createCanvas, Image } = require('../index')

async function main() {
  const file = await promises.readFile(join(__dirname, 'tiger.png'))

  const image = new Image()
  image.src = file

  const w = image.width
  const h = image.height

  // create a canvas of the same size as the image
  const canvas = createCanvas(w, h)
  const ctx = canvas.getContext('2d')

  ctx.shadowColor = 'rgba(0, 255, 0, .8)'
  ctx.shadowBlur = 8
  ctx.shadowOffsetX = 50
  ctx.shadowOffsetY = 50
  // ctx.drawImage(image, 0, 0, w / 2, h / 2)
  ctx.fillRect(0, 0, 200, 200)

  // fill the canvas with the image
  // ctx.drawImage(image, 0, 0)

  // fill a quarter of the canvas with image
  // ctx.drawImage(image, 0, 0, w / 2, h / 2)

  // fill the canvas with a quarter of the image
  // ctx.drawImage(image, 0, 0, w / 2, h / 2, 0, 0, w, h)

  const output = await canvas.png()
  await promises.writeFile(join(__dirname, 'tiger-tmp.png'), output)
}

main()
