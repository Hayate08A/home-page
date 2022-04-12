import React from "react";
import RoutingButton from "../../component/RoutingButton";
import routingPath from "../../routing/routing-path";
import "./home.scss";
import testImg from "../../assets_temp/jpeg_test.jpeg";

const lists: string[] = ["新着", "ソート", "カテゴリ", "ランダム"];

const Home = () => {
  return (
    <div className="home">
      <div className="home__lists_wrap responsive">
        {lists.map((title, i) => {
          return (
            <div className="list">
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
