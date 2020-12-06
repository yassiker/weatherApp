import {PixelRatio} from 'react-native';
import Metrics from './Metrics';

const widthFactor = Math.min(Metrics.screenWidth / 375, 1);

let scaledFont = Math.floor(12 * widthFactor);

if (PixelRatio.get() <= 3) {
  scaledFont -= 2;
}

const heightFactor = (Metrics.screenHeight - 75) / 637;
const scaledHeight = Math.floor(40 * heightFactor);
const scaledEmoneyHeader = Math.floor(18 * heightFactor);

const type = {
  base: 'Roboto-Regular',
  bold: 'Roboto-Black',
  emphasis: 'Roboto-Light',
};

const size = {
  h1: Math.floor(38 * widthFactor),
  h2: Math.floor(34 * widthFactor),
  h3: Math.floor(30 * widthFactor),
  h4: Math.floor(26 * widthFactor),
  h5: Math.floor(20 * widthFactor),
  h6: Math.floor(19 * widthFactor),
  h7: Math.floor(12 * widthFactor),
  input: Math.floor(18 * widthFactor),
  large: Math.floor(25 * widthFactor),
  xlarge: Math.floor(45 * widthFactor),
  regular: Math.floor(17 * widthFactor),
  medium: Math.floor(14 * widthFactor),
  small: Math.floor(12 * widthFactor),
  tiny: Math.floor(8.5 * widthFactor),
};

const style = {
  h1: {
    fontFamily: type.base,
    fontSize: size.h1,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: size.h2,
  },
  h3: {
    fontFamily: type.emphasis,
    fontSize: size.h3,
  },
  h4: {
    fontFamily: type.base,
    fontSize: size.h4,
  },
  h5: {
    fontFamily: type.base,
    fontSize: size.h5,
  },
  h6: {
    fontFamily: type.emphasis,
    fontSize: size.h6,
  },
  h7: {
    fontFamily: type.base,
    fontSize: size.h7,
  },
  normal: {
    fontFamily: type.base,
    fontSize: size.regular,
  },
  description: {
    fontFamily: type.base,
    fontSize: size.medium,
  },
  descriptionBold: {
    fontFamily: type.bold,
    fontSize: size.medium,
  },
  info: {
    fontFamily: type.base,
    fontSize: size.tiny,
  },
  navigationItem: {
    fontFamily: type.emphasis,
    fontSize: size.medium,
  },
};

export default {
  type,
  size,
  style,
  scaledFont,
  scaledHeight,
  scaledEmoneyHeader,
};
