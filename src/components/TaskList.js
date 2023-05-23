import React, {useState} from 'react';
import Title from './Title';
import TaskItem from './TaskItem';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';
import useTasks from '../hooks/useTasks';

export default function TaskList({top: Top}) {
  const [title, imageTitle, list] = useTasks();
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
          <Text style={styles.counter}>
            {counter} / {list.length}
          </Text>
        </View>
      </>
    );
  };

  return (
    <>
      <FlatList
        data={list}
        renderItem={({item}) => <TaskItem {...item} setCounter={setCounter} />}
        keyExtractor={({task}) => task}
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
    fontSize: 18
  }
});
