//create a fish database
const database = {
    fish: [
        {
            image: "images/giant-sea-bass.png",
            name: "Bart",
            species: "Giant Sea Bass",
            length: 30,
            location: "California",
            food: "crustaceans"
        },
        {
            image: "images/Niger-Trigger.png",
            name: "George",
            species: "Niger Triggerfish",
            length: 18,
            location: "Australia",
            food: "crustaceans"
            
        },
        {
            image: "images/suckermouth-catfish.png",
            name: "Sally",
            species: "Suckermouth Catfish",
            length: 10,
            location: "Brazil",
            food: "algea"
        },
        {
            image: "images/jaguar-cichlid.png",
            name: "Dot",
            species: "Jaguar Cichlid",
            length: 16,
            location: "Honduras",
            food: "small fish"
        },
        {
            image: "images/oranda.png",
            name: "Lionhead",
            species: "Oranda",
            length: 12,
            location: "Japan",
            food: "fish flakes"
        }
    ],

    tips: [
        {
            waterType: "Saltwater",
            salinity: "32-35 ppt",
            temperature: "76-84°F",
            pH: "8.1-8.4",
            nitrite: "0-150 ppb",
            nitrate: "0-30 ppm",
            alkalinity: "142-215 ppm"
        },
        {
            waterType: "Freshwater",
            salinity: "0.5 ppt",
            temperature: "72-82°F",
            pH: "6.5-7.5",
            nitrite: "0-10 ppb",
            nitrate: "0-50 ppm",
            alkalinity: "65-135 ppm"
        }
    ],

    location: [
        {
            image: "images/gulf-ca.png",
            name: "Gulf of California",
            country: "USA"
        },
        {
            image: "images/ningaloo-reef.png",
            name: "Ningaloo Reef",
            country: "Australia"
        },
        {
            image: "images/lake-biwa-canal.png",
            name: "Lake Biwa Canal",
            country: "Japan"
        },
        {
            image: "images/guianan.png",
            name: "Guianan Coastal Drainages",
            country: "Brazil"
        },
        {
            image: "images/lake-yojoa.png",
            name: "Lake Yojoa",
            country: "Honduras"
        }
    ]
}

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}

export const getTips = () => {
   return database.tips.map(tips => ({...tips}))
}

export const getLocations = () => {
    return database.location.map(location => ({...location}))
 }