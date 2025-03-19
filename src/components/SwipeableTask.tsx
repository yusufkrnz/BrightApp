import React from 'react';
import {
  Animated,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  PanResponder,
} from 'react-native';

interface SwipeableTaskProps {
  task: {
    id: number;
    title: string;
    description: string;
    icon: string;
    backgroundColor: string;
    completed: boolean;
  };
  onEdit: (id: number) => void;
  onDelete: (id: number) => void;
}

const SwipeableTask: React.FC<SwipeableTaskProps> = ({
  task,
  onEdit,
  onDelete,
}) => {
  const pan = new Animated.ValueXY();

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx < 0) {
        // Sola kaydırma (silme)
        pan.x.setValue(Math.max(gestureState.dx, -150));
      } else if (gestureState.dx > 0) {
        // Sağa kaydırma (düzenleme)
        pan.x.setValue(Math.min(gestureState.dx, 150));
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx < -100) {
        // Silme işlemi
        Animated.spring(pan, {
          toValue: { x: -150, y: 0 },
          useNativeDriver: false,
        }).start();
      } else if (gestureState.dx > 100) {
        // Düzenleme işlemi
        Animated.spring(pan, {
          toValue: { x: 150, y: 0 },
          useNativeDriver: false,
        }).start();
      } else {
        // Geri dön
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.actionButtons}>
        <TouchableOpacity
          style={[styles.actionButton, styles.editButton]}
          onPress={() => onEdit(task.id)}
        >
          <Text style={styles.actionButtonText}>DÜZENLE</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.actionButton, styles.deleteButton]}
          onPress={() => onDelete(task.id)}
        >
          <Text style={styles.actionButtonText}>KALDIR</Text>
        </TouchableOpacity>
      </View>
      
      <Animated.View
        style={[
          styles.taskContainer,
          { backgroundColor: task.backgroundColor },
          { transform: [{ translateX: pan.x }] },
        ]}
        {...panResponder.panHandlers}
      >
        <View style={styles.taskContent}>
          <Text style={styles.taskEmoji}>{task.icon}</Text>
          <View>
            <Text style={styles.taskTitle}>{task.title}</Text>
            <Text style={styles.taskDescription}>{task.description}</Text>
          </View>
        </View>
        {task.completed && <Text style={styles.taskEmoji}>✅</Text>}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    height: 80,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
  },
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: '100%',
    borderRadius: 12,
  },
  editButton: {
    backgroundColor: '#4A2B99',
  },
  deleteButton: {
    backgroundColor: '#FF4444',
  },
  actionButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 12,
  },
  taskContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    height: '100%',
    backgroundColor: '#fff',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  taskContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  taskEmoji: {
    fontSize: 24,
    marginRight: 12,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  taskDescription: {
    fontSize: 14,
    marginTop: 2,
  },
});

export default SwipeableTask; 