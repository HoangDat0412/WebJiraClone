import {applyMiddleware, combineReducers,createStore} from 'redux'
import ToDoListReducer from './ToDoListReducer';
import reduxThunk from 'redux-thunk';
// import createMiddleWareSaga from 'redux-saga'
import createMiddleWareSaga from 'redux-saga'
import { rootSaga } from '../sagas/rootSaga';
import LoadingReducer from './LoadingReducer';
import { ModalReducer } from './ModalReducer';
import NavigateReducer from './NavigateReducer';
import UserCyberBugsReducer from './UserCyberBugsReducer';
import ProjectCategoryReducer from './ProjectCategoryReducer';
import ProjectCyberBugsReducer from './ProjectCyberBugsReducer';
import drawerReducer from './DrawerCyberbugs';
import ProjectReducer from './ProjectReducer';
import { GetprojectDetailReducer } from './GetProjectDetailReducer';

const middleWareSaga = createMiddleWareSaga()

const rootReducer = combineReducers({
    ToDoListReducer,
    LoadingReducer,
    ModalReducer,
    NavigateReducer,
    UserCyberBugsReducer,
    ProjectCategoryReducer,
    ProjectCyberBugsReducer,
    drawerReducer,
    ProjectReducer,
    GetprojectDetailReducer

})

const store = createStore(rootReducer,applyMiddleware(reduxThunk,middleWareSaga))
middleWareSaga.run(rootSaga)
export default store

