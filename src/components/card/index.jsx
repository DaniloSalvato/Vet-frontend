/* eslint-disable react/prop-types */
import styles from './styles.module.css'; 

function Card({ title, description, steps }) {
  return (
    <section className={styles.card}>
      <h2>{title}</h2>
      <p>{description}</p>
      <ul>
        {steps.map((step, index) => (
          <li key={index}>{step}</li>
        ))}
      </ul>
    </section>
  );
}

export default Card;