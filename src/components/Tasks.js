import React, {useEffect, useState} from 'react';
import Title from './Title';
import Task from './Task';
//import {loadTasks} from '../services/loadData';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import useTasks from '../hooks/useTasks';

export default function Tasks({top: Top}) {
  const [title, imageTitle, list] = useTasks();
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log(counter);
  }, [counter]);

  const titleList = () => {
    return (
      <>
        <Top />
        <Text>
          {counter} / {list.length}
        </Text>
        <View style={styles.containerTitleList}>
          <Image source={imageTitle} style={styles.imageTitleList} />
          <Title>{title}</Title>
        </View>
      </>
    );
  };

  return (
    <>
      <Text>{counter}</Text>
      <FlatList
        data={list}
        renderItem={({item}) => <Task {...item} setCounter={setCounter} />}
        keyExtractor={({task}) => task}
        ListHeaderComponent={titleList}
      />
    </>
  );
}

const styles = StyleSheet.create({
  containerTitleList: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 24,
  },
  imageTitleList: {
    marginRight: 12,
  },
});
