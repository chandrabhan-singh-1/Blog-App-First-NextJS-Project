import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

export const metadata = {
  title: "Bhamsa's NextJS/Contact Page",
  description: "This is  the contact page for my first NextJS project.",
};

const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Contact Us</h1>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src={"/contact.png"}
            alt="contact"
            fill={true}
            sizes="auto"
            className={styles.img}
          />
        </div>
        <form className={styles.form}>
          <input
            className={styles.name}
            type="text"
            placeholder="Enter Name Here"
          />
          <input
            className={styles.email}
            type="email"
            placeholder="Enter Email Here"
          />
          <textarea
            className={styles.message}
            cols={"20"}
            rows={"6"}
            type="message"
            placeholder="Enter Message Here"
          ></textarea>
          <Button text={"Submit"} url={"/"} />
        </form>
      </div>
    </div>
  );
};

export default Contact;
