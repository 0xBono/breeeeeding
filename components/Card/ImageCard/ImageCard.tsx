import classNames from 'classnames/bind';
import styles from './ImageCard.module.scss';

const cx = classNames.bind(styles);

interface Props {
  texthide?: boolean;
  small?: boolean;
}

export const ImageCard: React.FC<Props> = ({ texthide, small }) => {
  return (
    <div className={cx('imagecard-wrap')}>
      <img className={cx('imagecard-img', { small })} src="/assets/temp_img.svg" alt="temp_image" />
      {!texthide && <span className={cx('imagecard-title')}>입양준비와 초기🐶</span>}
    </div>
  );
};
