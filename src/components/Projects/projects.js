import React from "react";
import { Typography, Row, Col, Card, Image, Button, Space } from "antd";
import { FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./projects.css";
import { projectData } from "../../MyData/MyData";
const { Title, Text } = Typography;

const ProjectCard = ({ project, index }) => (
  <motion.div
    className="project-card-motion"
    initial={{ opacity: 1, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.2, duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.03 }}
  >
    <Card
      hoverable
      className="project-card"
      onClick={() => window.open(project.link, "_blank")}
    >
      <div className="project-image-wrapper">
        <Image
          src={project.thumbnail}
          alt={project.title}
          preview={false}
          className="project-image"
        />
        <div className="project-overlay">
          <Text className="overlay-text">{project.description}</Text>
          <Button
            type="link"
            className="overlay-button"
            icon={<FaExternalLinkAlt />}
            onClick={(e) => {
              e.stopPropagation();
              window.open(project.link, "_blank");
            }}
          >
            View Project
          </Button>
        </div>
      </div>
      <Title level={4} className="project-title">
        {project.title}
      </Title>
      <Space className="project-tech">
        <project.icon className="tech-icon" />
        <Text type="secondary">{project.tech}</Text>
      </Space>
    </Card>
  </motion.div>
);

export default function ProjectsSection() {
  return (
    <div className="container" id="Previous-work-section">
      <div>
        <motion.div
          initial={{ opacity: 1, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="title"
        >
          <Title level={2} className="section-title">
            &lt;Previous Work /&gt;
          </Title>
        </motion.div>
      </div>
      <Row gutter={[24, 24]} justify="center">
        {projectData.map((project, i) => (
          <Col xs={24} sm={24} md={12} lg={12} key={i} className="project-col">
            <ProjectCard project={project} index={i} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
