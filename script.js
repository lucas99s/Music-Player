let musicName = document.getElementById('musicName')
let artistName = document.getElementById('artistName')
let currentMusic = 0
let isPlaying = false

//button play
let buttonPlay = document.getElementById('buttonPlay')


//algum cover

let albumCover = document.getElementById('albumCover')
// albumCover.src = 'img/bc43b898121955.5ed5361c7837c.jpg'


const musics = [
    //Name of the music, Artist/Band, Music file, Image
    ['Royalty', 'Maestro Chives, Egzod, Neoni', new Audio('music/Royalty.mp3'), 'img/bc43b898121955.5ed5361c7837c.jpg'],
    ['With You', 'OBLVYN, Riell', new Audio('music/With You.mp3'), 'img/birds-g979ac3c6f_640.jpg'],
    ['Feelings', 'Azertion, Diviners', new Audio('music/Feelings.mp3'), 'img/easter-tree-g39f28dd82_640.jpg'],
    ['Make Me Move', 'Culture Code (feat. KARRA)', new Audio('music/Make Me Move.mp3'), 'img/lama-ga92b8306a_640.jpg']
]

function play() {
    if(isPlaying == true){
        musics[currentMusic][2].pause()
        buttonPlay.src = "img/botao-play.png"
        isPlaying = false
    } else {
        musics[currentMusic][2].play()
        buttonPlay.src = "img/pausa.png"
        isPlaying = true
    }
}

function control(type) {
    musics[currentMusic][2].pause()
    musics[currentMusic][2].currentTime = 0
    
    if(type == 'next') {
        
        if(musics.length <= currentMusic + 1) {
            currentMusic = 0
        } else {
            currentMusic += 1
        }
        musicNumberList()
        albumCover.src = musics[currentMusic][3]
        musics[currentMusic][2].play()
        musicName.innerHTML = musics[currentMusic][0]
        artistName.innerHTML = musics[currentMusic][1]
        buttonPlay.src = "img/pausa.png"

    } else if (type == 'previous') {

        if(musics.length > (currentMusic + musics.length - 1)) {
            currentMusic = musics.length - 1 
        } else {
            currentMusic -= 1
        }
        musicNumberList()
        albumCover.src = musics[currentMusic][3]
        musics[currentMusic][2].play()
        musicName.innerHTML = musics[currentMusic][0]
        artistName.innerHTML = musics[currentMusic][1]
        buttonPlay.src = "img/pausa.png"
    }
    //console.log('music.length ' + (musics.length - 1) + ' // currentMusic ' + currentMusic )
    isPlaying = true
}

function list() {
    let line = 0 
    let table = document.getElementById('listTable')
    
    for(i = 0; i < musics.length; i++) {
        let newLine = table.insertRow(line)

        let cell1 = newLine.insertCell(0)
        let cell2 = newLine.insertCell(1)
        // let cell3 = newLine.insertCell(2)
        // let cell4 = newLine.insertCell(3)

        cell1.innerHTML = musics[i][0]
        cell2.innerHTML = musics[i][1]
        // cell3.innerHTML = musics[i][2]
        // cell4.innerHTML = 

        line++
    }
}

//Music number head
let musicNumber = document.getElementById('musicNumber')

function musicNumberList() {
    musicNumber.innerHTML = `Music ${currentMusic + 1} of ${musics.length}`
}

function load() {
    buttonPlay.src = 'img/botao-play.png'
    albumCover.src = musics[0][3]
    musicName.innerHTML = musics[0][0]
    artistName.innerHTML = musics[0][1]
    musicNumberList()
    list()
}