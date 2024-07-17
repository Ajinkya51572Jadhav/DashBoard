import React, { useState } from "react";
import {
  Layout,
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  Checkbox,
  message,
} from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import bg from "./bg/signin.svg";
import bgimg from "./bg/backimg.jpg";

const { Header, Content } = Layout;
const { Title } = Typography;

export default function Login() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    setLoading(true);
    console.log("Received values:", values);
    // Simulate login request
    setTimeout(() => {
      setLoading(false);
      message.error("Failed! Enter correct username and password.");
    }, 2000);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Row
        justify="center"
        align="middle"
        style={{
          backgroundImage: `url(${bgimg})`,
          backgroundSize: "cover",
          height: "100vh",
        }}
      >
        <Col xs={24} sm={20} md={16} lg={12} xl={10}>
          <Layout>
            <Header className="header" style={{ backgroundColor: "#ffffff" }}>
              <div className="logo" />
            </Header>
            <Content>
              <Row justify="center" style={{ marginTop: "40px" }}>
                <Col xs={24} sm={20} md={18} lg={16} xl={14}>
                  <Row justify="center">
                    <Col xs={20} sm={18} md={16} lg={14} xl={12}>
                      <div
                        style={{
                          backgroundImage: `url(${bg})`,
                          backgroundSize: "cover",
                          marginTop: "40px",
                          marginLeft: "15px",
                          marginRight: "15px",
                          height: "63vh",
                        }}
                      />
                    </Col>
                  </Row>
                </Col>
                <Col xs={24} sm={20} md={18} lg={16} xl={14}>
                  <div
                    style={{
                      backgroundColor: "#3b33d5",
                      height: "70vh",
                      minHeight: "500px",
                    }}
                  >
                    <Row
                      justify="center"
                      align="middle"
                      style={{ height: "100%" }}
                    >
                      <Col xs={20} sm={18} md={16} lg={14} xl={12}>
                        <Title
                          level={2}
                          style={{ color: "#ffffff", textAlign: "center" }}
                        >
                          Sign In
                        </Title>
                        <Form
                          name="login"
                          onFinish={onFinish}
                          layout="vertical"
                          style={{ marginTop: "24px" }}
                        >
                          <Form.Item
                            name="email"
                            label="Username"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your username!",
                              },
                            ]}
                          >
                            <Input prefix={<UserOutlined />} />
                          </Form.Item>
                          <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                              {
                                required: true,
                                message: "Please enter your password!",
                              },
                            ]}
                          >
                            <Input.Password prefix={<LockOutlined />} />
                          </Form.Item>
                          <Form.Item>
                            <Form.Item
                              name="remember"
                              valuePropName="checked"
                              noStyle
                            >
                              <Checkbox>Remember me</Checkbox>
                            </Form.Item>
                          </Form.Item>
                          <Form.Item>
                            <Button
                              type="primary"
                              htmlType="submit"
                              loading={loading}
                              style={{ width: "100%" }}
                            >
                              Sign in
                            </Button>
                          </Form.Item>
                          <Typography.Text style={{ color: "#ffffff" }}>
                            Not registered yet?{" "}
                            <span
                              style={{ color: "#beb4fb", cursor: "pointer" }}
                              onClick={() => {
                                navigate("/register");
                              }}
                            >
                              Create an Account
                            </span>
                          </Typography.Text>
                        </Form>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Content>
          </Layout>
        </Col>
      </Row>
    </Layout>
  );
}

// import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
// import bg from "./bg/signin.svg";
// import bgimg from "./bg/backimg.jpg";
// import Button from "@mui/material/Button";
// import TextField from "@mui/material/TextField";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import Avatar from "@mui/material/Avatar";
// import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
// import { ThemeProvider, createTheme } from "@mui/material/styles";
// import Checkbox from "@mui/material/Checkbox";
// import FormControlLabel from "@mui/material/FormControlLabel";
// import { useState, forwardRef } from "react";
// import Snackbar from "@mui/material/Snackbar";
// import Stack from "@mui/material/Stack";
// import MuiAlert from "@mui/material/Alert";
// import Slide from "@mui/material/Slide";
// import { useNavigate } from "react-router-dom";

// const Alert = forwardRef(function Alert(props, ref) {
//   return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
// });

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//   },
// });

