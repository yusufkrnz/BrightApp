import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Animated,
  PanResponder,
} from 'react-native';

interface AddRoutineModalProps {
  onClose: () => void;
  onSave: (routine: {
    name: string;
    frequency: string;
    notifications: boolean;
  }) => void;
}

const AddRoutineModal: React.FC<AddRoutineModalProps> = ({ onClose, onSave }) => {
  const [name, setName] = useState('');
  const [frequency, setFrequency] = useState('daily');
  const [slideAnim] = useState(new Animated.Value(0));
  const [notifications, setNotifications] = useState(false);

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (_, gestureState) => {
      if (gestureState.dx > 0 && gestureState.dx <= 50) {
        slideAnim.setValue(gestureState.dx);
      }
    },
    onPanResponderRelease: (_, gestureState) => {
      if (gestureState.dx > 25) {
        Animated.spring(slideAnim, {
          toValue: 50,
          useNativeDriver: false,
        }).start(() => setNotifications(true));
      } else {
        Animated.spring(slideAnim, {
          toValue: 0,
          useNativeDriver: false,
        }).start(() => setNotifications(false));
      }
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>Yeni Rutin Ekle</Text>
        
        <TextInput
          style={styles.input}
          placeholder="Rutin İsmi"
          value={name}
          onChangeText={setName}
        />

        <Text style={styles.label}>Sıklık</Text>
        <View style={styles.frequencyButtons}>
          <TouchableOpacity
            style={[styles.frequencyButton, frequency === 'daily' && styles.activeButton]}
            onPress={() => setFrequency('daily')}
          >
            <Text style={[styles.buttonText, frequency === 'daily' && styles.activeText]}>
              Günlük
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frequencyButton, frequency === 'weekly' && styles.activeButton]}
            onPress={() => setFrequency('weekly')}
          >
            <Text style={[styles.buttonText, frequency === 'weekly' && styles.activeText]}>
              Haftalık
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.frequencyButton, frequency === 'monthly' && styles.activeButton]}
            onPress={() => setFrequency('monthly')}
          >
            <Text style={[styles.buttonText, frequency === 'monthly' && styles.activeText]}>
              Aylık
            </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.label}>Bildirimler</Text>
        <View style={styles.sliderContainer}>
          <Animated.View
            style={[
              styles.slider,
              {
                transform: [{ translateX: slideAnim }],
              },
            ]}
            {...panResponder.panHandlers}
          >
            <Text style={styles.sliderEmoji}>{notifications ? '🔔' : '🔕'}</Text>
          </Animated.View>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.cancelButton} onPress={onClose}>
            <Text style={styles.cancelButtonText}>İptal</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.saveButton}
            onPress={() => onSave({ name, frequency, notifications })}
          >
            <Text style={styles.saveButtonText}>Kaydet</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 24,
    minHeight: '60%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  input: {
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12,
  },
  frequencyButtons: {
    flexDirection: 'row',
    marginBottom: 24,
  },
  frequencyButton: {
    flex: 1,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginHorizontal: 4,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeButton: {
    backgroundColor: '#4A2B99',
    borderColor: '#4A2B99',
  },
  buttonText: {
    color: '#666',
  },
  activeText: {
    color: '#fff',
  },
  sliderContainer: {
    height: 40,
    backgroundColor: '#E0E0E0',
    borderRadius: 20,
    marginBottom: 24,
  },
  slider: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  sliderEmoji: {
    fontSize: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cancelButton: {
    flex: 1,
    padding: 16,
    marginRight: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    alignItems: 'center',
  },
  saveButton: {
    flex: 1,
    padding: 16,
    marginLeft: 8,
    backgroundColor: '#4A2B99',
    borderRadius: 8,
    alignItems: 'center',
  },
  cancelButtonText: {
    color: '#666',
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default AddRoutineModal; 