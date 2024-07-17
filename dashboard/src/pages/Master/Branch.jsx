import React, { useState } from "react";
import {
  Table,
  Button,
  Space,
  Popconfirm,
  Modal,
  Form,
  Input,
  Select,
} from "antd";
import { EditOutlined, DeleteOutlined, PlusOutlined } from "@ant-design/icons";

const { Option } = Select;

const Branch = () => {
  const [dataSource, setDataSource] = useState([
    {
      key: "1",
      branchCode: "001",
      branchName: "John Brown",
      status: "Active",
    },
    {
      key: "2",
      branchCode: "002",
      branchName: "Jim Green",
      status: "Inactive",
    },
    {
      key: "3",
      branchCode: "003",
      branchName: "Joe Black",
      status: "Active",
    },
    // Add more dummy data as needed
  ]);

  const [current, setCurrent] = useState(1); // Track the current page
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [form] = Form.useForm();

  const handleEdit = (key) => {
    // Handle the edit action here
    console.log("Edit record with key:", key);
  };

  const handleDelete = (key) => {
    setDataSource(dataSource.filter((item) => item.key !== key));
  };

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const handleSave = () => {
    form
      .validateFields()
      .then((values) => {
        const newData = {
          key: (dataSource.length + 1).toString(),
          branchCode: values.branchCode,
          branchName: values.branchName,
          status: values.status,
        };
        setDataSource([...dataSource, newData]);
        setIsModalVisible(false);
        form.resetFields();
      })
      .catch((info) => {
        console.log("Validate Failed:", info);
      });
  };

  const columns = [
    {
      title: "SR_NO",
      dataIndex: "SR_NO",
      key: "SR_NO",
      render: (text, record, index) => (current - 1) * 5 + index + 1,
    },
    {
      title: "Branch Code",
      dataIndex: "branchCode",
      key: "branchCode",
    },
    {
      title: "Branch Name",
      dataIndex: "branchName",
      key: "branchName",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
    },
    {
      title: "Action",
      key: "action",
      render: (text, record) => (
        <Space size="middle">
          <Button
            icon={<EditOutlined />}
            onClick={() => handleEdit(record.key)}
          >
            Edit
          </Button>
          <Popconfirm
            title="Are you sure to delete this record?"
            onConfirm={() => handleDelete(record.key)}
            okText="Yes"
            cancelText="No"
          >
            <Button icon={<DeleteOutlined />} danger>
              Delete
            </Button>
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const onChange = (pagination) => {
    setCurrent(pagination.current);
  };

  return (
    <>
      <Button
        type="primary"
        style={{
          display: "flex",
          justifyContent: "end",
          alignItems: "end",
        }}
        icon={<PlusOutlined />}
        onClick={showModal}
      >
        Create Branch
      </Button>

      <Table
        dataSource={dataSource}
        columns={columns}
        pagination={{ pageSize: 5 }}
        onChange={onChange}
      />
      <Modal
        title="Create Branch"
        visible={isModalVisible}
        onCancel={handleCancel}
        onOk={handleSave}
      >
        <Form form={form} layout="vertical">
          <Form.Item
            name="branchCode"
            label="Branch Code"
            rules={[
              { required: true, message: "Please input the branch code!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="branchName"
            label="Branch Name"
            rules={[
              { required: true, message: "Please input the branch name!" },
            ]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="status"
            label="Status"
            rules={[{ required: true, message: "Please select the status!" }]}
          >
            <Select placeholder="Select a status">
              <Option value="Active">Active</Option>
              <Option value="Inactive">Inactive</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default Branch;

// import React, { useState } from "react";
// import { Table, Button, Space, Popconfirm } from "antd";
// import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
// import { render } from "@testing-library/react";

// const Branch = () => {
//   const [dataSource, setDataSource] = useState([
//     {
//       key: "1",
//       name: "John Brown",
//       status: "Active",
//     },
//     {
//       key: "2",
//       name: "Jim Green",
//       status: "Inactive",
//     },
//     {
//       key: "3",
//       name: "Joe Black",
//       status: "Active",
//     },
//     // Add more dummy data as needed
//   ]);

//   const handleEdit = (key) => {
//     // Handle the edit action here
//     console.log("Edit record with key:", key);
//   };

//   const handleDelete = (key) => {
//     setDataSource(dataSource.filter((item) => item.key !== key));
//   };

//   const columns = [
//     {
//       title: "SR_NO",
//       dataIndex: "SR_NO",
//       key: "SR_NO",
//       render: (value, record, index) => index * 1,
//     },
//     {
//       title: "Name",
//       dataIndex: "name",
//       key: "name",
//     },
//     {
//       title: "Status",
//       dataIndex: "status",
//       key: "status",
//     },
//     {
//       title: "Action",
//       key: "action",
//       render: (text, record) => (
//         <Space size="middle">
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => handleEdit(record.key)}
//           >
//             Edit
//           </Button>
//           <Popconfirm
//             title="Are you sure to delete this record?"
//             onConfirm={() => handleDelete(record.key)}
//             okText="Yes"
//             cancelText="No"
//           >
//             <Button icon={<DeleteOutlined />} danger>
//               Delete
//             </Button>
//           </Popconfirm>
//         </Space>
//       ),
//     },
//   ];

//   return (
//     <Table
//       dataSource={dataSource}
//       columns={columns}
//       pagination={{ pageSize: 5 }}
//     />
//   );
// };

// export default Branch;
