export const getMetricOptions = (data, t) => {
  return [
    {
      label: t("form"),
      value: data.form,
    },
    {
      label: t("length"),
      value: data.length,
    },
    {
      label: t("width"),
      value: data.width,
    },
    {
      label: t("height"),
      value: data.height,
    },
    {
      label: t("tank"),
      value: data.tank,
    },
    {
      label: t("consumption"),
      value: data.consumption,
    },
  ];
};
