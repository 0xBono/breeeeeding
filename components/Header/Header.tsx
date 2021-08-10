import Image from 'next/image';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';

const cx = classNames.bind(styles);

export const Header: React.FC = () => {
  return (
    <header className={cx('wrap')}>
      <div className={cx('navbar-container')}>
        <ul className={cx('navbar-wrap')}>
          <li className={cx('navbar-item')}>
            <img src="/assets/logo.svg" alt="logo" />
          </li>
        </ul>
        <ul className={cx('navbar-wrap')}>
          <li className={cx('navbar-item')}>
            <a>예약하기</a>
          </li>
          <li className={cx('navbar-item', 'active')}>
            <a>선생님 스토리</a>
          </li>
          <li className={cx('navbar-item')}>
            <a>교육 후기</a>
          </li>
          <li className={cx('navbar-item')}>
            <a>예약 내역</a>
          </li>
          <li className={cx('navbar-item')}>
            <a>내가 쓴 후기</a>
          </li>
          <li className={cx('navbar-item')}>
            <a>내 프로필</a>
          </li>
        </ul>
        <ul className={cx('navbar-wrap')}>
          <li className={cx('navbar-item')}>
            <button className={cx('button')}>로그아웃</button>
          </li>
        </ul>
      </div>
    </header>
  );
};
