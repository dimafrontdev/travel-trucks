import {
  IconAc,
  IconAlcove,
  IconAutomatic,
  IconBathroom,
  IconFullyIntegrated,
  IconKitchen,
  IconTv,
  IconVan,
} from "assets";

export const getEquipmentOptions = (t) => [
  {
    label: t("ac"),
    key: "AC",
    value: true,
    icon: IconAc,
  },
  {
    label: t("automatic"),
    key: "transmission",
    value: "automatic",
    icon: IconAutomatic,
  },
  {
    label: t("kitchen"),
    key: "kitchen",
    value: true,
    icon: IconKitchen,
  },
  {
    label: t("tv"),
    key: "TV",
    value: true,
    icon: IconTv,
  },
  {
    label: t("bathroom"),
    key: "bathroom",
    value: true,
    icon: IconBathroom,
  },
];

export const getTypeOptions = (t) => [
  {
    label: t("van"),
    key: "panelTruck",
    value: "panelTruck",
    icon: IconVan,
  },
  {
    label: t("fullyIntegrated"),
    key: "fullyIntegrated",
    value: "fullyIntegrated",
    icon: IconFullyIntegrated,
  },
  {
    label: t("alcove"),
    key: "alcove",
    value: "alcove",
    icon: IconAlcove,
  },
];
