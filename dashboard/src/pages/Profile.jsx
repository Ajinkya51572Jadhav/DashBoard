import React, { useState } from "react";
import {
  Layout,
  Typography,
  Form,
  Input,
  Button,
  Avatar,
  Card,
  message,
} from "antd";
import { UserOutlined } from "@ant-design/icons";

const { Content } = Layout;
const { Title } = Typography;

const Profile = () => {
  const [editMode, setEditMode] = useState(false);

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const onFinish = (values) => {
    console.log("Received values:", values);
    // Mock API call or logic to save profile data
    message.success("Profile updated successfully");
    setEditMode(false); // Disable edit mode after submission
  };

  const profileData = {
    name: "John Doe",
    email: "johndoe@example.com",
    bio: "Software Developer | Open Source Enthusiast",
    location: "New York, USA",
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Content
        style={{ padding: "24px", display: "flex", justifyContent: "center" }}
      >
        <Card
          style={{ width: "100%", maxWidth: "600px" }}
          cover={
            <div style={{ textAlign: "center", marginTop: "24px" }}>
              <Avatar size={120} icon={<UserOutlined />} />
            </div>
          }
        >
          <div style={{ textAlign: "center", marginBottom: "24px" }}>
            <Title level={3}>{profileData.name}</Title>
            <p>{profileData.email}</p>
          </div>
          {editMode ? (
            <Form
              layout="vertical"
              onFinish={onFinish}
              initialValues={profileData}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: "email", message: "Invalid email format!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Bio"
                name="bio"
                rules={[{ required: true, message: "Please input your bio!" }]}
              >
                <Input.TextArea rows={4} />
              </Form.Item>
              <Form.Item
                label="Location"
                name="location"
                rules={[
                  { required: true, message: "Please input your location!" },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  style={{ marginRight: "10px" }}
                >
                  Save
                </Button>
                <Button onClick={handleEditMode}>Cancel</Button>
              </Form.Item>
            </Form>
          ) : (
            <>
              <p>{profileData.bio}</p>
              <Button type="primary" onClick={handleEditMode}>
                Edit Profile
              </Button>
            </>
          )}
        </Card>
      </Content>
    </Layout>
  );
};

export default Profile;
