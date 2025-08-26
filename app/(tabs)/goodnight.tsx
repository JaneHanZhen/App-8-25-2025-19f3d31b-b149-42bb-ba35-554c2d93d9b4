import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Animated } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function GoodnightScreen() {
  const [time, setTime] = useState(new Date());
  const fadeAnim = React.useRef(new Animated.Value(0)).current;
  const moonRiseAnim = React.useRef(new Animated.Value(50)).current;
  
  // Update the clock every minute
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 60000);
    
    // Start animations
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true,
      }),
      Animated.timing(moonRiseAnim, {
        toValue: 0,
        duration: 3000,
        useNativeDriver: true,
      })
    ]).start();
    
    return () => clearInterval(timer);
  }, []);
  
  // Format time in 12-hour format
  const formatTime = () => {
    let hours = time.getHours();
    const minutes = time.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    return `${hours}:${minutes} ${ampm}`;
  };

  // Calculate sleep time suggestions (cycles of 90 minutes)
  const getSleepTimes = () => {
    const now = new Date();
    const sleepTimes = [];
    
    // Add 14 minutes to fall asleep
    now.setMinutes(now.getMinutes() + 14);
    
    // Calculate 4-6 sleep cycles (90 minutes each)
    for (let i = 4; i <= 6; i++) {
      const wakeTime = new Date(now.getTime() + (i * 90 * 60 * 1000));
      let hours = wakeTime.getHours();
      const minutes = wakeTime.getMinutes().toString().padStart(2, '0');
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      sleepTimes.push(`${hours}:${minutes} ${ampm}`);
    }
    
    return sleepTimes;
  };
  
  const sleepTimes = getSleepTimes();

  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      
      {/* Animated moon */}
      <Animated.View 
        style={[
          styles.moonContainer, 
          {
            opacity: fadeAnim,
            transform: [{ translateY: moonRiseAnim }]
          }
        ]}
      >
        <View style={styles.moon}>
          <View style={styles.crater1} />
          <View style={styles.crater2} />
          <View style={styles.crater3} />
        </View>
      </Animated.View>
      
      {/* Current time */}
      <Animated.Text 
        style={[styles.timeText, { opacity: fadeAnim }]}
      >
        {formatTime()}
      </Animated.Text>
      
      <Animated.Text 
        style={[styles.greeting, { opacity: fadeAnim }]}
      >
        Time to rest
      </Animated.Text>
      
      {/* Sleep cycle suggestions */}
      <Animated.View style={[styles.sleepTimesContainer, { opacity: fadeAnim }]}>
        <Text style={styles.sleepTimesTitle}>
          If you sleep now, you should wake up at one of these times:
        </Text>
        <View style={styles.timesRow}>
          {sleepTimes.map((time, index) => (
            <View key={index} style={styles.timeChip}>
              <Text style={styles.timeChipText}>{time}</Text>
              <Text style={styles.cycleText}>{index + 4} cycles</Text>
            </View>
          ))}
        </View>
      </Animated.View>
      
      {/* Sleep tips */}
      <Animated.View style={[styles.tipsContainer, { opacity: fadeAnim }]}>
        <Text style={styles.tipsTitle}>Sleep Tips</Text>
        <Text style={styles.tipText}>• Avoid screens 30 minutes before bed</Text>
        <Text style={styles.tipText}>• Keep your bedroom cool and dark</Text>
        <Text style={styles.tipText}>• Maintain a consistent sleep schedule</Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0F2027',
    padding: 20,
  },
  moonContainer: {
    marginBottom: 40,
  },
  moon: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#FEFCD7',
    shadowColor: '#FEFCD7',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 15,
    position: 'relative',
  },
  crater1: {
    position: 'absolute',
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#ECE9BE',
    top: 15,
    left: 25,
  },
  crater2: {
    position: 'absolute',
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: '#ECE9BE',
    top: 45,
    left: 60,
  },
  crater3: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ECE9BE',
    top: 60,
    left: 30,
  },
  timeText: {
    fontSize: 48,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  greeting: {
    fontSize: 24,
    color: '#E0E0E0',
    marginBottom: 40,
    fontWeight: '300',
  },
  sleepTimesContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 20,
    width: '100%',
    marginBottom: 30,
  },
  sleepTimesTitle: {
    color: '#E0E0E0',
    fontSize: 16,
    marginBottom: 15,
    textAlign: 'center',
  },
  timesRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
  },
  timeChip: {
    backgroundColor: 'rgba(71, 126, 190, 0.2)',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 15,
    margin: 5,
    alignItems: 'center',
  },
  timeChipText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cycleText: {
    color: '#B0C4DE',
    fontSize: 12,
    marginTop: 2,
  },
  tipsContainer: {
    backgroundColor: 'rgba(255, 255, 255, 0.05)',
    borderRadius: 12,
    padding: 20,
    width: '100%',
  },
  tipsTitle: {
    color: '#E0E0E0',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  tipText: {
    color: '#E0E0E0',
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
});