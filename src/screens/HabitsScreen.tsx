import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTour } from '../components/AppTourProvider';

const HabitsScreen = () => {
  const { startTour, registerTarget } = useTour();

  useEffect(() => {
    const tourSteps = [
      {
        id: 'habits-list',
        title: 'Alışkanlık Listesi',
        description: 'Tüm alışkanlıklarını burada görebilir ve düzenleyebilirsin.',
      },
      {
        id: 'add-habit',
        title: 'Yeni Alışkanlık',
        description: 'Yeni alışkanlık eklemek için bu butonu kullanabilirsin.',
      },
    ];

    startTour(tourSteps);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Alışkanlıklar</Text>
        <TouchableOpacity 
          style={styles.addButton}
          ref={ref => registerTarget('add-habit', ref)}
        >
          <Ionicons name="add" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <ScrollView 
        style={styles.content}
        ref={ref => registerTarget('habits-list', ref)}
      >
        <View style={styles.habitsList}>
          <TouchableOpacity style={styles.habitCard}>
            <View style={styles.habitInfo}>
              <View style={styles.habitHeader}>
                <View style={[styles.habitIcon, { backgroundColor: '#E8F5E9' }]}>
                  <Ionicons name="fitness" size={20} color="#4CAF50" />
                </View>
                <View style={styles.habitTitleContainer}>
                  <Text style={styles.habitTitle}>Sabah Egzersizi</Text>
                  <Text style={styles.habitTime}>Her gün 07:00</Text>
                </View>
              </View>
              <View style={styles.habitStats}>
                <Text style={styles.habitStreak}>🔥 7 gün seri</Text>
                <Text style={styles.habitSuccess}>85% başarı</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.habitCard}>
            <View style={styles.habitInfo}>
              <View style={styles.habitHeader}>
                <View style={[styles.habitIcon, { backgroundColor: '#E3F2FD' }]}>
                  <Ionicons name="water" size={20} color="#2196F3" />
                </View>
                <View style={styles.habitTitleContainer}>
                  <Text style={styles.habitTitle}>Su İçme</Text>
                  <Text style={styles.habitTime}>Her gün</Text>
                </View>
              </View>
              <View style={styles.habitStats}>
                <Text style={styles.habitStreak}>🔥 14 gün seri</Text>
                <Text style={styles.habitSuccess}>92% başarı</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>

          <TouchableOpacity style={styles.habitCard}>
            <View style={styles.habitInfo}>
              <View style={styles.habitHeader}>
                <View style={[styles.habitIcon, { backgroundColor: '#FFF3E0' }]}>
                  <Ionicons name="book" size={20} color="#FF9800" />
                </View>
                <View style={styles.habitTitleContainer}>
                  <Text style={styles.habitTitle}>Kitap Okuma</Text>
                  <Text style={styles.habitTime}>Her gün 21:00</Text>
                </View>
              </View>
              <View style={styles.habitStats}>
                <Text style={styles.habitStreak}>🔥 5 gün seri</Text>
                <Text style={styles.habitSuccess}>78% başarı</Text>
              </View>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#666" />
          </TouchableOpacity>
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
    backgroundColor: 'white',
    padding: 20,
    paddingTop: 60,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1a1a1a',
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
  habitsList: {
    gap: 16,
  },
  habitCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
  },
  habitInfo: {
    flex: 1,
  },
  habitHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  habitIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  habitTitleContainer: {
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
  habitStats: {
    flexDirection: 'row',
    gap: 16,
  },
  habitStreak: {
    fontSize: 14,
    color: '#FF9800',
  },
  habitSuccess: {
    fontSize: 14,
    color: '#4CAF50',
  },
});

export default HabitsScreen; 