import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/page1">Page1</Link>
      <Link href="/page2">Page2</Link>
    </div>
  );
}
