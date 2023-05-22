import React, {useEffect, useState} from 'react';
import Title from './Title';
import Task from './Task';
import {loadTasks} from '../services/loadData';
import {FlatList, Image, StyleSheet, View, Text} from 'react-native';

export default function Tasks({top: Top}) {
  const [title, setTitle] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [list, setList] = useState([]);
  const [counter, setCounter] = useState(0)

  useEffect(() => {
    const loaded = loadTasks();
    setTitle(loaded.title);
    setImageTitle(loaded.image);
    setList(loaded.taskslist);
    
  }, []);

  useEffect(() => {
    console.log(counter)
  }, [counter])

  /* const updateItemState = (item) => {
    const itemFound = list.find((x) => item === x.task)
    console.log(item)
    setList(current => [...current, itemFound.isDone = !itemFound.isDone])
  } */

  //para visualizar a toda alteração o tamanho da lista
  /* useEffect(() => {  
    console.log(list)
  }) */

  const titleList = () => {
    //achei gambierra isso aq
    return (
      <>
        <Top />
        <Text>{counter} / {list.length}</Text> 
        <View style={styles.containerTitleList}>
          <Image source={imageTitle} style={styles.imageTitleList} />
          <Title>{title}</Title>
        </View>
      </>
    );
  };

  const moveCheckedItemToEnd = task => {
    setList(prevList => {
      const updatedList = prevList.map(item => {
        if (item.task === task) {
          return {...item, completed: true};
        }
        return item;
      });
      return updatedList.sort(
        (a, b) => (a.completed ? 1 : 0) - (b.completed ? 1 : 0),
      );
      /* const updatedList = prevList.filter((item) => item.task !== task);
      return [...updatedList, { task }]; */
    });
  };

  /* const mostraCounter = () => {
    return <Text>{counter}</Text>
  } */

  return (
    <>
    <Text>{counter}</Text>
    <FlatList
      data={list}
      renderItem={({item}) => (
        <Task {...item} setCounter={setCounter} /* updateItemState={updateItemState} */ /* onPress={() => moveCheckedItemToEnd(item.task)} */ />
      )}
      /* renderItem={({ item }) =>
      item.task !== 'Ler 10 páginas' ? (
        <Task {...item} onPress={() => moveCheckedItemToEnd(item.task)} />
      ) : null 
    } */
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
