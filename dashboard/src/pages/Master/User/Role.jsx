import React, { useState } from "react";
import {
  Table,
  Button,
  Form,
  Input,
  Select,
  Modal,
  message,
  Space,
} from "antd";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const Role = () => {
  const [form] = Form.useForm();
  const [roles, setRoles] = useState([]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [currentRole, setCurrentRole] = useState(null);
  const navigate = useNavigate();

  const handleSave = (values) => {
    if (currentRole) {
      const updatedRoles = roles.map((role) =>
        role.key === currentRole.key ? { ...role, ...values } : role
      );
      setRoles(updatedRoles);
      message.success("Role updated successfully");
    } else {
      const newRole = { ...values, key: Date.now().toString() };
      setRoles([...roles, newRole]);
      message.success("Role added successfully");
    }
    form.resetFields();
    setIsModalVisible(false);
  };

  const handleEdit = (role) => {
    setCurrentRole(role);
    form.setFieldsValue(role);
    setIsModalVisible(true);
  };

  const handleDelete = (key) => {
    const updatedRoles = roles.filter((role) => role.key !== key);
    setRoles(updatedRoles);
    message.success("Role deleted successfully");
  };

  const showModal = () => {
    setCurrentRole(null);
    form.resetFields();
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    form.resetFields();
    navigate("/"); // Replace with your list page route
  };

  const handleClear = () => {
    form.resetFields();
  };

  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      key: "firstName",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Role",
      dataIndex: "role",
      key: "role",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (status === "active" ? "Active" : "Inactive"),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button onClick={() => handleEdit(record)}>Edit</Button>
          <Button danger onClick={() => handleDelete(record.key)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div>
      <Button type="primary" onClick={showModal}>
        Add Role
      </Button>
      <Table columns={columns} dataSource={roles} style={{ marginTop: 20 }} />

      <Modal
        title={currentRole ? "Edit Role" : "Add Role"}
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form
          form={form}
          onFinish={handleSave}
          initialValues={{ status: "active" }}
        >
          <Form.Item
            label="First Name"
            name="firstName"
            rules={[
              { required: true, message: "Please input the first name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Last Name"
            name="lastName"
            rules={[{ required: true, message: "Please input the last name!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: "Please input the email!" }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Mobile"
            name="mobile"
            rules={[
              { required: true, message: "Please input the mobile number!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: "Please input the password!" }]}
          >
            <Input.Password />
          </Form.Item>
          <Form.Item
            label="Role"
            name="role"
            rules={[{ required: true, message: "Please select the role!" }]}
          >
            <Select>
              <Option value="admin">Admin</Option>
              <Option value="user">User</Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Status"
            name="status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select>
              <Option value="active">Active</Option>
              <Option value="inactive">Inactive</Option>
            </Select>
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" htmlType="submit">
                Save
              </Button>
              <Button onClick={handleClear}>Clear</Button>
              <Button onClick={handleCancel}>Cancel</Button>
            </Space>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Role;

// import React, { useState } from "react";
// import {
//   Table,
//   Button,
//   Form,
//   Input,
//   Select,
//   Modal,
//   message,
//   Space,
// } from "antd";

// const { Option } = Select;

// const Role = () => {
//   const [form] = Form.useForm();
//   const [roles, setRoles] = useState([]);
//   const [isModalVisible, setIsModalVisible] = useState(false);
//   const [currentRole, setCurrentRole] = useState(null);

//   const handleSave = (values) => {
//     if (currentRole) {
//       const updatedRoles = roles.map((role) =>
//         role.key === currentRole.key ? { ...role, ...values } : role
//       );
//       setRoles(updatedRoles);
//       message.success("Role updated successfully");
//     } else {
//       const newRole = { ...values, key: Date.now().toString() };
//       setRoles([...roles, newRole]);
//       message.success("Role added successfully");
//     }
//     form.resetFields();
//     setIsModalVisible(false);
//   };

//   const handleEdit = (role) => {
//     setCurrentRole(role);
//     form.setFieldsValue(role);
//     setIsModalVisible(true);
//   };

//   const handleDelete = (key) => {
//     const updatedRoles = roles.filter((role) => role.key !== key);
//     setRoles(updatedRoles);
//     message.success("Role deleted successfully");
//   };

//   const showModal = () => {
//     setCurrentRole(null);
//     form.resetFields();
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//     form.resetFields();
//   };

//   const columns = [
//     {
//       title: "Role Name",
//       dataIndex: "roleName",
//       key: "roleName",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//       render: (status) => (status === "active" ? "Active" : "Inactive"),
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text, record) => (
//         <Space size="middle">
//           <Button onClick={() => handleEdit(record)}>Edit</Button>
//           <Button danger onClick={() => handleDelete(record.key)}>
//             Delete
//           </Button>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <div>
//       <Button type="primary" onClick={showModal}>
//         Add Role
//       </Button>
//       <Table columns={columns} dataSource={roles} style={{ marginTop: 20 }} />

//       <Modal
//         title={currentRole ? "Edit Role" : "Add Role"}
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form
//           form={form}
//           onFinish={handleSave}
//           initialValues={{ status: "active" }}
//         >
//           <Form.Item
//             label="Role Name"
//             name="roleName"
//             rules={[{ required: true, message: "Please input the role name!" }]}
//           >
//             <Input />
//           </Form.Item>
//           <Form.Item
//             label="Status"
//             name="status"
//             rules={[{ required: true, message: "Please select the status!" }]}
//           >
//             <Select>
//               <Option value="active">Active</Option>
//               <Option value="inactive">Inactive</Option>
//             </Select>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Save
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default Role;
