import classNames from 'classnames/bind';
import styles from './NavigationBar.module.scss';

const cx = classNames.bind(styles);

export const NavigationBar = () => {
  return (
    <nav className={cx('navigation-bar')}>
      <ul className={cx('navigation-bar-inner')}>
        <li className={cx('navigation-bar-title', 'active')}>선생님 스토리</li>
        <li className={cx('navigation-bar-title')}>클래스 소개</li>
        <li className={cx('navigation-bar-title')}>고객 후기</li>
      </ul>
    </nav>
  );
};
