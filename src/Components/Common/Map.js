import React from "react";
function Map(props) {
  return (
    <>
      <div className="column3">
        <div className="map">
          <h2>MAP</h2>
          <div className="map-image">
            <img src="../images/map.png" alt="NEST 505 지도" />
          </div>
          <p className="map-txt">
            서울시 마포구 마포대로14길
            <br />
            03-0000-0000
            <br />
            마포역에서 걸어서 10분
          </p>
        </div>
      </div>
    </>
  );
}

export default Map;
