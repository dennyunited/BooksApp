import React from 'react';

import {View, Text, FlatList} from 'react-native';
import QuestionCheckBox from '../../../components/CheckBoxes/QuestionCheckBox';
import {DefaultButton} from '../../../components/Buttons';

import {useSelector, useDispatch} from 'react-redux';
import {selectExplicit, filtersActions} from '../../../redux/filters';

import styles from '../styles';

export default function Preload({navigation}) {
  const explicit = useSelector((state) => selectExplicit(state));
  const dispatch = useDispatch();

  const choices = [
    {id: 0, name: 'Yes', value: true},
    {id: 1, name: 'No', value: false},
  ];

  const onPressNext = () => {
    navigation.navigate('Preload7');
  };

  const onPressItem = (item) => {
    dispatch(filtersActions.setFilterValue('has_explicit_language', item));
  };

  return (
    <View style={styles.renderScreenContainer}>
      <Text style={styles.question}>
        Are you okay with explicit language in books?
      </Text>
      <View>
        <FlatList
          data={choices}
          renderItem={(choice) => {
            const isChecked = explicit.id === choice.item.id;
            return (
              <QuestionCheckBox
                checked={isChecked}
                choice={choice}
                onPress={onPressItem}
              />
            );
          }}
          keyExtractor={(item, index) => index.toString()}
        />

        <View style={styles.bottomContainer}>
          <DefaultButton
            title={'Next'}
            onPress={onPressNext}
            containerStyle={{flex: 1}}
          />
        </View>
      </View>
    </View>
  );
}
