import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Container, ContainerBusca } from "./styles"

import React, { useState, useRef } from 'react'
import { useNavigation } from '@react-navigation/native';
import { FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
import { Keyboard } from 'react-native';

interface Show {
  id: number;
  name: string;
  genres: string[];
  summary: string;
  image: {
    medium: string;
    original: string;
  };
}

export function Search(){
  const [search, setSearch] = useState('');
  const [show, setShow] = useState<Show[]>([]);
  const FlatListRef = useRef<FlatList>(null);
  const navigation = useNavigation();

  const handlePress = () => {
    navigation.navigate('Info');
  };

  async function handleBusca(){
    try {
      if(search.trim() === '') {
        alert('Digite algo para fazer a busca.')
        return
      }
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
      setShow(response.data.map((result: any) => result.show));
      FlatListRef.current?.scrollToOffset({ animated: true, offset: 1 });
      Keyboard.dismiss();
    } catch (error) {
      console.error(error);
    }
  }
  
  return(
    <Container >
      <TouchableOpacity onPress={handlePress}>
        <Header showBackButton={true} title="Busca"/>
        <ContainerBusca>
          <Input 
            placeholder="Buscar Series"
            value={search}
            onChangeText={setSearch}
          />
        
          <ButtonIcon
            onPress={handleBusca}
          />
        </ContainerBusca>
        <FlatList
          data={show}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<Card title={item.name} genres={item.genres} image={item.image.medium} summary={item.summary}/>)}
        />
      </TouchableOpacity>
    </Container>
  );
};
