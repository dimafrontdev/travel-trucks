import clsx from "clsx";
import styles from "./tabs.module.scss";

const Tabs = ({ tabs, activeTab, onChange }) => {
  const handleClick = (tab) => {
    onChange(tab);
  };

  return (
    <div className={styles.tabs}>
      {tabs.map((tab) => (
        <div
          key={tab}
          className={clsx(
            styles.tab,
            tab.key === activeTab.key && styles.active,
          )}
          onClick={() => handleClick(tab)}
        >
          <h3>{tab.name}</h3>
        </div>
      ))}
    </div>
  );
};

export { Tabs };
