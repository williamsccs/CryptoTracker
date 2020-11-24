import AsyncStorage, {} from '@react-native-async-storage/async-storage';

class Storage {

    static instance = new Storage();

    store = async (key, value) => {

        try{

            await AsyncStorage.setItem(key, value);

            return true;

        } catch(err){

            console.log('Storage Error: ', err);

            return false;
        }

    }

    get = async (key) => {
        try {

            return await AsyncStorage.getItem(key)
            
        } catch (err) {
            
            console.log('Storage get Error: ', err);

            throw Error(err);

        }
    }

    multiGet = async (keys) => {
        try {

            return await AsyncStorage.multiGet(keys);
            
        } catch (error) {

            console.log('Storage multiGet Error: ',error)

            throw Error(error);
        }
    }

    getAllKeys = async  () => {

        try {

            return await AsyncStorage.getAllKeys();
            
        } catch (error) {

            console.log('Storage getAllKeys Error: ',error)

            throw Error(error);
            
        }
    }

    remove = async (key) => {
        try {

            await AsyncStorage.removeItem(key)

            return true; 
            
        } catch (err) {
            
            console.log('Storage remove Error: ', err);

            return false;

        }
    }
}
export default Storage;