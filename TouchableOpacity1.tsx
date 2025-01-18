
import React, { useState } from "react";
import {View, Text,TouchableOpacity,StyleSheet} from 'react-native'

const TouchableOpacity1 =()=>{
    const [selectradio, setSelectedradio] = useState(1)
    return(
        <View style={styles.main}>
         <TouchableOpacity onPress={()=>setSelectedradio(1)}>
            <View style={styles.radiowrapper}>
                <View style={styles.radio}>
                 {
                    selectradio == 1 ? <View style={styles.radiobg}></View> :null
                 }
                </View>

                <Text style={styles.radioText}>Radio Button 1</Text>
            </View>
          
         </TouchableOpacity>
         <TouchableOpacity onPress={()=>setSelectedradio(2)}>
            <View style={styles.radiowrapper}>
                <View style={styles.radio}>
                {
                    selectradio == 2 ? <View style={styles.radiobg}></View> :null
                 }
                </View>
                <Text style={styles.radioText}>Radio Button 1</Text>
            </View>
          
         </TouchableOpacity>
        </View>
    )
}


    const styles = StyleSheet.create({
    main:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    radioText:{
        fontSize:20
    },
    radio:{
        height:40,
        width:40,
        borderColor:'white',
        borderWidth:2,
        borderRadius:20,
        margin:10
    },
    radiowrapper:{
        flexDirection:'row',
        alignItems:'center'
    },
   radiobg:{
    backgroundColor:'white',
    height:28,
    width:28,
    borderRadius:20,
    margin:4
   }
        
})

export default TouchableOpacity1;