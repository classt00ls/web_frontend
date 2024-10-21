import { CHANGE_FILTERS } from "../actionTypes";

const initialState = {
  selectedCategories: [],
  stars: 0,
  searchText: ""
};

const filtersState = (state = initialState, {type = 'set', ...rest }) => {

  switch (type) {
    case CHANGE_FILTERS: {
      return {
        ...state,
        ...rest
      };
    }
    default:
      return state;
  }
}

export default filtersState;