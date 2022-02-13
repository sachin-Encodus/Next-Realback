import React, { useState, useEffect } from 'react';
// import authSvg from '../assests/reset.svg';
import { ToastContainer, toast } from 'react-toastify';

import axios from "axios";
import { LoadingButton } from "@material-ui/lab";

import { Stack, Button, TextField, Typography } from "@material-ui/core";
import { useRouter } from 'next/router';
const ResetPassword = ({ match }) => {

const router = useRouter()
const {query} = useRouter()
  const [formData, setFormData] = useState({
    password1: "",
    password2: "",
    token: "",
    textChange: "Submit",
  });
  const { password1, password2, textChange, token } = formData;

  useEffect(() => {
    let token = query.token;
    console.log(token);
    if (token) {
      setFormData({ ...formData, token });
    }
  }, []);
  const handleChange = (text) => (e) => {
    setFormData({ ...formData, [text]: e.target.value });
  };
  const handleSubmit = (e) => {
     e.preventDefault();
    console.log(password1, password2);
   
    if (password1 === password2 && password1 && password2) {
      setFormData({ ...formData, textChange: "Submitting" });
      axios
        .put("/api/resetpassword", {
          newPassword: password1,
          resetPasswordLink: token,
        })
        .then((res) => {
          console.log(":::::",res.data.message);
          setFormData({
            ...formData,
            password1: "",
            password2: "",
          });
          router.push('/')
          console.log(res.data.message);
        })
        .catch((err) => {
        console.log("Something is wrong try again",err);
        });
    } else {
      console.log("Passwords don't matches");
    }
  };
  return (
    <>
      <div className="container  login ">
        <h1 className="mb-5 mt-5 text-center">Reset Password</h1>
        <ToastContainer />
        <div className="row  ">
          <div className="col-md-6">
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src="/images/illustration_login.png" className="img-fluid" alt="3" />
            </div>
          </div>
          <div className="col-md-6 ">
            <div
              style={{
                marginTop: 30,
              }}
            >
              <form onSubmit={handleSubmit}>
                <Stack spacing={3}>
                  {/* <Typography variant="h3" sx={{ px: 5, mt: 10, mb: 5 }}>
                    Hi, Welcome Back
                  </Typography> */}
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Password"
                    variant="outlined"
                    type="password"
                    onChange={handleChange("password1")}
                    value={password1}
                  />
                  <TextField
                    fullWidth
                    id="outlined-basic"
                    label="Confirm Password"
                    variant="outlined"
                    type="password"
                    onChange={handleChange("password2")}
                    value={password2}
                  />

                  <LoadingButton
                    style={{
                      backgroundColor: "#0070f3",
                      padding: 10,
                      outline: "none",
                      boarder: "none",
                    }}
                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    {textChange}
                  </LoadingButton>
                </Stack>

                {/* <input
                    className="input-block  "
                    type="password"
                    placeholder="password"
                    onChange={handleChange("password1")}
                    value={password1}
                  />
                  <input
                    className="input-block  "
                    type="password"
                    placeholder="Confirm password"
                    onChange={handleChange("password2")}
                    value={password2}
                  />
                  <button
                    type="submit"
                    className="btn  justify-contect-center align-items-center"
                  >
                    <span className="ml-3">{textChange}</span>
                  </button> */}
              </form>
            </div>
          </div>

          <div className="p-5 ">
            <p className="text-center" style={{ color: "black" }}>
              * By logging in, you agree to our{" "}
              <a href="#">
                <span style={{ color: "blue" }}>Terms of Use</span>
              </a>{" "}
              and to receive Realback emails & updates and acknowledge that you
              read our{" "}
              <a href="#">
                {" "}
                <span style={{ color: "blue" }}>Privacy Policy</span>
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
