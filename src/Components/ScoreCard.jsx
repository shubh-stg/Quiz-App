import styles from "./ScoreCard.module.css"
const ScoreCard = ({ score, total, onReset }) => {
  return (
    <div className={styles.scorecard}>
      <h2>You Scored {score} out of {total}</h2>
      <button onClick={onReset}>Reset</button>
    </div>
  );
};

export default ScoreCard;
