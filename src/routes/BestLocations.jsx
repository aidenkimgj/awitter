import axios from 'axios';
import React, { useEffect } from 'react';

const BestLocations = () => {
  const getBestLocations = async () => {
    // axios.defaults.withCredentials = true;
    // const config = {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Allow-Origin': '*',
    //   },
    // };

    const locations = await axios.get(
      'http://api.auroras.live/v1/?type=locations'
    );
    console.log(locations);
    // console.log(config);
  };

  useEffect(() => {
    getBestLocations();
  }, []);

  return (
    <>
      <div>BestLocations</div>
    </>
  );
};

export default BestLocations;
