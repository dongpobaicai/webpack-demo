import React from "react";

import "../common.css";

export default class Notice extends React.Component {
  render() {
    return (
      <div>
        <div className="contain">测试组件</div>
        <img src={require("../assert/test.png")} />
      </div>
    );
  }
}
