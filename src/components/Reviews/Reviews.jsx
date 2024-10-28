import styles from "./reviews.module.scss";
import { Avatar } from "components";
import { IconRating } from "assets";

const Reviews = ({ reviews }) => {
  return (
    <ul className={styles.reviews}>
      {reviews.map((review, index) => {
        return (
          <li className={styles.review} key={index}>
            <div className={styles.author}>
              <Avatar name={review.reviewer_name} />

              <div className={styles.rating}>
                <p>{review.reviewer_name}</p>
                <div className={styles.stars}>
                  {Array.from({ length: 5 }).map((_, index) => (
                    <IconRating
                      key={index}
                      isActive={index < review.reviewer_rating}
                    />
                  ))}
                </div>
              </div>
            </div>

            <p className={styles.comment}>{review.comment}</p>
          </li>
        );
      })}
    </ul>
  );
};

export { Reviews };
