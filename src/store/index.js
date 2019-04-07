import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk'
import { newsList } from './news/reducer'

const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose
const middleware = [thunk]
const rootReducer = combineReducers({ newsList })
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
)

export const store = createStore(rootReducer, enhancer)
