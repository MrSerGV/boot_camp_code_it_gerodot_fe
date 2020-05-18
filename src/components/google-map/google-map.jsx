import React, { useEffect, useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { array, func } from 'prop-types';
import { functions, isEqual, omit } from 'lodash'

import API_KEY from '../../utils/api-key';
import './google-map.css';

function GoogleMap({ options, places }) {
  const ref = useRef();
  const [map, setMap] = useState();
  const prevMarkersRef = useRef([]);
  const [markers, setMarkers] = useState([]);
  //const [counter, setCounter] = useState(1);
let counter = 1
   // Adds a marker to the map and push to the array.
  const addMarkers = (places) => {
    
    places.forEach((place) => {
      console.log(place.coords)
      let marker = new window.google.maps.Marker({
        map,
        position: place.coords,
        label: `${counter}`,
        title: place.title,
      });
      //setCounter(counter+1)
      counter++
      marker.addListener(`click`, () => {
        window.location.href = place.url
      });
      //prevMarkersRef.current.push(marker);
    
    })
  };

  // Removes the markers from the map
  const clearMarkers = (markers) => {
    if (markers.length) {
      for (let m of markers) {
        m.setMap(null);
      }
    }
  }

  const cb = useCallback(function clearMarkers() {
    for(let i = 0; i < markers.length; i++) {
      markers[i].setMap(null);
    }
  }, [markers.length]);


  useEffect(() => {
    const onLoad = () => {
      setMap(new window.google.maps.Map(ref.current, options));

      // clearMarkers(prevMarkersRef.current); //clear prev markers

      // addMarkers(places);

      
    }
    if (!window.google) {
      const script = document.createElement(`script`);
      script.src = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
        ? `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
        : `https://maps.googleapis.com/maps/api/js?key=${API_KEY.REACT_APP_GOOGLE_MAPS_API_KEY}`
      document.head.append(script);
      script.addEventListener(`load`, onLoad);
      return () => script.removeEventListener(`load`, onLoad);
    } else onLoad();
  }, [options])


  

// useEffect(() => {
//     cb();
//     if (places.length) {
//       const googleMarkers = [];
//       for (let i = 0; i < places.length; i++) {
//         const marker = `marker #${i}`;
//         googleMarkers.push(marker);
//       }
//       setMarkers(googleMarkers);
//     }
//   }, [places, cb]);
  
  // useEffect(() => {
  //   const onLoad = () => {
  //     clearMarkers(prevMarkersRef.current); //clear prev markers
  //     setMap(new window.google.maps.Map(ref.current, options))
  //   } 
  //   if (!window.google) {
  //     const script = document.createElement(`script`);
  //     script.src = process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  //       ? `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`
  //       : `https://maps.googleapis.com/maps/api/js?key=${API_KEY.REACT_APP_GOOGLE_MAPS_API_KEY}`
  //     document.head.append(script);
  //     script.addEventListener(`load`, onLoad);
  //     return () => script.removeEventListener(`load`, onLoad);
  //   } else onLoad();
  // }, [options])

  if (map)  addMarkers(places);
  
  return (
    <div className="map-container">
      <div style={{ height: `100%`, borderRadius: `20px`, overflow: `hidden`, border: `1px solid var(--yellow)` }}
        {...{ ref }}
      />
    </div>
    
  )
}

function shouldNotUpdate(props, nextProps) {
  const [funcs, nextFuncs] = [functions(props), functions(nextProps)]
  const noPropChange = isEqual(omit(props, funcs), omit(nextProps, nextFuncs))
  const noFuncChange =
    funcs.length === nextFuncs.length &&
    funcs.every(fn => props[fn].toString() === nextProps[fn].toString())
  return noPropChange && noFuncChange
}

const mapStateToProps = store => ({
  places: store.placesToShow
});

export default connect(mapStateToProps)(React.memo(GoogleMap, shouldNotUpdate))

GoogleMap.propTypes = {
  onMount: func,
  places: array,
};

GoogleMap.defaultProps = {
  options: {
    center: { lat: 48.3794, lng: 31.1656 },
    zoom: 6,
  }, 
  places: [],
};