import { combineReducers } from "redux";
import authReducer from "./auth.reducers";
import productReducer from './product.reducer'
import categoryReducer from './category.reducer'
import orderReducer from './order.reducer'
import userReducer from "./user.reducer";

const rootReduser = combineReducers({
    auth : authReducer , 
    user : userReducer,
    category: categoryReducer,
    product: productReducer,
    order: orderReducer
})

export default rootReduser