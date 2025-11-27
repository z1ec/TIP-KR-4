import React from 'react';
// Импортируем CSS-модуль (мы создадим его на следующем шаге)
import styles from './AnimalCard.module.css';

// Компонент принимает "пропсы" (props): name и imageUrl
function AnimalCard({ name, imageUrl }) {
  return (
    // Используем классы из CSS-модуля для стилизации
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{name}</h2>
      <div className={styles.imageContainer}>
        {/* Отображаем изображение, используя URL из пропсов */}
        <img src={imageUrl} alt={name} className={styles.image} />
      </div>
    </div>
  );
}

export default AnimalCard;