import { takeLatest, call, put } from 'redux-saga/effects';
import { ShopPageActionTypes } from './shop.types';
import { firestore, convertCollectionsSnapShotToMap } from '../../firebase/firebase.utils';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop.actions';


export function* fetchCollectionsAsync() {
  try {
    const collectionRef = firestore.collection('collections');
    const snapShot = yield collectionRef.get();
    const collectionsMap = yield call(convertCollectionsSnapShotToMap, snapShot);
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
      yield put(fetchCollectionsFailure(error.message))
  }
}



  


export function* fetchCollectionsStart () {
  yield takeLatest(ShopPageActionTypes.FETCH_COLLECTIONS_START, fetchCollectionsAsync)
}