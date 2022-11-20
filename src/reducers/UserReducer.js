<<<<<<< HEAD
export const initialState = {
  avatar: "",
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setAvatar":
      return { ...state, avatar: action.payload.avatar };
      break;
    default:
      return state;
  }
};
=======
export const initialState = {
  avatar: "",
  favorites: [],
  appointments: [],
};

export const UserReducer = (state, action) => {
  switch (action.type) {
    case "setAvatar":
      return { ...state, avatar: action.payload.avatar };
      break;
    default:
      return state;
  }
};
>>>>>>> 8a76f3a5ef12b7d4aef87e65493cbd344267f96b
