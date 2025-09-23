import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../store/slice/backgroudSlide";
import { RootState } from "../store/store";
export default function BackgroundChange() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.theme.mode);
  const handleToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <div
      style={{
        backgroundColor: mode === "light" ? "#ffffff" : "#222222",
        color: mode === "light" ? "#000000" : "#ffffff",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={handleToggle}
        style={{ padding: "10px 20px", marginTop: "20px" }}
      >
        {mode === "light" ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}
