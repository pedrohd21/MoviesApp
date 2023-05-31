import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import React, { useState } from 'react'
import { Container } from "./styles"
import { FlatList } from 'react-native';
import axios from 'axios';

interface Show {
  id: number;
  name: string;
}

export function Filme(){
  const [pesquisa, setPesquisa] = useState('');
  const [mostrar, setMostrar] = useState<Show[]>([]);
  
  async function handleBusca(){
    try {
      const response = await axios.get(`https://api.tvmaze.com/search/shows?q=${pesquisa}`);
      setMostrar(response.data.map((result: any) => result.show));
    } catch (error) {
      console.error(error);
    }
  }
  
  return(
    <Container>
      <Input 
        placeholder="Buscar Series"
        value={pesquisa}
        onChangeText={setPesquisa}
      />
    
      <Button
        title="Buscar"
        onPress={handleBusca}
      />
    
      <FlatList
        data={mostrar}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<Card title={item.name}/>)}
      />
    </Container>
  );
};
