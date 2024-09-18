import { createStore } from 'redux'
import appReducers from "./reducers";

let store = createStore(appReducers);

// La única forma de modificar el estado interno es despachando acciones.
// Las acciones pueden ser serializadas, registradas o almacenadas luego para volver a ejecutarlas.
store.dispatch({ type: 'INCREMENT' });
// 1

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
