import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconElm = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.elm' })}</title>
      <path fill="#1293D8" d="M0 0.879v30.244l15.121-15.122z"></path>
      <path
        fill="#1293D8"
        d="M22.913 8.206h-13.831l6.915 6.915zM32 31.122v-13.417l-6.71 6.708z"></path>
      <path
        fill="#1293D8"
        d="M0.878 0l6.965 6.965h15.142l-6.965-6.965zM24.448 8.429l7.536 7.536-7.57 7.57-7.538-7.535z"></path>
      <path
        fill="#1293D8"
        d="M32 0h-14.224l14.224 14.224zM0.878 32h30.244l-15.122-15.121z"></path>
    </Svg>
  );
};

IconElm.defaultProps = {
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

IconElm.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconElm };
