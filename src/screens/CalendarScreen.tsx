import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Calendar from '../components/Calendar';
import Task from '../components/Task';

const CalendarScreen = () => {
  const [activeTab, setActiveTab] = useState('Takvim');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Takvim</Text>
        <TouchableOpacity style={styles.listButton}>
          <Text style={styles.listButtonText}>Liste</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.tabContainer}>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Takvim' && styles.activeTab]}
          onPress={() => setActiveTab('Takvim')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'Takvim' && styles.activeTabText
          ]}>Takvim</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.tab, activeTab === 'Günlüğüm' && styles.activeTab]}
          onPress={() => setActiveTab('Günlüğüm')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'Günlüğüm' && styles.activeTabText
          ]}>Günlüğüm</Text>
        </TouchableOpacity>
      </View>

      {activeTab === 'Takvim' ? (
        <Calendar 
          currentMonth="Mart 2025"
          onDayPress={(day) => console.log('Selected day:', day)}
        />
      ) : (
        <View style={styles.diaryContainer}>
          <Text style={styles.dateText}>18 Salı</Text>
          <Task
            title="Koşuya çık"
            description="10 km"
            icon="directions-run"
            backgroundColor="#FFA726"
            completed={true}
          />
          <Task
            title="Derin bir nefes al"
            icon="cloud"
            backgroundColor="#29B6F6"
            completed={true}
          />
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  listButton: {
    padding: 8,
  },
  listButtonText: {
    color: '#666',
  },
  tabContainer: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  tab: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
  },
  tabText: {
    color: '#666',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#000',
  },
  activeTabText: {
    color: '#000',
    fontWeight: 'bold',
  },
  diaryContainer: {
    padding: 16,
  },
  dateText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default CalendarScreen; 