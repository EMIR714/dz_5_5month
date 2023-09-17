import { types } from "../types";

function preloaderOn() {
  return {
    type: types.PRELOADER_ON
  };
}

function preloaderOff() {
  return {
    type: types.PRELOADER_OFF
  };
}

export function addUserAction(user) {
  return async function (dispatch) {
    dispatch(preloaderOn());

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    };

    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users', options);

      if (response.status === 201 || response.status === 204) {
        const userData = await response.json(); 

        dispatch({
          type: types.ADD_USER,
          payload: userData 
        });

        dispatch(preloaderOff());
      } else if (response.status === 404) {
        dispatch(preloaderOff());
      }
    } catch (error) {
      console.error("Ошибка при отправке запроса:", error);
      dispatch(preloaderOff());
    }
  };
}
