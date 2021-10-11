import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import Header from './src/Header';
import List from './src/List';
import Stories from './src/Stories';

function App() {
  const [feed, setFeed] = useState([
    {
      id: '1',
      nome: 'Diegocravo',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil:
        'https://media-exp1.licdn.com/dms/image/C4D03AQFtuutQ7vWuiw/profile-displayphoto-shrink_800_800/0/1573507503554?e=1639612800&v=beta&t=zbSaw89Mc03acQMqUfyXMYfsgAWJuCgi3--CBhAMO_U',
      imgPublicacao: 'https://avatars.githubusercontent.com/u/54814943?v=4',
      likeada: true,
      likers: 1,
    },
    {
      id: '2',
      nome: 'Lucas Silva',
      descricao: 'Mais um dia de muitos bugs :)',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto1.png',
      likeada: true,
      likers: 1,
    },
    {
      id: '3',
      nome: 'Raissa',
      descricao: 'Isso sim é ser raiz!!!!!',
      imgperfil: 'https://ichef.bbci.co.uk/images/ic/1920x1080/p074mmrq.jpg',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto2.png',
      likeada: false,
      likers: 0,
    },
    {
      id: '4',
      nome: 'Miriam',
      descricao:
        'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend',
      imgperfil:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Woman_1.jpg/768px-Woman_1.jpg',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto3.png',
      likeada: false,
      likers: 3,
    },
    {
      id: '5',
      nome: 'Gustavo Henrique',
      descricao: 'Isso sim que é TI!',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil1.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto4.png',
      likeada: false,
      likers: 1,
    },
    {
      id: '6',
      nome: 'Guilherme',
      descricao: 'Boa tarde galera do insta...',
      imgperfil: 'https://sujeitoprogramador.com/instareact/fotoPerfil2.png',
      imgPublicacao: 'https://sujeitoprogramador.com/instareact/foto5.png',
      likeada: false,
      likers: 32,
    },
  ]);

  return (
    <View style={styles.container}>
      <Header />
      {/* <ScrollView> */}
      {/* <Stories /> */}
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.id}
        data={feed}
        renderItem={({item}) => <List data={item} />}
        ListHeaderComponent={<Stories />}
      />
      {/* </ScrollView> */}
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
