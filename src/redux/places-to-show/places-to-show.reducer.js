const INITIAL_STATE = [{
  // coords: { lat: 49.9935, lng: 36.2304 }, // required: latitude & longitude at which to display the marker
  // title: `Mashrooms here`, // optional
  // url: `https://en.wikipedia.org/wiki/Amanita`, // optional
}];

const placesToShowReducer = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_PLACES_TO_SHOW') {
    if (Array.isArray(action.places))
      return action.places;
  }
  return state;
}

export default placesToShowReducer;