import axios from "axios";

export default async function organizeItineraryQuery(selectedActivities) {

    // const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getBusiness/', {});

    // const businessDataArray = response.data;
    // // console.log(businessDataArray);

    // // Construct the list of businesses with their detailed data
    // let businessesList = '';
    // for (let i = 0; i < businessDataArray.length; i++) {
    //     const business = businessDataArray[i];
    //     businessesList += `
    //         Business Name: ${business.business_name}
    //         Tags: ${business.business_tags.join(', ')}
    //         Address: ${business.business_address}
    //         Hours: ${business.hours_of_operation}
    //         Contact: ${business.business_phone_number}
    //         Walking Distance: ${business.walk_time} minutes
    //         \n`;
    // }
    const objectToString = (obj) => {
        return Object.entries(obj).map(([key, value]) => `${key}: ${value}`).join(', ');
    }
    console.log(selectedActivities);
    // Construct the prompt template
    const promptTemplate = `
        Get All Businesses from the internet, use a variety of businesses
        Guest Preferences: {${objectToString(selectedActivities)}}\n
        Itinerary Request for Guests at The Alfond Inn, Winter Park, Florida
        Guest Itinerary Request
        Please create a detailed itinerary for a guest staying at The Alfond Inn in Winter Park, Florida. The itinerary should contain walking or driving times and distances in miles or fractions of miles. The itinerary must be contained within the duration of time selected by the guest and cannot exceed this time by more than 15 minutes, including activities, dining, and any special events. Only select potential matches from our database that are a maximum of 20 minutes of walking or 20 minutes by car. If a Michelin Guide-rated restaurant is included, the maximum driving time can extend to 30 minutes. Follow these steps to generate the itinerary:

        First, Find recommendations that match the guest's preferences. Search the web to find these businesses
        Additional Resources:

        Use external resources to complete the itinerary, such as Google Maps, Yelp, TripAdvisor, and the official websites of the locations.
        Ensure the activities and dining options reflect the preferences and interests of the guest.
        Verify Distances and Times:

        Use reliable mapping services (e.g., Google Maps) to calculate precise walking distances and times between locations. Verify these distances and times by cross-referencing multiple sources.
        Check the official websites of the locations for any additional information on opening hours, tour durations, and special events.
        Detailed Itinerary with Descriptions:

        Include detailed descriptions for each stop, adding a touch of flair to make the itinerary appealing.
        Indicate the opening times of locations and ensure the itinerary aligns with these times.

        Example Itinerary:
        <time 1> - <item 1 text Example:"Italian Lunch at Prato">:

        <Description 1>

        <Description of directions>
        <Distance to next place: Approximately x miles, about a x-minute walk.>
        <Estimated time spent at location>
        <time 2> - <item 2>:

        <Description 2>

        <Description of directions>
        <Distance to next place: Approximately x miles, about a x-minute walk.>
        <Estimated time spent at location>
        <time 3> - <item 3>:

        <Description 3>

        <Description of directions>
        <Distance to next place: Approximately x miles, about a x-minute walk.>
        <Estimated time spent at location>
        
        ......And So on

        Tips:
        <Some Tips you can provide to the guest>
        
        Please format bold text with **
        Only include the itinerary itself in your response do not include any additional text
        \n
    `;
    console.log(promptTemplate);
    return promptTemplate;
}
