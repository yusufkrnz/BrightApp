import React, { useState } from 'react';
import { View, StyleSheet, Text, ScrollView, TouchableOpacity, Image, ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialIcons';
import SlideUpPanel from '../components/SlideUpPanel';

interface Category {
  id: number;
  title: string;
  image: ImageSourcePropType | string;
  backgroundColor: string;
  routines: Routine[];
}

interface Routine {
  id: number;
  title: string;
  image: string;
  backgroundColor: string;
}

const categories: Category[] = [
  {
    id: 1,
    title: 'Zihinsel sağlık ve Öz bakım',
    image: '🎯',
    backgroundColor: '#FFE4E1',
    routines: [
      {
        id: 1,
        title: 'Meditasyon',
        image: '🧘‍♂️',
        backgroundColor: '#F0F8FF',
      },
      {
        id: 2,
        title: 'Günlük Yazma',
        image: '📝',
        backgroundColor: '#F0FFF0',
      },
    ],
  },
  {
    id: 2,
    title: 'Üretkenlik ve Yaşam Tarzı',
    image: '⚡',
    backgroundColor: '#E8F5E9',
    routines: [
      {
        id: 3,
        title: 'Mart 2025 Planlayıcı',
        image: '📅',
        backgroundColor: '#E8F5E9',
      },
      {
        id: 4,
        title: 'Haftalık Yemek Hazırlama',
        image: '🥗',
        backgroundColor: '#FFE0B2',
      },
    ],
  },
];

const ExploreScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [categoryPanelVisible, setCategoryPanelVisible] = useState(false);

  const handleCategoryPress = (category: Category) => {
    setSelectedCategory(category);
    setCategoryPanelVisible(true);
  };

  const renderCategoryCard = (category: Category) => (
    <TouchableOpacity
      key={category.id}
      style={[styles.categoryCard, { backgroundColor: category.backgroundColor }]}
      onPress={() => handleCategoryPress(category)}
    >
      {typeof category.image === 'string' ? (
        <Text style={styles.categoryEmoji}>{category.image}</Text>
      ) : (
        <Image source={category.image} style={styles.categoryImage} />
      )}
      <View style={styles.categoryContent}>
        <Text style={styles.categoryTitle}>{category.title}</Text>
        <Text style={styles.routineCount}>{category.routines.length} rutin</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text style={styles.title}>Keşfet</Text>
        
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Rutinler</Text>
          <TouchableOpacity>
            <Text style={styles.seeAllButton}>Tümünü Gör</Text>
          </TouchableOpacity>
        </View>

        {/* Categories */}
        {categories.map(renderCategoryCard)}
      </ScrollView>

      {/* Category Panel - Moved outside ScrollView */}
      <SlideUpPanel
        visible={categoryPanelVisible}
        onClose={() => setCategoryPanelVisible(false)}
      >
        {selectedCategory && (
          <View style={styles.panelContainer}>
            <View style={styles.panelHeader}>
              <Text style={styles.panelTitle}>{selectedCategory.title}</Text>
            </View>
            <ScrollView 
              style={styles.panelContent}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={styles.panelScrollContent}
            >
              {selectedCategory.routines.map((routine) => (
                <TouchableOpacity
                  key={routine.id}
                  style={[styles.routineCard, { backgroundColor: routine.backgroundColor }]}
                >
                  <Text style={styles.routineEmoji}>{routine.image}</Text>
                  <Text style={styles.routineTitle}>{routine.title}</Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        )}
      </SlideUpPanel>
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
    margin: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 12,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  seeAllButton: {
    color: '#4CAF50',
    fontWeight: '500',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    borderRadius: 16,
    marginHorizontal: 16,
    marginBottom: 16,
  },
  categoryImage: {
    width: 40,
    height: 40,
    marginRight: 12,
    borderRadius: 8,
  },
  categoryContent: {
    flex: 1,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  routineCount: {
    color: '#757575',
    fontSize: 14,
  },
  panelContainer: {
    height: '100%',
    padding: 16,
  },
  panelHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  panelTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
  },
  panelContent: {
    flex: 1,
  },
  panelScrollContent: {
    paddingBottom: 24,
  },
  routineCard: {
    width: '100%',
    height: 160,
    marginBottom: 16,
    borderRadius: 16,
    padding: 16,
    elevation: 2,
  },
  routineEmoji: {
    fontSize: 48,
    textAlign: 'center',
    marginTop: 16,
  },
  routineTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 16,
    textAlign: 'center',
  },
  categoryEmoji: {
    fontSize: 32,
    marginRight: 12,
  },
});

export default ExploreScreen; 