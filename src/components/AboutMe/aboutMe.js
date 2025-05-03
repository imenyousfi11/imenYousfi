import React, { useState, useRef, useEffect } from "react";
import { Row, Col, Image, Typography, Tabs, Timeline, Card } from "antd";
import { LuCheck, LuCalendar } from "react-icons/lu";
import { HiAcademicCap } from "react-icons/hi";
import { MdDeveloperMode } from "react-icons/md";
import { educationData } from "../../MyData/MyData";
import { experienceData } from "../../MyData/MyData";
import "./aboutMe.css";

const { Title, Paragraph, Text } = Typography;

export default function AboutMe() {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Configuration des onglets avec la nouvelle syntaxe items
  const tabItems = [
    {
      key: "education",
      label: (
        <span>
          <HiAcademicCap className="tab-icon" />
          Education
        </span>
      ),
      children: (
        <Timeline
          className="custom-timeline"
          mode="left"
          items={educationData.map((item) => ({
            children: (
              <Card className="timeline-card" title={item.degree} extra={<LuCheck />}>
                <Text className="company-name">{item.institution}</Text>
                <div className="date-text">
                  <LuCalendar />
                  <Text type="secondary">{item.date}</Text>
                </div>
              </Card>
            ),
          }))}
        />
      ),
    },
    {
      key: "experience",
      label: (
        <span>
          <MdDeveloperMode className="tab-icon" />
          Experience
        </span>
      ),
      children: (
        <Timeline
          className="custom-timeline"
          mode="left"
          items={experienceData.map((item) => ({
            children: (
              <Card className="timeline-card" title={item.post} extra={<LuCheck />}>
                <Text className="company-name">{item.company}</Text>
                <div className="date-text">
                  <LuCalendar />
                  <Text type="secondary">{item.date}</Text>
                </div>
              </Card>
            ),
          }))}
        />
      ),
    },
  ];

  return (
    <div
      id="about-section"
      className={`container${visible ? " visible" : ""}`}
      ref={sectionRef}
    >
      <div className="about-container">
        <Row gutter={[48, 48]} align="middle" justify="center">
          <Col xs={24} md={10}>
            <Image
              src={require("../../assets/images/ImenYousfi-about.png")}
              alt="My Photo"
              className="about-image"
              preview={false}
            />
          </Col>
          <Col xs={24} md={14}>
            <Title level={2} className="section-title">
              About Me
            </Title>
            <Paragraph className="about-text">
              I am a passionate Software Engineer with 4+ years of specialized
              experience in Front-End Development. My expertise lies in crafting
              responsive, high-performance web applications using cutting-edge
              technologies like React.js, Next.js, and modern JavaScript/TypeScript
              ecosystems.
            </Paragraph>
            <Paragraph className="about-text">
              As a WordPress specialist, I create custom themes and plugins that
              transform client visions into beautiful, functional websites. My
              approach combines technical precision with creative design thinking
              to deliver exceptional user experiences.
            </Paragraph>
            <Tabs defaultActiveKey="education" className="about-tabs" items={tabItems} />
          </Col>
        </Row>
      </div>
    </div>
  );
}