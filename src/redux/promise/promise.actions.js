export const actionClear = name => ({ type: 'CLEAR', name });

export const actionPromise = (name, promise) => {
  const actionPending = () => ({ type: 'PROMISE', name, status: 'PENDING', payload: null, error: null });
  const actionResolved = payload => ({ type: 'PROMISE', name, status: 'RESOLVED', payload, error: null });
  const actionRejected = error => ({ type: 'PROMISE', name, status: 'REJECTED', payload: null, error });

  return async (dispatch) => {
    dispatch(actionPending());
    try {
      const payload = await promise;
      dispatch(actionResolved(payload));
      return payload;
    }
    catch (error) {
      // TODO: возможно сделать errorReducer?
      actionRejected(error);
      console.log(error);
    }
  }
};
