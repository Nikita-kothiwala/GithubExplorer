import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import RepositoryItemStyles from './RepositoryItemStyles';

const RepositoryItem = ({ repository, onPress, textColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={RepositoryItemStyles.container}>
   <View style={RepositoryItemStyles.containerrepo}>
   <Image source={{ uri: repository.owner.avatar_url }} style={RepositoryItemStyles.image} />
      <View style={RepositoryItemStyles.details}>
        <Text style={[RepositoryItemStyles.name, { color: textColor }]}>
          {repository.name}
        </Text>
        <Text style={[RepositoryItemStyles.description, { color: textColor }]}>
          {repository.description || 'No description available'}
        </Text>
      </View>
   </View>
    </TouchableOpacity>
  );
};

export default RepositoryItem;
