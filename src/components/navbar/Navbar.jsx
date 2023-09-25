"use client";

import Link from "next/link";
import React from "react";
import styles from "./navbar.module.css";
import ToggleTheme from "../theme/ToggleTheme";
import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import logo from "public/logo.png";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 2,
    title: "Portfolio",
    url: "/portfolio",
  },
  {
    id: 3,
    title: "Blog",
    url: "/blog",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },
  {
    id: 6,
    title: "Dashboard",
    url: "/dashboard",
  },
];

const Navbar = () => {
  const session = useSession();

  return (
    <div className={styles.container}>
      <Link href={`/`} className={styles.logo}>
        <Image
          src={logo}
          alt="Blog App's Logo"
          width={50}
          height={50}
          objectFit="cover"
        />
      </Link>
      <div className={styles.links}>
        <ToggleTheme />
        {links.map((link) => (
          <Link key={link.id} href={link.url} className={styles.link}>
            {link.title}
          </Link>
        ))}
        {session.status === "authenticated" ? (
          <button className={styles.logout} onClick={signOut}>
            Logout
          </button>
        ) : (
          <Link href={"/dashboard/login"} className={styles.logout}>
            Log-in
          </Link>
        )}
      </div>
    </div>
  );
};
export default Navbar;
