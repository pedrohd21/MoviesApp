import AsyncStorage from '@react-native-async-storage/async-storage';

import { FAVORITE_MOVIES } from './storageConfig';
import { favoriteAll } from './favoriteAll';

export async function favoriteDelete(favoDelete: string){
  try{
    const storedFavorite = await favoriteAll();

    const favorites = storedFavorite.filter(favorite => favorite !== favoDelete);
    await AsyncStorage.setItem(FAVORITE_MOVIES, JSON.stringify(favorites));
    await AsyncStorage.removeItem(`${FAVORITE_MOVIES}-${favoDelete}`);
  }catch(error){
    throw error;
  }
}