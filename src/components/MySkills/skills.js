import React, { useState, useEffect } from "react";
import { Typography, Row, Col, Button } from "antd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { DownloadOutlined } from "@ant-design/icons";
import { skillsData } from "../../MyData/MyData";
import "./skills.css";
const { Title, Text } = Typography;

const ProgressBarWithCounter = ({ level, color }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      const duration = 2000;
      const startTime = Date.now();

      const animateCount = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        setCount(Math.floor(progress * level));

        if (progress < 1) {
          requestAnimationFrame(animateCount);
        }
      };

      requestAnimationFrame(animateCount);

      controls.start({
        width: `${level}%`,
        transition: { duration: duration / 1000, ease: "easeOut" },
      });
    }
  }, [inView, level, controls]);

  return (
    <div ref={ref}>
      <div>
        <Text strong>{count}%</Text>
      </div>
      <div className="progress-track">
        <motion.div
          initial={{ width: 0 }}
          animate={controls}
          style={{
            height: "100%",
            background: `linear-gradient(90deg, ${color}, ${color}80)`,
            borderRadius: 5,
            boxShadow: `0 0 8px ${color}40`,
          }}
        />
      </div>
    </div>
  );
};

const SkillCard = ({ name, level, color, icon }) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, margin: "-20px" }}
      style={{ marginBottom: 24 }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: `${color}15`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: color,
            fontSize: 20,
            fontWeight: "bold",
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <Text strong style={{ display: "block", marginBottom: 4 }}>
            {name}
          </Text>
          <ProgressBarWithCounter level={level} color={color} />
        </div>
      </div>
    </motion.div>
  );
};

export default function Skills() {
  return (
    <div id="skills-section" className="container">
      <div>
        <motion.div
          initial={{ opacity: 1, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="title"
        >
          <Title level={2} className="section-title">
            &lt;My Skills /&gt;
          </Title>
        </motion.div>

        <Row gutter={[48, 48]} align="middle" justify="center">
          <Col xs={24} md={10} className="skills-btn">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="/CV-Imen-Yousfi.pdf" download style={{ textDecoration: "none" }}>
                <Button
                  type="primary"
                  size="large"
                  shape="round"
                  className="main-btn"
                  icon={<DownloadOutlined />}
                  onClick={() => (window.location.href = "#projects")}
                >
                  Download CV
                </Button>
              </a>
            </motion.div>
          </Col>

          <Col xs={24} md={14}>
            <div className="skills-cards-col">
              {skillsData.map((skill, index) => (
                <SkillCard key={index} {...skill} />
              ))}
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}
