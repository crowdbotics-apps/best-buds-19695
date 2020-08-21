import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn292602Reducer from '../features/SignIn292602/redux/reducers'
import SignIn292588Reducer from '../features/SignIn292588/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn292602: SignIn292602Reducer,
SignIn292588: SignIn292588Reducer,

});