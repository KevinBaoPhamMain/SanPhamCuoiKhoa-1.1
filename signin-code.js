let btn = document.getElementById('btn-login')
let currentUserName = ""
let moneyData = 0
let emailUserData = ""
btn.onclick = function(){
    let emailData = document.getElementById('email').value
    let passData = document.getElementById('pass').value

    if(localStorage.users){
        let users = JSON.parse(localStorage.users)

        let check = users.map(i => i.email == emailData && i.pass == passData)
        let checkLo = check.indexOf(true)
        console.log(check)
        if(checkLo != -1){
            alert("sign in is complete")
            let usersNotJSON = localStorage.users
            let currentUser = localStorage.currentUser
            let currentUserCash = localStorage.currentUserCash
            let currentUserEmail = localStorage.currentUserEmail
            console.log("seperate")
            console.log(usersNotJSON)
            let varTaken = users[checkLo]
            currentUserName = varTaken.name
            console.log(varTaken.name)
            console.log(varTaken)
            moneyData = varTaken.money
            emailUserData = varTaken.email
            localStorage.setItem("currentUser", currentUserName)
            localStorage.setItem("currentUserCash", moneyData)
            localStorage.setItem("currentUserEmail", emailUserData)
            localStorage.setItem("currentUserPass", passData)
            location.replace('main.html')
        }
        else{
            alert("check your spelling in each section please")
        }
    }else{
        alert("user not exist!")
    }
}