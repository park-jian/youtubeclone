import React from "react";
import styles from "./Header.module.css";
import { BsList, BsYoutube } from "react-icons/bs";
import { Avatar, AvatarBadge } from "@chakra-ui/react";

export default function Header() {
  return (
    <div className={styles.header}>
      <button className={styles.hambugerBtn}>
        <BsList />
      </button>

      <button>
        <BsYoutube />
      </button>

      <input type="text" placeholder="검색" className={styles.input} />

      <button>알림</button>

      <Avatar
        id="img"
        name="Dan abrahmov"
        src="https://bit.ly/dan-abramov"
        className={styles.avatar}
        alt="아바타 이미지"
      ></Avatar>
    </div>
  );
}
