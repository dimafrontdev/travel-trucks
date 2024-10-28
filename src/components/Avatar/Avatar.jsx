import styles from "./avatar.module.scss";

const Avatar = ({ name }) => {
  return <div className={styles.avatar}>{name[0]}</div>;
};

export { Avatar };
