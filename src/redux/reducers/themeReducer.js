import { THEME } from "../action/actionTypes";
const initialState = {
    theme:localStorage.getItem('theme')
}

 const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case THEME:
        return {
          ...state,
          theme:state.theme === 'light' ? 'dark':'light'
        };
      default:
        return state;
    }
  };

export default cartReducer