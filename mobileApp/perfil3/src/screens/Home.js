import React from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';

import { colors } from '../styles/colors.js';
import { student } from '../data/student.js';
import CustomCard from '../components/CustomCard.jsx';
import CustomButton from '../components/CustomButton.jsx';

export default function Home({ navigation }) {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Super Ball logo */}
      <Image source={require('../../assets/splash-icon.png')} style={styles.logo} />

      <Text style={styles.title}>Información del estudiante</Text>

      {/* Student information */}
      <CustomCard backgroundColor={colors.white}>
        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>{student.nombre}</Text>

        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>{student.carnet}</Text>

        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.value}>Sección {student.seccion} - Grupo {student.grupo}</Text>
      </CustomCard>

      <CustomButton
        title="Ver personajes de Rick and Morty"
        onPress={() => navigation.navigate('ApiInformation')}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.platinum,
  },
  logo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.carbonBlack,
    marginBottom: 20,
    textAlign: 'center',
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.seaweed,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 16,
    color: colors.carbonBlack,
    marginBottom: 12,
  },
});
