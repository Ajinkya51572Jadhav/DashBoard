import React from "react";
import { Card, Row, Col, Typography, Divider, Space, Avatar } from "antd";
import {
  MailOutlined,
  PhoneOutlined,
  EnvironmentOutlined,
  UserOutlined,
} from "@ant-design/icons";

const { Title, Text } = Typography;

export default function Profile() {
  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Row gutter={[16, 16]} justify="center" style={{ marginTop: 50 }}>
        <Col md={8}>
          <Card style={{ borderRadius: "10px" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Avatar size={64} icon={<UserOutlined />} />
              <div style={{ marginLeft: "15px" }}>
                <Title level={4} style={{ margin: 0 }}>
                  P Kumar
                </Title>
                <Text type="secondary">Web Developer</Text>
              </div>
            </div>
            <Divider />
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Space align="center">
                <MailOutlined />
                <Text>code@codemstr.com</Text>
              </Space>
              <Divider />
              <Space align="center">
                <PhoneOutlined />
                <Text>(+91) 99999 99999</Text>
              </Space>
              <Divider />
              <Space align="center">
                <EnvironmentOutlined />
                <Text>Patna, India</Text>
              </Space>
            </Space>
          </Card>
        </Col>
        <Col md={16}>
          <Card style={{ borderRadius: "10px" }}>
            <Title level={4}>About Me</Title>
            <Divider />
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore
              consectetur, neque doloribus, cupiditate numquam dignissimos
              laborum fugiat deleniti? Eum quasi quidem quibusdam.
            </Text>
            <Title level={4} style={{ marginTop: 30 }}>
              Details
            </Title>
            <Divider />
            <Space direction="vertical" size="large" style={{ width: "100%" }}>
              <Space>
                <Text strong style={{ width: 140 }}>
                  Full Name:
                </Text>
                <Text>Albert Einstein</Text>
              </Space>
              <Divider />
              <Space>
                <Text strong style={{ width: 140 }}>
                  Father's Name:
                </Text>
                <Text>Sr. Albert Einstein</Text>
              </Space>
              <Divider />
              <Space>
                <Text strong style={{ width: 140 }}>
                  Address:
                </Text>
                <Text>Patna, India</Text>
              </Space>
              <Divider />
              <Space>
                <Text strong style={{ width: 140 }}>
                  Zip Code:
                </Text>
                <Text>809990</Text>
              </Space>
              <Divider />
              <Space>
                <Text strong style={{ width: 140 }}>
                  Website:
                </Text>
                <Text>
                  <a
                    href="https://trickuweb.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    https://trickuweb.com
                  </a>
                </Text>
              </Space>
            </Space>
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
// import Divider from "@mui/material/Divider";
// import Box from "@mui/material/Box";
// import Stack from "@mui/material/Stack";
// import EmailIcon from "@mui/icons-material/Email";
// import SmartphoneIcon from "@mui/icons-material/Smartphone";
// import LocationOnIcon from "@mui/icons-material/LocationOn";

// export default function Profile() {
//   return (
//     <>
//       <Grid container spacing={2} sx={{ mt: "200" }}>
//         <Grid item md={4}>
//           <Grid container spacing={2} sx={{ mt: "20" }}>
//             <Grid item md={12}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" align="left">
//                     P Kumar
//                   </Typography>
//                   <Divider sx={{ mt: 2 }} />
//                   <Stack direction="row" spacing={2}>
//                     <div>
//                       <EmailIcon sx={{ m: 2 }} />
//                     </div>
//                     <div>
//                       <p>code@codemstr.com</p>
//                     </div>
//                   </Stack>
//                   <Divider />
//                   <Stack direction="row" spacing={2}>
//                     <div>
//                       <SmartphoneIcon sx={{ m: 2 }} />
//                     </div>
//                     <div>
//                       <p>(+91) 99999 99999</p>
//                     </div>
//                   </Stack>
//                   <Divider />
//                   <Stack direction="row" spacing={2}>
//                     <div>
//                       <LocationOnIcon sx={{ m: 2 }} />
//                     </div>
//                     <div>
//                       <p>code@codemstr.com</p>
//                     </div>
//                   </Stack>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>
//         <Grid item md={8}>
//           <Grid container spacing={2} sx={{ mt: "200" }}>
//             <Grid item md={12}>
//               <Card>
//                 <CardContent>
//                   <Typography variant="h6" align="left">
//                     About me
//                   </Typography>
//                   <Divider sx={{ mt: 2 }} />
//                   <Typography variant="body2" gutterBottom sx={{ mt: 2 }}>
//                     body2. Lorem ipsum dolor sit amet, consectetur adipisicing
//                     elit. Quos blanditiis tenetur unde suscipit, quam beatae
//                     rerum inventore consectetur, neque doloribus, cupiditate
//                     numquam dignissimos laborum fugiat deleniti? Eum quasi
//                     quidem quibusdam.
//                   </Typography>
//                   <Typography variant="h6" align="left" sx={{ mt: "30px" }}>
//                     Details
//                   </Typography>
//                   <Divider sx={{ mt: 2 }} />
//                   <Box sx={{ m: 2 }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography variant="subtitle2" sx={{ width: "140px" }}>
//                         Full Name:
//                       </Typography>
//                       <Typography variant="body2">Albert Eintein</Typography>
//                     </Stack>
//                   </Box>
//                   <Divider />
//                   <Box sx={{ m: 2 }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography variant="subtitle2" sx={{ width: "140px" }}>
//                         Father's Name:
//                       </Typography>
//                       <Typography variant="body2">
//                         Sr. Albert Eintein
//                       </Typography>
//                     </Stack>
//                   </Box>
//                   <Divider />
//                   <Box sx={{ m: 2 }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography variant="subtitle2" sx={{ width: "140px" }}>
//                         Address:
//                       </Typography>
//                       <Typography variant="body2">Patna, India</Typography>
//                     </Stack>
//                   </Box>
//                   <Divider />
//                   <Box sx={{ m: 2 }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography variant="subtitle2" sx={{ width: "140px" }}>
//                         Zip Code:
//                       </Typography>
//                       <Typography variant="body2">809990</Typography>
//                     </Stack>
//                   </Box>
//                   <Divider />
//                   <Box sx={{ m: 2 }}>
//                     <Stack direction="row" spacing={2}>
//                       <Typography variant="subtitle2" sx={{ width: "140px" }}>
//                         Website:
//                       </Typography>
//                       <Typography variant="body2">
//                         https://trickuweb.com
//                       </Typography>
//                     </Stack>
//                   </Box>
//                 </CardContent>
//               </Card>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>

//       <Box height={20} />
//     </>
//   );
// }
