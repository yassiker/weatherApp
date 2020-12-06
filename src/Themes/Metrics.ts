import {Dimensions, Platform} from 'react-native';

const {width, height} = Dimensions.get('window');

const widthFactor = Math.min(width / 375, 1);

const iphonex = Platform.OS === 'ios' && height === 812;

const baseMargin = Math.floor(10 * widthFactor);
const gridSpacing = 24;

const heightFactor = (height - 75) / 637;
const scaledHeight = Math.floor(40 * heightFactor);
const eMoneyInputHeight = scaledHeight * 1.5;
const eMoneyInputBorderWidth = 1;
const eMoneyInputNextButton = scaledHeight * 1.1;
const emoneyInputMargins = scaledHeight / 4.5;
const eMoneyDocumentWidth = height < 800 ? width * 0.8 : width * 0.9;

// Used via Metrics.baseMargin
const metrics = {
  gridSpacing,
  gridSpacingHalf: gridSpacing / 2,
  navbarPadding: 50,
  marginHorizontal: baseMargin,
  marginVertical: baseMargin,
  halfMarginVertical: baseMargin / 2,
  paddingHorizontal: baseMargin * 2,
  paddingVerticalNavbaritem: 8,
  section: 25,
  halfBaseMargin: baseMargin / 2,
  baseMargin,
  doubleBaseMargin: baseMargin * 2,
  tripleBaseMargin: baseMargin * 3,
  quadBaseMargin: baseMargin * 4,
  smallMargin: 5,
  horizontalLineHeight: 1,
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
  navBarHeight: Platform.OS === 'ios' ? 64 : 54,
  headerHeight: 60,
  buttonRadius: 4,
  icons: {
    tiny: Math.floor(15 * widthFactor),
    small: Math.floor(20 * widthFactor),
    drawerButton: Math.floor(22 * widthFactor),
    xmedium: Math.floor(24 * widthFactor),
    medium: Math.floor(30 * widthFactor),
    large: Math.floor(45 * widthFactor),
    mediumlarge: Math.floor(50 * widthFactor),
    xl: Math.floor(60 * widthFactor),
    xxl: Math.floor(72 * widthFactor),
    triplexl: Math.floor(86 * widthFactor),
    huge: Math.floor(200 * widthFactor),
  },
  images: {
    small: 20,
    regular: 35,
    medium: 40,
    large: 60,
    xlarge: 90,
    logo: 300,
    search: 65,
  },
  marker: {
    small: 20,
    medium: 40,
    large: 60,
    xlarge: 90,
  },
  iphonex,
  hitSlopBase: {
    top: baseMargin,
    bottom: baseMargin,
    left: baseMargin,
    right: baseMargin,
  },
  eMoneyInputHeight,
  eMoneyInputBorderWidth,
  eMoneyInputNextButton,
  emoneyInputMargins,
  eMoneyDocument: {
    width: eMoneyDocumentWidth,
    height: eMoneyDocumentWidth / 1.6,
  },
  uboMetrics: {
    width: eMoneyDocumentWidth,
    height: eMoneyDocumentWidth / 1.9,
  },
};

export default metrics;
