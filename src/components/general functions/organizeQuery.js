import React from "react";
import axios from "axios";

export default async function organizeQuery(selectedActivities) {
    const userSelectedCategories = selectedActivities.join(', ');

    const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getBusiness/');
    const businessTagsArray = response.data;

    // Construct the list of businesses with their tags 
    let businessesList = '';
    for (let i = 0; i < businessTagsArray.length; i++) {
        const business = businessTagsArray[i];
        businessesList += `${business.business_name} [Tags: ${business.business_tags.join(', ')}]\n`;

    }


    // Construct the prompt template
    const promptTemplate = `
        User Input: ${userSelectedCategories}\n
        Businesses: ${businessesList}\n
        Query: Please recommend businesses that offer ${userSelectedCategories}. 
        The businesses should closely match the user's preferences, for example, a restaurant does not relate to a vineyard even if they serve wine. Keep your recommendations relevant to the user's selection.
        Consider the tags associated with each business INDIVIDUALLY, meaning if there are three options selected and some restaurants match the first two options include those in your suggestion but if none match the third tag still recommend the other businesses, include .
        In your recommendation only include the business name and nothing else no extra text simply the name of the business format your response STRICTLY as "Recommendation: <business name>, <business name> , ....", id also like you to provide the busines names in a comma separated list.
        Please ensure that ALL BUSINESSS are included in the response that match any of the tags do not limit it.
        If no businesses in the list match the user's selection, please respond with any empty response.
        Ideally, the recommended businesses should offer services or products aligned with the user's selection. 
        Thank you!\n
    `;

    return promptTemplate;
}