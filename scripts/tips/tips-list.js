// Import the function that returns a copy of the fish array
import { getTips } from "../database.js"

export const tipList = () => {
    // Invoke the function that you imported from the database module
    const tips = getTips()

    // Start building a string filled with HTML syntax
    let htmlString = `<h4 class="conditionsHeader">Water Conditions</h4>`


    // Create HTML representations of each fish here
    for (const tip of tips) {

        // Why is there a backtick used for this string? For string notation
        htmlString += `<div class="tips-card">
        <h5 class="tips__waterType">${tip.waterType} Tanks</h5>  
           <ul>
                <li class="tips__salinity">Salinity: ${tip.salinity}</li>
                <li class="tips__temp">Temperature: ${tip.temperature}</li>
                <li class="tips__pH">pH: ${tip.pH}</li>
                <li class="tips__nitrite">Nitrite: ${tip.nitrite}</li>
                <li class="tips__nitrate">Nitrate: ${tip.nitrate}</li>
                <li class="tips__alkalinity">Alkalinity: ${tip.alkalinity}</li>
            </ul>
        </div>
`
    }
    
    return htmlString
  
}