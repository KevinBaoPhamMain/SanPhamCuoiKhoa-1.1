let btn = document.getElementById('btn-register')
btn.onclick = function(){
    let emailData = document.getElementById('email').value
    let nameData = document.getElementById('name').value
    let passData = document.getElementById('pass').value
    
    let moneyStuff = 200

    let moneyData = 0
    let currentUserName = ""
    let emailUserData = ""
    //alert(name + " " + email + " " + pass)
    if(nameData.length == 0){
        alert("GIVE ME THE NAME YOU ACTUAL MANIAC")
    }
    else{
        if(emailData.length == 0){
            alert("GIVE ME THE EMAIL YOU ACTUAL MANIAC")
        }else{
            if(passData.length == 0){
                alert("your password cannot be blank")
            }else{
                if(localStorage.users){
                    let userList = JSON.parse(localStorage.users)
                    let userLength = userList.length
                    let users = JSON.parse(localStorage.users)
                    let check = users.map(i => i.email == emailData)
                    if(check[0] == true){
                        alert("Already exist account")
                    }else{
                        users.push({
                            name: nameData,
                            email: emailData,
                            pass: passData,
                            money: moneyStuff
                        })
                        let json = JSON.stringify(users)
                        localStorage.setItem("users", json)
                        let userListTwo = JSON.parse(localStorage.users)
                        userLength = userListTwo.length
                        if(userLength > 1){
                            moneyData = userListTwo[userLength-1].money
                            currentUserName = nameData
                            emailUserData = emailData
                        }else{
                            moneyData = userListTwo[0].money
                            currentUserName = nameData
                            emailUserData = emailData
                        }
                        localStorage.setItem("currentUser", currentUserName)
                        localStorage.setItem("currentUserCash", moneyData)
                        localStorage.setItem("currentUserEmail", emailUserData)
                        localStorage.setItem("currentUserPass", passData)
                        location.replace('main.html')
                        
                    }
                }
                else{
                    localStorage.setItem("users", JSON.stringify(
                        [
                            {
                                name: nameData,
                                email: emailData,
                                pass: passData,
                                money: moneyStuff
                            }
                        ]
                    ))
                    let userListTwo = JSON.parse(localStorage.users)
                    userLength = userListTwo.length
                    if(userLength > 1){
                        moneyData = userListTwo[userLength-1].money
                        currentUserName = nameData
                        emailUserData = emailData
                    }else{
                        moneyData = userListTwo[0].money
                        currentUserName = nameData
                        emailUserData = emailData
                    }
                    localStorage.setItem("currentUser", currentUserName)
                    localStorage.setItem("currentUserCash", moneyData)
                    localStorage.setItem("currentUserEmail", emailUserData)
                    localStorage.setItem("currentUserPass", passData)
                    location.replace('main.html')
                }
                    
                
            }
        }
        
    }
}