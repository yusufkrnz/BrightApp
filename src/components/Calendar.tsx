import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

interface CalendarProps {
  currentMonth: string;
  onDayPress?: (day: number) => void;
}

const Calendar: React.FC<CalendarProps> = ({ currentMonth, onDayPress }) => {
  const weekDays = ['PZT', 'SAL', 'ÇAR', 'PER', 'CUM', 'CTS', 'PAZ'];
  
  return (
    <View style={styles.container}>
      <Text style={styles.monthTitle}>{currentMonth}</Text>
      
      <View style={styles.weekDaysContainer}>
        {weekDays.map((day, index) => (
          <Text key={index} style={styles.weekDay}>
            {day}
          </Text>
        ))}
      </View>
      
      {/* Takvim günleri grid'i buraya gelecek */}
      <View style={styles.daysGrid}>
        {/* Günler dinamik olarak oluşturulacak */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 16,
  },
  monthTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  weekDaysContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  weekDay: {
    width: 40,
    textAlign: 'center',
    color: '#666',
  },
  daysGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});

export default Calendar; 