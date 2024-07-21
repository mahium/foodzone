function signup()
{
    let username=document.querySelector("#user").value
    let password=document.querySelector("#pass").value


    window.localStorage.setItem("user",username)
    window.localStorage.setItem("pass",password)

    alert("user successfully resistered")


    window.location.assign("./login.html")
}