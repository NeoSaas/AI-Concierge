import axios from 'axios';

const logEvent = async (businessId, eventType) => {
  try {
    const response = await axios.post('https://ai-concierge-main-0b4b3d25a902.herokuapp.com/api/logs/', {
        business:businessId,
        event:eventType
    });
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}

export default logEvent;