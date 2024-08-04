import { StatusBar } from "expo-status-bar";
import {  Image, ScrollView, Text, TextInput, TouchableOpacity, View } from "react-native";

const Login = () => {
  return (
    
         <View className="flex-1 flex justify-center items-center p-5">
      <Text className="font-bold text-2xl">Welcom Back!</Text>
      <View className="mt-7 w-full">
        <TextInput
          placeholder="Email Adress"
          className="w-full p-2 rounded-lg text-black  bg-gray-100 shadow-sm"
         
        ></TextInput>
        <TextInput
          placeholder="Email Adress"
          className="w-full p-2 rounded-lg text-black mt-4 bg-gray-100 shadow-sm"
        ></TextInput>
      </View>
      <View className="mt-3 w-full flex flex-row ">
        <TouchableOpacity className="h-5 w-5 mr-2 rounded border-2 border-gray-200 justify-center items-center" />
        <View className="flex-1 flex flex-row justify-between items-center">
          <Text  className="text-slate-400">Remeber me</Text>
          <Text className="text-slate-400 text-green-600">
            Forgot password ?
          </Text>
        </View>
      </View>
      <View className="mt-6 w-full">
         <TouchableOpacity className="bg-green-600 rounded-lg shadow-lg" onPress={() => alert('Button Sign in')}>
        <Text className="text-white p-3 text-center">Sign in</Text>
      </TouchableOpacity>

      <TouchableOpacity className="mt-6 bg-white rounded-lg shadow-sm" onPress={() => alert('Button Facebook')}>
      <View className="border border-1 border-gray-100 rounded-md p-3 flex flex-row">
        <Image source={require('../assets/facebook.png')} className="w-5 h-5"></Image>
        <Text className="mx-10 text-sm">Sign whith Facebook</Text>
      </View>
      </TouchableOpacity>

      <TouchableOpacity className="mt-6 bg-white rounded-lg shadow-sm" onPress={() => alert('Button Google')}>
      <View className="border border-1 border-gray-100 rounded-md p-3 flex flex-row">
        <Image source={require('../assets/google.png')} className="w-5 h-5"></Image>
        <Text className="mx-10 text-sm">Sign whith Google</Text>
      </View>
      </TouchableOpacity>
      </View>
      <StatusBar hidden={true} />
    </View>
  
   
  );
};

export default Login;
