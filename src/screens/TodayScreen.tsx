import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SwipeableTask from '../components/SwipeableTask';

const TodayScreen = () => {
  const weekDays = [
    { short: 'CTS', long: 'Cumartesi', day: 15 },
    { short: 'PAZ', long: 'Pazar', day: 16 },
    { short: 'PZT', long: 'Pazartesi', day: 17 },
    { short: 'SAL', long: 'Salı', day: 18 },
    { short: 'ÇAR', long: 'Çarşamba', day: 19 },
    { short: 'PER', long: 'Perşembe', day: 20 },
    { short: 'CUM', long: 'Cuma', day: 21 },
  ];

  const tasks = [
    {
      id: 1,
      title: 'Koşuya çık',
      description: '10 km • Herhangi bir zaman',
      icon: '🏃',
      backgroundColor: '#FFE5A5',
      completed: true,
    },
    {
      id: 2,
      title: 'Derin bir nefes al',
      description: 'Günlük • 12:45',
      icon: '☁️',
      backgroundColor: '#A5E1FF',
      completed: true,
    },
  ];

  const handleEditTask = (taskId: number) => {
    console.log('Edit task:', taskId);
  };

  const handleDeleteTask = (taskId: number) => {
    console.log('Delete task:', taskId);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Bugün</Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.weekDaysScroll}>
          {weekDays.map((day, index) => (
            <TouchableOpacity 
              key={index}
              style={[
                styles.dayContainer,
                day.day === 18 && styles.selectedDayContainer
              ]}
            >
              <Text style={[styles.dayText, day.day === 18 && styles.selectedDayText]}>
                {day.short}
              </Text>
              <Text style={[styles.dateText, day.day === 18 && styles.selectedDateText]}>
                {day.day}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <View style={styles.promotionCard}>
          <View style={styles.promotionContent}>
            <Text style={styles.promotionTitle}>Ramazan ayına özel</Text>
            <Text style={styles.promotionDiscount}>%50 İNDİRİM</Text>
            <TouchableOpacity style={styles.promotionButton}>
              <Text style={styles.promotionButtonText}>Şimdi katıl</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.promotionIcons}>
            <Text style={styles.promotionEmoji}>🌙</Text>
            <Text style={styles.promotionEmoji}>🕌</Text>
          </View>
        </View>

        <Text style={styles.sectionTitle}>Bugün nasıl hissediyorsun?</Text>
        
        <TouchableOpacity style={styles.moodButton}>
          <View style={styles.moodContent}>
            <Text style={styles.moodEmoji}>😊</Text>
            <View>
              <Text style={styles.moodTitle}>Günü değerlendir</Text>
              <Text style={styles.moodSubtitle}>Günlük • Herhangi bir zaman</Text>
            </View>
          </View>
          <Icon name="add" size={24} color="#666" />
        </TouchableOpacity>

        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Gün ortası</Text>
          <Text style={styles.completionText}>1/1 tamamlandı</Text>
        </View>

        {tasks.map((task) => (
          <SwipeableTask
            key={task.id}
            task={task}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 16,
  },
  weekDaysScroll: {
    marginTop: 24,
    paddingHorizontal: 12,
  },
  dayContainer: {
    alignItems: 'center',
    marginHorizontal: 4,
    padding: 8,
    borderRadius: 20,
  },
  selectedDayContainer: {
    backgroundColor: '#E8F5E9',
  },
  dayText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  dateText: {
    fontSize: 16,
    fontWeight: '500',
  },
  selectedDayText: {
    color: '#2E7D32',
  },
  selectedDateText: {
    color: '#2E7D32',
    fontWeight: 'bold',
  },
  promotionCard: {
    backgroundColor: '#F5E6CA',
    margin: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
  },
  promotionContent: {
    flex: 1,
  },
  promotionTitle: {
    fontSize: 16,
    color: '#4A2B99',
  },
  promotionDiscount: {
    fontSize: 24,
    color: '#FF4444',
    fontWeight: 'bold',
    marginVertical: 8,
  },
  promotionButton: {
    backgroundColor: '#4A2B99',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  promotionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  promotionIcons: {
    justifyContent: 'space-around',
  },
  promotionEmoji: {
    fontSize: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginTop: 24,
  },
  moodButton: {
    backgroundColor: '#F0F0F0',
    margin: 16,
    padding: 16,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  moodContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  moodEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  moodTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  moodSubtitle: {
    fontSize: 14,
    color: '#666',
    marginTop: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginTop: 24,
  },
  completionText: {
    color: '#666',
  },
});

export default TodayScreen; 