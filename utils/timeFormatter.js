const dayjs = require('dayjs');

const timeFormatter = (inputTime) => {
    const formattedTime = dayjs(inputTime).format('MMM DD, YYYY [at] hh:mm a');
    console.log (formattedTime);
    return formattedTime;
  }


module.exports = timeFormatter;