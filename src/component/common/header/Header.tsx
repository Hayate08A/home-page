import React from "react";
import "./Header.scss";
import RoutingButton from "../../../component/RoutingButton";
import routingPath from "../../../routing/routing-path";

type menu = {
  title: string;
  path: string;
};

export type THeaderProps = {
  title: string;
  menus: menu[];
};

export const Header = (props: THeaderProps) => {
  return (
    <div className="header">
      <div className="header__title">{props.title}</div>
      <div className="header__menu">
        {props.menus.map((menu) => {
          // 出ない；；
          <div className="header__menu__chunk">
            <RoutingButton text={menu.title} path={menu.path} />
          </div>;
        })}
      </div>
    </div>
  );
};
