import AsyncStorage from "@react-native-async-storage/async-storage";


import { favoriteAll } from "./favoriteAll";
import { FAVORITE_MOVIES } from "./storageConfig";

export async function favoriteAdd(add: string){
  try{
    const storedFavorite = await favoriteAll();

    const favoriteAlreadyExists = storedFavorite.includes(add);

    if(favoriteAlreadyExists){
      throw new Error(`Favorite ${add} already exists`);
    }

    const storage = JSON.stringify([...storedFavorite, add]);
    await AsyncStorage.setItem(FAVORITE_MOVIES, storage);
  }catch(error){
    throw error;
  }
}