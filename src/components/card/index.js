import React from 'react';
import Button from '../button';
import styles from './card.module.scss';

export const Card = ({
  title1,
  title2,
  image,
  btnLabel,
  id,
  content,
  bottomContent,
  isBoxShadowVisible = true,
  handleButtonClick,
}) => {
  return (
    <div className={`${styles.card} ${isBoxShadowVisible ? styles.boxShadow : ''} `} id={id}>
      {image && <img className={styles.poster} src={image} />}
      <div>
        <div className={styles.cardText}>
          <span style={{ color: '#333333' }}>{title1}</span>
          <span style={{ color: '#ff1493' }}>{title2}</span>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.bottom}>
          <div>{bottomContent}</div>
          <div>
            <Button label={btnLabel} color={'#ff1493'} buttonClick={handleButtonClick} />
          </div>
        </div>
      </div>
    </div>
  );
};
