import React from 'react';
import { useIntl } from 'react-intl';
import style from './Jobs.module.css';
import { LTDA } from '../../constants/ltda';

const Jobs = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={style.Jobs}>
      <h2 className={style.title}>
        {formatMessage({
          id: 'jobs.title',
        })}
      </h2>
      <div className={style.list}>
        {Object.values(LTDA).map(company => (
          <div key={company} className={style.item}>
            <h3 className={style.company}>
              {formatMessage({
                id: `jobs.${company}.company`,
              })}
            </h3>
            <p className={style.employ}>
              {formatMessage({
                id: `jobs.${company}.employ`,
              })}
              ,{' '}
              <span className={style.date}>
                {formatMessage({
                  id: `jobs.${company}.date`,
                })}
              </span>
            </p>
            <p className={style.description}>
              {formatMessage({
                id: `jobs.${company}.description`,
              })}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Jobs };
