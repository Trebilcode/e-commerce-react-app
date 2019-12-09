import { ShopPageActionTypes } from "./shop.types";
import { convertCollectionsSnapShotToMap, firestore } from '../../firebase/firebase.utils';

export const fetchCollectionsStart = collectionsMap => ({
  type: ShopPageActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopPageActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
  type: ShopPageActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
})


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');

    dispatch(fetchCollectionsStart());

    collectionRef.get()
      .then(snapShot => {
        const collectionsMap = convertCollectionsSnapShotToMap(snapShot);
        dispatch(fetchCollectionsSuccess(collectionsMap));
       })
       .catch(error => dispatch(fetchCollectionsFailure(error.message)))
  }
}