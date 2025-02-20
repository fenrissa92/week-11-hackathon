import { useState } from "react";
import styles from "../styles/section.module.css";

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const Section = ({ title, children }: SectionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.section} onClick={() => setIsOpen(!isOpen)}>
      <h3>{title}</h3>
      {isOpen && <div className={styles.content}>{children}</div>}
    </div>
  );
};

export default Section;
