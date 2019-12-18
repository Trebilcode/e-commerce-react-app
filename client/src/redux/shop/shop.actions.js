import { ShopPageActionTypes } from "./shop.types";

export const fetchCollectionsStart = () => ({
  type: ShopPageActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopPageActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap
});

export const fetchCollectionsFailure = error => ({
  type: ShopPageActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload: error
});


