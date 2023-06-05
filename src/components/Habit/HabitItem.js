import React, {useState, useEffect} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function HabitItem({habit, icon}) {
  const days = [
    {day: 'D', id: 'dom'},
    {day: 'S', id: 'seg'},
    {day: 'T', id: 'ter'},
    {day: 'Q', id: 'qua'},
    {day: 'Q', id: 'qui'},
    {day: 'S', id: 'sex'},
    {day: 'S', id: 'sab'},
  ];
  const [buttons, setButtons] = useState({
    dom: false,
    seg: false,
    ter: false,
    qua: false,
    qui: false,
    sex: false,
    sab: false,
  });
  const [percentual, setPercentual] = useState(0)

  function toggleDayButton(id) {
    setButtons(current => ({...current, [id]: !buttons[id]}));
  }

  function calcPercentual() {
    const buttonsValues = Object.values(buttons)
    const totalAmount = buttonsValues.length
    const activeAmount = buttonsValues.filter(button => button).length
    const activePercentual = activeAmount * 100 / totalAmount
    setPercentual(Math.round(activePercentual))
  }

  useEffect(() => {
    calcPercentual()
  }, [buttons])

  return (
    <View style={styles.containerItem}>
      <View style={styles.containerTop}>
        <View style={styles.infoItem}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.text}>{habit}</Text>
        </View>
        <Text style={styles.percent}>{percentual}%</Text>
      </View>

      <View style={styles.containerDays}>
        {days.map(day => (
          <TouchableOpacity
            key={day.id}
            style={[
              styles.day,
              {backgroundColor: buttons[day.id] ? '#00EA17' : 'transparent'},
            ]}
            onPress={() => toggleDayButton(day.id)}>
            <Text style={styles.textDay}>{day.day}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerItem: {
    backgroundColor: '#E1EFF2',
    justifyContent: 'space-between',
    marginVertical: 12,
    marginHorizontal: 24,
    borderRadius: 12,
    minHeight: 100,
    elevation: 8,

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
  containerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  containerDays: {
    marginHorizontal: 16,
    marginBottom: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  day: {
    borderStyle: 'solid',
    borderWidth: 1,
    borderColor: '#00EA17',
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDay: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  icon: {
    marginRight: 8,
    width: 20,
    height: 20,
  },
  text: {
    fontSize: 18,
    color: '#000000',
  },
  percent: {
    backgroundColor: '#F582F8',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
    fontSize: 18,
    marginRight: 16,
  },
});
