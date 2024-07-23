import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Typography,
  Modal,
  Form,
  Input,
  Select,
  Divider,
  Switch,
  Row,
  Col,
  Checkbox,
  List,
} from "antd";

import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Option } = Select;

const { Title } = Typography;

const GroupList = () => {
  const [data, setData] = useState([
    { key: 1, name: "Group 1", status: true },
    { key: 2, name: "Group 2", status: false },
    { key: 3, name: "Group 3", status: true },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingGroup, setEditingGroup] = useState(null);

  const handleStatusToggle = (key) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.key === key ? { ...item, status: !item.status } : item
      )
    );
  };

  const handleDelete = (key) => {
    setData((prevData) => prevData.filter((item) => item.key !== key));
  };

  const handleEdit = (record) => {
    setEditingGroup(record);
    setIsModalVisible(true);
  };

  const handleAdd = () => {
    setEditingGroup(null);
    setIsModalVisible(true);
  };

  const handleModalCancel = () => {
    setIsModalVisible(false);
  };

  const handleModalOk = (values) => {
    if (editingGroup) {
      setData((prevData) =>
        prevData.map((item) =>
          item.key === editingGroup.key ? { ...item, ...values } : item
        )
      );
    } else {
      const newKey = data.length ? data[data.length - 1].key + 1 : 1;
      setData((prevData) => [...prevData, { ...values, key: newKey }]);
    }
    setIsModalVisible(false);
  };

  const columns = [
    {
      title: "Serial No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Group Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status, record) => (
        <Switch
          checked={status}
          onChange={() => handleStatusToggle(record.key)}
          checkedChildren="Active"
          unCheckedChildren="Deactivated"
        />
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            type="primary"
            icon={<EditOutlined />}
            onClick={() => handleEdit(record)}
          >
            Edit
          </Button>
          <Button
            type="danger"
            icon={<DeleteOutlined />}
            onClick={() => handleDelete(record.key)}
          >
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <div style={{ padding: 24 }}>
      <Title level={2}>Group List</Title>
      <Button
        type="primary"
        icon={<PlusOutlined />}
        style={{ marginBottom: 16 }}
        onClick={handleAdd}
      >
        Add Group
      </Button>
      <Table columns={columns} dataSource={data} />
      <Modal
        title={editingGroup ? "Edit Group" : "Add Group"}
        visible={isModalVisible}
        onCancel={handleModalCancel}
        footer={null}
      >
        <GroupAdd
          initialValues={editingGroup}
          onCancel={handleModalCancel}
          onOk={handleModalOk}
        />
      </Modal>
    </div>
  );
};

export default GroupList;

const GroupAdd = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();
  const [status, setStatus] = useState(true);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const users = ["User 1", "User 2", "User 3", "User 4"]; // Example user list

  const onFinish = (values) => {
    console.log("Form Values:", values);
    // Add your save logic here
  };

  const onReset = () => {
    form.resetFields();
  };

  const handleCancel = () => {
    navigate("/group-list");
  };

  const onUserChange = (checkedValues) => {
    setSelectedUsers(checkedValues);
  };

  return (
    <div style={{ padding: 24, maxWidth: 800, margin: "auto" }}>
      <Title level={2}>Add Group</Title>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Form.Item
          name="groupName"
          label="Group Name"
          rules={[{ required: true, message: "Please enter the group name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="status" label="Status" valuePropName="checked">
          <Switch
            checked={status}
            onChange={(checked) => setStatus(checked)}
            checkedChildren="Active"
            unCheckedChildren="Deactivated"
          />
        </Form.Item>
        <Divider />
        <Row gutter={16}>
          <Col span={12}>
            <Title level={4}>Selected Users</Title>
            <Checkbox.Group onChange={onUserChange}>
              <List
                dataSource={users}
                renderItem={(item) => (
                  <List.Item>
                    <Checkbox value={item} />
                  </List.Item>
                )}
              />
            </Checkbox.Group>
          </Col>
          <Col span={12}>
            <Title level={4}>Username</Title>
            <Form.Item
              name="username"
              rules={[{ required: true, message: "Please enter the username" }]}
            >
              <List
                dataSource={users}
                renderItem={(item) => (
                  <List.Item>
                    <Input value={item} />
                  </List.Item>
                )}
              />
            </Form.Item>
          </Col>
        </Row>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button htmlType="button" onClick={onReset}>
              Clear
            </Button>
            <Button htmlType="button" onClick={handleCancel}>
              Cancel
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </div>
  );
};

// const GroupAdd = ({ initialValues, handleModalCancel, handleModalOk }) => {
//   const [form] = Form.useForm();
//   const navigate = useNavigate();
//   const [status, setStatus] = useState(true);

//   const onFinish = (values) => {
//     console.log("Form Values:", values);
//     // Add your save logic here
//   };

//   const onReset = () => {
//     form.resetFields();
//   };

//   const handleCancel = () => {
//     navigate("/group-list");
//   };

//   return (
//     <div style={{ padding: 24, maxWidth: 600, margin: "auto" }}>
//       <Title level={2}>Add Group</Title>
//       <Form form={form} layout="vertical" onFinish={onFinish}>
//         <Form.Item
//           name="groupName"
//           label="Group Name"
//           rules={[{ required: true, message: "Please enter the group name" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item name="status" label="Status" valuePropName="checked">
//           <Switch
//             checked={status}
//             onChange={(checked) => setStatus(checked)}
//             checkedChildren="Active"
//             unCheckedChildren="Deactivated"
//           />
//         </Form.Item>
//         <Divider />
//         <Title level={4}>Users</Title>
//         <Form.Item
//           name="selectedUsers"
//           label="Selected Users"
//           rules={[{ required: true, message: "Please select users" }]}
//         >
//           <Select mode="multiple" placeholder="Select users">
//             <Option value="user1">User 1</Option>
//             <Option value="user2">User 2</Option>
//             <Option value="user3">User 3</Option>
//           </Select>
//         </Form.Item>
//         <Form.Item
//           name="username"
//           label="Username"
//           rules={[{ required: true, message: "Please enter the username" }]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item>
//           <Space>
//             <Button type="primary" htmlType="submit">
//               Save
//             </Button>
//             <Button htmlType="button" onClick={onReset}>
//               Clear
//             </Button>
//             <Button htmlType="button" onClick={handleCancel}>
//               Cancel
//             </Button>
//           </Space>
//         </Form.Item>
//       </Form>
//     </div>
//   );
// };
