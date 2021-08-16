import { useState } from 'react';
import classNames from 'classnames/bind';
import styles from './ViewAll.module.scss';

const cx = classNames.bind(styles);

interface Props {
  children: React.ReactNode;
  limit: number;
}

export const ViewAll: React.FC<Props> = ({ children, limit }) => {
  const [contentLimit, setContentLimit] = useState(limit);

  const toggleEllipsis = (children: React.ReactNode, limit: number) => {
    return {
      limit:
        (children as any).length > limit
          ? (children as any).slice(0, limit)
          : children,
      isShowMore: (children as any).length > limit,
    };
  };

  const handleCollapse = (children: any) => {
    if (contentLimit === children.length) {
      setContentLimit(limit);
    } else {
      setContentLimit(children.length);
    }
  };

  return (
    <div>
      {toggleEllipsis(children, contentLimit).limit}
      {toggleEllipsis(children, contentLimit).isShowMore ? (
        <button
          className={cx('button')}
          onClick={() => handleCollapse(children)}
        >
          전체보기
        </button>
      ) : (
        <button
          className={cx('button')}
          onClick={() => handleCollapse(children)}
        >
          접어두기
        </button>
      )}
    </div>
  );
};
