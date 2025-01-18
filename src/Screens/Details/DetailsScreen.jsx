import React, { useContext, useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Iconstar from 'react-native-vector-icons/AntDesign';
import Iconfork from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons'; 
import { FavoritesContext } from '../../Context/Favouritescontext';
import axios from 'axios';
import DetailsScreenStyles from './DetailsScreenStyles';
import { useTheme } from 'styled-components';

const DetailsScreen = ({ route, navigation }) => {
  const { repository } = route.params;
  const { favorites, addFavorite, removeFavorite } = useContext(FavoritesContext);
  const [isFavorite, setIsFavorite] = useState(favorites.some(fav => fav.id === repository.id));
  const [contributors, setContributors] = useState([]);
  const [showContributors, setShowContributors] = useState(false);

  const theme = useTheme();
  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(repository.contributors_url);
        setContributors(response.data);
      } catch (error) {
        console.error('Error fetching contributors:', error);
      }
    };
    fetchContributors();
  }, [repository.contributors_url]);

  const handleFavorite = () => {
    if (isFavorite) {
      removeFavorite(repository);
    } else {
      addFavorite(repository);
     // setTimeout(() => setShowModal(false), 2000);
    }
    setIsFavorite(!isFavorite);
  };

 
  const languageIcons = {
    JavaScript: { icon: 'logo-javascript', color: '#f7df1e' },
    Python: { icon: 'logo-python', color: '#306998' },
    Ruby: { icon: 'logo-ruby', color: '#701516' },
    HTML: { icon: 'logo-html5', color: '#e34c26' },
    CSS: { icon: 'logo-css3', color: '#1572b6' },
    C: { icon: 'logo-c', color: '#555555' },
    Cpp: { icon: 'logo-cpp', color: '#f34b7d' },
  };

  const getLanguageIcon = (language) => {
    if (language && languageIcons[language]) {
      return languageIcons[language];
    }
    return { icon: 'help-circle-outline', color: '#999999' }; 
  };

  return (
    <ScrollView style={[DetailsScreenStyles.container, { backgroundColor: theme.colors.background }]} contentContainerStyle={DetailsScreenStyles.scrollContainer}>
      <View style={[DetailsScreenStyles.items,{backgroundColor:theme.colors.item}]}>
        <TouchableOpacity onPress={handleFavorite} style={DetailsScreenStyles.favoriteButton}>
          <Icon name={isFavorite ? 'favorite' : 'favorite-outline'} size={30} color={isFavorite ? '#f1695f' : '#000'} />
        </TouchableOpacity>
        <Image source={{ uri: repository.owner.avatar_url }} style={DetailsScreenStyles.avatar} />
        <Text style={DetailsScreenStyles.title}>{repository.name}</Text>
        <Text style={DetailsScreenStyles.description}>{repository.description || 'No description available'}</Text>

        <View style={DetailsScreenStyles.infocontainer}>
          <Iconstar name="star" size={16} color="orange" style={DetailsScreenStyles.star} />
          <Text style={DetailsScreenStyles.info}>Stars:</Text>
          <Text style={DetailsScreenStyles.infovalue}>{repository.stargazers_count}</Text>
        </View>
        <View style={DetailsScreenStyles.infocontainer}>
          <Iconfork name="code-fork" size={17} color="#0056ff" style={DetailsScreenStyles.star} />
          <Text style={DetailsScreenStyles.info}>Forks:</Text>
          <Text style={DetailsScreenStyles.infovalue}>{repository.forks_count}</Text>
        </View>
        <View style={DetailsScreenStyles.infocontainer}>
          <Ionicons
            name={getLanguageIcon(repository.language).icon}
            size={16}
            color={getLanguageIcon(repository.language).color}
            style={DetailsScreenStyles.star}
          />
          <Text style={DetailsScreenStyles.info}>Languages:</Text>
          <Text style={DetailsScreenStyles.infovalue}>{repository.language || 'N/A'}</Text>
        </View>
        <View style={DetailsScreenStyles.infocontainer}>
          <Iconfork name="user" size={16} color="green" style={DetailsScreenStyles.star} />
          <Text style={DetailsScreenStyles.info}>Owner:</Text>
          <Text style={DetailsScreenStyles.infovalue}>{repository.owner.login}</Text>
        </View>
        <View style={DetailsScreenStyles.infocontainer}>
          <Iconfork name="clock-o" size={16} color="blue" style={DetailsScreenStyles.star} />
          <Text style={DetailsScreenStyles.info}>Created At:</Text>
          <Text style={DetailsScreenStyles.infovalue}>{new Date(repository.created_at).toLocaleDateString()}</Text>
        </View>
        <View style={DetailsScreenStyles.infocontainer}>
          <Iconfork name="refresh" size={16} color="purple" style={DetailsScreenStyles.star} />
          <Text style={DetailsScreenStyles.info}>Last Updated:</Text>
          <Text style={DetailsScreenStyles.infovalue}>{new Date(repository.updated_at).toLocaleDateString()}</Text>
        </View>

        <View style={DetailsScreenStyles.contributorSection}>
          <TouchableOpacity onPress={() => setShowContributors(!showContributors)}>
            <Text style={[DetailsScreenStyles.titlecontributor, { marginTop: 20 }]}>Contributors:</Text>
          </TouchableOpacity>
          {showContributors && (
            <View>
              {contributors.length === 0 ? (
                <Text style={DetailsScreenStyles.noContributors}>No contributors available.</Text>
              ) : (
                contributors.map((item) => (
                  <View style={DetailsScreenStyles.contributorContainer} key={item.id}>
                    <Image source={{ uri: item.avatar_url }} style={DetailsScreenStyles.contributorAvatar} />
                    <Text style={DetailsScreenStyles.contributorName}>{item.login}</Text>
                  </View>
                ))
              )}
            </View>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default DetailsScreen;
