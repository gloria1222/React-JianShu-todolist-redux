import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';
import {initListAction} from './actionCreators';
import {GET_INIT_LIST} from './actionTypes';

function* getInitList() {
    try{
        const res = yield axios.get('https://jsonplaceholder.typicode.com/users');
        const data = res.data.map(d=>d.name);
        const action = initListAction(data);
        yield put(action);
    }catch(e){
        console.log('error');
    }
}

function* mySaga() {
    yield takeEvery(GET_INIT_LIST, getInitList);
}
  
export default mySaga;
