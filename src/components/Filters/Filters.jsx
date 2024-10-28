import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { Button, FiltersSection, SearchBox } from "components";
import { IconMap } from "assets";
import { getEquipmentOptions, getTypeOptions } from "utils";
import {
  selectEquipmentFilter,
  selectTypeFilter,
  setFilters,
  fetchCampers,
  resetCatalog,
  selectLocationFilter,
} from "src/redux";

import styles from "./filters.module.scss";

const Filters = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const equipment = useSelector(selectEquipmentFilter);
  const form = useSelector(selectTypeFilter);
  const location = useSelector(selectLocationFilter);

  const handleChangeLocation = (event) => {
    dispatch(setFilters({ location: event.target.value }));
  };

  const handleChangeEquipment = useCallback(
    (option) => {
      const isSelected = !!equipment[option.key];

      if (isSelected) {
        const updatedEquipment = { ...equipment };
        delete updatedEquipment[option.key];

        dispatch(setFilters({ equipment: updatedEquipment }));
      } else {
        const updatedEquipment = { ...equipment, [option.key]: option.value };
        dispatch(setFilters({ equipment: updatedEquipment }));
      }
    },
    [dispatch, equipment],
  );

  const handleChangeType = useCallback(
    (option) => {
      const isSelected = form === option.value;

      if (isSelected) {
        dispatch(setFilters({ form: "" }));
      } else {
        dispatch(setFilters({ form: option.value }));
      }
    },
    [dispatch, form],
  );

  const handleSearch = useCallback(() => {
    dispatch(resetCatalog());
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <div className={styles.filters}>
      <SearchBox
        label={t("location")}
        icon={<IconMap />}
        placeholder={t("city")}
        value={location}
        onChange={handleChangeLocation}
      />

      <p className={styles.filtersTitle}>{t("filters")}</p>

      <FiltersSection
        title={t("vehicleEquipment")}
        value={equipment}
        options={getEquipmentOptions(t)}
        onClick={handleChangeEquipment}
      />

      <FiltersSection
        title={t("vehicleType")}
        value={form}
        options={getTypeOptions(t)}
        onClick={handleChangeType}
      />

      <Button onClick={handleSearch}>{t("search")}</Button>
    </div>
  );
};

export { Filters };
