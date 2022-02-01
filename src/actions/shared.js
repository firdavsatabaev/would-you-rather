import { showLoading, hideLoading } from 'react-redux-loading';
import { _getUsers, _getQuestions } from '../_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export default function handleReceiveData() {
  return dispatch => {
    dispatch(showLoading());
    return Promise.all([_getUsers(), _getQuestions()]).then(
      ([users, questions]) => {
        dispatch(receiveUsers(users));
        dispatch(receiveQuestions(questions));
        dispatch(hideLoading());
      }
    );
  };
}
