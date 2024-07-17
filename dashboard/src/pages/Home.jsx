import React from "react";
import Sidenav from "../components/Sidenav";
import {
  Layout,
  Typography,
  Card,
  Row,
  Col,
  Statistic,
  Space,
  Divider,
} from "antd";
import Navbar from "../components/Navbar";
import "../Dashboard.css";
import {
  CreditCardOutlined,
  ShoppingOutlined,
  ShopOutlined,
} from "@ant-design/icons";
import VBarChart from "../charts/VBarChart";
import DashAccordion from "../components/DashAccordion";
import CountUp from "react-countup";

const { Content } = Layout;

export default function Home() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Navbar /> */}
      <Layout className="site-layout">
        {/* <Sidenav /> */}
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content className="site-layout-background" style={{ padding: 24 }}>
            <Row gutter={24}>
              <Col span={16}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Card className="gradient" style={{ height: 140 }}>
                    <Space>
                      <CreditCardOutlined style={{ fontSize: 24 }} />
                      <Statistic
                        title="Total Earning"
                        value={`$`}
                        prefix={<CountUp end={500} duration={0.3} />}
                        precision={2}
                        suffix={"k"}
                      />
                    </Space>
                  </Card>
                  <Card className="gradientlight" style={{ height: 140 }}>
                    <Space>
                      <ShoppingOutlined style={{ fontSize: 24 }} />
                      <Statistic
                        title="Total Order"
                        value={`$`}
                        prefix={<CountUp end={900} duration={0.4} />}
                        precision={2}
                        suffix={"k"}
                      />
                    </Space>
                  </Card>
                </Space>
              </Col>
              <Col span={8}>
                <Space direction="vertical" style={{ width: "100%" }}>
                  <Card className="gradientlight">
                    <Space>
                      <ShopOutlined style={{ fontSize: 24 }} />
                      <div>
                        <Typography.Text className="pricetitle fontwhite">
                          $203k
                        </Typography.Text>
                        <br />
                        <Typography.Text className="pricesubtitle fontlightgrey">
                          Total Income
                        </Typography.Text>
                      </div>
                    </Space>
                  </Card>
                  <Card>
                    <Space>
                      <ShopOutlined style={{ fontSize: 24 }} />
                      <div>
                        <Typography.Text className="pricetitle">
                          $203k
                        </Typography.Text>
                        <br />
                        <Typography.Text className="pricesubtitle">
                          Total Income
                        </Typography.Text>
                      </div>
                    </Space>
                  </Card>
                </Space>
              </Col>
            </Row>

            <Divider style={{ margin: "24px 0" }} />

            <Row gutter={24}>
              <Col span={16}>
                <Card style={{ height: "60vh" }}>
                  <VBarChart />
                </Card>
              </Col>
              <Col span={8}>
                <Card style={{ height: "60vh" }}>
                  <div className="paddingall">
                    <Typography.Title level={4}>
                      Popular Products
                    </Typography.Title>
                  </div>
                  <Divider />
                  <DashAccordion />
                </Card>
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
// import DashAccordion from "../components/DashAccordion";
// import Box from "@mui/material/Box";
// import Navbar from "../components/Navbar";
// import Grid from "@mui/material/Grid";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";
// import Typography from "@mui/material/Typography";
// import Stack from "@mui/material/Stack";
// import "../Dashboard.css";
// import StorefrontIcon from "@mui/icons-material/Storefront";
// import ShoppingBagIcon from "@mui/icons-material/ShoppingBag";
// import CreditCardIcon from "@mui/icons-material/CreditCard";
// import VBarChart from "../charts/VBarChart";
// import CountUp from "react-countup";

// export default function Home() {
//   return (
//     <>
//       <div className="bgcolor">
//         <Navbar />
//         <Box height={70} />
//         <Box sx={{ display: "flex" }}>
//           <Sidenav />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <Grid container spacing={2}>
//               <Grid item xs={8}>
//                 <Stack direction="row" spacing={2}>
//                   <Card
//                     className="gradient"
//                     sx={{ minWidth: 49 + "%", height: 140 }}
//                   >
//                     <div className="iconstylewhite">
//                       <CreditCardIcon />
//                     </div>
//                     <CardContent>
//                       <Typography
//                         gutterBottom
//                         variant="h5"
//                         component="div"
//                         sx={{ color: "#f0fcfc" }}
//                       >
//                         $<CountUp delay={0.2} end={500} duration={0.3} />
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{ color: "#ccd1d1" }}
//                       >
//                         Total Earning
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                   <Card
//                     className="gradientlight"
//                     sx={{ minWidth: 49 + "%", height: 140 }}
//                   >
//                     <div className="iconstylewhite">
//                       <ShoppingBagIcon />
//                     </div>
//                     <CardContent>
//                       <Typography
//                         gutterBottom
//                         variant="h5"
//                         component="div"
//                         sx={{ color: "#f0fcfc" }}
//                       >
//                         $<CountUp delay={0.2} end={900} duration={0.4} />
//                       </Typography>
//                       <Typography
//                         variant="body2"
//                         color="text.secondary"
//                         sx={{ color: "#ccd1d1" }}
//                       >
//                         Total Order
//                       </Typography>
//                     </CardContent>
//                   </Card>
//                 </Stack>
//               </Grid>
//               <Grid item xs={4}>
//                 <Stack spacing={2}>
//                   <Card className="gradientlight">
//                     <Stack spacing={2} direction="row">
//                       <div className="iconstylewhite">
//                         <StorefrontIcon />
//                       </div>
//                       <div className="paddingall">
//                         <span className="pricetitle fontwhite">$203k</span>
//                         <br />
//                         <span className="pricesubtitle fontlightgrey">
//                           Total Income
//                         </span>
//                       </div>
//                     </Stack>
//                   </Card>
//                   <Card>
//                     <Stack spacing={2} direction="row">
//                       <div className="iconstyle">
//                         <StorefrontIcon />
//                       </div>
//                       <div className="paddingall">
//                         <span className="pricetitle">$203k</span>
//                         <br />
//                         <span className="pricesubtitle">Total Income</span>
//                       </div>
//                     </Stack>
//                   </Card>
//                 </Stack>
//               </Grid>
//             </Grid>

//             <Box height={20} />

//             <Grid container spacing={2}>
//               <Grid item xs={8}>
//                 <Card sx={{ height: 60 + "vh" }}>
//                   <CardContent>
//                     <VBarChart />
//                   </CardContent>
//                 </Card>
//               </Grid>
//               <Grid item xs={4}>
//                 <Card sx={{ height: 60 + "vh" }}>
//                   <CardContent>
//                     <div className="paddingall">
//                       <span className="pricetitle">Popular Products</span>
//                     </div>
//                     <Box height={10} />
//                     <DashAccordion />
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
