import classNames from 'classnames/bind';
import styles from './AwardCard.module.scss';

const cx = classNames.bind(styles);

interface Props {
  src: string;
  title: string;
}

export const AwardCard: React.FC<Props> = ({ src, title }) => {
  return (
    <article className={cx('awardcard-wrap')}>
      <img className={cx('awardcard-img')} src={src} alt="temp_image" />
      <p className={cx('awardcard-title')}>{title}</p>
    </article>
  );
};

AwardCard.defaultProps = {
  src: '/assets/temp_img.svg',
  title: 'award-card title',
};
