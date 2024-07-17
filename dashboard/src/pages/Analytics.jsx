import React from "react";
import Sidenav from "../components/Sidenav";
import { Layout, Typography, Card, Row, Col } from "antd";
import Navbar from "../components/Navbar";
import GeoChart from "../charts/GeoChart";
import PieChart from "../charts/PieChart";
import BarChart from "../charts/BarChart";
import CountUp from "react-countup";
import "../Dashboard.css";

const { Content } = Layout;

export default function Analytics() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Navbar /> */}
      <Layout className="site-layout">
        {/* <Sidenav /> */}
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Row gutter={24}>
              <Col xs={24} sm={12} lg={6}>
                <Card className="gradient" style={{ height: 140 }}>
                  <Typography.Title level={5} style={{ color: "#f0fcfc" }}>
                    Visitors
                  </Typography.Title>
                  <Typography.Title level={2} style={{ color: "#f0fcfc" }}>
                    <CountUp end={22000} duration={0.3} />
                  </Typography.Title>
                  <Typography.Text style={{ color: "#ccd1d1" }}>
                    Since last week
                  </Typography.Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card className="gradient" style={{ height: 140 }}>
                  <Typography.Title level={5} style={{ color: "#f0fcfc" }}>
                    Visitors
                  </Typography.Title>
                  <Typography.Title level={2} style={{ color: "#f0fcfc" }}>
                    <CountUp end={20000} duration={0.4} />
                  </Typography.Title>
                  <Typography.Text style={{ color: "#ccd1d1" }}>
                    Since last week
                  </Typography.Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card className="gradientlight" style={{ height: 140 }}>
                  <Typography.Title level={5} style={{ color: "#f0fcfc" }}>
                    Visitors
                  </Typography.Title>
                  <Typography.Title level={2} style={{ color: "#f0fcfc" }}>
                    <CountUp end={22000} duration={0.6} />
                  </Typography.Title>
                  <Typography.Text style={{ color: "#ccd1d1" }}>
                    Since last week
                  </Typography.Text>
                </Card>
              </Col>
              <Col xs={24} sm={12} lg={6}>
                <Card className="gradientlight" style={{ height: 140 }}>
                  <Typography.Title level={5} style={{ color: "#f0fcfc" }}>
                    Visitors
                  </Typography.Title>
                  <Typography.Title level={2} style={{ color: "#f0fcfc" }}>
                    <CountUp end={32000} duration={0.7} />
                  </Typography.Title>
                  <Typography.Text style={{ color: "#ccd1d1" }}>
                    Since last week
                  </Typography.Text>
                </Card>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 24 }}>
              <Col xs={24} lg={16}>
                <Card style={{ height: "40vh" }}>
                  <BarChart />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card style={{ height: "40vh" }}>
                  <GeoChart />
                </Card>
              </Col>
            </Row>
            <Row gutter={24} style={{ marginTop: 24 }}>
              <Col xs={24} lg={16}>
                <Card style={{ height: "40vh" }}>
                  <PieChart />
                </Card>
              </Col>
              <Col xs={24} lg={8}>
                <Card style={{ height: "40vh" }}></Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}

// import React from "react";
// import Sidenav from "../components/Sidenav";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Navbar from "../components/Navbar";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";
// import CardContent from "@mui/material/CardContent";
// import GeoChart from "../charts/GeoChart";
// import PieChart from "../charts/PieChart";
// import BarChart from "../charts/BarChart";
// import CountUp from "react-countup";

// export default function Analytics() {
//   return (
//     <>
//       <div className="bgcolor">
//         <Navbar />
//         <Box height={70} />
//         <Box sx={{ display: "flex" }}>
//           <Sidenav />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={5}>
//                 <Stack direction="row" spacing={2}>
//                   <Box sx={{ width: "50%" }}>
//                     <Card sx={{ height: 19 + "vh" }} className="gradient">
//                       <CardContent>
//                         <Typography
//                           gutterBottom
//                           variant="p"
//                           component="div"
//                           sx={{ color: "#f0fcfc", padding: "7px 0px" }}
//                         >
//                           Visitors
//                         </Typography>
//                         <Typography
//                           gutterBottom
//                           variant="h5"
//                           component="div"
//                           sx={{ color: "#f0fcfc" }}
//                         >
//                           <CountUp delay={0.2} end={22000} duration={0.3} />
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           sx={{ color: "#ccd1d1" }}
//                         >
//                           Since last week
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                     <Card
//                       sx={{ height: 19 + "vh", marginTop: "16px" }}
//                       className="gradient"
//                     >
//                       <CardContent>
//                         <Typography
//                           gutterBottom
//                           variant="p"
//                           component="div"
//                           sx={{ color: "#f0fcfc", padding: "7px 0px" }}
//                         >
//                           Visitors
//                         </Typography>
//                         <Typography
//                           gutterBottom
//                           variant="h5"
//                           component="div"
//                           sx={{ color: "#f0fcfc" }}
//                         >
//                           <CountUp delay={0.2} end={20000} duration={0.4} />
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           sx={{ color: "#ccd1d1" }}
//                         >
//                           Since last week
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                   <Box sx={{ width: "50%", height: "50%" }}>
//                     <Card sx={{ height: 19 + "vh" }} className="gradientlight">
//                       <CardContent>
//                         <Typography
//                           gutterBottom
//                           variant="p"
//                           component="div"
//                           sx={{ color: "#f0fcfc", padding: "7px 0px" }}
//                         >
//                           Visitors
//                         </Typography>
//                         <Typography
//                           gutterBottom
//                           variant="h5"
//                           component="div"
//                           sx={{ color: "#f0fcfc" }}
//                         >
//                           <CountUp delay={0.2} end={22000} duration={0.6} />
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           sx={{ color: "#ccd1d1" }}
//                         >
//                           Since last week
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                     <Card
//                       sx={{ height: 19 + "vh", marginTop: "16px" }}
//                       className="gradientlight"
//                     >
//                       <CardContent>
//                         <Typography
//                           gutterBottom
//                           variant="p"
//                           component="div"
//                           sx={{ color: "#f0fcfc", padding: "7px 0px" }}
//                         >
//                           Visitors
//                         </Typography>
//                         <Typography
//                           gutterBottom
//                           variant="h5"
//                           component="div"
//                           sx={{ color: "#f0fcfc" }}
//                         >
//                           <CountUp delay={0.2} end={32000} duration={0.7} />
//                         </Typography>
//                         <Typography
//                           variant="body2"
//                           color="text.secondary"
//                           sx={{ color: "#ccd1d1" }}
//                         >
//                           Since last week
//                         </Typography>
//                       </CardContent>
//                     </Card>
//                   </Box>
//                 </Stack>
//               </Grid>
//               <Grid item xs={7}>
//                 <Card sx={{ height: 40 + "vh" }}>
//                   <CardContent>
//                     <BarChart />
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//             <Box height={16} />
//             <Grid container spacing={2}>
//               <Grid item xs={8}>
//                 <Card sx={{ height: 40 + "vh" }}>
//                   <CardContent>
//                     <GeoChart />
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <Grid item xs={4}>
//                 <Card sx={{ height: 40 + "vh" }}>
//                   <CardContent>
//                     <PieChart />
//                   </CardContent>
//                 </Card>
//               </Grid>
//             </Grid>
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// }
