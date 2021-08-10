import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

interface Props {
  content: string;
}

export const Overview: React.FC<Props> = ({ content }) => {
  const [limit, setLimit] = useState(200);

  const toggleEllipsis = (str: string, limit: number) => {
    return {
      string: str.slice(0, limit),
      isShowMore: str.length > limit,
    };
  };

  const handleCollapse = (str: string) => () => {
    if (limit === str.length) {
      setLimit(200);
    } else {
      setLimit(str.length);
    }
  };

  return (
    <div className={cx('wrap')}>
      <p className={cx('overview-title')}>
        안녕하세요.
        <br />
        마이콩 홍석민입니다.
      </p>
      <div className={cx('overview-content')}>{toggleEllipsis(content, limit).string}</div>
      {toggleEllipsis(content, limit).isShowMore ? (
        <button className={cx('more-button')} onClick={handleCollapse(content)}>
          더보기
        </button>
      ) : (
        <button className={cx('more-button')} onClick={handleCollapse(content)}>
          접기
        </button>
      )}
    </div>
  );
};
