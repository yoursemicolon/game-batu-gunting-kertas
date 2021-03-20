const batu = 0
const kertas = 1
const gunting = 2

let playerScore = 0
let enemyScore = 0

let enemySign = 0

let round = 1

function handleSigns(playerSign) {
    enemySign = Math.floor(Math.random() * 3)

    compareSigns(playerSign)
    round++
    
    translateEnemySign()
    printScore()
    printRound()
    checkGameOver(6)
}

function compareSigns(playerSign) {
    if(playerSign === kertas && enemySign === batu) {
        playerScore++
        alert("Selamat Kamu Menang!")
   } else if(playerSign === batu && enemySign === gunting){
        playerScore++
        alert("Selamat Kamu Menang!")
   } else if(playerSign === gunting && enemySign === kertas){
        playerScore++
        alert("Selamat Kamu Menang!")
   } else if(playerSign === enemySign){
        alert("Draw!")
   } else {
        enemyScore++
        alert("Kamu kalah!")
    }
}

function translateEnemySign() {
    if(enemySign == 0) {
        alert('Pilihan musuh adalah batu')
    } else if(enemySign == 1) {
        alert('Pilihan musuh adalah kertas')
    } else {
        alert('Pilihan musuh adalah gunting')
    }
}

function printScore() {
    
    // getElementById mengambil element berdasarkan id pada html

    const playerScoreElement = document.getElementById('playerScore')
    playerScoreElement.innerHTML = playerScore

    const enemyScoreElement = document.getElementById('enemyScore')
    enemyScoreElement.innerHTML = enemyScore
}

function printRound() {
    const roundElement = document.getElementById('round')
    roundElement.innerHTML = round
}

function checkGameOver(manyRound) {
    if(round == manyRound) {
        alert('Game selesai!')
        showFinalScore()
        reset()
    }
} 

function showFinalScore() {
    if(playerScore > enemyScore) {
        alert("Hasil akhir pertandingan adalah " + playerScore + "-" + enemyScore + " Selamat Anda menang!")
    } else if(playerScore < enemyScore) {
        alert("Hasil akhir pertandingan adalah " + playerScore + "-" + enemyScore + " Jangan sedih ya, coba lagi :)")
    } else {
        alert("Hasil akhir pertandingan adalah " + playerScore + "-" + enemyScore + " Masih seri nih.")
    }
}

function reset() {
    playerScore = 0
    enemyScore = 0
    round = 1

    printScore()
    printRound()
}