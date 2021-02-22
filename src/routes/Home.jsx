import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert } from 'reactstrap';

const Home = () => {
  const getAuroraForecast = async (latitude, longitude) => {
    const data = await axios.get(
      `https://api.auroras.live/v1/?type=all&lat=${latitude}&long=${longitude}&forecast=false&threeday=false`
    );
    console.log(data);
  };

  const getLocation = async () => {
    try {
      await navigator.geolocation.getCurrentPosition(position => {
        const {
          coords: { latitude, longitude },
        } = position;

        getAuroraForecast(latitude, longitude);
      });
    } catch (error) {
      alert("Can't find you");
    }
  };

  useEffect(() => {
    getLocation();
  }, []);

  return (
    <>
      <Link to="/bestlocations">Best Locations</Link>
    </>
  );
};
export default Home;
