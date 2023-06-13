const createSuccessResponse = (data) => {
  return {
    status: 'ok',
    ...data,
  };
};
  
const createErrorResponse = (code, message) => {
  return {
    status: 'error',
    error: {
      code: code,
      message: message,
    },
  };
};

export { createSuccessResponse, createErrorResponse };