import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Pressable
} from 'react-native';

function ListItemComponent(props) {
  const { item, index, onPress, buttonText, passIndex } = props;
  return (<View style={styles.container}>
    <View style={styles.item}>
      <Text style={styles.labletext}>{item.id}: <Text style={styles.title_text}>{item.title}</Text> </Text>
      <Pressable style={styles.button} onPress={() => onPress(passIndex ? index : item)}>
        <Text style={styles.buttontext}>{buttonText}</Text>
      </Pressable>
    </View>
    <Text style={styles.labletext}>Price: <Text style={styles.title_text}>{item.price}</Text> </Text>
  </View>
  )
}


const styles = StyleSheet.create({
  labletext: {
    fontSize: 15
  },
  title_text: {
    fontWeight: 'bold',
    fontSize: 15

  },
  heading: {
    fontWeight: 'bold',
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#24A0ED',
    padding: 5,
    borderRadius: 4,
    height: 30
  },
  buttontext: {
    color: '#FFFFFF',
    fontWeight: '700',
    textAlign: 'center'
  },
  container: {
    alignItems: 'flex-start',
    borderColor: '#949494',
    borderWidth: 1,
    padding: 5,
    height: 60
  },
  item: {
    flex: 1,
    width:'100%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    borderColor: '#949494',
  }
})

export default React.memo(ListItemComponent);
