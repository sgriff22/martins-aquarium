import { getLocations } from "../database.js"

export const locationList = () => {
    // Invoke the function that you imported from the database module
    const locations = getLocations()

    // Start building a string filled with HTML syntax
    let htmlString = `<article class="locationsList"><h2 class="locationsHeader">Harvesting Locations</h2>`

    // Create HTNL representations of each location here
    for (const location of locations) {

        // Why is there a backtick used for this string? For string notation
        htmlString += `<section class="location-card">
            <div><img  class="location-image" src="${location.image}" /></div>
            <div class="location-name">${location.name}</div>
            <div class="location-country">${location.country}</div>
        </section>
`
    }
    htmlString += `</article>`
    
    return htmlString
  
}