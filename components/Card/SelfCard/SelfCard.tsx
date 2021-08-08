import classNames from 'classnames/bind';
import styles from './SelfCard.module.scss';

const cx = classNames.bind(styles);

export const SelfCard = () => {
  return (
    <article className={cx('selfcard-wrap')}>
      <p className={cx('selfcard-title')}>제가 추구하는 비전입니다.</p>
      <div className={cx('selfcard-content')}>
        <img className={cx('selfcard-image')} src="/assets/temp_img.svg" alt="selfcard_image" />
        <p className={cx('selfcard-description')}>
          긍정강화 교육의 권위자 ‘카렌 프라이어’의 정확한 긍정강화 교육으로 아이들과 즐거운 교육을 진행합니다.
          보호자님과 반려견의 더 행복한 반려 라이프를 통해 삶의 질을 높이기 위한 교육을 진행합니다.
        </p>
      </div>
    </article>
  );
};
