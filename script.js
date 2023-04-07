let htmlElement = ''

for (let i = 0; i < 1000; i++) {
  htmlElement += `<div class = "circle" style = background-color:${'#' + (((1 << 24) * Math.random()) | 0).toString(16).padStart(6, '0')}>${i + 1}</div>`
}

const container = document.querySelector('.container')
container.innerHTML = htmlElement

console.log(document.body)
