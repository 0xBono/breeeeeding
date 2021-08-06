import classNames from 'classnames/bind';
import styles from './Badge.module.scss';

const cx = classNames.bind(styles);

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <div className={cx('badge')}>
      <span className={cx('badge-label')}>{label}</span>
    </div>
  );
};
