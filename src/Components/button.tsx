import React, {FunctionComponent} from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {Colors, Fonts, Metrics} from '../Themes';

const hitSlop = {
  top: Metrics.baseMargin,
  bottom: Metrics.baseMargin,
  left: Metrics.baseMargin,
  right: Metrics.baseMargin,
};

export enum BtnColor {
  WEE_AQUA = 'weeAqua',
  WEE_BLUE = 'weeBlue',
  WEE_WHITE = 'weeWhite',
}

const BUTTON_BG_COLORS = {
  [BtnColor.WEE_AQUA]: Colors.eMoney.weeAqua,
  [BtnColor.WEE_BLUE]: Colors.eMoney.weeBlue,
  [BtnColor.WEE_WHITE]: Colors.weeWhite,
  weeInactiveButton: Colors.eMoney.weeInactiveButton,
};

const COLORS_FOR_BUTTON_BACKGROUND = {
  [BtnColor.WEE_AQUA]: Colors.weeWhite,
  [BtnColor.WEE_BLUE]: Colors.weeWhite,
  [BtnColor.WEE_WHITE]: Colors.weeDarkGrey,
  weeInactiveButton: Colors.weeWhite,
};

type Props = {
  children: string;
  onPress: () => void;
  backgroundColor?: BtnColor;
  disabled?: boolean;
  testID?: string;
  border?: boolean;
  isFunctionDisabled?: boolean;
};

const Button: FunctionComponent<Props> = ({
  children,
  onPress,
  disabled,
  backgroundColor = BtnColor.WEE_AQUA,
  testID,
  border,
  isFunctionDisabled,
}) => {
  const buttonColor = disabled ? 'weeInactiveButton' : backgroundColor;

  return (
    <TouchableOpacity
      style={[
        styles.buttonWrapper,
        {
          backgroundColor: BUTTON_BG_COLORS[buttonColor],
          borderColor: border ? Colors.weeDarkGrey : Colors.transparent,
        },
      ]}
      onPress={onPress}
      hitSlop={hitSlop}
      testID={testID}
      disabled={isFunctionDisabled}>
      <Text
        style={[
          styles.buttonText,
          {color: COLORS_FOR_BUTTON_BACKGROUND[buttonColor]},
        ]}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonWrapper: {
    height: Metrics.eMoneyInputNextButton,
    borderRadius: Metrics.eMoneyInputNextButton / 2,
    padding: Metrics.baseMargin,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: StyleSheet.hairlineWidth,
    width: Metrics.screenWidth - Metrics.doubleBaseMargin,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: Fonts.size.regular,
    fontWeight: 'bold',
  },
});

export default Button;
