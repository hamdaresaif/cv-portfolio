import React, { useState } from 'react';
import { Button, Form, Input, Modal, Select } from 'antd';
const Callback = (props) => {
    const {setIsModalOpen,isModalOpen}=props
    const [loading, setLoading] = useState(false);
      const handleOk = () => {
        setIsModalOpen(false);
      };
      const handleCancel = () => {
        setIsModalOpen(false);
      };
      const onFinish = (values) => {
        console.log('Success:', values);
      };
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
  return (
    <>

      <Modal title="Contact Form" open={isModalOpen}  
           footer={[
            <Button key="back" onClick={handleCancel}>
              Cancel
            </Button>,

          ]}
      >
      <Form
    name="basic"
 
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Name"
      name="Name"
      rules={[
        {
          required: true,
          message: 'Please input your Name!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Mobile Number"
      name="Number"
      type='number'
      rules={[
        {
          required: true,
          message: 'Please input your Number!',
        },
      ]}
    >
      <Input />
    </Form.Item>



    <Form.Item

    >
      <Button className='bg-[#ef7123] text-white !hover:border-[#ef7123] !hover:text-white'  htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>

      </Modal>
    </>
  );
};
export default Callback;