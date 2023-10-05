import { createStore } from 'redux';
import reducer from './reducers/bugsReducer';

const store = createStore(reducer, window.REDUX_DEVTOOLS_EXTENSION && window.REDUX_DEVTOOLS_EXTENSION()  );
export default store;