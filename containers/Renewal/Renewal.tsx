import { GNBLayout } from 'components/Layout';
import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './Renewal.module.scss';

const cx = classNames.bind(styles);

export const Renewal = () => {
  return (
    <GNBLayout>
      <div className={cx('wrap')}>
        <section className={cx('info-section')} />
        <section className={cx('details-section')}>
          <article className={cx('info-inner')} />
          <article className={cx('review-inner')} />
        </section>
      </div>
    </GNBLayout>
  );
};
