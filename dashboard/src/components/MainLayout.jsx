import React, { useState } from "react";
import { Layout } from "antd";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Sidenav from "./Sidenav";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Analytics from "../pages/Analytics";
import Settings from "../pages/Settings";
import Profile from "../pages/Profile";
import Branch from "../pages/Master/Branch";
import Role from "../pages/Master/User/Role";
import Group from "../pages/Master/User/Group";

const { Content } = Layout;

const MainLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  return (
    <BrowserRouter>
      <Layout style={{ minHeight: "100vh" }}>
        <Sidenav collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

        <Layout className="site-layout">
          <Navbar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

          <Content
            className="site-layout-background"
            style={{
              margin: "24px 16px",
              padding: 24,
              minHeight: 280,
              marginLeft: collapsed ? 80 : 200,
            }}
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/master/branch" element={<Branch />} />
              <Route path="/master/user/role" element={<Role />} />
              <Route path="/master/user/group" element={<Group />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </BrowserRouter>
  );
};

export default MainLayout;

// import React, { useState } from "react";
// import { Layout } from "antd";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Sidenav from "./Sidenav";
// import Navbar from "./Navbar";
// import Home from "../pages/Home";
// import Products from "../pages/Products";
// import Analytics from "../pages/Analytics";
// import Settings from "../pages/Settings";
// import Profile from "../pages/Profile";
// import Branch from "../pages/Master/Branch";
// import Role from "../pages/Master/User/Role";
// import Group from "../pages/Master/User/Group";

// const { Content } = Layout;

// const MainLayout = () => {
//   const [collapsed, setCollapsed] = useState(false);

//   const toggleCollapsed = () => {
//     setCollapsed(!collapsed);
//   };

//   return (
//     <BrowserRouter>
//       <Layout style={{ minHeight: "100vh" }}>
//         {/* Sidenav */}
//         <Sidenav collapsed={collapsed} />

//         <Layout className="site-layout">
//           {/* Navbar */}
//           <Navbar collapsed={collapsed} toggleCollapsed={toggleCollapsed} />

//           <Content
//             className="site-layout-background"
//             style={{
//               margin: "24px 16px",
//               padding: 24,
//               minHeight: 280,
//               marginLeft: collapsed ? 80 : 200,
//             }}
//           >
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/products" element={<Products />} />
//               <Route path="/analytics" element={<Analytics />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/profile" element={<Profile />} />
//               {/* Master Menus */}
//               <Route path="/master/branch" element={<Branch />} />
//               <Route path="/master/user/role" element={<Role />} />
//               <Route path="/master/user/group" element={<Group />} />
//             </Routes>
//           </Content>
//         </Layout>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default MainLayout;

// import React from "react";
// import { Layout } from "antd";
// import { Routes, Route, BrowserRouter } from "react-router-dom";
// import Sidenav from "./Sidenav";
// import Navbar from "./Navbar";
// import Home from "../pages/Home";
// import Products from "../pages/Products";
// import Analytics from "../pages/Analytics";
// import Login from "../pages/Login";
// import Settings from "../pages/Settings";

// const { Content } = Layout;

// const MainLayout = () => {
//   return (
//     <BrowserRouter>
//       <Layout style={{ minHeight: "100vh" }}>
//         <Navbar />
//         <Layout>
//           <Sidenav />
//           <Layout style={{ padding: "0 24px 24px" }}>
//             <Content
//               className="site-layout-background"
//               style={{ padding: 24, margin: 0, minHeight: 280 }}
//             >
//               <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/products" element={<Products />} />
//                 <Route path="/analytics" element={<Analytics />} />
//                 <Route path="/settings" element={<Settings />} />
//               </Routes>
//             </Content>
//           </Layout>
//         </Layout>
//       </Layout>
//     </BrowserRouter>
//   );
// };

// export default MainLayout;
