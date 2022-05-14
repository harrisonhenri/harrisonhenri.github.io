import React from 'react';
import Type from 'prop-types';
import { useIntl } from 'react-intl';

import { Svg, viewBoxType } from './Svg';

const IconWasm = props => {
  const { formatMessage } = useIntl();

  return (
    <Svg {...props}>
      <title>{formatMessage({ id: 'icon.wasm' })}</title>
      <path
        fill="#654ff0"
        d="M19.66 0v0.172c-0.001 2.026-1.643 3.668-3.669 3.669h-0c-2.026-0.001-3.668-1.643-3.669-3.669v-0.173h-12.322v32h32v-32zM15.271 28.575l-1.558-7.71h-0.027l-1.686 7.71h-2.147l-2.433-11.329h2.12l1.451 7.71h0.027l1.748-7.71h1.983l1.57 7.8h0.027l1.656-7.8h2.081l-2.702 11.328zM26.945 28.575l-0.723-2.521h-3.815l-0.556 2.521h-2.12l2.741-11.329h3.35l3.332 11.328zM24.641 20.038h-0.892l-0.925 4.157h2.878z"></path>
    </Svg>
  );
};

IconWasm.defaultProps = {
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

IconWasm.propTypes = {
  size: Type.shape({
    height: Type.number,
    width: Type.number,
  }),
  viewBox: viewBoxType,
  className: Type.string,
};

export { IconWasm };
