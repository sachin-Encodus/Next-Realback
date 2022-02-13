import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      {/* <!--footer starts from here--> */}
      <footer class="footer">
        <div class=" container bottom_border">
          <div class="row">
            <div class="d-flex justify-content-center  col-sm-4 col-md col-sm-4  col-12 col">
              <div>
                <h5 class="headin5_amrc col_white_amrc pt2">About us</h5>
                {/* <!--headin5_amrc--> */}
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  in atque dolorem amet suscipit libero accusamus saepe cumque
                  inventore. Dicta quibusdam repellendus beatae quod unde dolor
                  ipsa tempore suscipit similique.
                </p>
              </div>
            </div>

            <div class="d-flex justify-content-md-center    col-sm-4 col-md  col-6 col">
              <div>
                <h5 class="headin5_amrc col_white_amrc pt2">Services</h5>
                {/* <!--headin5_amrc--> */}
                <ul class="footer_ul_amrc">
                  <li>
                    <a href="http://webenlance.com">Electronic devices</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Upcoming service</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Future services</a>
                  </li>
                  <li>
                    <a href="http://webenlance.com">Events</a>
                  </li>
                </ul>
                {/* <!--footer_ul_amrc ends here--> */}
              </div>
            </div>

            <div class="d-flex justify-content-md-center  col-sm-4 col-md  col-6 col">
              <div>
                <h5 class="headin5_amrc col_white_amrc pt2">Legal</h5>
                {/* <!--headin5_amrc--> */}
                <ul class="footer_ul_amrc">
                  <li>
                    <Link href="/terms">
                      <a>Terms & Conditions</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="http://webenlance.com">
                      <a>Privacy Policy</a>
                    </Link>
                  </li>
                  <Link href="http://webenlance.com">
                    <a>Return and Refund</a>
                  </Link>
                </ul>
                {/* <!--footer_ul_amrc ends here--> */}
              </div>
            </div>

            <div class="d-flex justify-content-md-center  col-sm-4 col-md  col-12 col">
              <div>
                <h5 class="headin5_amrc col_white_amrc pt2">Contact us</h5>
                {/* <!--headin5_amrc ends here--> */}

                <ul class="footer_ul2_amrc">
                  <li>
                    <a
                      style={{ color: "#2465f8" }}
                      href="mailto:realbackindia@gmail.com"
                    >
                      <i class="fa fa fa-envelope"></i> realbackindia@gmail.com{" "}
                    </a>
                  </li>
                </ul>
                {/* <!--footer_ul2_amrc ends here--> */}
              </div>
            </div>
          </div>
        </div>

        <div class="container">
          {/* <ul class="foote_bottom_ul_amrc">
            <li>
              <a href="http://webenlance.com">Home</a>
            </li>
            <li>
              <a href="http://webenlance.com">About</a>
            </li>
            <li>
              <a href="http://webenlance.com">Services</a>
            </li>
            <li>
              <a href="http://webenlance.com">Pricing</a>
            </li>
            <li>
              <a href="http://webenlance.com">Blog</a>
            </li>
            <li>
              <a href="http://webenlance.com">Contact</a>
            </li>
          </ul> */}
          {/* <!--foote_bottom_ul_amrc ends here--> */}
          <p class="text-center">
            Copyright @2021 | Designed With by <a href="#">Realback</a>
          </p>

          <ul class="social_footer_ul">
            <li>
              <a href="">
                <i
                  className="fab fa-facebook-square fa-2x "
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i className="fab fa-twitter fa-2x " style={{ color: "#fff" }}>
                  {" "}
                </i>
              </a>
            </li>
            <li>
              <a href="http://webenlance.com">
                <i
                  className="fab fa-linkedin  fa-2x  "
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/realbackindia?r=nametag">
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ color: "#fff" }}
                ></i>
              </a>
            </li>
          </ul>
          {/* <!--social_footer_ul ends here--> */}
        </div>
      </footer>

      {/* <div style={{ backgroundColor: "#000" }}>
        <br /> <br /> <br /> <br />
        <div className="container ">
          <hr className="hre" />
          <div className="row">
            <div className="col-md-4 text-center ">
              <p
                style={{
                  color: "#fff",
                  marginLeft: "10px",
                  marginTop: "-2px",
                  fonFfamily: '"Sulphur Point", sans-serif',
                  fontSize: "15px",
                  textAlign: "center",
                }}
              >
                © 2020-21 Realback Technologies India Pvt. Ltd.
              </p>
            </div>

            <div
              className="col-md-4    text-center   mb-3    "
              style={{ fontfamily: '"Sulphur Point", sans-serif' }}
            >
              <Link
                href="/terms"
                style={{
                  marginLeft: "10px",
                  color: "#fff",
                  fontSize: "13px",
                }}
              >
                <a>Terms & Condition</a>
              </Link>
              &nbsp;
              <a
                href="tel:9174203189"
                style={{
                  marginLeft: "10px",
                  color: "#fff",
                  fontSize: "13px",
                }}
              >
                Call us
              </a>
              &nbsp;
              <Link
                href="/feedback"
                style={{
                  marginLeft: "10px",
                  color: "#fff",
                  fontSize: "13px",
                }}
              >
                <a>Feedback</a>
              </Link>
              &nbsp;
              
            </div>

            <div
              className="col-md-4   text-center           "
              style={{ fontFamily: '"Sulphur Point", sans-serif' }}
            >
              <a href="#">
                {" "}
                <i
                  className="fab fa-linkedin  fa-2x  "
                  style={{ color: "#fff", marginLeft: "10px" }}
                ></i>
              </a>
              <i
                className="fab fa-facebook-square fa-2x "
                style={{ color: "#fff", marginLeft: "10px" }}
              ></i>
              <i
                className="fab fa-twitter fa-2x "
                style={{ color: "#fff", marginLeft: "10px" }}
              >
                {" "}
              </i>
              <a href="https://www.instagram.com/realbackindia?r=nametag">
                <i
                  className="fab fa-instagram fa-2x"
                  style={{ color: "#fff", marginLeft: "10px" }}
                ></i>
              </a>
              <i
                className="fab fa-youtube fa-2x "
                style={{ color: "#fff", marginLeft: "10px" }}
              ></i>
              <i
                className="fab fa-github fa-2x "
                style={{ color: "#fff", marginLeft: "10px" }}
              ></i>
            </div>
          </div>
          <br /> <br />
        </div>
      </div> */}
    </>
  );
};

export default Footer;
