import React from "react";
import { Layout } from "antd";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import List from "../settings/List";

const { Content } = Layout;

export default function Settings() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Sidenav /> */}
      <Layout className="site-layout">
        {/* <Navbar /> */}
        <Content style={{ margin: "16px" }}>
          <List />
        </Content>
      </Layout>
    </Layout>
  );
}

// import React from "react";
// import Sidenav from "../components/Sidenav";
// import Box from "@mui/material/Box";
// import Navbar from "../components/Navbar";
// import List from "../settings/List";

// export default function Settings() {
//   return (
//     <>
//       <div className="bgcolor">
//         <Navbar />
//         <Box height={70} />
//         <Box sx={{ display: "flex" }}>
//           <Sidenav />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <List />
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// }
