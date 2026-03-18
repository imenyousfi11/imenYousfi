import Home from "./components/Home/home";
import Header from "./components/Layout/Header/header.js";
import Footer from "./components/Layout/Footer/footer.js";
import Contact from "./components/ContactMe/contactMe"
import Projects from "./components/Projects/projects"
import Services from "./components/MyServices/services"
import Skills from "./components/MySkills/skills"
import About from "./components/AboutMe/aboutMe";
import { AppProviders } from './providers/AppProviders';
import { Layout } from 'antd';
import ScrollToTop from "./components/common/ScrollToTop"
const { Content } = Layout;
export default function App() {
  return (
    <AppProviders>
    <Layout className="app-layout">
      <Header />
      <Content>
        <Home />
        <About />
        <Services />
        <Skills/>
        {/* <Projects /> */}
        <Contact />
        <ScrollToTop />
      </Content>
      <Footer />
    </Layout>
  </AppProviders>


  );
}
