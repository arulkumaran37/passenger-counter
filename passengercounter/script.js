// let countEl = Document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

console.log(saveEl)

function increment(){
    count = count + 1
    console.log(count)
    document.getElementById("count-el").textContent = count

}
increment()
function decrement(){
    count = count - 1
    console.log(count)
    document.getElementById("count-el").textContent = count

}
decrement()
function save(){
    let countstr = count + " - "
    saveEl.textContent += countstr
    document.getElementById("count-el").textContent = 0
}
save()

// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count



// let welcomeEl = document.getElementById("welcome-el")

// let greetings = "Welcome back."
// let name = "Sky, "

// console.log(greetings + name + welcomeEl)

// welcomeEl.innerText = name + greetings 


// welcomeEl.innerText += "$"















