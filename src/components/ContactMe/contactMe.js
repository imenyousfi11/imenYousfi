import React, { useState } from "react";
import { Typography, Input, Button, Form, Row, Col, Space, App } from "antd";
import {
  MailOutlined,
  LinkedinOutlined,
  GithubOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "./contactMe.css";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

const Contact = () => {
  const { message } = App.useApp();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const handleFinish = (values) => {
    setLoading(true);

    const templateParams = {
      name: values.name,
      email: values.email,
      message: values.message,
    };

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (response) => {
          message.success("Message sent successfully !");
          form.resetFields();
          setLoading(false);
        },
        (error) => {
          message.error("Error sending. Please try again..");
          setLoading(false);
        }
      );
  };

  return (
    <div id="contact" className="container">
      <motion.div
        initial={{ opacity: 1, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="title"
      >
        <Title level={2} className="section-title contact-title">
          &lt;Contact Me /&gt;
        </Title>
      </motion.div>

      <Row gutter={[48, 48]} align="middle" justify="center">
        <Col xs={24} md={10}>
          <Title level={4} className="contact-subtitle">
            Let's Work Together
          </Title>
          <Paragraph className="contact-text">
            I'm available for freelance projects or full-time opportunities.
            Reach out and let's create something amazing together!
          </Paragraph>
          <Title level={4} className="social-title">
            FIND ME ON
          </Title>

          <Space size="large" className="social-icons animate-item">
            <a
              href="https://github.com/imenyousfi11"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/imen-yousfi"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <LinkedinOutlined />
            </a>
            <a href="mailto:imenyousfi44.com" className="social-link">
              <MailOutlined />
            </a>
          </Space>
        </Col>

        <Col xs={24} md={14} className="contact-form-col">
          <motion.div
            initial={{ opacity: 1, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="contact-form-container"
          >
            <Form
              form={form}
              layout="vertical"
              onFinish={handleFinish}
              className="contact-form"
            >
              <Form.Item
                name="name"
                label="Name"
                rules={[{ required: true, message: "Please enter your name" }]}
                className="form-item"
              >
                <Input placeholder="Your name" className="form-input" />
              </Form.Item>
              <Form.Item
                name="email"
                label="Email"
                rules={[
                  { required: true, message: "Please enter your email" },
                  { type: "email", message: "Please enter a valid email" },
                ]}
                className="form-item"
              >
                <Input placeholder="Your email" className="form-input" />
              </Form.Item>
              <Form.Item
                name="message"
                label="Message"
                rules={[
                  { required: true, message: "Please enter your message" },
                ]}
                className="form-item"
              >
                <TextArea
                  rows={4}
                  placeholder="Your message"
                  className="form-textarea"
                />
              </Form.Item>
              <Form.Item className="form-submit-item">


                <Button
                  size="large"
                  htmlType="submit"
                  shape="round"
                  className="secondary-btn"
                  loading={loading}

                >
                  Send Message
                </Button>


              </Form.Item>
            </Form>
          </motion.div>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
