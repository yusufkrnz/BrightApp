import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface TaskProps {
  title: string;
  description?: string;
  icon: string;
  backgroundColor: string;
  completed?: boolean;
  onPress?: () => void;
}

const Task: React.FC<TaskProps> = ({
  title,
  description,
  icon,
  backgroundColor,
  completed,
  onPress,
}) => {
  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor }]}
      onPress={onPress}
    >
      <Icon name={icon} size={24} color="#fff" />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      {completed && (
        <Icon name="check-circle" size={24} color="#4CAF50" />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    marginBottom: 8,
  },
  textContainer: {
    flex: 1,
    marginLeft: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
});

export default Task; 