import React from 'react';
import { StyleSheet, View, Text, Image, useWindowDimensions } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { useNavigation } from '@react-navigation/native';
import LottieView from 'lottie-react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Onboarding'>;

const slides = [
  {
    key: 'habits',
    title: 'Alışkanlıklarını Takip Et',
    text: 'Spor, kitap okuma, meditasyon ve daha fazlası... \nHayatını düzene sok!',
    animation: require('../assets/animations/habits.json'),
    backgroundColor: '#5B37B7',
  },
  {
    key: 'progress',
    title: 'İlerlemeni Gör',
    text: 'Günlük, haftalık ve aylık istatistiklerle \ngelişimini takip et',
    animation: require('../assets/animations/progress.json'),
    backgroundColor: '#4C9F70',
  },
  {
    key: 'community',
    title: 'Toplulukla Büyü',
    text: 'Benzer hedefleri olan insanlarla tanış, \nmotive ol ve başar!',
    animation: require('../assets/animations/welcome.json'),
    backgroundColor: '#1E88E5',
  },
];

const OnboardingScreen = () => {
  const { width } = useWindowDimensions();
  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const renderItem = ({ item }) => {
    return (
      <View style={[styles.slide, { backgroundColor: item.backgroundColor }]}>
        <View style={styles.animationContainer}>
          <LottieView
            source={item.animation}
            autoPlay
            loop
            style={styles.animation}
          />
        </View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Auth');
  };

  return (
    <AppIntroSlider
      data={slides}
      renderItem={renderItem}
      onDone={onDone}
      showSkipButton
      dotStyle={styles.dot}
      activeDotStyle={styles.activeDot}
      renderNextButton={() => (
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>İleri</Text>
        </View>
      )}
      renderDoneButton={() => (
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>Başla</Text>
        </View>
      )}
      renderSkipButton={() => (
        <View style={styles.buttonCircle}>
          <Text style={styles.buttonText}>Atla</Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 96,
  },
  animationContainer: {
    width: '80%',
    aspectRatio: 1,
    marginBottom: 32,
  },
  animation: {
    width: '100%',
    height: '100%',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
  },
  text: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingHorizontal: 24,
  },
  buttonCircle: {
    width: 100,
    height: 40,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  dot: {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: 'white',
    width: 20,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
});

export default OnboardingScreen; 