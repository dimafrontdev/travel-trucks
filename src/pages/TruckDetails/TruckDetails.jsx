import { useParams } from "react-router-dom";
import { useCallback, useEffect, useState } from "react";
import { fetchCamper } from "api";
import { Loader, TruckInfo } from "components";

import styles from "./truckDetails.module.scss";
import clsx from "clsx";

const TruckDetails = () => {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const getCamper = useCallback(async () => {
    try {
      setLoading(true);
      const res = await fetchCamper(id);
      setData(res);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    getCamper();
  }, [getCamper]);

  return (
    <section className={clsx(styles.details, "container")}>
      {loading && (
        <div className={styles.loader}>
          <Loader />
        </div>
      )}
      {data && <TruckInfo item={data} />}
    </section>
  );
};

export default TruckDetails;
