import React, { useState, useEffect, useReducer, useCallback } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  StyleSheet,
  Button,
  ActivityIndicator,
  Alert
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useDispatch } from 'react-redux';
import FontAwesomeIcon from "react-native-vector-icons/FontAwesome";
import EntypoIcon from "react-native-vector-icons/Entypo";

import Input from '../../components/UI/Input';
import Card from '../../components/UI/Card';
import Colors from '../../constants/Colors';
import * as authActions from '../../store/actions/auth';

const FORM_INPUT_UPDATE = 'FORM_INPUT_UPDATE';

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues
    };
  }
  return state;
};

const AuthScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [isSignup, setIsSignup] = useState(false);
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      email: '',
      password: ''
    },
    inputValidities: {
      email: false,
      password: false
    },
    formIsValid: false
  });

  useEffect(() => {
    if (error) {
      Alert.alert('An Error Occurred!', error, [{ text: 'Okay' }]);
    }
  }, [error]);

  const authHandler = async () => {
    let action;
    if (isSignup) {
      action = authActions.signup(
        formState.inputValues.email,
        formState.inputValues.password
      );
    } else {
      action = authActions.login(
        formState.inputValues.email,
        formState.inputValues.password
      );
    }
    setError(null);
    setIsLoading(true);
    try {
      await dispatch(action);
      // props.navigation.navigate('Shop');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier
      });
    },
    [dispatchFormState]
  );

  return (
      <LinearGradient colors={['#ffffff', '#ffffff']} style={styles.gradient}>
        <View style={styles.titleContainer}>
          <Text style={styles.titleLable}>Login</Text>
        </View>
        <Card style={styles.authContainer}>
          <ScrollView>
            <View style={styles.inputContainer}>
              <Input
                id="email"
                label="E-Mail"
                keyboardType="email-address"
                required
                email
                autoCapitalize="none"
                errorText="Please enter a valid email address."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <Input
                id="password"
                label="Password"
                keyboardType="default"
                secureTextEntry
                required
                minLength={5}
                autoCapitalize="none"
                errorText="Please enter a valid password."
                onInputChange={inputChangeHandler}
                initialValue=""
              />
              <View style={styles.forgotPassword}>
                <Text style={styles.labelFoegetPassword}>forgot password</Text>
              </View>
            </View>
            <View style={styles.authenticateButtons}>
                <Button style={styles.loginContainer}
                  title={isSignup ? 'Sign Up' : 'Login'}
                  color="rgba(84,183,183,1)"
                  onPress={authHandler}
                /> 
                <Button style={styles.signUpContainer}
                  title={`${isSignup ? 'Login' : 'Sign Up'}`}
                  color="rgba(84,183,183,1)"
                  onPress={() => {
                    setIsSignup(prevState => !prevState);
                  }}
                />
            </View>
          </ScrollView>
        </Card>
        <View style={styles.otherLogins}>
          <View style={styles.orLoginWith}>
            <Text>or login with</Text>
          </View>
          <View style={styles.iconRow}>
            <FontAwesomeIcon name="google" style={styles.icon}></FontAwesomeIcon>
            <FontAwesomeIcon name="facebook" style={styles.icon2}></FontAwesomeIcon>
            <EntypoIcon name="twitter" style={styles.icon3}></EntypoIcon>
          </View>
        </View>
      </LinearGradient>
  );
};

export const screenOptions = {
  headerTitle: 'Authenticate',
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color:"rgba(0,0,0,1)",
  },
  titleContainer:{
    width: '100%',
    height: '20%',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: "rgba(0,0,0,1)",
  },
  titleLable:{
    fontFamily: "roboto-regular",
    fontSize: 30,
    color: "rgba(84,183,183,1)",
    alignItems: 'flex-start',
  },
  forgotPassword:{
    marginTop: 5,
    alignContent: "flex-end",
    alignItems: 'flex-end',
  },
  labelFoegetPassword:{
    color: "rgba(255,255,255,1)",
  },
  authContainer: {
    width: '100%',
    height: '55%',
    maxWidth: 400,
    maxHeight: 400,
    padding: 20,
    backgroundColor: "rgba(0,0,0,1)",
  },
  inputContainer:{
    height: "80%",
    width: "100%",
  },
  authenticateButtons:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: "60%",
  },
  loginContainer: {
    
  },
  signUpContainer: {
    
  },
  orLoginWith: {
    fontFamily: "roboto-regular",
    color: "#121212",
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "rgba(255,255,255,1)",
  },
  icon: {
    color: "rgba(208,2,27,1)",
    fontSize: 16,
  },
  icon2: {
    color: "rgba(59,87,149,1)",
    fontSize: 16,
  },
  icon3: {
    color: "rgba(90,164,216,1)",
    fontSize: 16,
  },
  iconRow: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: "rgba(255,255,255,1)",
  },
  otherLogins:{
    flex:1,
    marginTop: 10,
    width: '70%',
    height: '30%',
    backgroundColor: "rgba(255,255,255,1)"
  }
});

export default AuthScreen;
