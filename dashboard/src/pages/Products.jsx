import React from "react";
import { Layout } from "antd";
import Sidenav from "../components/Sidenav";
import Navbar from "../components/Navbar";
import ProductsList from "../products/ProductsList";

const { Content } = Layout;

export default function Products() {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      {/* <Sidenav /> */}
      <Layout className="site-layout">
        {/* <Navbar /> */}
        <Content style={{ margin: "16px" }}>
          <ProductsList />
        </Content>
      </Layout>
    </Layout>
  );
}

// import React from "react";
// import Sidenav from "../components/Sidenav";
// import Box from "@mui/material/Box";
// import Navbar from "../components/Navbar";
// import ProductsList from "../products/ProductsList";

// export default function Products() {
//   return (
//     <>
//       <div className="bgcolor">
//         <Navbar />
//         <Box height={70} />
//         <Box sx={{ display: "flex" }}>
//           <Sidenav />
//           <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//             <ProductsList />
//           </Box>
//         </Box>
//       </div>
//     </>
//   );
// }
