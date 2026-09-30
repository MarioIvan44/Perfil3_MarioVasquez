import React from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native';

import { colors } from '../styles/colors.js';
import useCharacters from '../hooks/useCharacters.js';
import CharacterCard from '../components/CharacterCard.jsx';
import CustomButton from '../components/CustomButton.jsx';
import Loader from '../components/Loader.jsx';

export default function ApiInformation() {
  const { characters, loading, loadingMore, error, loadMore, refetch } = useCharacters();

  if (loading) return <Loader message="Cargando personajes..." />;

  // Error state when the first page could not be loaded
  if (error && characters.length === 0) {
    return (
      <View style={styles.errorContainer}>
        <Text style={styles.errorTitle}>¡Ups! Algo salió mal</Text>
        <Text style={styles.errorMessage}>{error}</Text>
        <CustomButton title="Reintentar" onPress={refetch} />
      </View>
    );
  }

  return (
    <FlatList
      data={characters}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <CharacterCard {...item} />}
      style={styles.container}
      contentContainerStyle={styles.list}
      onEndReached={loadMore}
      onEndReachedThreshold={0.5}
      refreshing={false}
      onRefresh={refetch}
      ListFooterComponent={
        loadingMore ? <ActivityIndicator style={styles.footer} color={colors.cornFlowerOcean} /> : null
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.platinum,
  },
  list: {
    padding: 16,
  },
  footer: {
    marginVertical: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: colors.platinum,
  },
  errorTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.danger,
    marginBottom: 8,
  },
  errorMessage: {
    fontSize: 15,
    color: colors.carbonBlack,
    marginBottom: 20,
    textAlign: 'center',
  },
});
