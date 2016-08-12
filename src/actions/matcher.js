import * as actions from '../constants/actions';

export function setState(state) {
    return {
        type: actionTypes.SET_STATE,
        state
    }
}