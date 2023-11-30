import { Input } from "../../components/Input";
import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Container, ContainerBusca } from "./styles"

import React, { useState, useRef } from 'react'

import { FlatList } from 'react-native';
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

export function Search() {
  const [search, setSearch] = useState('');
  const [show, setShow] = useState<Show[]>([]);
  const FlatListRef = useRef<FlatList>(null);

  async function handleBusca() {
    try {
      if (search.trim() === '') {
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

  return (
    <Container >
      <Header showBackButton={true} title="Search" />
      <ContainerBusca>
        <Input
          placeholder="Search"
          value={search}
          onChangeText={setSearch}
        />

        <ButtonIcon
          icon="search"
          tamanho={20}
          onPress={handleBusca}
        />
      </ContainerBusca>
      <FlatList
        data={show}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (<Card title={item.name} genres={item.genres} image={item.image.medium} summary={item.summary} id={item.id} />)}
      />
    </Container>
  );
};
