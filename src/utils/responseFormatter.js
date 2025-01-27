const formatResponse = ({ status = 200, message = 'Success', data = null, error = null }) => {
    const response = {
      status,
      message,
    };
  
    if (data !== null) response.data = data;
    if (error !== null) response.error = error;
  
    return response;
  };
  
  module.exports = formatResponse;
  