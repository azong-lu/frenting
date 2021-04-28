import React from 'react';
import styles from './index.less';

export default function StatusBar(props) {
  const { children } = props;
  return <div className={styles.statusBars}>{children}</div>;
}
