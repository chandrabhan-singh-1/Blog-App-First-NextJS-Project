import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";
import { items } from "./data.js";
import { notFound } from "next/navigation";

const getData = (cat) => {
  const data = items[cat];

  if (data) {
    return data;
  }
  return notFound();
};

const Category = ({ params }) => {
  const data = getData(params.category);
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      {data.map((item) => {
        return (
          <div className={styles.item} key={item.id}>
            <div className={styles.content}>
              <h1 className={styles.title}>{item.title}</h1>
              <p className={styles.desc}>{item.desc}</p>
              <Button text={"See More"} url={"#"} />
            </div>
            <div className={styles.imgContainer}>
              <Image
                fill={true}
                className={styles.img}
                src={item.image}
                alt="Restaurant Image"
              />
            </div>
          </div>
        );
      })}
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src={
              "https://images.unsplash.com/photo-1692651763160-7da961e52a07?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDY0fGJEbzQ4Y1Vod25ZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="Restaurant Image"
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>Test</h1>
          <p className={styles.desc}>Desc</p>
          <Button text={"See More"} url={"#"} className={styles.btn} />
        </div>
        <div className={styles.imgContainer}>
          <Image
            fill={true}
            className={styles.img}
            src={
              "https://images.unsplash.com/photo-1688728609955-ae085ccb9c32?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDM5fGJvOGpRS1RhRTBZfHxlbnwwfHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
            }
            alt="Restaurant Image"
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
