import classNames from 'classnames/bind';
import styles from './RealTimeReviewCard.module.scss';

const cx = classNames.bind(styles);

export const RealTimeReviewCard = () => {
  return (
    <div className={cx('realtime-reviewcard-wrap')}>
      <div className={cx('realtime-reviewcard-inner')}>
        <div className={cx('realtime-reviewcard-content')}>
          <img className={cx('reviwer-profile')} src="assets/temp_img.svg" alt="profile" />
          <div className={cx('realtime-reviewcard-cotent-inner')}>
            <div className={cx('realtime-reviewcard-title')}>
              <div>
                <span className={cx('reviwer')}>손지연</span>
                <img src="/assets/star.svg" alt="Star" />
              </div>
              <span className={cx('review-time')}>n시간전</span>
            </div>
            <div className={cx('realtime-reviewcard-kind')}>
              <span className={cx('reviwer-content')}>4살 치와와</span>
            </div>
            <span className={cx('reviwer-content')}>
              별 100개 주고 싶을 만큼 만족! 우리집 아가가 집 앞에 사람이 오거나 사람이 들어올 때 신나서 짖는 경향이
              있어요 단독 주택에 사는 게 가장 좋아요! 그리고 우리집 아가가 집 앞에 사람이 오거나
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
