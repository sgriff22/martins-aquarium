//import { getFish } from './database.js'
// Import the FishList function from the correct module
import { fishList } from './fish/fish-list.js'
import { tipList } from './tips/tips-list.js'
import { locationList } from './locations/locations-list.js'

// const allFish = getFish()

// for (const fish of allFish) {
//     console.log(fish)
// }

const allFishList = fishList()
const allTips = tipList()
const allLocations = locationList()


//Select the HTML ID of where I want the fish cards to go
const fishParentHTMLElement = document.querySelector("#fishListContainer")

//Displays the fish cards in HTML
fishParentHTMLElement.innerHTML = allFishList

// //Select the HTML ID of where I want the tips to go
const tipsParentHTMLElement = document.querySelector("#waterQuailty")

// // //Displays the tips in HTML
tipsParentHTMLElement.innerHTML = allTips

// //Select the HTML ID of where I want the locations to go
const locationParentHTMLElement = document.querySelector("#locationsContainer")

// // //Displays the locations in HTML
locationParentHTMLElement.innerHTML = allLocations

