import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store/store";
import { toggleMenu } from "../store/slice/menuSlide";
import { MenuOutlined, CloseOutlined, HomeOutlined, UserOutlined, SettingOutlined } from "@ant-design/icons";
export default function Menu() {
  const dispatch = useDispatch();
  const isOpen = useSelector((state: RootState) => state.menu.isOpen);
  return (
    <div style={{ display: "flex" }}>
      <div
        style={{
          width: isOpen ? "100px" : "30px",
          background: "#001529",
          color: "#fff",
          transition: "all 0.3s ease",
          padding: "10px",
        }}
      >
        <div
          onClick={() => dispatch(toggleMenu())}
        >
          {isOpen ? <CloseOutlined /> : <MenuOutlined />}
        </div>
        <div>
          <div>
            <HomeOutlined />
            {isOpen && <span>Home</span>}
          </div>
          <div>
            <UserOutlined />
            {isOpen && <span>Profile</span>}
          </div>
          <div >
            <SettingOutlined />
            {isOpen && <span>Settings</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
