import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './ImageCard.module.scss';

const cx = classNames.bind(styles);

interface Props {
  texthide?: boolean;
  src?: string;
}

export const ImageCard: React.FC<Props> = ({ texthide, src }) => {
  return (
    <div className={cx('imagecard-wrap')}>
      <Image
        src={src as any}
        alt="temp_image"
        layout="responsive"
        width={200}
        height={200}
      />
      {!texthide && (
        <span className={cx('imagecard-title')}>입양준비와 초기🐶</span>
      )}
    </div>
  );
};

ImageCard.defaultProps = {
  src: '/assets/temp_img.svg',
};
