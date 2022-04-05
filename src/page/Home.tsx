import React from "react";
import RoutingButton from '../component/RoutingButton';
import routingPath from '../routing/routing-path';

const Home = () => {
  return (
    <div className="home">
      Home
      <RoutingButton text='サンプル' path={routingPath.samplePage}/>
    </div>
  );
};

export default Home;
