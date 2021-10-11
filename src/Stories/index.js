import React, {useState} from 'react';
import {View, Text, FlatList, Image, StyleSheet} from 'react-native';

export default function Stories() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Diego',
      imgperfil:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFtuutQ7vWuiw/profile-displayphoto-shrink_800_800/0/1573507503554?e=1639612800&v=beta&t=zbSaw89Mc03acQMqUfyXMYfsgAWJuCgi3--CBhAMO_U',
      border: 'red',
    },
    {
      id: '2',
      nome: 'Lucas',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      border: '#00ff00',
    },
    {
      id: '3',
      nome: 'Matheus',
      imgperfil:
        'https://media.istockphoto.com/photos/smiling-black-man-in-suit-posing-on-studio-background-picture-id1201144328?k=20&m=1201144328&s=612x612&w=0&h=U2DJlDOnhJNvQziVvorKPIlqygqqpNL1s_rxqlLUhDo=',
      border: '#00ff00',
    },
    {
      id: '4',
      nome: 'Jose',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil3.png',
      border: 'red',
    },
    {
      id: '5',
      nome: 'Gustavo ',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      border: 'red',
    },
    {
      id: '6',
      nome: 'Guilherme',
      imgperfil:
        'https://images.unsplash.com/photo-1563122870-6b0b48a0af09?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmxhY2slMjBtYW58ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80',
      border: 'red',
    },
    {
      id: '7',
      nome: 'Fred',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      border: 'red',
    },
    {
      id: '8',
      nome: 'Rafaela',
      imgperfil:
        'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80',
      border: '#ccc',
    },
    {
      id: '9',
      nome: 'Miriam',
      imgperfil:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woman_1.jpg/768px-Woman_1.jpg',
      border: '#ccc',
    },
  ]);
  return (
    <View style={styles.stories}>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={styles.list}
        keyExtractor={item => item.id}
        data={feed}
        horizontal={true}
        renderItem={({item}) => <Images data={item} />}
      />
    </View>
  );
}

function Images(props) {
  return (
    <View style={styles.images}>
      <View
        style={[
          styles.border,
          {borderWidth: 2.5, borderColor: props.data.border},
        ]}>
        <Image style={styles.img} source={{uri: props.data.imgperfil}} />
      </View>
      <Text style={styles.text}>{props.data.nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 70,
    height: 70,
    borderRadius: 35,
    padding: 20,
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
  },
  images: {
    paddingLeft: 10,
  },
  border: {
    borderRadius: 50,
    padding: 3,
  },
});
