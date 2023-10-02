import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View,Pressable,Image } from 'react-native';
import Display from './assets/Components/Display';
import Logo from './assets/Components/Logo';
import OrderBtn from './assets/Components/OrderBtn';
import ItemsBtn from './assets/Components/ItemsBtn';
import PromoBtn from './assets/Components/PromoBtn';
import SettingsBtn from './assets/Components/SettingsBtn';
import CompOrdBtn from './assets/Components/CompOrdBtn';
import CurentOrdBtn from './assets/Components/CurentOrdBtn';
import DispOrdBtn from './assets/Components/DispOrdBtn';


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    
     <Logo/>

     <View style ={styles.mainButtonCont}>
      
    <OrderBtn/>
    <ItemsBtn/>
    <PromoBtn/>
    <SettingsBtn/>
     </View>
    <Display/>
      
      
      
      
    
    


     <View style={styles.orderPgBtns}>
      <CompOrdBtn/>
      <CurentOrdBtn/>
      <DispOrdBtn/>
     
      
     
      

      
   

     </View>





      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F6F6',
   
  },
   
   mainButtonCont:{
    flexDirection:'column',
    left:'5%',
    top:'25%',
    
    
  },
 
 
 
 
 

  
  orderPgBtns:{
    flexDirection:'row',
    bottom:'40%',
    left:'27%',
  
  },
 
 
  






    

});
