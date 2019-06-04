import React from "react";
import { TiCompass, TiHeartOutline } from "react-icons/ti";
import { FiUser } from "react-icons/fi";

const UserNavItems = () => (
  <div className="user-nav-items">
    <div className="compoass">
      <TiCompass />
    </div>
    <div className="heart">
      <TiHeartOutline />
    </div>
    <div className="user">
      <FiUser />
    </div>
  </div>
);

export default UserNavItems;
