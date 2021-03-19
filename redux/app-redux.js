import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

const initialState = {
    currentUser : {},
    musicians : ["evyatar","robert","lali"],
    studios : [],
    messages : [],
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case 'CHOOSE_USER':
            return {...state, musicians: [...state.musicians, action.payload]}
    }
   return state;
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware))

export {store};