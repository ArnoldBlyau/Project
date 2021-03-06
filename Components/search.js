import React from 'react'
import { StyleSheet, View, TextInput, Button, FlatList } from 'react-native'
import FilmItem from './FilmItem'

import films from '../Helpers/filmsData'

class Search extends React.Component{
    render(){
        return (
            <View style={{ marginTop: 20}}>
                <TextInput style={styles.textinput} placeholder="titre du film"/>
                <Button style={{ height: 50 }} title="Rechercher" onPress={ () => {} }/>
                <FlatList
                        data={films}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={({item}) => <FilmItem/>}
                        />
      
            </View>
        )
    }
}

const styles = StyleSheet.create( {
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        height: 50,
        borderColor: '#000000',
        borderWidth: 1,
        paddingLeft: 5
      }
})

export default Search