import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconHaskell = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.haskell' })}</title>
      <path
        fill="#5d4f85"
        d="M0.008 27.293l7.524-11.293-7.524-11.292h5.647l7.565 11.293-7.565 11.291zM7.532 27.293l7.521-11.293-7.52-11.292h5.688l15.004 22.584h-5.632l-4.713-7.12-4.66 7.12zM25.733 20.7l-2.503-3.769h8.761v3.768zM21.965 15.053l-2.503-3.769h12.516v3.769z"></path>
    </Svg>
  );
};

IconHaskell.defaultProps = {
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

IconHaskell.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconHaskell };
