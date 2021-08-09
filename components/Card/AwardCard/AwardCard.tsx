import classNames from 'classnames/bind';
import styles from './AwardCard.module.scss';

const cx = classNames.bind(styles);

export const AwardCard = () => {
  return (
    <article className={cx('awardcard-wrap')}>
      <img className={cx('awardcard-img')} src="/assets/temp_img.svg" alt="temp_image" />
      <p className={cx('awardcard-title')}>Karen pryor ACADEMY Certification</p>
    </article>
  );
};
