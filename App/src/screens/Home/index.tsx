import { Card } from "../../components/Card";
import { Header } from "../../components/Header";
import { Container } from "./styles"

import React, { useState, useEffect  } from 'react'

import { FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';


interface Show {
  id: number;
  name: string;
  genres: string[];
  summary: string;
  image: {
    medium: string;
  };
}

export function Home(){
  const [show, setShow] = useState<Show[]>([]);
  
  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await axios.get('https://api.tvmaze.com/shows');
        setShow(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    fetchShows();
  }, []);
  return(
    <Container>
      <Header showBackButton={false} title="FilmScout"/>
        <FlatList
          data={show}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<Card title={item.name} genres={item.genres} image={item.image.medium} summary={item.summary} />)}
        />
    </Container>
  );
};
