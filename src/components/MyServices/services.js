import React from "react";
import { Typography, Row, Col, Card } from "antd";
import { motion } from "framer-motion";
import {servicesData} from "../../MyData/MyData";
import "./services.css";
const { Title, Paragraph } = Typography;


export default function Services() {
  return (
    <div id="services-section" className="container">
      <motion.div
        initial={{ opacity: 1, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="title"
        >
          <Title level={2} className="section-title">
          &lt;My Services /&gt;
          </Title>
      </motion.div>

      <Row gutter={[24, 24]} justify="center">
        {servicesData.map((service, index) => (
          <Col
            key={index}
            xs={24}
            sm={24}
            md={12}
            lg={8}
            className="service-col"
          >
            <Card className="service-card" hoverable>
              <div>{service.icon}</div>
              <Title level={4}>{service.title}</Title>
              <Paragraph>{service.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}
