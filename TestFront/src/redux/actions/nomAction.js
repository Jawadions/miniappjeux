
import axios from 'axios'
import ACTIONS from './index'

export const getAllnoms = () => async (dispatch) => {
  try {
    const { data } = await axios.get('/nom');

    dispatch({ type: ACTIONS.FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

