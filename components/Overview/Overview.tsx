import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Overview.module.scss';

const cx = classNames.bind(styles);

interface Props {
  title: string;
  content: string;
}

export const Overview: React.FC<Props> = ({ title, content }) => {
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
      <p
        className={cx('overview-title')}
        dangerouslySetInnerHTML={{ __html: title }}
      />
      <p className={cx('overview-content')}>
        {toggleEllipsis(content, limit).string}
      </p>
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
