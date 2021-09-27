let pacman = {
  x: 1,
  y: 1
}

let score = 0

let map = [
  [1, 1, 1, 1, 1, 1],
  [1, 5, 2, 2, 2, 1],
  [1, 2, 2, 2, 2, 1],
  [1, 1, 1, 1, 1, 1]
]

var board = document.getElementById('pacman-world')

var button = document.getElementById('play').addEventListener('click', playGame)

function playGame() {
  let remove = document.getElementById('play').style.display = 'none'
  drawWorld()
}

function drawWorld() {
  board.innerHTML = ''
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === 1) {
        board.innerHTML += "<div class='wall'></div>"
      }
      else if (map[i][j] === 2) {
        board.innerHTML += "<div class='coin'></div>"
      }
      else if (map[i][j] === 3) {
        board.innerHTML += "<div class='ground'></div>"
      }
      else if (map[i][j] === 4) {
        board.innerHTML += "<div class='ghost'></div>"
      }
      else if (map[i][j] === 5) {
        board.innerHTML += "<div class='pacman'></div>"
      }
    }
    board.innerHTML += '<br>'
  }
}
