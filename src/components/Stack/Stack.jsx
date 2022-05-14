import React from 'react';
import { useIntl } from 'react-intl';
import style from './Stack.module.css';
import { SKILLS } from '../../constants/skills';
import { STACK } from '../../constants/stack';

const Stack = () => {
  const { formatMessage } = useIntl();

  return (
    <div className={style.Stack}>
      <h2 className={style.title}>
        {formatMessage({
          id: 'stack.title',
        })}
      </h2>
      <div className={style.skills}>
        {Object.values(SKILLS).map(skill => (
          <div key={skill} className={style.skill}>
            <h3 className={style.function}>
              {formatMessage({
                id: `stack.${skill}.title`,
              })}
            </h3>
            <span className={style.return}>
              {formatMessage({
                id: `stack.return`,
              })}
            </span>
            <ul className={style.list}>
              {Object.values(STACK[skill]).map(tech => (
                <li key={tech} className={style.tech}>
                  <a>
                    {formatMessage({
                      id: `stack.${skill}.${tech}`,
                    })}
                  </a>
                </li>
              ))}
            </ul>
            <span className={style.return}>
              {formatMessage({
                id: `stack.closeArray`,
              })}
            </span>
            <span className={style.function}>
              {formatMessage({
                id: `stack.closeObj`,
              })}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export { Stack };
