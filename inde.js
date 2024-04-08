
  const redux = require("redux");
  const reduxLogger = require("redux-logger")

  const createStore = redux.createStore;
  const combineReducers = redux.combineReducers;

  const applyMiddleware = redux.applyMiddleware;
   
  
  const logger = reduxLogger.createLogger();
  
  const BUY_CAKE = "BUY_CAKE";
  const BUY_ICECREAM = "BUY_ICECREAM"
  
  function buyCake(){
    return {
      type: BUY_CAKE,
      info: "MY FIRST ACTION "
    }
  }
  function buyIceCream(){
    return {
      type: BUY_ICECREAM,
      info: "my second action"
    }
  }

  const initialCake = {
    numberOfCakes: 20
  }
  const initialIceCream = {
    numberOfIceCream: 30
  }

  const cakeReducer = (state = initialCake, action) => {
    switch (action.type) {
      case BUY_CAKE: return {
        ... state,
        numberOfCakes: state.numberOfCakes - 1
      }
      default: return state
    }
  }

  const iceCreamReducer = (state = initialIceCream, action) => {
    switch (action.type) {
      case BUY_ICECREAM: return {
        ...state,
        numberOfIceCream: state.numberOfIceCream - 1,
      }
        
      default: return state
    }
  }

  const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
  })



  const store = createStore(rootReducer, applyMiddleware(logger));
  
  const unsubsribe = store.subscribe(() => {})



  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());
  store.dispatch(buyCake());



  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  store.dispatch(buyIceCream());
  unsubsribe();

