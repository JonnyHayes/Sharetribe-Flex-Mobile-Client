import React from 'react';
import { View } from 'react-native';
import T from 'prop-types';
import { Text, Touchable, IconFonts } from '../../../../components';
import s from './styles';
import { colors } from '../../../../styles';

const CategorySectionHeader = ({ title, onlyCategory, onPress }) => (
  <Touchable disabled={!onlyCategory} onPress={onPress}>
    <View style={s.header}>
      {onlyCategory && (
        <IconFonts
          name="outline-keyboard_arrow_left-24px-1"
          tintColor={colors.categoryScreen.icon}
          size={30}
        />
      )}
      <Text xmediumSize>{title}</Text>
    </View>
  </Touchable>
);

CategorySectionHeader.propTypes = {
  title: T.string,
  onlyCategory: T.bool,
  onPress: T.func,
};

export default CategorySectionHeader;
