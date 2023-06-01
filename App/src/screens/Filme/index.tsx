import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import React, { useState } from 'react'
import { Container } from "./styles"
import { FlatList, Image } from 'react-native';
import axios from 'axios';
import { ImageSourcePropType  } from "react-native";

interface Show {
  id: number;
  name: string;
  genres: string[];
  image: {
    medium: string;
    original: string;
  };
}

export function Filme(){
  const [search, setSearch] = useState('');
  const [show, setShow] = useState<Show[]>([]);
  
  async function handleBusca(){
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${search}`);
      setShow(response.data.map((result: any) => result.show));
    } catch (error) {
      console.error(error);
    }
  }
  
  return(
    <Container>
      <Input 
        placeholder="Buscar Series"
        value={search}
        onChangeText={setSearch}
      />
    
      <Button
        title="Buscar"
        onPress={handleBusca}
      />
    
      <FlatList
        data={show}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<Card title={item.name} genres={item.genres} image={item.image.medium} />)}
      />
    </Container>
  );
};