// const boxstyle = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: "75%",
//   height: "70%",
//   bgcolor: "background.paper",
//   boxShadow: 24,
// };

// const center = {
//   position: "relative",
//   top: "50%",
//   left: "37%",
// };

// export default function Login() {
//   const [open, setOpen] = useState(false);
//   const [remember, setRemember] = useState(false);
//   const vertical = "top";
//   const horizontal = "right";
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     setOpen(true);
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log(data.get('email'));
//   };

//   const handleClose = (event, reason) => {
//     if (reason === "clickaway") {
//       return;
//     }
//     setOpen(false);
//   };

//   function TransitionLeft(props) {
//     return <Slide {...props} direction="left" />;
//   }

//   return (
//     <>
//       <Snackbar
//         open={open}
//         autoHideDuration={3000}
//         onClose={handleClose}
//         TransitionComponent={TransitionLeft}
//         anchorOrigin={{ vertical, horizontal }}
//       >
//         <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
//           Failed! Enter correct username and password.
//         </Alert>
//       </Snackbar>
//       <div
//         style={{
//           backgroundImage: `url(${bgimg})`,
//           backgroundSize: "cover",
//           height: "100vh",
//           color: "#f5f5f5",
//         }}
//       >
//         <Box sx={boxstyle}>
//           <Grid container>
//             <Grid item xs={12} sm={12} lg={6}>
//               <Box
//                 style={{
//                   backgroundImage: `url(${bg})`,
//                   backgroundSize: "cover",
//                   marginTop: "40px",
//                   marginLeft: "15px",
//                   marginRight: "15px",
//                   height: "63vh",
//                   color: "#f5f5f5",
//                 }}
//               ></Box>
//             </Grid>
//             <Grid item xs={12} sm={12} lg={6}>
//               <Box
//                 style={{
//                   backgroundSize: "cover",
//                   height: "70vh",
//                   minHeight: "500px",
//                   backgroundColor: "#3b33d5",
//                 }}
//               >
//                 <ThemeProvider theme={darkTheme}>
//                   <Container>
//                     <Box height={35} />
//                     <Box sx={center}>
//                       <Avatar
//                         sx={{ ml: "35px", mb: "4px", bgcolor: "#ffffff" }}
//                       >
//                         <LockOutlinedIcon />
//                       </Avatar>
//                       <Typography component="h1" variant="h4">
//                         Sign In
//                       </Typography>
//                     </Box>
//                     <Box
//                       component="form"
//                       noValidate
//                       onSubmit={handleSubmit}
//                       sx={{ mt: 2 }}
//                     >
//                       <Grid container spacing={1}>
//                         <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                           <TextField
//                             required
//                             fullWidth
//                             id="email"
//                             label="Username"
//                             name="email"
//                             autoComplete="email"
//                           />
//                         </Grid>
//                         <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                           <TextField
//                             required
//                             fullWidth
//                             name="password"
//                             label="Password"
//                             type="password"
//                             id="password"
//                             autoComplete="new-password"
//                           />
//                         </Grid>

//                         <Grid item xs={12} sx={{ ml: "8em", mr: "5em" }}>
//                           <Button
//                             type="submit"
//                             variant="contained"
//                             size="large"
//                             sx={{
//                               mt: "10px",
//                               mr: "20px",
//                               borderRadius: 1,
//                               color: "#ffffff",
//                               minWidth: "170px",
//                               backgroundColor: "#FF9A01",
//                             }}
//                           >
//                             Sign in
//                           </Button>
//                         </Grid>
//                         <Grid item xs={12} sx={{ ml: "3em", mr: "3em" }}>
//                           <Stack direction="row" spacing={2}>
//                             <Typography
//                               variant="body1"
//                               component="span"
//                               style={{ marginTop: "10px" }}
//                             >
//                               Not registered yet?{" "}
//                               <span
//                                 style={{ color: "#beb4fb", cursor: "pointer" }}
//                                 onClick={() => {
//                                   navigate("/register");
//                                 }}
//                               >
//                                 Create an Account
//                               </span>
//                             </Typography>
//                           </Stack>
//                         </Grid>
//                       </Grid>
//                     </Box>
//                   </Container>
//                 </ThemeProvider>
//               </Box>
//             </Grid>
//           </Grid>
//         </Box>
//       </div>
//     </>
//   );
// }
