import PRODUCTS from '../../data/dummy-data'

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const CREATE_PRODUCT = 'CREATE_PRODUCT';
export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const SET_PRODUCTS = 'SET_PRODUCTS';

export const fetchProducts = () => {
  return async (dispatch, getState) => {

    dispatch({
      type: SET_PRODUCTS,
      products: PRODUCTS,
    });

  };
};

