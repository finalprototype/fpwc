import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

import styles from "./styles/NotFound.scss";
import DeadLink from "../images/dead_link.png";

interface Props {
  seconds?: number;
}

const NotFound: React.FunctionComponent<Props> = (props: Props) => {
  const { seconds = 5 } = props;
  const [count, setCount] = useState(seconds);
  const history = useHistory();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (count === 1) {
        history.push('/');
        return;
      }
      setCount(count - 1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [count]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        404
      </div>
      <div className={styles.subtitle}>
        (redirecting in {count})
      </div>
      <br />
      <img className={styles.hero} src={DeadLink} />
    </div>
  );
};

export default NotFound;
