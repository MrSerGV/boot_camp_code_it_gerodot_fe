import API_KEY from '../utils/api-key';

const API_URL = 'http://localhost:3007';

const API_URL_ADDRESS = `/geopoint`;
const API_URL_FILE = `/uploadedFile`;

const API_URL_ADDRESSES_HISTORY = `${API_URL}/geopoint/history/single`
const API_URL_FILES_HISTORY = `${API_URL}/uploadedFile/history`

const API_URL_ADDRESS_BY_ID = `${API_URL}/geopoint/read`
const API_URL_FILE_BY_ID = `${API_URL}/geopoint/history/fromFile`

export default class GerodotServices {

  static postRegistration = async userInfo => {
    // Регистрация
  }

  static postLogin = async (login, password) => {
    // Логин
  }

  // Change process.env.REACT_APP_GOOGLE_MAPS_API_KEY when fixed it
  static getCoordinatesFromGoogleApi = async address => {
    const res = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
      ? await fetch(`https://maps.googleapis.com/maps/api/geocode/json?language=en&address=${address}&key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`)
      : await fetch(`https://maps.googleapis.com/maps/api/geocode/json?language=en&address=${address}&key=${API_KEY.REACT_APP_GOOGLE_MAPS_API_KEY}`);
    const locationData = await res.json();
    return locationData.results[0];
  }

  static postCoordinates = async coordinates => {
    const res = await fetch(`${API_URL_ADDRESS}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: JSON.stringify(coordinates)
    });

    return await res.json();
  }

  static postFile = async file => {
    const formData = new FormData();
    formData.append('file', file);

    const res = await fetch(`${API_URL_FILE}`, {
      method: 'POST',
      headers: {
        // 'Content-Type': 'multipart/form-data',
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: formData
    });
    
    return await res.json();
  }

  static getAddressesHistory = async pageIndex => {
    // Получение истории одиночных адрессов
    const res = await fetch(`${API_URL_ADDRESSES_HISTORY}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: JSON.stringify({ pageIndex })
    });
    return await res.json();
  }

  static getFilesHistory = async pageIndex => {
    // Получение истории файлов
    const res = await fetch(`${API_URL_FILES_HISTORY}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: JSON.stringify({ pageIndex })
    });
    return await res.json();
  }

  static getCoordinatesById = async id => {
    // get coords by id
    const res = await fetch(`${API_URL_ADDRESS_BY_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: JSON.stringify({ id })
    });
    return await res.json();
  }

  static getFileCoordinatesById = async id => {
    // get fileCoords by id
    const res = await fetch(`${API_URL_FILE_BY_ID}`, {
      method: 'POST',
      headers: {
        'Authorization': 'Bearer ' + localStorage.authToken
      },
      body: JSON.stringify({ id })
    });
    return await res.json();
  }
}