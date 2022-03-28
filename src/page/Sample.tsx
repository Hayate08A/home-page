import React from 'react'
import RoutingButton from '../component/RoutingButton';
import routingPath from '../routing/routing-path';

const Sample: React.VFC = () => {
  return (
    <div className="sample">
      Sample
      <RoutingButton text='home' path={routingPath.home}/>
    </div>
  );
};

export default Sample