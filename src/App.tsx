import { Card, Layout, Menu, Space, Typography } from "antd";
import "./Styles/dashboard.css";
import { Content, Header } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { HiHomeModern } from "react-icons/hi2";
import { GoOrganization } from "react-icons/go";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import { IoIosPersonAdd } from "react-icons/io";
import { FaUsers } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";

function App() {
  const [collesped, setCollesped] = useState(true);
  return (
    <Layout className="container">
      <Header
        style={{
          backgroundColor: "#fff ",
        }}
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <GiHamburgerMenu
            onClick={() => setCollesped(!collesped)}
            size={28}
            style={{ marginRight: 20 }}
          />
          <div className="brand">UVMS-Dashboard</div>
        </div>
      </Header>
      <Layout>
        <Sider collapsed={collesped} theme="light">
          <Menu
            mode="inline"
            items={[
              {
                label: "Home",
                key: "home",
                icon: <HiHomeModern size={22} />,
              },
              {
                label: "User Info",
                key: "user_info",
                icon: <FaRegUser size={22} />,
                children: [
                  {
                    label: "Add Profile",
                    key: "add_profile",
                    icon: <IoIosPersonAdd size={20} />,
                  },
                  {
                    label: "All Users",
                    key: "all_users",
                    icon: <FaUsers size={20} />,
                  },
                ],
              },
              {
                label: "About Us",
                key: "about_us",
                icon: <GoOrganization size={22} />,
              },
            ]}
          />
        </Sider>
        <Content className="content">
          <Space direction="horizontal">
            <Card>
              <Space direction="horizontal">
                <FaMoneyBillTrendUp />
                <small>Total Sales</small>
              </Space>
              <Typography.Title>$24,540</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <FaMoneyBillTrendUp />
                <small>Total Sales</small>
              </Space>
              <Typography.Title>$24,540</Typography.Title>
            </Card>
            <Card>
              <Space direction="horizontal">
                <FaMoneyBillTrendUp />
                <small>Total Sales</small>
              </Space>
              <Typography.Title>$24,540</Typography.Title>
            </Card>
          </Space>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
