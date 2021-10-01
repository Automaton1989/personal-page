let pacman = {
  x: 7,
  y: 5
}

let map = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 1],
  [1, 3, 3, 1, 3, 3, 1, 1, 1, 3, 3, 1, 3, 3, 1],
  [1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
  [1, 3, 3, 3, 3, 3, 3, 5, 3, 3, 3, 3, 3, 3, 1],
  [1, 2, 1, 1, 3, 3, 1, 1, 1, 3, 3, 1, 1, 2, 1],
  [1, 3, 3, 3, 3, 3, 1, 4, 1, 3, 3, 3, 3, 3, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
  [1, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 1],
  [1, 3, 1, 1, 3, 3, 3, 3, 3, 3, 3, 1, 1, 3, 1],
  [1, 3, 3, 1, 3, 3, 1, 1, 1, 3, 3, 1, 3, 3, 1],
  [1, 2, 3, 3, 3, 3, 3, 2, 3, 3, 3, 3, 3, 2, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
]

var score = 0

var board = document.getElementById('pacman-world')

var button = document.getElementById('play').addEventListener('click', playGame)

var newScore = document.getElementById('score').style.display = 'none'

function playGame() {
  let remove = document.getElementById('play').style.display = 'none'
  let result = document.getElementById('result').innerHTML = ' '
  document.getElementById('result').style.display = 'none'
  newScore = document.getElementById('score').style.display = 'block'
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

document.onkeydown = function (event) {
  /* console.log(event) */
  /* MOVE LEFT */
  if (event.keyCode === 37) {
    if (map[pacman.y][pacman.x - 1] === 2) {
      console.log('COIN!')
      newScore = document.getElementById('score').innerHTML = ''
      score += 10
      newScore = document.getElementById('score').innerHTML = score
    }
    if (map[pacman.y][pacman.x - 1] !== 1) {
      map[pacman.y][pacman.x] = 3
      pacman.x = pacman.x - 1
      map[pacman.y][pacman.x] = 5
      drawWorld()
    }
  }
  /* MOVE RIGHT */
  if (event.keyCode === 39) {
    if (map[pacman.y][pacman.x + 1] === 2) {
      console.log('COIN!')
      newScore = document.getElementById('score').innerHTML = ''
      score += 10
      newScore = document.getElementById('score').innerHTML = score
    }
    if (map[pacman.y][pacman.x + 1] !== 1) {
      map[pacman.y][pacman.x] = 3
      pacman.x = pacman.x + 1
      map[pacman.y][pacman.x] = 5
      drawWorld()
    }
  }
  /* MOVE UP */
  if (event.keyCode === 38) {
    if (map[pacman.y - 1][pacman.x] === 2) {
      console.log('COIN!')
      newScore = document.getElementById('score').innerHTML = ''
      score += 10
      newScore = document.getElementById('score').innerHTML = score
    }
    if (map[pacman.y - 1][pacman.x] === 4) {
      document.getElementById('result').style.display = 'block'
      result = document.getElementById('result').innerHTML = 'GAME OVER!\n YOUR SCORE IS: ' + score
      endScore = document.getElementById('score').style.display = 'none'
      board.innerHTML = ' '
      playGame = document.getElementById('play').style.display = 'inline'
      map[pacman.y][pacman.x] = 3
      pacman.x = 7
      pacman.y = 5
    }
    if (map[pacman.y - 1][pacman.x] !== 1) {
      map[pacman.y][pacman.x] = 3
      pacman.y = pacman.y - 1
      map[pacman.y][pacman.x] = 5
      drawWorld()
    }
  }
  /* MOVE DOWN */
  if (event.keyCode === 40) {
    if (map[pacman.y + 1][pacman.x] === 2) {
      console.log('COIN!')
      newScore = document.getElementById('score').innerHTML = ''
      score += 10
      newScore = document.getElementById('score').innerHTML = score
    }
    if (map[pacman.y + 1][pacman.x] !== 1) {
      map[pacman.y][pacman.x] = 3
      pacman.y = pacman.y + 1
      map[pacman.y][pacman.x] = 5
      drawWorld()
    }
  }
}
