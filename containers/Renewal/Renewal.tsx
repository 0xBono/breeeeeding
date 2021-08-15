import { Badge } from 'components';
import { GNBLayout } from 'components/Layout';
import classNames from 'classnames/bind';
import styles from './Renewal.module.scss';

const cx = classNames.bind(styles);

export const Renewal = () => {
  return (
    <GNBLayout>
      <div className={cx('wrap')}>
        <section className={cx('info-section')}>
          <img
            src="/assets/details_image.png"
            className={cx('info-image')}
            alt="temp"
          />
          <div className={cx('info-card')}>
            <h1 className={cx('h1')}>
              보호자님과 반려견의 즐겁고 풍요로운 삶을 위해 최선을 다하겠습니다!
            </h1>
            {Array.from(Array(3), (_, i) => (
              <Badge key={i} label="입양초기교육" />
            ))}
            <div className={cx('info-card-content')}>
              <div className={cx('info-content-inner')}>
                <div className={cx('info')}>
                  <h2 className={cx('h2')}>경력</h2>
                  <h1 className={cx('h1')}>4년</h1>
                </div>
                <div className={cx('info')}>
                  <h2 className={cx('h2')}>대표수업</h2>
                  <h1 className={cx('h1')}>입양초기 기초교육</h1>
                </div>
              </div>
            </div>
            <div className={cx('info-card-content')}>
              <div className={cx('info-content-inner', 'single')}>
                <div className={cx('info')}>
                  <h2 className={cx('h2')}>대표 경력</h2>
                  <h1 className={cx('h1')}>
                    (현) &apos;마이콩 컴퍼니&apos; 대표
                  </h1>
                </div>
              </div>
            </div>
            <div className={cx('info-card-content')}>
              <div className={cx('info-content-inner', 'single')}>
                <h2 className={cx('h2')}>수업료</h2>
                <div className={cx('info', 'double')}>
                  <div className={cx('price')}>
                    <h2 className={cx('h3')}>화상교육 (60분)</h2>
                    <h1 className={cx('h1')}>70,000원</h1>
                  </div>
                  <div className={cx('price')}>
                    <h2 className={cx('h3')}>화상교육 (60분)</h2>
                    <h1 className={cx('h1')}>70,000원</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className={cx('details-section')}>
          <article className={cx('info-inner')} />
          <article className={cx('review-inner')} />
        </section>
      </div>
    </GNBLayout>
  );
};
