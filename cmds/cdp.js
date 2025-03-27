const axios = require('axios');
const { sendMessage } = require('../handles/message');

module.exports = {
  name: "cdp",
  description: "Send a couple dp",
  author: "mark",

  async execute(senderId, args, pageAccessToken) {
    try {
      const response = await axios.get('https://rest-api-bot.onrender.com/api/cdp');
      const { one, two } = response.data;

      await sendMessage(senderId, {
        attachment: {
          type: "image",
          payload: {
            url: one
          }
        }
      }, pageAccessToken);

      await sendMessage(senderId, {
        attachment: {
          type: "image",
          payload: {
            url: two
          }
        }
      }, pageAccessToken);
    } catch (error) {
      console.error("An error occurred:", error);
      await sendMessage(senderId, {
        text: `An error occurred while processing your request. Please try again later.`
      }, pageAccessToken);
    }
  }
};
