import styles from "./features.module.scss";
import {
  IconAc,
  IconAutomatic,
  IconBathroom,
  IconGas,
  IconKitchen,
  IconMicrowave,
  IconPetrol,
  IconRadio,
  IconRefrigerator,
  IconTv,
  IconWater,
} from "assets";
import { Chip } from "components";

const Features = ({ data }) => {
  const featuresList = [
    { key: "transmission", label: data.transmission, icon: <IconAutomatic /> },
    { key: "engine", label: data.engine, icon: <IconPetrol /> },
    { key: "kitchen", label: "Kitchen", icon: <IconKitchen /> },
    { key: "AC", label: "AC", icon: <IconAc /> },
    { key: "TV", label: "TV", icon: <IconTv /> },
    { key: "bathroom", label: "Bathroom", icon: <IconBathroom /> },
    { key: "refrigerator", label: "Refrigerator", icon: <IconRefrigerator /> },
    { key: "microwave", label: "Microwave", icon: <IconMicrowave /> },
    { key: "radio", label: "Radio", icon: <IconRadio /> },
    { key: "gas", label: "Gas", icon: <IconGas /> },
    { key: "water", label: "Water", icon: <IconWater />, inline: false },
  ];

  return (
    <div className={styles.features}>
      {featuresList.map((feature) => {
        return data[feature.key] && <Chip item={feature} key={feature.key} />;
      })}
    </div>
  );
};

export { Features };
