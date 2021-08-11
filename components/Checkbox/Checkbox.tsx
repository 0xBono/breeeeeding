/* eslint-disable jsx-a11y/label-has-associated-control */
import { Ref, useState, useCallback, ChangeEvent, useEffect, FunctionComponent } from 'react';
import classNames from 'classnames/bind';
import styles from './Checkbox.module.scss';

const cx = classNames.bind(styles);

interface CheckboxProps {
  content?: string;
  name?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => Promise<void | boolean>;
  innerRef?: Ref<HTMLInputElement>;
}

const Checkbox: FunctionComponent<CheckboxProps> = ({ content, innerRef, name, onChange }) => {
  const [checked, setChecked] = useState(false);
  const [value, setValue] = useState<string | undefined>(undefined);

  const handleChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      setChecked(!checked);

      if (onChange) {
        onChange(e);
      }
    },
    [checked, onChange],
  );

  useEffect(() => {
    setValue(checked ? 'false' : 'true');
  }, [checked]);

  return (
    <div className={cx('wrapper')}>
      <label className={cx('label')}>
        <span className={cx('text')}>{content}</span>
        {checked ? (
          <img src="/assets/checked.svg" className={cx('icon')} alt="" />
        ) : (
          <img src="/assets/check.svg" className={cx('icon')} alt="" />
        )}
        <input
          className={cx('input')}
          ref={innerRef}
          name={name}
          type="checkbox"
          value={value}
          checked={checked}
          onChange={handleChange}
        />
      </label>
    </div>
  );
};

export default Checkbox;
