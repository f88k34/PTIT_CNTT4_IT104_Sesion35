import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { toggleMode } from "../store/slice/viewSlide";
import { RootState } from "../store/store";
export default function View() {
  const dispatch = useDispatch();
  const mode = useSelector((state: RootState) => state.view.mode);
  const data = [1, 2, 3, 4];
  return (
    <div>
      <button
        onClick={() => dispatch(toggleMode())}
      >
        {mode === "list" ? "List mode" : "Grid mode"}
      </button>
      <div
        style={{
          display: mode === "list" ? "block" : "grid",
          gridTemplateColumns: mode === "grid" ? "repeat(4, 1fr)" : "none",
          gap: "10px",
          width: "100%",
        }}
      >
        {data.map((item) => (
          <div
            key={item}
            style={{
              background: "red",
              color: "#fff",
              padding: "10px",
              marginBottom: mode === "list" ? "10px" : "0",
            }}
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
