import AsyncStorage from "@react-native-async-storage/async-storage";
import { FAVORITE_MOVIES } from "./storageConfig";

export async function favoriteAll() {
  try{
    const storage = await AsyncStorage.getItem(FAVORITE_MOVIES);

    const favorite: string[] = storage ? JSON.parse(storage) :[];
    return favorite
  } catch(error){
    throw error;
  }
}