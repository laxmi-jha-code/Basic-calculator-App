import React,{useState} from "react";
import {Text,View,StyleSheet,TouchableOpacity} from 'react-native'

const App=()=>{
  const[input,setInput]= useState("")
  const[result,setResult] = useState("")
  
  const handlepress=(value:any)=>{
    if(value=='C')
    {
      setInput("")
      setResult("")
    }
    else if (value == '=')
      try{
      setResult(eval(input).toString())
      }catch{
        setResult("Error")
      }
      else if(value == 'Del')
        setInput(input.slice(0,-1))
    else{
      setInput(input+value)
    }
  }
  return(
  <View style={styles.container}>
    <View style={styles.input}>
    <Text style={styles.inputtxt}>{input}</Text>
    <Text style={styles.resulttxt}>{result}</Text>
    </View>
    <View style={styles.buttons}>
      <View style={styles.row}>
      <TouchableOpacity onPress={()=>handlepress('9')}  style={styles.button}>
        <Text style={styles.btntxt}>9</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('8')}  style={styles.button}>
        <Text style={styles.btntxt}>8</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('7')}  style={styles.button}>
        <Text style={styles.btntxt}>7</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('C')}  style={styles.button}>
        <Text style={styles.btntxt}>C</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('Del')}  style={styles.button}>
        <Text style={styles.btntxt}>Del</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}> 
      <TouchableOpacity onPress={()=>handlepress('6')}  style={styles.button}>
        <Text style={styles.btntxt}>6</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('5')}  style={styles.button}>
        <Text style={styles.btntxt}>5</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('4')}  style={styles.button}>
        <Text style={styles.btntxt}>4</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('+')}  style={styles.button}>
        <Text style={styles.btntxt}>+</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('-')}  style={styles.button}>
        <Text style={styles.btntxt}>-</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
     <TouchableOpacity onPress={()=>handlepress('3')}  style={styles.button}>
      <Text style={styles.btntxt}>3</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('2')}  style={styles.button}>
        <Text style={styles.btntxt}>2</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('1')}  style={styles.button}>
        <Text style={styles.btntxt}>1</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('*')}  style={styles.button}>
        <Text style={styles.btntxt}>*</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('/')}  style={styles.button}>
        <Text style={styles.btntxt}>/</Text>
      </TouchableOpacity>
    </View>
    <View style={styles.row}>
      <TouchableOpacity onPress={()=>handlepress('0')}  style={styles.button}>
      <Text style={styles.btntxt}>0</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('00')}  style={styles.button}>
        <Text style={styles.btntxt}>00</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={()=>handlepress('=')} style={styles.button}>
        <Text style={styles.btntxt}>=</Text>
     </TouchableOpacity>
    </View>
    </View>
  </View>
  )
}
const styles=StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'black',
  justifyContent:'center'
},
input:{
  justifyContent:'flex-end',
  margin:20,
  padding:20
},
inputtxt:{
  fontSize:20,
  color:'white',
  textAlign:'right',
},
resulttxt:{
  fontSize:24,
  color:'green',
  textAlign:'right',
},
buttons:{
  padding:20,
  margin:5
},
row:{
  flexDirection:'row',
  justifyContent:'space-around',
  marginBottom:20,


},
button:{
  backgroundColor:'grey',
  borderRadius:12,
  height:50,
  width:50,

},
btntxt:{
  fontSize:25,
  color:'black',
  textAlign:'center'
}
})
export default App