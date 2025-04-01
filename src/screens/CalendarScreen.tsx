import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Calendar } from 'react-native-calendars';

interface MarkedDates {
  [date: string]: {
    marked: boolean;
    dotColor: string;
    textColor: string;
  };
}

interface MoodData {
  date: string;
  mood: 'happy' | 'neutral' | 'sad';
  note: string;
}

const CalendarScreen: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [moodData, setMoodData] = useState<MoodData[]>([]);

  const markedDates: MarkedDates = {
    '2024-03-28': {
      marked: true,
      dotColor: '#4CAF50',
      textColor: '#000',
    },
    '2024-03-27': {
      marked: true,
      dotColor: '#FFC107',
      textColor: '#000',
    },
    '2024-03-26': {
      marked: true,
      dotColor: '#F44336',
      textColor: '#000',
    },
  };

  const handleDayPress = (day: { dateString: string }) => {
    setSelectedDate(day.dateString);
  };

  const MoodSelector: React.FC<{ onSelect: (mood: MoodData['mood']) => void }> = ({ onSelect }) => (
    <View style={styles.moodSelector}>
      <TouchableOpacity
        style={[styles.moodButton, { backgroundColor: '#4CAF50' }]}
        onPress={() => onSelect('happy')}
      >
        <Text style={styles.moodButtonText}>😊 Happy</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moodButton, { backgroundColor: '#FFC107' }]}
        onPress={() => onSelect('neutral')}
      >
        <Text style={styles.moodButtonText}>😐 Neutral</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.moodButton, { backgroundColor: '#F44336' }]}
        onPress={() => onSelect('sad')}
      >
        <Text style={styles.moodButtonText}>😢 Sad</Text>
      </TouchableOpacity>
    </View>
  );

  const handleMoodSelect = (mood: MoodData['mood']) => {
    if (selectedDate) {
      const newMoodData: MoodData = {
        date: selectedDate,
        mood,
        note: '',
      };
      setMoodData([...moodData, newMoodData]);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Calendar</Text>
        <Text style={styles.headerSubtitle}>Track your progress and mood</Text>
      </View>

      <Calendar
        onDayPress={handleDayPress}
        markedDates={markedDates}
        theme={{
          selectedDayBackgroundColor: '#007AFF',
          selectedDayTextColor: '#ffffff',
          todayTextColor: '#007AFF',
          dayTextColor: '#2d4150',
          textDisabledColor: '#d9e1e8',
          dotColor: '#00adf5',
          monthTextColor: '#2d4150',
        }}
      />

      {selectedDate && (
        <View style={styles.moodSection}>
          <Text style={styles.sectionTitle}>How are you feeling today?</Text>
          <MoodSelector onSelect={handleMoodSelect} />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    padding: 20,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  headerSubtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  moodSection: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333',
    marginBottom: 15,
  },
  moodSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moodButton: {
    flex: 1,
    padding: 15,
    borderRadius: 10,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  moodButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default CalendarScreen; 