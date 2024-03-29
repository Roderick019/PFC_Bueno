import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    // Aquí puedes agregar tu lógica de autenticación, como hacer una solicitud a tu backend
    // para verificar las credenciales del usuario.

    // Por simplicidad, aquí solo estamos verificando que ambos campos no estén vacíos.
    if (!username || !password) {
      setError('Por favor ingresa un nombre de usuario y contraseña.');
      return;
    }

    // Lógica de autenticación exitosa
    // Aquí podrías redirigir al usuario a la pantalla principal de la aplicación.
    console.log('Login exitoso para el usuario:', username);
  };

  const handleRegister = () => {
    // Aquí puedes agregar la lógica para manejar el registro de usuarios.
    console.log('Registro de nuevo usuario');
  };

  return (
    <View style={styles.container}>
      <Image source={require('./images/logo.png')} style={styles.logo} />
      <Text style={styles.title}>TRUSTY</Text>
      <Text style={styles.subtitle}>Iniciar Sesión</Text>
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Iniciar Sesión" onPress={handleLogin} style={styles.button} />
      <View style={styles.space} />
      <Button title="Registrar" onPress={handleRegister} style={styles.button} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logo: {
    width: 100, // Ajusta el tamaño según tus necesidades
    height: 100, // Ajusta el tamaño según tus necesidades
    marginBottom: 10, // Espacio entre el logo y el título
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 10, // Espacio entre el título y el subtítulo
  },
  subtitle: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  button: {
    marginBottom: 10, // Espacio entre botones
  },
  space: {
    height: 10, // Espacio entre botones
  },
});

export default App;
