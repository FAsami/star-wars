import React from "react";
import loading from "../../img/loading.gif";
function Loading() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <img className="image-fluid" src={loading} alt="Loading GIF" />
    </div>
  );
}

export default Loading;
