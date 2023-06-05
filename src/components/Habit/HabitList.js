import React, {useState} from 'react';
import Title from '../Title';
import HabitItem from './HabitItem';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import useHabits from '../../hooks/useHabits';

export default function HabitList({top: Top}) {
  const [title, imageTitle, list] = useHabits();
  const [counter, setCounter] = useState(0);

  const titleList = () => {
    return (
      <>
        <Top />

        <View style={styles.containerTitle}>
          <View style={styles.containerTitleList}>
            <Image source={imageTitle} style={styles.imageTitleList} />
            <Title>{title}</Title>
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={list}
        renderItem={({item}) => <HabitItem {...item} setCounter={setCounter} />}
        keyExtractor={({habit}) => habit}
        ListHeaderComponent={titleList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  containerTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 24,
  },
  containerTitleList: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageTitleList: {
    marginRight: 12,
  },
  counter: {
    backgroundColor: '#BDBCFF',
    width: 64,
    padding: 8,
    borderRadius: 8,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
