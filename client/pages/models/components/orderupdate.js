// import React, { useState } from "react";
// // import Update from "../images/update.png";
// import axios from "axios";
// import Link from "next/link";
// import { LoadingButton } from "@material-ui/lab";
// const OrderUpdate = () => {
//   const [orderOtp, setOrderOtp] = useState("");
//   const [order, setOrder] = useState("");
//   const [fetch, setFetch] = useState(false);
//   const { email, _id, name, status } = order;
//   const userId = _id;
//   const id = orderOtp.toString();
//   console.log(order);
//   const onSubmits = async () => {
//     try {
//       const res = await axios.get(`/api/cartOtp/${id}`);
//       setOrder(res.data.user);
//       if (res !== "undifined") {
//         setFetch(true);
//       }
//       console.log("plese valid");
//     } catch (error) {
//       toast.dark(error.response.data.err);
//     }
//   };
//   const handleChange = (e) => {
//     // alert(e.target.value);

//     const value = e.target.value;
//     update(value);
//   };

//   const update = async (value) => {
//     try {
//       const res = await axios.post("/api/status", {
//         userId,
//         value,
//         email,
//       });
//       setOrder(res.data.result);
//     } catch (error) {
//       toast.dark(error.response.data.error);
//     }

//     // console.log("oppp==========", res.data.result);
//   };

//   return (
//     <div>
//       <section>
//         <div className="container">
//           <div className="row">
//             <div className="col-md-4">
//               <div>
//                 {/* <img src={Update} alt="up" className="img-fluid" /> */}
//               </div>
//             </div>
//             <div className="col-md-8">
//               <h1>Update the Order Now</h1>
//               {order !== null ? (
//                 <div className="text-canter">
//                   <h3>{email}</h3>
//                   <h3>{name}</h3>
//                   <h3>{status}</h3>
//                 </div>
//               ) : null}
//               {fetch ? (
//                 <div
//                   style={{
//                     justifyContent: "center",
//                     alignItems: "center",
//                     padding: 10,

//                     margin: "auto",
//                     backgroundColor: "rgb(245, 245, 247)",
//                     borderRadius: "15px",
//                     marginBottom: 10,
//                   }}
//                 >
//   <select
//     className=""
//     placeholder="Select Brand"
//     style={{
//       paddingLeft: 20,
//       fontSize: 20,
//     }}
//     // value={data.find((obj) => obj.value === selectedValue)} // set selected value
//     // set list of the data
//     onChange={handleChange} // assign onChange function
//   >
//     <option value="orderd"> orderd</option>
//     <option value="picked"> picked</option>
//     <option value="patner store"> patner store</option>
//     <option value="repaired">repaired</option>
//     <option value="deliverd"> deliverd</option>
//   </select>
//                 </div>
//               ) : null}
//               <div className="contact-form ">
//                 <div className="form-field col-md-6 ">
//                   <input
//                     className="input-text js-input"
//                     type="number"
//                     placeholder="Enter otp"
//                     onChange={(e) => setOrderOtp(e.target.value)}
//                     value={orderOtp}
//                   />
//                 </div>
//               </div>
//               <div>
//                 <LoadingButton
//                   style={{
//                     backgroundColor: "#0070f3",
//                     padding: 10,
//                     outline: "none",
//                     boarder: "none",
//                   }}
//                   fullWidth
//                   size="large"
//                   type="submit"
//                   variant="contained"
//                   onClick={() => onSubmits()}
//                 >
//                   Login
//                 </LoadingButton>
//                 {/* <Link
//                   style={{ padding: 20 }}
//                   onClick={() => onSubmits()}
//                   class="app-btn blu flex vert  "
//                   href=""
//                 >
//                   <a>
//                     <span class="big-txt">Service</span>
//                   </a>
//                 </Link> */}
//               </div>
//             </div>
//             <div class="container px-1 px-md-4 py-5 mx-auto">
//               <div class="card">
//                 <div class="row d-flex justify-content-between px-3 top">
//                   <div class="d-flex">
//                     <h5>
//                       ORDER{" "}
//                       <span class="text-primary font-weight-bold">
//                         #Y34XDHR
//                       </span>
//                     </h5>
//                   </div>
//                   <div class="d-flex flex-column text-sm-right">
//                     <p class="mb-0">
//                       Expected Arrival <span>01/12/19</span>
//                     </p>
//                     <p>
//                       USPS{" "}
//                       <span class="font-weight-bold">
//                         234094567242423422898
//                       </span>
//                     </p>
//                   </div>
//                 </div>
//                 <div class="row d-flex justify-content-center">
//                   <div class="col-12">
//                     <ul id="progressbar" class="text-center">
//                       <li class="active step0"></li>
//                       <li class="active step0"></li>
//                       <li class="active step0"></li>
//                       <li class="step0"></li>
//                     </ul>
//                   </div>
//                 </div>
//                 <div class="row justify-content-between top">
//                   <div class="row d-flex icon-content">
//                     {" "}
//                     <img class="icon" src="https://i.imgur.com/9nnc9Et.png" />
//                     <div class="d-flex flex-column">
//                       <p class="font-weight-bold">
//                         Order
//                         <br />
//                         Processed
//                       </p>
//                     </div>
//                   </div>
//                   <div class="row d-flex icon-content">
//                     {" "}
//                     <img class="icon" src="https://i.imgur.com/u1AzR7w.png" />
//                     <div class="d-flex flex-column">
//                       <p class="font-weight-bold">
//                         Order
//                         <br />
//                         Shipped
//                       </p>
//                     </div>
//                   </div>
//                   <div class="row d-flex icon-content">
//                     {" "}
//                     <img class="icon" src="https://i.imgur.com/TkPm63y.png" />
//                     <div class="d-flex flex-column">
//                       <p class="font-weight-bold">
//                         Order
//                         <br />
//                         En Route
//                       </p>
//                     </div>
//                   </div>
//                   <div class="row d-flex icon-content">
//                     {" "}
//                     <img class="icon" src="https://i.imgur.com/HdsziHP.png" />
//                     <div class="d-flex flex-column">
//                       <p class="font-weight-bold">
//                         Order
//                         <br />
//                         Arrived
//                       </p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default OrderUpdate;

