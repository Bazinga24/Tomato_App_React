import React from "react";
import "./AppDownload.css";
import { assets } from "../../assets/frontend_assets/assets";

function AppDownload() {
  return (
    <div className="app-download" id="app-download">
      <p>
        For better experience download <br /> Tomato App
      </p>
      <div className="app-download-platforms">
        <img src={assets.play_store} alt="play-store-logo" />
        <img src={assets.app_store} alt="app-store-logo" />
      </div>
    </div>
  );
}

export default AppDownload;
