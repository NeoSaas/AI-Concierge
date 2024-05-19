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
    User Input: ${userSelectedCategories}

    Businesses: ${businessesList}
    
    Query: Please recommend businesses that offer ${userSelectedCategories}. The businesses should closely match the user's preferences. For example, a restaurant does not relate to a vineyard even if they serve wine. Keep your recommendations relevant to the user's selection.
    
    Consider the tags associated with each business individually. If there are three options selected and some businesses match the first two options, include those in your suggestion. If none match the third tag, still recommend the other businesses.
    
    Only include the business name in your response and format it strictly as "Recommendation: <business name>, <business name>, ....". Provide the business names in a comma-separated list.
    
    Ensure that all businesses are included in the response if they match any of the tags. Do not limit the response.
    
    If no businesses in the list match the user's selection, respond with an empty response.
    
    If the user input includes "Michelin Restaurant", it should relate to the "Michelin Guide" tag, so include businesses with the "Michelin Guide" tag.
    
    The recommended businesses should ideally offer services or products aligned with the user's selection.
    
    Thank you!\n
    `;

    return promptTemplate;
}