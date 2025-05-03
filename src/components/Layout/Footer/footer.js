import React from "react";
import { Layout, Typography } from "antd";
import { HiHeart } from "react-icons/hi";
import "./footer.css"; 
const { Footer } = Layout;
const { Text } = Typography;

const CustomFooter = () => {
  return (
    <Footer className="custom-footer">
      <Text className="footer-text">
      © {new Date().getFullYear()} - Designed and Developed by Imen Yousfi.
        <HiHeart style={{ color: "red", verticalAlign: "middle" }} /> 
      </Text>
    </Footer>
  );
};

export default CustomFooter;
