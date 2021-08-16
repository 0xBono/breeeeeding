import classNames from 'classnames/bind';
import styles from './NavigationBar.module.scss';

const cx = classNames.bind(styles);

interface Props {
  position: any;
}

export const NavigationBar: React.FC<Props> = ({ position }) => {
  const menu = [
    { id: 1, name: '선생님 스토리' },
    { id: 2, name: '클래스 소개' },
    { id: 3, name: '고객 후기' },
  ];
  return (
    <nav className={cx('navigation-bar')}>
      <ul className={cx('navigation-bar-inner')}>
        {menu.map((item, _) => (
          <li
            key={item.id}
            className={cx('navigation-bar-title', {
              active: item.id === position,
            })}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
};
