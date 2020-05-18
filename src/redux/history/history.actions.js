import GerodotServices from '../../utils/gerodot-services';
import { actionPromise } from '../promise/promise.actions';

const actionSetAddressesPage = (addressesList, addressesPageIdx, maxAddressesPageIdx) => ({
  type: 'SET_ADDRESSES_PAGE', addressesList, addressesPageIdx, maxAddressesPageIdx
});

const actionSetFilesesPage = (filesList, filesPageIdx, maxFilesPageIdx) => ({
  type: 'SET_FILES_PAGE', filesList, filesPageIdx, maxFilesPageIdx
});

export const actionGetAddressesPage = pageIndex => async dispatch => {
  const res = await dispatch(actionPromise('GerodotApi', GerodotServices.getAddressesHistory(pageIndex)));
  if (!res) return;

  const { maxPage, geopoints } = res;
  if (typeof maxPage !== 'number' || !geopoints) return;
  dispatch(actionSetAddressesPage(geopoints, pageIndex, maxPage));
}

export const actionGetFilesPage = pageIndex => async dispatch => {
  const res = await dispatch(actionPromise('GerodotApi', GerodotServices.getFilesHistory(pageIndex)));
  if (!res) return
  
  const { maxPage, uploadedFiles } = res;
  if (typeof maxPage !== 'number' || !uploadedFiles) return;
  dispatch(actionSetFilesesPage(uploadedFiles, pageIndex, maxPage));
}