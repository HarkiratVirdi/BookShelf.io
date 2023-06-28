module.exports.createSuccessResponse = (data) => {
  return {
    status: 'ok',
    ...data,
  };
};

module.exports.createErrorResponse = (code, message) => {
  return {
    status: 'error',
    error: {
      code: code,
      message: message,
    },
  };
};
