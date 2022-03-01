console.log("js linked!")


const targetBalance = 1000;

const landscaper = {
    name: "",
    bal: 0,
    salary: 1,
    currentUpgrade: "your teeth",
    promptMsg: "Using just your teeth, you can spend the day cutting lawns and make $1. You can do this as much as you want."
}

const items =  [
    {
    price: 5,
    name: "Rusty Scissors",
    salary: 5,
    promptMsg: "Using the rusty scissors, you can spend the day cutting lawns and make $5. You can do this as much as you want."
    },
    {
        price: 25,
        name: "old-timey push lawnmower",
        salary: 50,
        promptMsg: "Using the old-timey push lawnmower, you can spend the day cutting lawns and make $50. You can do this as much as you want."  
    },
    {
    price: 250,
    name: "fancy battery-powered lawnmower",
    salary: 100,
    promptMsg: "Using the the fancy battery-powered lawnmower, you can spend the day cutting lawns and make $100. You can do this as much as you want."
    },
    {
    price: 500,
    name: "hire a team of starving students",
    salary: 250,
    promptMsg: "Using the the team of starving students, you can spend the day cutting lawns and make $250. You can do this as much as you want."
    },
    {
        price: targetBalance +1
    }
]

//const prompt = require('prompt-sync')();

const cutGrass = () =>{
    yest = prompt(landscaper.promptMsg, "yes: mow or no: End the day");
    if(yest === "Y" || yest === "y" || yest === "yes"){
        landscaper.bal+=landscaper.salary
        if(landscaper.bal >= items[0].price)
            alert(`You gained ${landscaper.salary} dollar(s). Your balance: ${landscaper.bal}\nUpgrade: ${items[0].name} Avaiable.\nEnd the day to purchase`)
        else{
            alert(`You gained ${landscaper.salary} dollar(s). Your balance: ${landscaper.bal}`)
        }
        console.log(`You gained ${landscaper.salary} dollar(s). Your balance: ${landscaper.bal}`)
        }
    else if(yest === "N" || yest === "n" || yest === "no"){
        alert(`Your balance is $${landscaper.bal}, You Finished for the day.`)
        finishedForDay = true
    }
    else if(yest === "end"){
        alert(`Your balance is $${landscaper.bal}, You gave up on mowing forever.`)
        process.end()
    }
    else {
        alert(`Invalid Option: You must obtain ${targetBalance} dollar(s) to win. You are at ${landscaper.bal}\n To exit, type: end`)
        }
} 

const upgrade = () =>{
    let vaildChoice = false
    if(landscaper.bal >= items[0].price){
        while(!vaildChoice){    
            yest = prompt(`Congrats you can buy ${items[0].name} for ${items[0].price} dollar(s)`,`yes: buy or no: skip for now`)
            if(yest === "Y" || yest === "y" || yest === "yes"){
                landscaper.bal-=items[0].price
                alert(`You paid ${items[0].price} dollars for ${items[0].name}. Your balance is now ${landscaper.bal}`)
                console.log(`You paid ${items[0].price} dollars for ${items[0].name}. Your balance is now ${landscaper.bal} dollars`)
                landscaper.promptMsg = items[0].promptMsg
                landscaper.salary = items[0].salary
                landscaper.currentUpgrade = items[0].name
                items.shift()
                vaildChoice = true
            }
            else if(yest === "N" || yest === "n" || yest === "no"){
                console.log(`refused ${items[0].name}`)
                vaildChoice = true
            }
            else{
                alert(`Invalid Option`)
                vaildChoice = false
            }
        }
    } 
}

function playGame(){
    let finishedForDay = false
    alert("You are starting a landscaping business, but all you have are your teeth.")
    alert(`You must obtain ${targetBalance} dollars to win`)
    let yest = prompt("What is your name?", "Enter here");
    landscaper.name = yest
    console.log(`Your name: ${landscaper.name}`)
    while(landscaper.bal < targetBalance){
        while(!finishedForDay && landscaper.bal < targetBalance){
            cutGrass()
            if(finishedForDay && landscaper.bal < targetBalance){
                console.log(`Upgrade: ${items[0].name} Avaiable`)
                upgrade()
            }
            finishedForDay = false
        }
    }
    alert(`You win, ${landscaper.name}! Your end balance was: ${landscaper.bal} \nYour last upgrade was ${landscaper.currentUpgrade}`)
}




document.addEventListener("DOMContentLoaded", () =>{
    const nav = document.querySelector(".navs");
    document.querySelector("#buttonNav").addEventListener("click", () =>{
        nav.classList.add("nav--open");
    });

    document.querySelector(".nav-overlay").addEventListener("click", () =>{
        nav.classList.remove("nav--open");
    });

    document.querySelector("#projectOneBtn").addEventListener("click", () =>{
        console.log("running landscaper browswer game")
        //i couldnt figure out how to run the landscaper js file so i copied it directly and added a play game function
        playGame()
    });
});