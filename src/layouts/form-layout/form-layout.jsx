import React, { useState } from 'react';
import { connect } from 'react-redux';

import {
  actionSetPlacesByUserInput,
  actionSetPlacesByUserUpload,
  actionSetPlacesByHistoryAddressId,
  actionSetPlacesByHistoryFileId
} from '../../redux/places-to-show/places-to-show.actions';
import {
  actionGetAddressesPage,
  actionGetFilesPage
} from '../../redux/history/history.actions';

import {
  SlideMenu,
  FormBlock,
  FormInput,
  CustomButton,
  PrimaryText,
  HistoryList
} from '../../components';
import fileHelper from '../../utils/allowed-file-formats';
import './form-layout.css';
import '../../css/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const FormLayout = ({
  history, onLocationUpload, onFileUpload,
  onSetPlacesByHistoryAddress, onSetPlacesByHistoryFile,
  onGetAddressPage, onGetFilesPage }) => {

  let content;
  const [contentType, setContentType] = useState('form');


  const [file, setFile] = useState('');
  const [location, setLocation] = useState('');



  const handleLocationSubmit = e => {
    e.preventDefault();
    location && onLocationUpload(location);
  };

  const handleFileSubmit = e => {
    e.preventDefault();
    file && onFileUpload(file)
  }

  const unSupported = (fileType) => {
    toast.error(fileType + ' is not a supported format\n', {
      position: toast.POSITION.BOTTOM_RIGHT
    })
  };

  const onFileChange = e => {
    const newFile = e.target.files[0];
    if (fileHelper.isTypeAllowed(newFile.type)) {
      console.log('valid')
      setFile(newFile);
    } else unSupported(newFile.type)


  }

  if (contentType === 'form')
    content = (<>
      <FormBlock color="green" onSubmit={handleLocationSubmit}>
        <PrimaryText>Search Place</PrimaryText>
        <FormInput
          type="text"
          placeholder="Enter Your Address Here"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Search" />
          <CustomButton secondary text="Open history" onClick={() => setContentType('history_adress')} />
        </div>
      </FormBlock>

      <FormBlock color="yellow" onSubmit={handleFileSubmit}>
        <PrimaryText>Choose File</PrimaryText>
        <FormInput
          type="file"
          name="file"
          placeholder={file.name || "File Not Uploaded"}
          onChange={onFileChange}
        />
        <div className="d-flex justify-space-between">
          <CustomButton type="submit" text="Upload" />
          <CustomButton secondary text="Open uploaded" onClick={() => setContentType('history_upload')} />
          <ToastContainer autoClose={5000} />
        </div>

      </FormBlock>
    </>)

  if (contentType === 'history_adress')
    content = (<>
      <HistoryList
        onItemClick={onSetPlacesByHistoryAddress}
        onUpdatePage={onGetAddressPage}

        listItems={history.addressesList}

        pageIndex={history.addressesPageIdx}
        maxPageIndex={history.maxAddressesPageIdx}

        bgColor='green'
      />
      <CustomButton
        onClick={() => setContentType('form')}
        text='Back to Search'
        secondary
        large
      />
    </>)

  if (contentType === 'history_upload')
    content = (<>
      <HistoryList
        onItemClick={onSetPlacesByHistoryFile}
        onUpdatePage={onGetFilesPage}

        listItems={history.filesList}

        pageIndex={history.filesPageIdx}
        maxPageIndex={history.maxFilesPageIdx}

        bgColor='yellow'
      />
      <CustomButton
        onClick={() => setContentType('form')}
        text='Back to Search'
        secondary
        large
      />
    </>)

  return (
    <SlideMenu>
      {content}
    </SlideMenu>
  );
}

const mapStateToProps = state => ({
  history: state.history
})

const mapDispatchToProps = {
  onLocationUpload: actionSetPlacesByUserInput,
  onFileUpload: actionSetPlacesByUserUpload,
  onSetPlacesByHistoryAddress: actionSetPlacesByHistoryAddressId,
  onSetPlacesByHistoryFile: actionSetPlacesByHistoryFileId,
  onGetAddressPage: actionGetAddressesPage,
  onGetFilesPage: actionGetFilesPage
}

export default connect(mapStateToProps, mapDispatchToProps)(FormLayout);
