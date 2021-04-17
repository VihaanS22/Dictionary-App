import * as React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';


export default class HomeScreen extends React.Component {

constructor() {
    super();
    this.state = { word: '', definition: '', phonetics: '' };
  }

 getWord = (word) => {
    var url = 'https://api.dictionaryapi.dev/api/v2/entries/en/' + word;
    return fetch(url)
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        console.log(response);
        //var responseObject = JSON.parse(response);
        var word = response[0].word;
        console.log(word);
        var definition = response[0].meanings[0].definitions[0].definition;
        console.log(definition);
        this.setState({
          word: word.trim(),
          definition: definition.trim(),
        });
      });
  };

render(){

return(
  <View>
 <TextInput
          style = {styles.inputBox}
          onChangeText={(text) => {
            this.setState({
              text: text,
              isSearchedPressed: false,
              word: 'Finding The Perfect Defenition....',
              lexicalCategory: '',
              examples: [],
              definition: '',
            });
          }}
        />

 <TouchableOpacity
          style={styles.searchButton}
          onPress={() => {
            this.setState({ 
              isSearchedPressed: true 
              });
            this.getWord(this.state.text);
          }}>
          <Text style={styles.textIn}> 🔎SEARCH🔍 </Text>
        </TouchableOpacity>

        <Text style={{ fontSize: 18 }}>{this.state.word}</Text>
        <Text style={{ fontSize: 18 }}>{this.state.definition}</Text>

        <Image
style = {{width: 280, height :220,  marginTop : 70, marginLeft : 30}}
source = {require('../assets/dictionary.png')}

/>

  </View>
)

}

  
}

const styles = StyleSheet.create({
  inputBox: {
    marginTop: 50,
    width: '90%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 4,
    borderColor: '#FFFEA8',

  },
  searchButton: {
    width: '70%',
    height: 50,
    alignSelf: 'center',
    justifyContent : 'center',
    padding: 10,
    margin: 40,
    borderWidth: 4,
    borderRadius: 20,
    borderColor: '#37A6A0',
    backgroundColor: '#F8D210'

  },
  textIn: {
    textAlign: 'center',
    fontFamily: 'times',
    fontSize: 25,
    alignSelf: 'center',
    justifyContent : 'center',
    fontWeight: 'bold',
  }


  })

