import { useReducer, useContext } from 'react';

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  clearValues: 'CLEAR VALUES',
  toggleConsent: 'TOGGLE CONSENT',
  showError: 'SHOW ERROR',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.clearValues:
      return action.INIT_STATE;
    case actionTypes.toggleConsent:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.showError:
      return {
        ...state,
        error: action.message,
      };
    default:
      return state;
  }
};

export const useForm = (INIT_STATE) => {
  const [values, dispatch] = useReducer(reducer, INIT_STATE);

  const handleInputChange = (e) => {
    dispatch({
      type: actionTypes.inputChange,
      field: e.target.name,
      value: e.target.value,
    });
  };

  const handleClearValues = () => {
    dispatch({ type: actionTypes.clearValues, INIT_STATE });
  };

  const handleThrowError = (message) => {
    dispatch({ type: actionTypes.showError, message });
  };

  const handleToggleConsent = () => {
    dispatch({ type: actionTypes.toggleConsent });
  };

  return {
    values,
    handleInputChange,
    handleClearValues,
    handleToggleConsent,
    handleThrowError,
  };
};
