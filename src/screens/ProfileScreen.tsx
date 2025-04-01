import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { Card } from '../components/common/Card';
import { Progress } from '../components/common/Progress';
import { Button } from '../components/common/Button';
import { Colors } from '../constants/Colors';
import { Typography } from '../constants/Typography';
import { Ionicons } from '@expo/vector-icons';
import { useTour } from '../components/AppTourProvider';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { MainTabParamList } from '../navigation/types';

type ProfileScreenNavigationProp = NativeStackNavigationProp<MainTabParamList, 'Profile'>;

const ProfileScreen = () => {
  const { startTour, registerTarget } = useTour();
  const navigation = useNavigation<ProfileScreenNavigationProp>();

  const userStats = [
    {
      title: 'Completed',
      value: '12',
      icon: 'checkmark-circle-outline',
    },
    {
      title: 'In Progress',
      value: '3',
      icon: 'time-outline',
    },
    {
      title: 'Success Rate',
      value: '85%',
      icon: 'trending-up-outline',
    },
  ];

  const achievements = [
    {
      id: '1',
      title: 'Early Bird',
      description: 'Complete morning routine for 7 days',
      progress: 85,
      icon: 'sunny-outline',
    },
    {
      id: '2',
      title: 'Bookworm',
      description: 'Read for 30 minutes daily for 21 days',
      progress: 45,
      icon: 'book-outline',
    },
    {
      id: '3',
      title: 'Fitness Warrior',
      description: 'Exercise 5 times a week for 4 weeks',
      progress: 60,
      icon: 'fitness-outline',
    },
  ];

  useEffect(() => {
    const tourSteps = [
      {
        id: 'profile-info',
        title: 'Profil Bilgileri',
        description: 'Profil bilgilerini buradan görüntüleyebilir ve düzenleyebilirsin.',
      },
      {
        id: 'settings',
        title: 'Ayarlar',
        description: 'Uygulama ayarlarını buradan yönetebilirsin.',
      },
    ];

    startTour(tourSteps);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Text style={styles.title}>Profil</Text>
          <TouchableOpacity 
            style={styles.settingsButton}
            ref={ref => registerTarget('settings', ref)}
          >
            <Ionicons name="settings-outline" size={24} color="#666" />
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <View 
            style={styles.profileSection}
            ref={ref => registerTarget('profile-info', ref)}
          >
            <Image
              source={{ uri: 'https://i.pravatar.cc/150' }}
              style={styles.avatar}
            />
            <Text style={styles.name}>Ahmet Yılmaz</Text>
            <Text style={styles.bio}>Daha iyi alışkanlıklar, daha iyi bir yaşam 🌱</Text>
          </View>

          <View style={styles.statsSection}>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>85%</Text>
              <Text style={styles.statLabel}>Başarı Oranı</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>45</Text>
              <Text style={styles.statLabel}>Aktif Gün</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statValue}>6</Text>
              <Text style={styles.statLabel}>Alışkanlık</Text>
            </View>
          </View>

          <View style={styles.achievementsSection}>
            <Text style={styles.sectionTitle}>Başarılar</Text>
            <View style={styles.achievementsList}>
              <View style={styles.achievementCard}>
                <View style={[styles.achievementIcon, { backgroundColor: '#FFE0B2' }]}>
                  <Text>🔥</Text>
                </View>
                <Text style={styles.achievementTitle}>Ateşli Başlangıç</Text>
              </View>
              <View style={styles.achievementCard}>
                <View style={[styles.achievementIcon, { backgroundColor: '#E8F5E9' }]}>
                  <Text>🎯</Text>
                </View>
                <Text style={styles.achievementTitle}>Hedef Odaklı</Text>
              </View>
              <View style={styles.achievementCard}>
                <View style={[styles.achievementIcon, { backgroundColor: '#E3F2FD' }]}>
                  <Text>⭐️</Text>
                </View>
                <Text style={styles.achievementTitle}>Mükemmel Hafta</Text>
              </View>
            </View>
          </View>

          <View style={styles.preferencesSection}>
            <Text style={styles.sectionTitle}>Tercihler</Text>
            <View style={styles.preferencesList}>
              <TouchableOpacity style={styles.preferenceItem}>
                <View style={styles.preferenceInfo}>
                  <Ionicons name="notifications-outline" size={24} color="#666" />
                  <Text style={styles.preferenceTitle}>Bildirimler</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.preferenceItem}>
                <View style={styles.preferenceInfo}>
                  <Ionicons name="color-palette-outline" size={24} color="#666" />
                  <Text style={styles.preferenceTitle}>Tema</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </TouchableOpacity>
              <TouchableOpacity style={styles.preferenceItem}>
                <View style={styles.preferenceInfo}>
                  <Ionicons name="language-outline" size={24} color="#666" />
                  <Text style={styles.preferenceTitle}>Dil</Text>
                </View>
                <Ionicons name="chevron-forward" size={24} color="#666" />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
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
  settingsButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    padding: 20,
  },
  profileSection: {
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 16,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  bio: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
  statsSection: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 20,
  },
  statCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#5B37B7',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 14,
    color: '#666',
  },
  achievementsSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1a1a1a',
    marginBottom: 16,
  },
  achievementsList: {
    flexDirection: 'row',
    gap: 12,
  },
  achievementCard: {
    flex: 1,
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  achievementIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 8,
  },
  achievementTitle: {
    fontSize: 14,
    color: '#1a1a1a',
    textAlign: 'center',
  },
  preferencesSection: {
    marginBottom: 20,
  },
  preferencesList: {
    backgroundColor: 'white',
    borderRadius: 12,
  },
  preferenceItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  preferenceInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  preferenceTitle: {
    fontSize: 16,
    color: '#1a1a1a',
  },
});

export default ProfileScreen; 