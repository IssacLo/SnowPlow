import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/page1">Page1</Link>
      <Link href="/page2">Page2</Link>
      <Link href="/page3">Page3</Link>
    </div>
  );
}
