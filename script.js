let password_box=document.getElementById('Password')
let length=12

let upper="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lower="abcdefghijklmnopqrstuvwxyz"
let special="/*-+/.!"
let number="1234567890"
let all=upper+lower+special+number

function createPassword()
{
   let password="";
   password+=upper[Math.floor(Math.random()*upper.length)]
   password+=lower[Math.floor(Math.random()*lower.length)]
   password+=number[Math.floor(Math.random()*number.length)]
   password+=special[Math.floor(Math.random()*special.length)]

   while(length>password.length)
   {
    password+=all[Math.floor(Math.random()*all.length)]
   }
   password_box.value=password
}


function copyPassword()
{
    password_box.select()
    document.execCommand("copy")
}