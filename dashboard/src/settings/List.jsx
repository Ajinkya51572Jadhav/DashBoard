import React, { useState } from "react";
import { Card, Tabs, Typography } from "antd";
import Profile from "./Profile";
import Password from "./Password";
import Account from "./Account";
import Personal from "./Personal";

const { TabPane } = Tabs;
const { Title } = Typography;

function List() {
  const [activeKey, setActiveKey] = useState("1");

  const handleChange = (key) => {
    setActiveKey(key);
  };

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Card style={{ minHeight: "84vh", borderRadius: "10px" }}>
        <Title level={4} style={{ textAlign: "center", marginBottom: "20px" }}>
          User Settings
        </Title>
        <Tabs activeKey={activeKey} onChange={handleChange} centered>
          <TabPane tab="Profile" key="1">
            <Profile />
          </TabPane>
          <TabPane tab="Personal Details" key="2">
            <Personal />
          </TabPane>
          <TabPane tab="My Account" key="3">
            <Account />
          </TabPane>
          <TabPane tab="Change Password" key="4">
            <Password />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
}

export default List;

// import * as React from "react";
// import PropTypes from "prop-types";
// import { styled } from "@mui/material/styles";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Card from "@mui/material/Card";
// import Stack from "@mui/material/Stack";
// import CardContent from "@mui/material/CardContent";
// import Profile from "./Profile";
// import Password from "./Password";
// import Account from "./Account";
// import Personal from "./Personal";

// const StyledTabs = styled((props) => (
//   <Tabs
//     {...props}
//     TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
//   />
// ))({
//   "& .MuiTabs-indicator": {
//     display: "flex",
//     justifyContent: "center",
//     backgroundColor: "transparent",
//   },
//   "& .MuiTabs-indicatorSpan": {
//     maxWidth: 40,
//     width: "100%",
//     backgroundColor: "rgba(53, 138, 148, 1)",
//   },
// });

// const StyledTab = styled((props) => <Tab disableRipple {...props} />)(
//   ({ theme }) => ({
//     textTransform: "none",
//     fontWeight: theme.typography.fontWeightRegular,
//     fontSize: theme.typography.pxToRem(15),
//     marginRight: theme.spacing(1),
//     color: "#141414",
//     fontWeight: "400",
//     "&.Mui-selected": {
//       color: "#0c828f",
//     },
//     "&.Mui-focusVisible": {
//       backgroundColor: "#30c1d1",
//     },
//   })
// );

// function TabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function List() {
//   const [value, setValue] = React.useState(0);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };

//   return (
//     <>
//       <Card sx={{ minHeight: 84 + "vh" }}>
//         <CardContent>
//           <Box sx={{ width: "100%" }}>
//             <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//               <StyledTabs
//                 value={value}
//                 onChange={handleChange}
//                 aria-label="styled tabs example"
//               >
//                 <StyledTab label="Profile" {...a11yProps(0)} />
//                 <StyledTab label="Personal Details" {...a11yProps(1)} />
//                 <StyledTab label="My Account" {...a11yProps(2)} />
//                 <StyledTab label="Change Password" {...a11yProps(3)} />
//               </StyledTabs>
//             </Box>
//             <TabPanel value={value} index={0}>
//               <Profile />
//             </TabPanel>
//             <TabPanel value={value} index={1}>
//               <Personal />
//             </TabPanel>
//             <TabPanel value={value} index={2}>
//               <Account />
//             </TabPanel>
//             <TabPanel value={value} index={3}>
//               <Password />
//             </TabPanel>
//           </Box>
//         </CardContent>
//       </Card>
//     </>
//   );
// }