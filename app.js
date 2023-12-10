
let naruto = {
    name: "Naruto ",
    sequences: {
        
        demonStance: "https://i.gifer.com/4M4x.gif",
        powerUp: "https://i.gifer.com/origin/4b/4b55a5c5f95757c8d56c089051fa21f7_w200.gif",
        hadoken: "https://www.icegif.com/wp-content/uploads/naruto-icegif-2.gif",
        shadowCombo: "https://i.gifer.com/YAS0.gif",
        finalFlash: "https://i.gifer.com/embedded/download/79eC.gif",
        krillinSlice: "https://i.gifer.com/YAS0.gif"
    },
    training:{
        sasuke: "https://phoneky.co.uk/thumbs/screensavers/down/anime/naruto_n96hmzz9.gif",
        saske2: "https://i.gifer.com/embedded/download/SKTt.gif",
        luffy: "https://anisearchh.vercel.app/static/media/Naruto.e442842b6612e86a8daf.gif",
        goku: "https://pa1.aminoapps.com/6179/a3f09416dbb723bccd41841002181ff62fe62e64_00.gif",
        fightMajor: "https://openseauserdata.com/files/7cf0fd9c161fe42a044c2eac43c44f6d.gif",
        fightMajor2:"https://phoneky.co.uk/thumbs/screensavers/down/anime/naruto_m8qaadtu.gif",
    },
    sleep: 'https://64.media.tumblr.com/73de5c728763ba0fc6026cfabd6e0d3b/tumblr_pmh6keMwH41xyooiho1_400.gif',
    eat: "https://files.cults3d.com/uploaders/29243136/illustration-file/80ef313c-d19d-4676-8c46-6effe2e9ee25/ZBrush-Movie3.gif"

}
let trainCounter = -1
let moveCounter = -1
let workout = [naruto.training.sasuke,naruto.training.saske2,naruto.training.luffy,naruto.training.goku,naruto.training.fightMajor,naruto.training.fightMajor2]

let moves = [naruto.sequences.powerUp,naruto.sequences.finalFlash,naruto.sequences.hadoken,naruto.sequences.shadowCombo,naruto.sequences.krillinSlice]

let scrnImg = document.createElement('img')
let scrnImg2 = document.createElement('img')
let scrnImg3 = document.createElement('img')
scrnImg.setAttribute('class',"screenImg")
scrnImg2.setAttribute('class',"screenImg2")
scrnImg3.setAttribute('class',"screenImg3")
let screen = document.querySelector('.screen')
let topper = document.querySelector('.screenTitle')

const toggleSleep = () => {
    screen.innerHTML=""
    scrnImg.setAttribute('src', naruto.sleep)
    screen.append(scrnImg)
    topper.innerHTML=" zzZzZzzzZZ"
}
const startTraining = () => {
    screen.innerHTML=""
    trainCounter++
    topper.innerHTML="Training Simulation "
    scrnImg.setAttribute('src', workout[trainCounter])
    screen.append(scrnImg)
}

const generateHealth = () => {
    screen.innerHTML=""
    scrnImg2.setAttribute('src', naruto.sequences.demonStance)
    screen.append(scrnImg2)
    topper.innerHTML=" Resotring Health ..."
}
const displayMoves = () => {
    screen.innerHTML=""
    moveCounter++
    topper.innerHTML="Display Available Moves"
    scrnImg.setAttribute('src', moves[moveCounter])
    screen.append(scrnImg)
}
const toggleMeal = () => {
    screen.innerHTML=""
    scrnImg3.setAttribute('src', naruto.eat)
    screen.append(scrnImg3)
    topper.innerHTML=" Currently Eating. All Player Stats Regenrating..."
}