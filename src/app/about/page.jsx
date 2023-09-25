import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          fill={true}
          src="https://images.unsplash.com/photo-1470770841072-f978cf4d019e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt="About Image"
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>
            Handcrafting award winning digital experiences.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who are we?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit rem
            perspiciatis fuga, aspernatur debitis, atque sapiente, laudantium
            nisi eligendi dignissimos similique non hic nesciunt. Accusamus
            earum fugit officia voluptate, nesciunt aliquid quas?
            <br />
            <br /> Repellendus excepturi, dignissimos expedita eveniet fuga
            suscipit ipsum, modi fugiat blanditiis itaque deleniti enim rerum
            tempora! Quidem placeat pariatur sapiente molestiae incidunt et
            impedit beatae velit minima harum.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What we do?</h1>
          <p className={styles.desc}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo
            ratione vel quam officia hic nihil, quibusdam totam alias! Omnis
            corrupti sapiente sed quo repellendus vero eveniet, unde sint
            tempore quos, reprehenderit placeat quis provident eas.
            <br />
            - Web Development
            <br />
            <br />
            - Android Development
            <br />
            <br />- IOS Development
          </p>
          <Button text={"Contact"} url={"http://youtube.com/"} />
        </div>
      </div>
    </div>
  );
};

export default About;
