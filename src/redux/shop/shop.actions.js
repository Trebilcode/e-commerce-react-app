import { ShopPageActionTypes } from "./shop.types";

export const updateCollections = collectionsMap => ({
  type: ShopPageActionTypes.UPDATE_COLLECTIONS,
  payload: collectionsMap
});