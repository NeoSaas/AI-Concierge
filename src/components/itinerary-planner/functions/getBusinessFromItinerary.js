import axios from "axios";

export default async function organizeItineraryQuery(itinerary) {
    // Construct the prompt template
    const promptTemplate = `
        From the following itinerary please get all the names of businesses that have been mentioned in the itinerary
        only return and array of the names of the business no other text.

        Itinerary:
        ${itinerary}
    `;
    console.log(promptTemplate);
    return promptTemplate;
}
