import React from "react";
import {
  Card,
  Row,
  Col,
  Typography,
  Divider,
  Input,
  Select,
  Form,
  Space,
} from "antd";

const { Title } = Typography;
const { TextArea } = Input;
const { Option } = Select;

export default function Personal() {
  const utypes = [
    { value: "Super Admin", label: "Super Admin" },
    { value: "Admin", label: "Admin" },
    { value: "Manager", label: "Manager" },
    { value: "User", label: "User" },
  ];

  return (
    <div
      style={{
        padding: "50px",
        backgroundColor: "#f0f2f5",
        minHeight: "100vh",
      }}
    >
      <Row gutter={[24, 24]} justify="center">
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: "10px" }}>
            <Title
              level={3}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Personal Information
            </Title>
            <Divider />
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item label="Name">
                    <Input placeholder="P Kumar" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Location">
                    <Input placeholder="India" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Bio">
                <TextArea rows={3} placeholder="Enter your bio" />
              </Form.Item>
              <Form.Item label="User Type">
                <Select defaultValue="Super Admin">
                  {utypes.map((option) => (
                    <Option key={option.value} value={option.value}>
                      {option.label}
                    </Option>
                  ))}
                </Select>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        <Col xs={24} md={12}>
          <Card style={{ borderRadius: "10px" }}>
            <Title
              level={3}
              style={{ textAlign: "center", marginBottom: "20px" }}
            >
              Contact Information
            </Title>
            <Divider />
            <Form layout="vertical">
              <Row gutter={16}>
                <Col xs={24} md={12}>
                  <Form.Item label="Contact Phone">
                    <Input type="number" placeholder="91999999999" />
                  </Form.Item>
                </Col>
                <Col xs={24} md={12}>
                  <Form.Item label="Email">
                    <Input type="email" placeholder="code@codingmstr.com" />
                  </Form.Item>
                </Col>
              </Row>
              <Form.Item label="Profile URL">
                <Input placeholder="https://codingmstr.com" />
              </Form.Item>
              <Form.Item label="Address">
                <TextArea rows={3} placeholder="Enter your address" />
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </div>
  );
}
