import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Kompanion Banner */}
        <TouchableOpacity style={styles.kompanionBanner}>
          <View style={styles.kompanionLeft}>
            <Text style={styles.kompanionLogo}>k</Text>
            <View>
              <Text style={styles.kompanionFree}>ÜCRETSİZ</Text>
              <Text style={styles.kompanionText}>Kompanion hesabını oluştur</Text>
            </View>
          </View>
          <Icon name="chevron-right" size={24} color="#fff" />
        </TouchableOpacity>

        {/* Header */}
        <View style={styles.header}>
          <View style={styles.userInfo}>
            <Text style={styles.avatar}>👩</Text>
            <Text style={styles.greeting}>Merhaba!</Text>
          </View>
          <TouchableOpacity>
            <Icon name="settings" size={24} color="#000" />
          </TouchableOpacity>
        </View>

        {/* Rewards Summary */}
        <View style={styles.rewardsSummary}>
          <View style={styles.rewardIcons}>
            <Text style={styles.rewardEmoji}>🔥</Text>
            <Text style={styles.rewardEmoji}>❤️</Text>
            <Text style={styles.rewardEmoji}>💜</Text>
          </View>
          <Text style={styles.rewardCount}>2 ödül</Text>
        </View>

        {/* Statistics */}
        <Text style={styles.sectionTitle}>İSTATİSTİK</Text>
        <View style={styles.statsGrid}>
          <View style={styles.statsCard}>
            <Text style={styles.statsValue}>1</Text>
            <Text style={styles.statsLabel}>TOPLAM GÜN</Text>
            <Text style={styles.statsUnit}>gün</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsValue}>2</Text>
            <Text style={styles.statsLabel}>ALIŞKANLIKLARIN</Text>
            <Text style={styles.statsUnit}>alışkanlık</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsValue}>1</Text>
            <Text style={styles.statsLabel}>GÜNCEL SERİN</Text>
            <Text style={styles.statsUnit}>gün</Text>
          </View>
          <View style={styles.statsCard}>
            <Text style={styles.statsValue}>1</Text>
            <Text style={styles.statsLabel}>EN İYİ SERİN</Text>
            <Text style={styles.statsUnit}>gün</Text>
            <Text style={styles.fireEmoji}>🔥</Text>
          </View>
        </View>

        {/* Ramadan Banner */}
        <View style={styles.ramadanBanner}>
          <View style={styles.ramadanContent}>
            <Text style={styles.ramadanTitle}>Ramazan ayına özel</Text>
            <Text style={styles.ramadanDiscount}>%50 İNDİRİM</Text>
            <TouchableOpacity style={styles.joinButton}>
              <Text style={styles.joinButtonText}>Şimdi katıl</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Rewards Section */}
        <View style={styles.rewardsSection}>
          <View style={styles.rewardsHeader}>
            <Text style={styles.rewardsTitle}>Ödüller</Text>
            <TouchableOpacity>
              <Text style={styles.seeAllButton}>TÜMÜNÜ GÖR →</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  kompanionBanner: {
    backgroundColor: '#1E2537',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    margin: 16,
    borderRadius: 16,
  },
  kompanionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  kompanionLogo: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
    marginRight: 12,
  },
  kompanionFree: {
    color: '#fff',
    fontSize: 12,
  },
  kompanionText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 16,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    fontSize: 32,
    marginRight: 12,
  },
  greeting: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  rewardsSummary: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 24,
  },
  rewardIcons: {
    flexDirection: 'row',
    marginRight: 8,
  },
  rewardEmoji: {
    fontSize: 20,
    marginRight: 4,
  },
  rewardCount: {
    fontSize: 16,
    color: '#666',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 8,
  },
  statsCard: {
    width: '45%',
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 16,
    margin: 8,
    position: 'relative',
  },
  statsValue: {
    fontSize: 32,
    fontWeight: 'bold',
  },
  statsLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
  statsUnit: {
    fontSize: 14,
    color: '#999',
    marginTop: 2,
  },
  fireEmoji: {
    position: 'absolute',
    right: 8,
    top: 8,
    fontSize: 16,
  },
  ramadanBanner: {
    backgroundColor: '#F5E6D3',
    margin: 16,
    borderRadius: 16,
    padding: 20,
  },
  ramadanContent: {
    flex: 1,
  },
  ramadanTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2D1F3D',
  },
  ramadanDiscount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#E53935',
    marginVertical: 8,
  },
  joinButton: {
    backgroundColor: '#2D1F3D',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 8,
  },
  joinButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  rewardsSection: {
    margin: 16,
  },
  rewardsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rewardsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    color: '#4CAF50',
    fontWeight: '500',
  },
});

export default ProfileScreen; 