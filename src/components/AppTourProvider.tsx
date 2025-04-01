import React, { createContext, useContext, useState, useRef, ReactNode } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { BlurView } from 'expo-blur';

export interface TourStep {
  id: string;
  title: string;
  description: string;
  target?: React.RefObject<any>;
}

interface TourContextType {
  startTour: (steps: TourStep[]) => void;
  registerTarget: (id: string, ref: any) => void;
  endTour: () => void;
}

interface TourProviderProps {
  children: ReactNode;
}

const TourContext = createContext<TourContextType | undefined>(undefined);

export const useTour = () => {
  const context = useContext(TourContext);
  if (!context) {
    throw new Error('useTour must be used within a TourProvider');
  }
  return context;
};

export const TourProvider: React.FC<TourProviderProps> = ({ children }) => {
  const [currentStep, setCurrentStep] = useState<number>(-1);
  const [steps, setSteps] = useState<TourStep[]>([]);
  const targets = useRef<Map<string, React.RefObject<any>>>(new Map());

  const startTour = (newSteps: TourStep[]) => {
    setSteps(newSteps);
    setCurrentStep(0);
  };

  const registerTarget = (id: string, ref: any) => {
    if (ref) {
      targets.current.set(id, { current: ref });
    }
  };

  const endTour = () => {
    setCurrentStep(-1);
    setSteps([]);
    targets.current.clear();
  };

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      endTour();
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderTourOverlay = () => {
    if (currentStep === -1) return null;

    const step = steps[currentStep];
    const target = targets.current.get(step.id);

    return (
      <View style={StyleSheet.absoluteFill}>
        <BlurView intensity={50} style={StyleSheet.absoluteFill}>
          <View style={styles.overlay}>
            <View style={styles.content}>
              <Text style={styles.title}>{step.title}</Text>
              <Text style={styles.description}>{step.description}</Text>
              <View style={styles.buttonContainer}>
                {currentStep > 0 && (
                  <TouchableOpacity style={styles.button} onPress={prevStep}>
                    <Text style={styles.buttonText}>Geri</Text>
                  </TouchableOpacity>
                )}
                <TouchableOpacity 
                  style={[styles.button, styles.primaryButton]} 
                  onPress={nextStep}
                >
                  <Text style={[styles.buttonText, styles.primaryButtonText]}>
                    {currentStep === steps.length - 1 ? 'Bitir' : 'İleri'}
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </BlurView>
      </View>
    );
  };

  return (
    <TourContext.Provider value={{ startTour, registerTarget, endTour }}>
      {children}
      {renderTourOverlay()}
    </TourContext.Provider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  content: {
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    maxWidth: 400,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1a1a1a',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    color: '#666',
    marginBottom: 20,
    lineHeight: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 12,
  },
  button: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#f5f5f5',
  },
  primaryButton: {
    backgroundColor: '#5B37B7',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#666',
  },
  primaryButtonText: {
    color: 'white',
  },
});

export default TourProvider; 