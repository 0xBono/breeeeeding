import classNames from 'classnames/bind';
import styles from './ReviewCard.module.scss';

const cx = classNames.bind(styles);

export const ReviewCard = () => {
  return (
    <div className={cx('reviewcard-wrap')}>
      <div className={cx('reviewcard-inner')}>
        <div className={cx('reviewcard-content')}>
          <img
            className={cx('reviwer-profile')}
            src="assets/temp_img.svg"
            alt="profile"
          />
          <div className={cx('reviewcard-cotent-inner')}>
            <div className={cx('reviewcard-title')}>
              <span className={cx('reviwer')}>손지연</span>
              <img src="/assets/star.svg" alt="Star" />
            </div>
            <div className={cx('reviewcard-kind')}>
              <span className={cx('reviwer-content')}>4살 치와와</span>
              <span className={cx('reviwer-content')}>화상 교육</span>
              <span className={cx('reviwer-content')}>21.07.27</span>
            </div>
            <span className={cx('reviwer-content')}>
              별 100개 주고 싶을 만큼 만족! 우리집 아가가 집 앞에 사람이 오거나
              사람이 들어올 때 신나서 짖는 경향이 있어요 단독 주택에 사는 게
              아니다보니 사람이 집에 왔을 때 짖는 걸 줄이고 싶어 교육을 받게
              되었습니다.별 100개 주고 싶을 만큼 만족! 우리집 아가가 집 앞에
              사람
            </span>
          </div>
        </div>
        <img
          className={cx('thumbnail')}
          src="assets/temp_img.svg"
          alt="profile"
        />
      </div>
    </div>
  );
};
