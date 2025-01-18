import React, { useState, useEffect ,useContext} from 'react';
import { View, TextInput, FlatList, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { useTheme } from 'styled-components/native';
import { searchRepositories } from '../../API/github';
import RepositoryItem from '../../components/RepositoryItem';
import IconSearch from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/Ionicons';
import HomeScreenStyles from './HomeScreenStyles';
import Logo from 'react-native-vector-icons/AntDesign';
import Iconfavorite from 'react-native-vector-icons/MaterialIcons';
import { ThemeContext } from '../../Context/Themecontext';
const HomeScreen = ({ navigation, route }) => {
  const [query, setQuery] = useState(route.params?.query || '');
  const [repositories, setRepositories] = useState(route.params?.repositories || []);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(route.params?.page || 1);
  const [focus, setFocus] = useState(null);
  const theme = useTheme();
  const { isDarkMode, toggleDarkMode } = useContext(ThemeContext); 
  const fetchRepositories = async () => {
    if (loading || !query) return;
    setLoading(true);
    try {
      const newRepos = await searchRepositories(query, page);
      setRepositories((prev) => [...prev, ...newRepos]);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (query && repositories.length === 0) {
      fetchRepositories();
    }
  }, [query]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    theme.toggleDarkMode(); 
  };

  return (
    <View style={[HomeScreenStyles.container, { backgroundColor: theme.colors.background }]}>
      <View style={HomeScreenStyles.header}>
        <Logo name="github" color={theme.colors.textheader} size={33} />
        <Text style={[HomeScreenStyles.text, { color: theme.colors.textheader }]}>
          GITHUB EXPLORER
        </Text>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('FavouriteScreen', {
              query,
              repositories,
              page,
            })
          }
          style={[HomeScreenStyles.toggle1, { backgroundColor: theme.colors.togglecolor }]}
        >
          <Iconfavorite name="favorite" size={26} color={theme.colors.favorite} />
        </TouchableOpacity>
      </View>

      <View
        style={[
          HomeScreenStyles.search,
          focus && { borderWidth: 1, borderColor: '#0056ff', elevation: 30 },
        ]}
      >
        <IconSearch name="search" size={23} color={'#85878C'} style={HomeScreenStyles.searchImage} />
        <TextInput
          placeholder="Search..."
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
          value={query}
          onChangeText={(text) => {
            setQuery(text);
            setRepositories([]); 
            setPage(1);
          }}
          onSubmitEditing={fetchRepositories}
          style={[
            HomeScreenStyles.searchinput,
            { borderColor: theme.colors.primary, color: theme.colors.placeholder },
          ]}
          placeholderTextColor={theme.colors.placeholder}
        />
      </View>
      <View style={HomeScreenStyles.list}>
        <FlatList
          data={repositories}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <RepositoryItem
              repository={item}
              onPress={() => navigation.navigate('Details', { repository: item })}
              textColor={theme.colors.text}
            />
          )}
          onEndReached={fetchRepositories}
          ListFooterComponent={
            loading ? (
              <ActivityIndicator
                style={HomeScreenStyles.indicator}
                color={theme.colors.primary}
              />
            ) : null
          }
        />
      </View>
      <TouchableOpacity
        onPress={toggleDarkMode}
        style={[HomeScreenStyles.toggle, { backgroundColor: theme.colors.togglecolor }]}
      >
        <Icon
          name={isDarkMode ? 'sunny-outline' : 'moon'}
          size={30}
          color={isDarkMode ? '#FFF' : '#333841'}
          style={HomeScreenStyles.themeIcon}
        />
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;
