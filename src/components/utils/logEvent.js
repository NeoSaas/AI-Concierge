import axios from 'axios';

const logEvent = async (businessId, eventType) => {
  // console.log(businessId)
  try {
    const response = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/logs/', {
      business: businessId,
      event_type: eventType,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    // console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default logEvent;