import React, { useState, useEffect } from "react";
import {
  Modal,
  Typography,
  Input,
  Select,
  Button,
  Form,
  Space,
  message,
} from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { collection, updateDoc, getDocs, doc } from "firebase/firestore";
import { db } from "../firebase-config";
import { useAppStore } from "../appStore";
export default function EditForm({ fid, closeEvent }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [category, setCategory] = useState("");
  const empCollectionRef = collection(db, "products");
  const setRows = useAppStore((state) => state.setRows);
  const rows = useAppStore((state) => state.rows);
  useEffect(() => {
    setName(fid.name);
    setPrice(fid.price);
    setCategory(fid.category);
  }, [fid]);
  const getUsers = async () => {
    const data = await getDocs(empCollectionRef);
    setRows(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePriceChange = (event) => {
    setPrice(event.target.value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };
  const createUser = async () => {
    const userDoc = doc(db, "products", fid.id);
    const newFields = {
      name: name,
      price: Number(price),
      category: category,
      date: String(new Date()),
    };
    await updateDoc(userDoc, newFields);
    getUsers();
    closeEvent();
    message.success("Product has been updated.");
  };
  return (
    <Modal
      title="Edit Product"
      visible={true}
      onCancel={closeEvent}
      footer={null}
      closeIcon={<CloseOutlined />}
    >
      <Form layout="vertical" onFinish={createUser}>
        <Form.Item label="Name" required>
          <Input value={name} onChange={handleNameChange} />
        </Form.Item>
        <Form.Item label="Price" required>
          <Input
            type="number"
            value={price}
            onChange={handlePriceChange}
            prefix="₹"
          />
        </Form.Item>
        <Form.Item label="Category" required>
          <Select value={category} onChange={handleCategoryChange}>
            <Select.Option value="Laptop">Laptop</Select.Option>
            <Select.Option value="Mobile">Mobile</Select.Option>
            <Select.Option value="Electronics">Electronics</Select.Option>
            <Select.Option value="Food">Food</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item>
          <Space style={{ width: "100%", justifyContent: "center" }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Space>
        </Form.Item>
      </Form>
    </Modal>
  );
}
