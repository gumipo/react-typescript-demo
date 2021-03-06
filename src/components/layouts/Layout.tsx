import React from "react";
import styles from "../../styles/layouts/layout.module.scss";

const Layout: React.FC = ({ children }) => {
  return (
    <section className={styles.layout}>
      <div className={styles.layout__page}>{children}</div>
    </section>
  );
};

export default Layout;
