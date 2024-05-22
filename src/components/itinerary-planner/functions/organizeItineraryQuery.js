import axios from "axios";

export default async function organizeItineraryQuery(selectedActivities) {

    const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getBusiness/', {});

    const businessDataArray = response.data;
    console.log(businessDataArray);

    // Construct the list of businesses with their detailed data
    let businessesList = '';
    for (let i = 0; i < businessDataArray.length; i++) {
        const business = businessDataArray[i];
        businessesList += `
            Business Name: ${business.business_name}
            Tags: ${business.business_tags.join(', ')}
            Address: ${business.business_address}
            Hours: ${business.hours_of_operation}
            Walking Distance: ${business.walk_time} minutes
            \n`;
    }

    // Construct the prompt template
    const promptTemplate = `
        User Input: ${selectedActivities}\n
        Businesses: ${businessesList}\n
        Query: Please create a detailed and optimal itinerary for the user based on their selected categories. 
        The itinerary should consider the following factors:
        
        1. **Relevance**: Ensure that the businesses are closely aligned with the user's selected categories. For instance, a vineyard should not be recommended if the user is interested in restaurants, even if the vineyard serves food.
        
        2. **Walking Distance**: Optimize the itinerary to minimize walking distance between locations. Include the walking distance between consecutive locations in the itinerary.

        3. **Business Hours**: Take into account the business hours to ensure that the user visits each location when it is open. Plan the sequence of visits accordingly.

        4. **Visit Duration**: Consider the average visit time at each location. Ensure that the user has enough time to enjoy each visit before moving on to the next location.

        5. **Logical Sequence**: Organize the itinerary in a logical order that maximizes the user's experience while minimizing travel time. Start from a central or convenient location and create a smooth flow from one visit to the next.

        6. **Diversity**: Provide a mix of activities if possible, to create a varied and engaging experience. For example, if the user is interested in both food and art, try to alternate between food-related and art-related stops.

        8. **Special Considerations**: If any special accessibility or dietary requirements are mentioned, ensure that the recommended businesses can accommodate these needs.

        If no businesses in the list match the user's selection, please respond with an empty itinerary.
        
        Format your response as follows:
        "Itinerary:
        1. <business name>
           - Address: <address>
           - Walking Distance: <walking distance> minutes from previous location
           - Average Visit Time: <average visit time> minutes
           - Contact: <contact>
        2. <business name>
           - Address: <address>
           - Walking Distance: <walking distance> minutes from previous location
           - Average Visit Time: <average visit time> minutes
           - Contact: <contact>
        3. ..."
        
        If no businesses in the list match the user's selection, please respond with an empty itinerary.

        At the very end of your response add a * and after the * the names of all the business you recommended as a comma sperated list.
        
        Thank you!\n
    `;

    return promptTemplate;
}
