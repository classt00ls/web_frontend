import { ADD_LEADS } from "../actionTypes";

const initialState = {
  leads: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_LEADS: {
      const { leads } = action.leads;
      return {
        ...state,
        leads
      };
    }
    default:
      return state;
  }
}
