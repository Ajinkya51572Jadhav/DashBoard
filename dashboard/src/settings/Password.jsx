import React from "react";
import { Card, Row, Col, Typography, Divider, Input, Form, Button } from "antd";

const { Title } = Typography;

export default function Password() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Row justify="center" style={{ marginTop: 50 }}>
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: "10px" }}>
            <Title
              level={4}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Change Password
            </Title>
            <Divider />
            <Form layout="vertical">
              <Form.Item
                label="Current Password"
                name="current-password"
                rules={[
                  {
                    required: true,
                    message: "Please input your current password!",
                  },
                ]}
              >
                <Input.Password placeholder="Enter current password" />
              </Form.Item>
              <Form.Item
                label="New Password"
                name="new-password"
                rules={[
                  {
                    required: true,
                    message: "Please input your new password!",
                  },
                ]}
              >
                <Input.Password placeholder="Enter new password" />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="confirm-password"
                rules={[
                  {
                    required: true,
                    message: "Please confirm your new password!",
                  },
                ]}
              >
                <Input.Password placeholder="Confirm new password" />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  Change Password
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import TextField from "@mui/material/TextField";
// import Divider from "@mui/material/Divider";

// export default function Password() {
//   return (
//     <>
//       <Grid container spacing={2} sx={{ mt: "20" }}>
//         <Grid item xs={12}>
//           <Card>
//             <CardContent>
//               <Typography variant="h6" align="left">
//                 Change Password
//               </Typography>
//               <Divider sx={{mt: 2}} />
//               <Grid container spacing={2} sx={{ mt: "20" }}>
//                 <Grid item xs={6}>
//                   <TextField
//                     id="current-password"
//                     type="password"
//                     label="Current Password"
//                     name="current-password"
//                     sx={{ marginTop: "30px", minWidth: "100%" }}
//                     variant="outlined"
//                   />
//                 </Grid>
//               </Grid>
//               <Grid container spacing={2} sx={{ mt: "20" }}>
//                 <Grid item xs={6}>
//                   <TextField
//                     id="new-password"
//                     type="password"
//                     label="New Password"
//                     name="new-password"
//                     sx={{ marginTop: "30px", minWidth: "100%" }}
//                     variant="outlined"
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     type="password"
//                     id="confirm-password"
//                     label="Confirm Password"
//                     name="confirm-password"
//                     sx={{ marginTop: "30px", minWidth: "100%" }}
//                     variant="outlined"
//                   />
//                 </Grid>
//               </Grid>
//             </CardContent>
//           </Card>
//         </Grid>
//       </Grid>
//     </>
//   );
// }
