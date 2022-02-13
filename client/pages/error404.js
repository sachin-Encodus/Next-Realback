import React from "react";

const Error = () => {
  return (
    <div>
      <section>
        <div className="container">
          <div className="row justify-content-center align-align-items-center  ">
            <div className="col-md-12">
              {/* <div className="wrapper  mt-5 " style={{ padding: 50 }}>
                <video autoPlay="autoPlay" muted className="wrapper__video ">
                  <source type="video/mp4" src="/images/404err.mp4" />
                </video>
              </div> */}
              <div>
                <h1>You see this Page cause of many reasons</h1>
                <h2>.Check your internet connection</h2>
                <h2>.Might be your internet is slow</h2>
                <h2>.Checking the network cables, modem, and router</h2>
                <h2>.Reconnecting to Wi-Fi</h2>
                <br />
                <p>
                  If your connecton is good then we are sorry for this and we
                  try to fixing this issue soon .Please come after some time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Error;
