import { StyleSheet } from 'react-native';

const RepositoryItemStyles = StyleSheet.create({
    container: {
        padding: 6,
        borderBottomColor: '#ccc',
     },
    containerrepo: {
        flexDirection: 'row',
        backgroundColor: "#f9fbff",
        shadowColor: "#8a8c92",
        elevation: 2,
        borderRadius: 12,
        padding: 3,
        paddingBottom:5
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    details: {
        flex: 1,
        justifyContent: 'center',
    },
    name: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        marginTop: 4,
    },
});

export default RepositoryItemStyles;
