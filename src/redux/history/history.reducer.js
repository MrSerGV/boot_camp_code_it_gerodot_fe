const INITIAL_STATE = {
  addressesList: [],
  filesList: [],
  addressesPageIdx: 0,
  filesPageIdx: 0,
  maxAddressesPageIdx: null,
  maxFilesPageIdx: null
};

const historyReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_ADDRESSES_PAGE') {
    const { addressesList, addressesPageIdx, maxAddressesPageIdx } = action;
    return { ...state, addressesList, addressesPageIdx, maxAddressesPageIdx };
  }
  if (action.type === 'SET_FILES_PAGE') {
    const { filesList, filesPageIdx, maxFilesPageIdx } = action;
    return { ...state, filesList, filesPageIdx, maxFilesPageIdx };
  }
  return state;
} 

export default historyReducer;