import React, { useState } from 'react'
import { Image, StyleSheet, Text, View, TouchableOpacity } from 'react-native'

export default function Task({ task, icon, setCounter /* updateItemState , onPress */ }) {
  const [button, setButton] = useState(false)
  const [textButton, setTextButton] = useState(false)
  const [bgcolorView, setBgcolorView] = useState(false)

  const toggleButton = () => {
    setButton(!button)
    setTextButton(!textButton)
    setBgcolorView(!bgcolorView)
    /* onPress() */
    /* updateItemState(task) */

    button ? setCounter(current => current - 1) : setCounter(current => current + 1)
  }



  return (
    <View style={[styles.containerItem,
      {backgroundColor: bgcolorView ? '#E1EFF2' : '#BDBCFF'}
    ]}>
      <View style={styles.infoItem}>
        <Image source={icon} style={styles.icon} />
        <Text style={[styles.text,
          {textDecorationLine: button ? 'line-through' : 'none'}
        ]}>{task}</Text>
      </View>

      <TouchableOpacity
        onPress={toggleButton}
        style={[styles.button,
          {backgroundColor: button ? '#00EA17' : '#FF5D5D'}
        ]}
      >
        <Text>{textButton ? 'Feito' : 'Fazer'}</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#BDBCFF',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
    marginHorizontal: 24,
    borderRadius: 12,
    minHeight: 100,
    elevation: 8

    /* iOS
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    
    */
  },
  infoItem: {
    width: '70%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginRight: 8,
    width: 32,
    height: 32
  },
  text: {
    fontSize: 18,
    color: '#000000'
  },
  button: {
    backgroundColor: '#FF5D5D',
    width: '20%',
    borderBottomRightRadius: 12,
    borderTopRightRadius: 12,
    justifyContent: 'center',
    alignItems: 'center'
  }
})