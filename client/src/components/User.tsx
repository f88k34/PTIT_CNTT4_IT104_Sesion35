import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../store/store";
import { toggleFavorite } from "../store/slice/userSlide";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
export default function UserList() {
  const users = useSelector((state: RootState) => state.user.users);
  const dispatch = useDispatch();
  return (
    <div>
      <h3>List Favorites User</h3>
      {users.map((user) => (
        <div key={user.id} style={{ marginBottom: 15 }}>
          <p>
            <b>UserName:</b> {user.name}
          </p>
          <p>
            Favorites:{" "}
            {user.isFavorite ? (
              <HeartFilled
                style={{ color: "red", cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            ) : (
              <HeartOutlined
                style={{ cursor: "pointer" }}
                onClick={() => dispatch(toggleFavorite(user.id))}
              />
            )}
          </p>
        </div>
      ))}
    </div>
  );
}
