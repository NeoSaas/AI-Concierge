import axios from "axios";

export default async function organizeItineraryQuery(selectedActivities) {

    const response = await axios.get('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/getBusiness/', {});

    const businessDataArray = response.data;
    // console.log(businessDataArray);

    // Construct the list of businesses with their detailed data
    let businessesList = '';
    for (let i = 0; i < businessDataArray.length; i++) {
        const business = businessDataArray[i];
        businessesList += `
            Business Name: ${business.business_name}
            Tags: ${business.business_tags.join(', ')}
            Address: ${business.business_address}
            Hours: ${business.hours_of_operation}
            Contact: ${business.business_phone_number}
            Walking Distance: ${business.walk_time} minutes
            \n`;
    }

    // Construct the prompt template
    const promptTemplate = `
        Guest Preferences: ${selectedActivities}\n
        Businesses: ${businessesList}\n
        Itinerary Request for Guests at The Alfond Inn, Winter Park, Florida
        Guest Itinerary Request
        Please create a detailed itinerary for a guest staying at The Alfond Inn in Winter Park, Florida. The itinerary should contain walking or driving times and distances in miles or fractions of miles. The itinerary must be contained within the duration of time selected by the guest and cannot exceed this time by more than 15 minutes, including activities, dining, and any special events. Only select potential matches from our database that are a maximum of 20 minutes of walking or 20 minutes by car. If a Michelin Guide-rated restaurant is included, the maximum driving time can extend to 30 minutes. Follow these steps to generate the itinerary:

        Database Check:

        First, check the Business above which come from our databse for companies and recommendations that match the guest's preferences. The website URL and necessary access credentials should be included in the request.
        If there are suitable matches in the database, use those recommendations to build the itinerary.
        Additional Resources:

        If the database does not contain sufficient recommendations or if certain preferences are not met, use external resources to complete the itinerary for example if a user asks for shopping but there is only musuems in the database do not suggest musuems instead find places to shop in Winter Park, FL and suggest those.
        Ensure the activities and dining options reflect the preferences and interests of the guest.
        Verify Distances and Times:

        Use reliable mapping services (e.g., Google Maps) to calculate precise walking distances and times between locations. Verify these distances and times by cross-referencing multiple sources.
        Check the official websites of the locations for any additional information on opening hours, tour durations, and special events.
        Detailed Itinerary with Descriptions:

        Include detailed descriptions for each stop, adding a touch of flair to make the itinerary appealing.
        Indicate the opening times of locations and ensure the itinerary aligns with these times.
        Preferred Recommendations:

        When recommending breakfast options, include The Alfond Inn's café or Hamilton's Kitchen 75% of the time when the itinerary includes breakfast.

        Example Itinerary:
        8:00 AM - Breakfast at Hamilton's Kitchen:

        Start your day with a delightful breakfast at Hamilton's Kitchen, located within The Alfond Inn. Enjoy farm-to-table offerings like Eggs Benedict or Avocado Toast.
        Distance from The Alfond Inn to the Morse Museum: Approximately 0.7 miles, about a 15-minute walk.
        9:00 AM - Charles Hosmer Morse Museum of American Art:

        Walk to the Charles Hosmer Morse Museum, where you can explore the comprehensive collection of works by Louis Comfort Tiffany.
        Estimated Time: Spend about 1.5 hours here.
        Distance to Scenic Boat Tour: Approximately 0.6 miles, about a 12-minute walk.
        10:30 AM - Leisure Walk to Scenic Boat Tour:

        Enjoy a leisurely walk to the Scenic Boat Tour dock. The tour starts at 11:00 AM and lasts for one hour.
        Tour Duration: 1 hour.
        12:15 PM - Lunch at Prato:

        After the boat tour, head back towards Park Avenue for a delicious Italian lunch at Prato.
        Distance from Scenic Boat Tour to Prato: Approximately 0.5 miles, about a 10-minute walk.
        Opening Time: Prato opens for lunch at 11:30 AM.
        Tips:
        The Scenic Boat Tour operates daily with the first tour at 10:00 AM and the last at 4:00 PM. Make sure to bring cash for the boat tour, as they do not accept credit or debit cards.
        Ensure the itinerary aligns with the opening times of the locations to provide a smooth experience for the guests.
        By following these steps, you can ensure the distances and times in the itinerary are accurate and reliable, providing a delightful experience for the guests.
        
        Please format bold text with **
        Only include the itinerary itself in your response do not include any additional text
        \n
    `;

    return promptTemplate;
}
