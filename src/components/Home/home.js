import React, { useEffect, useRef } from "react";
import { Row, Col, Typography, Button, Image, Space } from "antd";
import {
  GithubOutlined,
  LinkedinOutlined,
  MailOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";
import myImage from "../../assets/images/ImenYousfi.jpg";
import gsap from "gsap";
import "./Home.css";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const Home = () => {
  const comp = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".animate-item", {
        opacity: 0,
        y: 40,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        delay: 0.3,
      });

      gsap.from(".profile-wrap", {
        rotationY: -30,
        rotationX: 10,
        rotationZ: 5,
        opacity: 0,
        duration: 1.5,
        ease: "elastic.out(1, 0.5)",
        delay: 0.8,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={comp} id="home-section">
      <Row justify="center" align="middle" className="container">
        <Col xs={24} md={12} className="content-col">
          <Space direction="vertical" size="middle" className="animate-item">
            <Text className="greeting" type="secondary">
              Hi there! I'm
            </Text>

            <Title className="main-title">
              <span className="name-gradient">Imen Yousfi</span>
            </Title>

            <Title level={3} className="subtitle" type="secondary">
              <span className="highlight">FullStack Developer</span> &{" "}
              <span className="highlight">WordPress</span> Developer
            </Title>

            <Text className="description">
              I create modern web experiences with React, NodeJs, Firebase JavaScript, and
              WordPress. Passionate about design and intuitive user interfaces.
            </Text>
          </Space>

          <Space size="middle" className="btn-group animate-item">
            <a href="/CV-Imen-Yousfi.pdf" download>
              <Button
                type="primary"
                size="large"
                shape="round"
                className="main-btn"
                icon={<DownloadOutlined />}
              >
                Download CV
              </Button>
            </a>

            <Button
              size="large"
              shape="round"
              className="secondary-btn"
              onClick={() => (window.location.href = "#contact")}
            >
              Contact Me
            </Button>
          </Space>

          <Space size="large" className="social-icons animate-item">
            <a
              href="https://github.com/imenyousfi11"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubOutlined />
            </a>
            <a
              href="https://www.linkedin.com/in/imen-yousfi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinOutlined />
            </a>
            <a href="mailto:imenyousfi44.com">
              <MailOutlined />
            </a>
          </Space>
        </Col>

        <Col xs={24} md={12} className="image-col">
          <div className="profile-wrap">
            <Image
              src={myImage}
              alt="Imen Yousfi"
              preview={false}
              className="profile-img"
            />
          </div>
        </Col>
      </Row>

      <div className="scroll-hint animate-item">
        <Text type="secondary">Scroll down</Text>
        <ArrowDownOutlined
          className="scroll-arrow"
          onClick={() => (window.location.href = "#about-section")}
        />
      </div>
    </div>
  );
};

export default Home;
