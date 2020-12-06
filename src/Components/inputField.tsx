import React, {ReactElement} from 'react';
import {View, Text, StyleSheet, KeyboardType, ViewStyle} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors, Metrics, Fonts} from '../Themes';

export interface Props {
  label?: string;
  testID?: string;
  value?: string;
  placeHolder?: string;
  error?: string;
  rightIcon?: string;
  keyboardType?: 'numeric' | 'email-address' | 'phone-pad';
  maxLength?: number;
  iconLabel?: string;
  password?: boolean;
  iconStyle?: ViewStyle;
  iconColor?: string;
  hidden?: boolean;
  onChangeValue?: (value: string) => void;
  onIconPress?: () => void;
  onFocus?: () => void;
}

export default ({
  label,
  testID,
  value,
  placeHolder,
  error = null,
  rightIcon = null,
  keyboardType,
  maxLength,
  iconLabel = null,
  iconStyle,
  iconColor,
  hidden,
  onChangeValue,
  onIconPress,
  onFocus,
}: Props): ReactElement => {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.inputLabel,
          {color: error ? Colors.weeRedInValid : Colors.weeBlack},
        ]}>
        {label}
      </Text>
      <View
        style={[
          styles.selectionContainer,
          {
            borderColor: error && Colors.weeRedInValid,
            paddingRight: rightIcon && 0,
          },
        ]}>
        <View style={styles.inputContainer}>
          <TextInput
            onChangeText={onChangeValue}
            testID={testID}
            value={value}
            placeholder={placeHolder}
            keyboardType={(keyboardType || 'default') as KeyboardType}
            maxLength={maxLength}
            onFocus={onFocus}
            placeholderTextColor={Colors.weeBlack}
            style={styles.textInput}
            secureTextEntry={hidden}
          />
        </View>
        <View style={styles.rightIconContainer}>
          {rightIcon && (
            <View style={[styles.rightIconContent, iconStyle]}>
              <Icon
                onPress={onIconPress}
                name={rightIcon}
                size={Metrics.icons.medium}
                color={iconColor}
              />
              {iconLabel ? (
                <Text style={styles.iconLabel}>{iconLabel}</Text>
              ) : null}
            </View>
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: Metrics.emoneyInputMargins,
    paddingTop: Metrics.baseMargin,
    minHeight: Metrics.eMoneyInputHeight,
    width: '100%',
  },
  selectionContainer: {
    height: Metrics.eMoneyInputHeight,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: Metrics.baseMargin,
    borderWidth: Metrics.eMoneyInputBorderWidth,
    borderRadius: 5,
    borderColor: Colors.eMoney.weeBlue,
    padding: Metrics.doubleBaseMargin,
  },
  selectionText: {
    color: Colors.weeLightGrey,
    fontSize: Fonts.size.regular,
    fontFamily: Fonts.type.base,
    marginHorizontal: Metrics.baseMargin,
  },
  inputLabel: {
    position: 'absolute',
    backgroundColor: Colors.weeWhite,
    zIndex: 1,
    left: Metrics.baseMargin,
    marginHorizontal: Metrics.halfBaseMargin,
    paddingLeft: Metrics.baseMargin,
    paddingRight: Metrics.baseMargin,
    top: 0,
  },
  inputContainer: {
    flex: 0.7,
    height: Metrics.eMoneyInputHeight,
    display: 'flex',
    justifyContent: 'center',
    left: Metrics.smallMargin,
  },
  iconContainer: {
    right: 0,
    top: 0,
    bottom: 0,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.eMoney.weeBlue,
    zIndex: 1,
  },
  rightIconContainer: {
    flex: 0.3,
    height: Metrics.eMoneyInputHeight - Metrics.eMoneyInputBorderWidth,
  },
  rightIconContent: {
    backgroundColor: Colors.eMoney.weeBlue,
    justifyContent: 'center',
    alignItems: 'center',
    height: Metrics.eMoneyInputHeight - Metrics.eMoneyInputBorderWidth,
    borderTopRightRadius: 5,
    borderBottomRightRadius: 5,
  },
  iconLabel: {
    color: Colors.weeWhite,
    fontSize: Fonts.size.small,
  },
  textInput: {
    color: Colors.weeShadow,
  },
});