import React, { useState } from "react";
import toast from "../../ToastComponent/toast";
import axios from "axios";
import Link from "next/link";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        <a>Realback</a>
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignIn() {
  const notify = React.useCallback((type, message) => {
    toast({ type, message });
  }, []);
  const [orderOtp, setOrderOtp] = useState("");
  const [order, setOrder] = useState("");
  const [fetch, setFetch] = useState(false);
  const { email, _id, name, status } = order;
  const userId = _id;
  const id = orderOtp.toString();
  console.log(order);
  const onSubmits = async () => {
    try {
      const res = await axios.get(`/api/cartOtp/${id}`);
      setOrder(res.data.user);
      if (res !== "undifined") {
        setFetch(true);
      }
      console.log("plese valid");
    } catch (error) {
      console.log("error");
      notify("error", error.response.data.err);
    }
  };
  const handleChange = (e) => {
    // alert(e.target.value);

    const value = e.target.value;
    update(value);
  };

  const update = async (value) => {
    try {
      const res = await axios.post("/api/status", {
        userId,
        value,
        email,
      });
      notify("success", `Order has been updated  ${email}`);
      setOrder(res.data.result);
    } catch (error) {
      notify("error", error.response.data.error);

      // console.log("oppp==========", res.data.result);
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h3">
            Update the Order Now
          </Typography>
          {order !== null ? (
            <Box>
              <h2>{email}</h2>

              <h2>{name}</h2>

              <h2>{status}</h2>
            </Box>
          ) : null}
          <Box noValidate sx={{ mt: 1 }}>
            <TextField
              onChange={(e) => setOrderOtp(e.target.value)}
              value={orderOtp}
              margin="normal"
              required
              fullWidth
              id="email"
              label="Enter OTP"
              name="email"
              autoComplete="email"
              autoFocus
            />

            {fetch ? (
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Age</InputLabel>
                <Select
                  fullWidth
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={status}
                  label="Update order"
                  onChange={handleChange}
                >
                  <MenuItem value="orderd"> orderd</MenuItem>
                  <MenuItem value="picked"> picked</MenuItem>
                  <MenuItem value="patner store"> patner store</MenuItem>
                  <MenuItem value="repaired">repaired</MenuItem>
                  <MenuItem value="deliverd"> deliverd</MenuItem>
                </Select>
              </FormControl>
            ) : null}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={() => onSubmits()}
            >
              Update
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </ThemeProvider>
  );
}
