import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { Card } from '../../components/common/Card';
import { Button } from '../../components/common/Button';
import { Colors, Typography } from '../../constants/Colors';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

interface StoryItemProps {
  title: string;
  image: string;
}

const StoryItem: React.FC<StoryItemProps> = ({ title, image }) => (
  <TouchableOpacity style={styles.storyItem}>
    <Image source={{ uri: image }} style={styles.storyImage} />
    <Text style={styles.storyTitle}>{title}</Text>
  </TouchableOpacity>
);

interface ChallengeCardProps {
  title: string;
  description: string;
  category: string;
  duration: string;
  image: string;
}

const ChallengeCard: React.FC<ChallengeCardProps> = ({
  title,
  description,
  category,
  duration,
  image,
}) => (
  <Card onPress={() => {}} style={styles.challengeCard}>
    <Image source={{ uri: image }} style={styles.challengeImage} />
    <View style={styles.challengeContent}>
      <View style={styles.categoryContainer}>
        <Text style={styles.category}>{category}</Text>
        <Text style={styles.duration}>{duration}</Text>
      </View>
      <Text style={styles.challengeTitle}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <Button
        title="Join Challenge"
        size="small"
        onPress={() => {}}
        style={styles.joinButton}
      />
    </View>
  </Card>
);

export default function DiscoverScreen() {
  const stories = [
    {
      id: '1',
      title: 'Morning Routine',
      image: 'https://example.com/morning.jpg',
    },
    {
      id: '2',
      title: 'Fitness Journey',
      image: 'https://example.com/fitness.jpg',
    },
    {
      id: '3',
      title: 'Mindfulness',
      image: 'https://example.com/mindfulness.jpg',
    },
  ];

  const challenges = [
    {
      id: '1',
      title: '30 Days of Yoga',
      description: 'Transform your body and mind with daily yoga practice',
      category: 'Wellness',
      duration: '30 days',
      image: 'https://example.com/yoga.jpg',
    },
    {
      id: '2',
      title: 'Reading Challenge',
      description: 'Read one book per week and expand your knowledge',
      category: 'Learning',
      duration: '21 days',
      image: 'https://example.com/reading.jpg',
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerTitle}>Discover</Text>
            <Text style={styles.headerSubtitle}>Find your next challenge</Text>
          </View>
          <TouchableOpacity style={styles.filterButton}>
            <Ionicons name="filter" size={24} color={Colors.text} />
          </TouchableOpacity>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.storiesContainer}
        >
          {stories.map((story) => (
            <StoryItem
              key={story.id}
              title={story.title}
              image={story.image}
            />
          ))}
        </ScrollView>

        <View style={styles.featuredContainer}>
          <Text style={styles.sectionTitle}>Featured Challenges</Text>
          {challenges.map((challenge) => (
            <ChallengeCard
              key={challenge.id}
              title={challenge.title}
              description={challenge.description}
              category={challenge.category}
              duration={challenge.duration}
              image={challenge.image}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  headerTitle: {
    ...Typography.h2,
    color: Colors.text,
  },
  headerSubtitle: {
    ...Typography.body1,
    color: Colors.textSecondary,
  },
  filterButton: {
    padding: 8,
    borderRadius: 8,
    backgroundColor: Colors.surface,
  },
  storiesContainer: {
    paddingHorizontal: 16,
    marginBottom: 24,
  },
  storyItem: {
    marginRight: 16,
    alignItems: 'center',
  },
  storyImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 8,
  },
  storyTitle: {
    ...Typography.caption,
    color: Colors.text,
    textAlign: 'center',
  },
  featuredContainer: {
    padding: 16,
  },
  sectionTitle: {
    ...Typography.h3,
    color: Colors.text,
    marginBottom: 16,
  },
  challengeCard: {
    padding: 0,
    overflow: 'hidden',
  },
  challengeImage: {
    width: '100%',
    height: 200,
  },
  challengeContent: {
    padding: 16,
  },
  categoryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  category: {
    ...Typography.caption,
    color: Colors.primary,
    fontWeight: '600',
  },
  duration: {
    ...Typography.caption,
    color: Colors.textSecondary,
  },
  challengeTitle: {
    ...Typography.h3,
    color: Colors.text,
    marginBottom: 8,
  },
  description: {
    ...Typography.body2,
    color: Colors.textSecondary,
    marginBottom: 16,
  },
  joinButton: {
    alignSelf: 'flex-start',
  },
}); 