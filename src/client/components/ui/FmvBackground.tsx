import React from 'react';

import styles from './styles/FmvBackground.scss';

interface Props {
  videoSource: any;
  imageFallback: any;
}

const FmvBackground: React.FunctionComponent<Props> = (props: Props) => {
  return (
    <div
      className={styles.container}
      style={{ backgroundImage: `url('${props.imageFallback}')`}}
    >
      <video className={styles.fmv} loop autoPlay muted>
        <source src={props.videoSource} type="video/mp4" />
      </video>
    </div>
  )
}

export default FmvBackground;