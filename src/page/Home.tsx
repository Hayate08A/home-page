import React from "react";
import RoutingButton from '../component/RoutingButton';
import routingPath from '../routing/routing-path';

const Home: React.VFC = () => {
  return (
    <div className="home">
      Home
      <RoutingButton text='てst' path={routingPath.samplePage}/>
    </div>
  );
};

export default Home;
