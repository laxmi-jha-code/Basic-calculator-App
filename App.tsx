import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';

const App = () => {
  return (
    <ScrollView style={styles.container}>
      
      <View style={styles.header}>
         <Text style={styles.logo}>PADHNEAI</Text>
        <View style={styles.menu}>
          <TouchableOpacity style={styles.opacity}>
          <Text style={styles.menuText}>SEE Past Papers</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacity}>
          <Text style={styles.menuText}>AI Assistant</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.opacity}>
          <Text style={styles.menuText}>Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>

      
      <View style={styles.heroSection}>
        <View style={styles.textContainer}>
          <Text style={styles.mainTitle}>Nepal’s All-in-One Learning Platform</Text>
          <Text style={styles.subText}>
            Bilingual notes, question banks, AI-powered study support, and online courses—
            everything Nepali students need to learn, prepare, and succeed.
          </Text>
          </View>

        <Image
          source={require('./Image/student2.webp')} 
          style={styles.heroImage}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    marginTop: 40,
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: 24,
    fontWeight: '700',
    color: '#214F5F',
  },
  menu: {
    flexDirection: 'row',
    gap: 15,
  },
  menuText: {
    color: '#333',
    fontSize: 14,
  },
  opacity:{
    borderRadius:10,
    borderColor:'black',
    backgroundColor:'#D3D3D3',
    elevation:2
  },
  heroSection: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    justifyContent: 'space-between',
  },
  textContainer: {
    flex: 1,
    paddingRight: 10,
  },
  mainTitle: {
    fontSize: 32,
    fontWeight: '800',
    color: '#214F5F',
    marginBottom: 10,
  },
  subText: {
    fontSize: 15,
    color: '#555',
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  redButton: {
    backgroundColor: '#E94E4E',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  blueButton: {
    backgroundColor: '#2D7D9A',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 8,
  },
  btnText: {
    color: '#fff',
    fontWeight: '600',
  },
  heroImage: {
    width: 180,
    height: 180,
  },
});

export default App;
