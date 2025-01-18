import React, { useContext } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView } from 'react-native';
import { FavoritesContext } from '../../Context/Favouritescontext';
import { ThemeContext } from '../../Context/Themecontext';
import FavouriteScreenStyles from './FavouriteScreenStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import { useTheme } from 'styled-components';

const FavouriteScreen = ({ navigation, route }) => {
  const { favorites, removeFavorite } = useContext(FavoritesContext);
  const theme = useTheme();
  const { isDarkMode } = useContext(ThemeContext); 

  return (
    <View style={[FavouriteScreenStyles.container, { backgroundColor: theme.colors.background }]}>
      <View style={FavouriteScreenStyles.header}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Home', {
              query: route.params?.query,
              repositories: route.params?.repositories,
              page: route.params?.page,
            })
          }
          style={[FavouriteScreenStyles.back, { backgroundColor: theme.colors.item }]}
        >
          <Icon name="chevron-back-sharp" size={26} color="#85878C" />
        </TouchableOpacity>
        <Text style={[FavouriteScreenStyles.text, { color: theme.colors.textheader }]}>Favorite Repositories</Text>
      </View>
      {favorites.length === 0 ? (
        <Text style={FavouriteScreenStyles.emptyText}>No favorite repositories yet.</Text>
      ) : (
        <FlatList
          data={favorites}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('RepositoryDetails', { repository: item })
              }
              style={[FavouriteScreenStyles.item, { backgroundColor: theme.colors.item }]}
            >
              <Text style={FavouriteScreenStyles.title}>{item.name}</Text>
              <Text
                style={FavouriteScreenStyles.remove}
                onPress={() => removeFavorite(item.id)}
              >
                Remove
              </Text>
            </TouchableOpacity>
          )}
        />
      )}
    </View>
  );
};

export default FavouriteScreen;
