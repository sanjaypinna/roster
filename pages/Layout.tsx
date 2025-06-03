import { ReactNode } from "react";
import Navbar from "./component/Navbar";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-6">{children}</main>
    </>
  );
}
