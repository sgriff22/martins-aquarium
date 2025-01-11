// Import the function that returns a copy of the fish array
import { getFish } from "../database.js"

export const fishList = () => {
    // Invoke the function that you imported from the database module
    const fishes = getFish()

    const holy = mostHolyFish()
    const soldier = soldierFish()
    const leftover = nonHolyFish()
    const reorderFish = holy.concat(soldier, leftover);

    // Start building a string filled with HTML syntax
    let htmlString = `<article class="fishList"><h2 class="fishHeader">Fish</h2>`


    // Create HTML representations of each fish here
    for (const fish of reorderFish) {

        // Why is there a backtick used for this string? For string notation
        htmlString += `<section class="fish-card">
            <div><img  class="fish__image" src="${fish.image}" /></div>
            <div class="fish__name">${fish.name}</div>
            <div class="fish__species">${fish.species}</div>
            <div class="fish__length">${fish.length} inches</div>
            <div class="fish__location">${fish.location}</div>
            <div class="fish__diet">${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`
    
    return htmlString
  
}

//HOLY FISH
export const mostHolyFish = () => {
    // 3, 6, 9, 12, etc... fish
    let holyFish = []
    const fishes = getFish()

    for (const holy of fishes) {
        if (holy.length % 3 === 0) {
            holyFish.push(holy)
        }
    }
    return holyFish
    
}

//SOLDIER FISH
export const soldierFish = () => {
    // 5, 10, 15, 20, 25, etc... fish
    let soldierFish = []
    const fishes = getFish()

    for (const soldier of fishes) {
        if (soldier.length % 5 === 0 && soldier.length % 3 !== 0) {
            soldierFish.push(soldier)
        }
    }

    return soldierFish
}

//LEFTOVER FISH
export const nonHolyFish = () => {
    // Any fish not a multiple of 3 or 5
    let leftoverFish = []
    const fishes = getFish()

    for (const leftover of fishes) {
        if (leftover.length % 3 !== 0 && leftover.length % 5 !== 0) {
            leftoverFish.push(leftover)
        }
    }

    return leftoverFish
}

