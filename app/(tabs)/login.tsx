import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Link } from 'expo-router';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'admin' && password === 'password') {
      console.log('Sucesso');
    } else {
      console.log('Credenciais Incorretas');
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://cvws.icloud-content.com/B/AV3Aw5UuvS-VCrfJgzR4RT8piK6YATw_HzkSWRcOS36MHgL4jx7Vq8X8/Imagem+do+WhatsApp+de+2024-04-18+%C3%A0%28s%29+16.47.54_b011dcb1.jpg?o=Ap7XeMlJ1mSxcYp3_xGi3mTOsv3Y8F5JXacQ-kDmcmg5&v=1&x=3&a=CAog1OLX2QB5aFwoT5dezFfSTobs8-qMtCfDe79AO6JJC34SbxD44tud_jEY-L-3n_4xIgEAUgQpiK6YWgTVq8X8aidlWEydAf4nbh-YX9szYukB2NeOD5RQP-OSw5GP8V-iwGEPERYRbx5yJ6ouzLFKGTs1RU_5vQ6ej_WVSdVVF-yl9Ukw0adYRzQdgXyM4efbug&e=1717515968&fl=&r=3ab3b86d-3290-4833-b4e9-a8f8e04b2b9b-1&k=wdCrDin3RW-2GWZmJWzVqw&ckc=com.apple.clouddocs&ckz=com.apple.CloudDocs&p=70&s=SBPFRclwLOqEIRXr1RF7NkWaJSg&cd=i' }} // Replace with your image URL
        style={styles.image}
      />
      <TextInput
        style={styles.input}
        placeholder="Usuário"
        onChangeText={(text) => setUsername(text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        secureTextEntry
        onChangeText={(text) => setPassword(text)}
      />
      <TouchableOpacity>
        <Text style={styles.subButton}>Esqueci minha senha</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      <Link href="/register" style={styles.button}>
          <Text style={styles.buttonText}>Cadastrar</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  input: {
    width: 350,
    height: 60,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 20,
    paddingHorizontal: 10,
    fontSize: 20,
    textAlign: 'center',
  },
  button: {
    marginTop: 20,
    width: 350,
    height: 60,
    backgroundColor: '#011D80',
    padding:15,
    borderRadius: 8,
    textAlign: 'center',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
    fontWeight:'bold',
  },
  subButton: {
    fontSize: 18,
    textDecorationLine: 'underline',
  }
});

export default LoginScreen;
