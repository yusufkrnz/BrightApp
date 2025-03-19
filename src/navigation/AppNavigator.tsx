import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  TodayScreen,
  CalendarScreen,
  ExploreScreen,
  ProfileScreen
} from '../screens';
import SlideUpPanel from '../components/SlideUpPanel';
import AddRoutineModal from '../components/AddRoutineModal';

interface TabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const Tab = createBottomTabNavigator();

const CustomTabBar: React.FC<TabBarProps> = ({ state, descriptors, navigation }) => {
  const [isAddRoutineVisible, setAddRoutineVisible] = useState(false);

  const onPress = (route: any) => {
    if (route.name === 'Add') {
      setAddRoutineVisible(true);
      return;
    }

    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
    });

    if (!event.defaultPrevented) {
      navigation.navigate(route.name);
    }
  };

  return (
    <>
      <View style={styles.tabBar}>
        {state.routes.map((route: any, index: number) => {
          const { options } = descriptors[route.key];
          const isFocused = state.index === index;

          let iconName;
          let label;
          let emoji;
          switch (route.name) {
            case 'Today':
              iconName = 'today';
              label = 'BUGÜN';
              emoji = '⭐';
              break;
            case 'Calendar':
              iconName = 'event';
              label = 'TAKVİM';
              emoji = '📅';
              break;
            case 'Add':
              iconName = 'add-circle';
              label = '';
              emoji = '';
              break;
            case 'Explore':
              iconName = 'explore';
              label = 'KEŞFET';
              emoji = '🔍';
              break;
            case 'Profile':
              iconName = 'person';
              label = 'PROFİLİM';
              emoji = '👤';
              break;
            default:
              iconName = 'circle';
              label = '';
              emoji = '';
          }

          return (
            <TouchableOpacity
              key={route.key}
              onPress={() => onPress(route)}
              style={[
                styles.tabItem,
                route.name === 'Add' && styles.addButton
              ]}
            >
              {route.name === 'Add' ? (
                <View style={styles.addButtonCircle}>
                  <Text style={styles.addButtonEmoji}>✨</Text>
                </View>
              ) : (
                <>
                  <Text style={styles.tabEmoji}>{emoji}</Text>
                  <Text style={[
                    styles.tabLabel,
                    isFocused && styles.tabLabelFocused
                  ]}>
                    {label}
                  </Text>
                </>
              )}
            </TouchableOpacity>
          );
        })}
      </View>

      <SlideUpPanel
        visible={isAddRoutineVisible}
        onClose={() => setAddRoutineVisible(false)}
      >
        <AddRoutineModal
          onClose={() => setAddRoutineVisible(false)}
          onSave={() => setAddRoutineVisible(false)}
        />
      </SlideUpPanel>
    </>
  );
};

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBar={props => <CustomTabBar {...props} />}
        screenOptions={{
          headerShown: false,
        }}
      >
        <Tab.Screen name="Today" component={TodayScreen} />
        <Tab.Screen name="Calendar" component={CalendarScreen} />
        <Tab.Screen name="Add" component={TodayScreen} />
        <Tab.Screen name="Explore" component={ExploreScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    height: 60,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    position: 'relative',
  },
  tabItem: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 4,
  },
  addButton: {
    marginTop: -24,
  },
  addButtonCircle: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#4A2B99',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButtonEmoji: {
    fontSize: 32,
    color: '#fff',
  },
  tabEmoji: {
    fontSize: 24,
    marginBottom: 4,
  },
  tabLabel: {
    fontSize: 10,
    color: '#757575',
  },
  tabLabelFocused: {
    color: '#4A2B99',
    fontWeight: '500',
  },
});

export default AppNavigator; 