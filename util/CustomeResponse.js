const successResponse = (reqMethod, object) => {
  switch (reqMethod) {
    case "GET":
      return {
        status: 200,
        data: object,
      };
      break;
    case "POST":
      return {
        status: 201,
        data: object,
      };
      break;
    case "PUT":
      return {
        status: 200,
        data: object,
      };
      break;
    case "DELETE":
      return {
        status: 200,
        data: object,
      };
      break;
    default:
      return {
        status: 200,
        data: object,
      };
      break;
  }
};
const errorResponse = (type, error) => {
  switch (type) {
    case "NOT_FOUND":
      return {
        status: 404,
        message: error,
      };
      break;
    case "BAD_REQUEST":
      return {
        status: 400,
        message: error,
      };
      break;
    case "UNAUTHORIZED":
      return {
        status: 401,
        message: error,
      };
    case "INTERNAL_SERVER_ERROR":
      return {
        status: 500,
        message: error,
      };
    case "FORBIDDEN":
      return {
        status: 403,
        message: error,
      };
    case "CONFLICT":
      return {
        status: 409,
        message: error,
      };
    default:
      return {
        status: 500,
        message: error,
      };
      break;
  }
};
module.exports = {
  successResponse,
  errorResponse,
};
