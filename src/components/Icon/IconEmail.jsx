import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconEmail = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.email' })}</title>
      <path d="M4 10.561l11.236 7.865c0.453 0.313 1.060 0.328 1.529 0l11.235-7.865v13.439c0 0.363-0.147 0.695-0.393 0.94s-0.577 0.393-0.94 0.393h-21.333c-0.363 0-0.695-0.147-0.94-0.393s-0.393-0.577-0.393-0.94zM1.333 8.016v15.984c0 1.104 0.453 2.105 1.173 2.827s1.723 1.173 2.827 1.173h21.333c1.104 0 2.105-0.453 2.827-1.173s1.173-1.723 1.173-2.827v-15.984c0-0.013 0-0.027 0-0.040-0.007-1.095-0.457-2.087-1.173-2.803-0.721-0.72-1.723-1.173-2.827-1.173h-21.333c-1.104 0-2.105 0.453-2.827 1.173-0.716 0.716-1.167 1.708-1.173 2.804 0 0.007 0 0.015 0 0.023zM27.859 7.405l-11.859 8.3-11.859-8.3c0.064-0.128 0.149-0.244 0.251-0.345 0.247-0.247 0.579-0.393 0.941-0.393h21.333c0.363 0 0.695 0.147 0.94 0.393 0.101 0.101 0.187 0.219 0.251 0.345z"></path>
    </Svg>
  );
};

IconEmail.defaultProps = {
  viewBox: {
    minX: 0,
    minY: 0,
    width: 32,
    height: 32,
  },
  size: {
    height: undefined,
    width: undefined,
  },
  className: '',
};

IconEmail.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconEmail };
