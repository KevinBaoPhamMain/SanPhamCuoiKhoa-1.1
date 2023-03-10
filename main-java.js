let btn = document.getElementById('dangXuat')
let btn2 = document.getElementById('random')
let gacha = Math.floor(Math.random() * 100) + 1
let timeRepeat = 0
let userName = document.getElementById('userName')
let userCash = document.getElementById('userCash')
let imageReplace = document.getElementById('reaction')
let cash = localStorage.currentUserCash

if(localStorage.users){
    
    let users = localStorage.users
    let JSONUsers = JSON.parse(users)



    userName.innerHTML = localStorage.currentUser
    userCash.innerHTML = cash

    let emailData = localStorage.currentUserEmail

    btn.onclick = function(){
        localStorage.setItem("currentUser", 'none')
        localStorage.setItem("currentUserCash", 'none')
        localStorage.setItem("currentUserEmail", 'none')
        localStorage.setItem("currentUserPass", 'none')
        location.replace('index.html')
    }
    
    btn2.onclick = function(){
        let cash = localStorage.currentUserCash
        cash = parseInt(cash)
        let numberShown = document.getElementById('randomNum')
        
        gacha = Math.floor(Math.random() * 100) + 1
        numberShown.innerHTML = gacha
        cash += -50

        //===========================================================================//

        if(gacha < 20){
            cash += 0
            imageReplace.src = `Losing.png`
        }
        else if(gacha < 50){
            cash += 25
            imageReplace.src = `meh.png`
        }
        else if(gacha < 60){
            cash += 50
            imageReplace.src = `Noice.png`
        }
        else if(gacha < 80){
            cash += 75
            imageReplace.src = `GoodJob.png`
        }
        else if(gacha < 100){
            cash += 100
            imageReplace.src = `LuckyBoi.png`
        }
        else if(gacha == 100){
            cash += 500
            imageReplace.src = `Godluck.png`
        }
        
        //===========================================================================//
        
        userCash.innerHTML = cash
        let currentUserName = localStorage.currentUser
        let passData = localStorage.currentUserPass
        let check = JSONUsers.map(i => i.email == emailData && i.pass == passData)
        let checkLo = check.indexOf(true)
        JSONUsers.push({
            name: currentUserName,
            email: emailData,
            pass: passData,
            money: cash
        })
        delete JSONUsers[checkLo]
        JSONUsers.splice(checkLo, 1)
        let json = JSON.stringify(JSONUsers)
        localStorage.setItem("users", json)
        let cashJson = JSON.stringify(cash)
        localStorage.currentUserCash = cashJson
    }

}
else{
    location.replace('index.html')
}

