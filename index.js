const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let passwordOne = document.getElementById("first")
let passwordTwo = document.getElementById("second")

generateButton.addEventListener("click",function() {
    let firstPass = []
    let secondPass = []
    let passLength = parseInt(document.getElementById("pass-length").value)
    if (passLength >= 4 && passLength <= 15) {
        //Generate the first option
        for (let i=0; i < passLength; i++) {
            let ch = Math.floor(Math.random() * characters.length)
            firstPass.push(characters[ch])
        }
        //Generate the second option
        for (let i=0; i < passLength; i++) {
            let ch = Math.floor(Math.random() * characters.length)
            secondPass.push(characters[ch])
        }
        passwordOne.textContent = firstPass.join('')
        passwordTwo.textContent = secondPass.join('')
    }

}) 

function copyTextOne() {
    let textOne = document.getElementById("first").innerText
    navigator.clipboard.writeText(textOne).then(() => {
        alert("Text copied to clipboard!");
    })
}

function copyTextTwo() {
    let textTwo = document.getElementById("second").innerText
    navigator.clipboard.writeText(textTwo).then(() => {
        alert("Text copied to clipboard!");
    })
}



