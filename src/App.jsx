import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import styles from "./styles.module.css";

export default function App() {
  const alignCenter = { display: "flex", alignItems: "center" };
  return (
    <div className={styles.container}>
      <Parallax pages={7}>
        <ParallaxLayer
          sticky={{ start: 0, end: 3 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>2023</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          sticky={{ start: 3, end: 6 }}
          style={{ ...alignCenter, justifyContent: "flex-start" }}
        >
          <div className={`${styles.card} ${styles.sticky}`}>
            <p>2022</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={0}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>1</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={1}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>2</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={2}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>3</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={3}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>4</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={4}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.purple}`}>
            <p>5</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={5}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>6</p>
          </div>
        </ParallaxLayer>

        <ParallaxLayer
          offset={6}
          speed={1.5}
          style={{ ...alignCenter, justifyContent: "flex-end" }}
        >
          <div className={`${styles.card} ${styles.parallax} ${styles.blue}`}>
            <p>7</p>
          </div>
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}
