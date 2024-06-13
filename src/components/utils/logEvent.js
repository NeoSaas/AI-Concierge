import axios from 'axios';

const logEvent = async (businessId, eventType) => {
  try {
    const response = await axios.post('https://your-django-api-url.com/api/logs/', {
      business: businessId,
      event_type: eventType,
    }, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default logEvent;