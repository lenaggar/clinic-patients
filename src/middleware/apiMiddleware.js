// custom middleware to handle api calls
const BASE_URL = "https://59de0d524c181d0012a8ce8c.mockapi.io/api/";

const apiMiddleware = ({ dispatch }) => next => action => {
  if (action.type !== "API") {
    return next(action);
  }

  const { payload } = action;

  dispatch({ type: payload.apiStart });

  let options;

  switch (payload.method) {
    case "POST":
    case "PUT":
      options = {
        method: payload.method,
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(payload.data)
      };
      break;

    default:
      options = {
        method: payload.method
      };
      break;
  }

  fetch(BASE_URL + payload.url, options) // eslint-disable-line
    .then(res => {
      if (!res.ok) {
        throw Error(res.statusText);
      }
      return res.json();
    })
    .then(data => {
      dispatch({ type: payload.apiDone });
      dispatch({ type: payload.success, data });
    })
    .catch(error => {
      dispatch({ type: payload.apiDone });
      dispatch({ type: payload.error, error });
    });
  return undefined;
};

export default apiMiddleware;
