import React, { useEffect } from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useTour } from '../components/AppTourProvider';
import { Ionicons } from '@expo/vector-icons';

const HomeScreen = () => {
  const { startTour, registerTarget } = useTour();

  useEffect(() => {
    const tourSteps = [
      {
        id: 'daily-progress',
        title: 'Günlük İlerleme',
        description: 'Bugün yapman gereken alışkanlıkları ve ilerlemeni buradan takip edebilirsin.',
      },
      {
        id: 'quick-add',
        title: 'Hızlı Ekleme',
        description: 'Yeni alışkanlıkları hızlıca eklemek için bu butonu kullanabilirsin.',
      },
    ];

    startTour(tourSteps);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Merhaba 👋</Text>
          <Text style={styles.date}>1 Nisan 2024, Pazartesi</Text>
        </View>
        <TouchableOpacity 
          style={styles.addButton}
          ref={ref => registerTarget('quick-add', ref)}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        ref={ref => registerTarget('daily-progress', ref)}
      >
        <View style={styles.progressCard}>
          <Text style={styles.progressTitle}>Bugünkü İlerleme</Text>
          <View style={styles.progressBar}>
            <View style={[styles.progressFill, { width: '75%' }]} />
          </View>
          <Text style={styles.progressText}>6/8 alışkanlık tamamlandı</Text>
        </View>

        <Text style={styles.sectionTitle}>Bugünkü Alışkanlıklar</Text>
        
        <View style={styles.habitsList}>
          <TouchableOpacity style={styles.habitCard}>
            <View style={[styles.habitStatus, styles.habitCompleted]} />
            <View style={styles.habitInfo}>
              <Text style={styles.habitTitle}>Sabah Egzersizi</Text>
              <Text style={styles.habitTime}>07:00</Text>
            </View>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.habitCard}>
            <View style={[styles.habitStatus, styles.habitCompleted]} />
            <View style={styles.habitInfo}>
              <Text style={styles.habitTitle}>Su İçme</Text>
              <Text style={styles.habitTime}>Gün Boyu</Text>
            </View>
            <Ionicons name="checkmark-circle" size={24} color="#4CAF50" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.habitCard}>
            <View style={styles.habitStatus} />
            <View style={styles.habitInfo}>
              <Text style={styles.habitTitle}>Kitap Okuma</Text>
              <Text style={styles.habitTime}>21:00</Text>
            </View>
            <Ionicons name="ellipse-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Motivasyon</Text>
        <View style={styles.quoteCard}>
          <Text style={styles.quote}>
            "Alışkanlıklar önce örümcek ağı gibi zayıf, sonra çelik gibi güçlü olur."
          </Text>
          <Text style={styles.quoteAuthor}>- Samuel Johnson</Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: 'white',
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: '#666',
  },
  addButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#5B37B7',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  progressCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 24,
  },
  progressTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  progressBar: {
    height: 8,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#5B37B7',
    borderRadius: 4,
  },
  progressText: {
    fontSize: 14,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  habitsList: {
    gap: 12,
    marginBottom: 24,
  },
  habitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 12,
  },
  habitStatus: {
    width: 4,
    height: 40,
    backgroundColor: '#ddd',
    borderRadius: 2,
    marginRight: 16,
  },
  habitCompleted: {
    backgroundColor: '#4CAF50',
  },
  habitInfo: {
    flex: 1,
  },
  habitTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#1a1a1a',
    marginBottom: 4,
  },
  habitTime: {
    fontSize: 14,
    color: '#666',
  },
  quoteCard: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  quote: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#1a1a1a',
    marginBottom: 8,
    lineHeight: 24,
  },
  quoteAuthor: {
    fontSize: 14,
    color: '#666',
    textAlign: 'right',
  },
});

export default HomeScreen; 