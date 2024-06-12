import React from "react";
import axios from "axios";

export default async function organizeReviewQuery(business, businessAddress) {
    //construct the prompt template
    const promptTemplate = `
        Business: ${business}
        Address: ${businessAddress}
        For the above business please generate a summary of google reviews for said business. STRICTLY keep it 
        below 45 words. the business will be in florida. ONLY PRINT THE SUMMARY, do not add any extra remarks. output your answer as "Summary: <summary text" ONLY
    `;

    return promptTemplate;
}