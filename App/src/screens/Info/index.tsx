import { Container } from "./styles";
import { Header } from "../../components/Header";
import { useRoute } from "@react-navigation/native";
import React, { useState, useEffect  } from 'react'
import axios from 'axios';
import { FlatList } from 'react-native';
import { CardDescricao } from "../../components/CardDescricao";


type RouteParams = {
  id: number;
}

interface Show {
  name: string;
  genres: string[];
  summary: string;
  image: {
    medium: string;
  };
  status: string;
  id: number;
}

export function Info(){
  const route = useRoute();
  const { id }  = route.params as RouteParams;

  const [show, setShow] = useState<Show[]>([]);
  
  useEffect(() => {
    async function fetchShows() {
      try {
        const response = await axios.get(`https://api.tvmaze.com/shows/${id}`);

        setShow([response.data]);
      } catch (error) {
        console.error(error);
      }
    }

    fetchShows();
  }, []);
  return (
    <Container>
      <Header showBackButton={true} title="Description" />
      
      <FlatList
          data={show}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (<CardDescricao 
            title={item.name} 
            genres={item.genres} 
            image={item.image.medium} 
            summary={item.summary} 
            status={item.status} 
            id={item.id}
          />)}
        />

    </Container>
  );
};