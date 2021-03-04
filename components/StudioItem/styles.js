import { StyleSheet, Dimensions } from 'react-native';


const styles = StyleSheet.create({
  studioContainer:{
    width:'100%',
    height: Dimensions.get('window').height,
 },
 titles:{
    width: '100%',
    alignItems: 'center',
    marginTop:" 100%",
    justifyContent: 'center',
 },
 title:{
    fontSize: 20,
    color: '#ffffff',
    fontWeight: '500',
    marginTop:" 33%",
    justifyContent: 'center',
    alignItems: 'center',
    textTransform: 'capitalize',
 },
 subtitle:{
    fontSize: 18,
    fontWeight: '300',
    color: 'whitesmoke',
    justifyContent: 'center',
    alignItems: 'center'
 }, 
 image:{
   width:'100%',
   height: "100%",
   resizeMode: 'cover',
   position: 'absolute'
 },
  });

  export default styles;