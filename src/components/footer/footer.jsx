import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={`${styles.footer}`}>
      Made with by&nbsp;
      <Link href="/" target="_blank">
        MRT YILMAZ
      </Link>
      Mehmet Pekcan was referenced
    </footer>
  );
}
