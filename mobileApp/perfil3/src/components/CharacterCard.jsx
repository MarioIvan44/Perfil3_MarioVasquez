import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { colors } from '../styles/colors.js';
import CustomCard from './CustomCard.jsx';

// Dot color for each character status
const statusColors = {
  Alive: colors.seaweed,
  Dead: colors.danger,
  unknown: colors.gray,
};

export default function CharacterCard({ name, image, status, species, gender, origin, location }) {
  return (
    <CustomCard backgroundColor={colors.white} padding={0}>
      <View style={styles.content}>
        <Image source={{ uri: image }} style={styles.image} />

        <View style={styles.info}>
          <Text style={styles.name} numberOfLines={1}>{name}</Text>

          <View style={styles.statusRow}>
            <View style={[styles.dot, { backgroundColor: statusColors[status] || colors.gray }]} />
            <Text style={styles.statusText}>{status} ·{species} · {gender}</Text>
          </View>

          <Text style={styles.label}>Origen</Text>
          <Text style={styles.value} numberOfLines={1}>{origin}</Text>

          <Text style={styles.label}>Última ubicación</Text>
          <Text style={styles.value} numberOfLines={1}>{location}</Text>
        </View>
      </View>
    </CustomCard>
  );
}

const styles = StyleSheet.create({
  content: {
    flexDirection: 'row',
    borderRadius: 15,
    overflow: 'hidden',
  },
  image: {
    width: 120,
    minHeight: 150,
    backgroundColor: colors.platinum,
  },
  info: {
    flex: 1,
    padding: 12,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.carbonBlack,
    marginBottom: 4,
  },
  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  dot: {
    width: 9,
    height: 9,
    borderRadius: 5,
    marginRight: 6,
  },
  statusText: {
    flex: 1,
    fontSize: 13,
    color: colors.gray,
  },
  label: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.seaweed,
    textTransform: 'uppercase',
  },
  value: {
    fontSize: 15,
    color: colors.carbonBlack,
    marginBottom: 8,
  },
});
