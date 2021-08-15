import { Header } from 'components';
import classNames from 'classnames/bind';
import styles from './GNBLayout.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
}

export const GNBLayout: React.FC<Props> = ({ children }) => {
  return (
    <main className={cx('GNBLayout')}>
      <Header />
      {children}
    </main>
  );
};
