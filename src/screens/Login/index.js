import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions, KeyboardAvoidingView} from 'react-native';
import { setCustomText } from 'react-native-global-props';
import Footer from '../../components/Footer';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
const { width, height } = Dimensions.get('window');

const customTextProps = {
  style: {
    fontFamily: 'System'
  }
};

setCustomText(customTextProps);

class LoginScreen extends Component {

  state = {
    errorEmail: false,
    errorPassword: false,
    email: '',
    password: '',
    disabled: true
  }

  buttonDisabled = () => !this.state.errorEmail && !this.state.errorPassword && this.setState({disabled:false})

  onChangePassword = (password) => {
    if(password === '' || password.length<3) {
      this.setState({
        errorPassword: true
      })
    } else {
      this.setState({
        errorPassword: false
      })
      this.buttonDisabled()
    }
    this.setState({
      password
    })
  }

  onChangeEmail = (email) => {
    const expression = /(?!.*\.{2})^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([\t]*\r\n)?[\t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([\t]*\r\n)?[\t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    if(email === '' || !expression.test(String(email).toLowerCase())) {
      this.setState({
        errorEmail: true
      })
    } else {
      this.setState({
        errorEmail:false
      })
      this.buttonDisabled()
    }
    this.setState({
      email
    })
  }
  onPress = () => {
    this.setState({email: '', password: ''})
      this.props.navigation.navigate('Home')
  }

  render() {

    const {email, errorEmail,errorPassword, password, disabled} = this.state

    return (
    
 <ScrollView style={[styles.container]} >
      <KeyboardAvoidingView style={styles.mainContainer}>
          <Image style={styles.logo} source={require('../../assets/logo/logo.png')} />
          <Text style={styles.baseText}>Вход в матрицу</Text>

          <View style={styles.inputView}>
            <Input
            autoCompleteType = "email"
              placeholder="Электронная почта"
              value = {email}
              onChangeText = {value => this.onChangeEmail(value)}
              containerStyle = {styles.inputContainer}
              leftIcon={<Icon name="envelope-o" size={18} color="rgba(0,0,0,0.25)" />}
              inputContainerStyle =  {styles.inputContainerStyle}
              inputStyle = {styles.inputStyle}
            />
           {errorEmail && <Text style = {styles.errorText}>Почта введена неправильно</Text>} 
            <Input
              placeholder="Пароль"
              value = {password}
              onChangeText = {value => this.onChangePassword(value)}
              leftIcon={<Icon name="key" size={18} color="rgba(0,0,0,0.25)"/>}
              containerStyle = {styles.inputContainer}
              inputStyle = {styles.inputStyle}
              inputContainerStyle = {styles.inputContainerStyle}
            />
            {errorPassword && <Text style = {styles.errorText}>Пароль должен быть больше 8 символов</Text>} 
            <Button 
            disabled = {disabled}
            title="Войти" onPress = {() => this.onPress()} titleStyle = {styles.titleStyle} buttonStyle = {styles.loginButton}/>
          </View>
          <Text style = {styles.forgotPass}>Забыли пароль?</Text>
       </KeyboardAvoidingView>
        
        <Footer/>
      </ScrollView>
    );
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgb(245,245,245)',
    flex: 1,
  },
  errorText: {
    color: 'red',
    marginLeft: 4
  },
  mainContainer: {
    height: height,
    alignItems: 'center',
    paddingTop: width*0.20,
  },
  inputContainerStyle: {
    borderBottomWidth: 0,
  },
  inputStyle: {
    fontSize:14,
    marginHorizontal:7
  },
  inputView: {
    width: width - width * 0.06 * 2,
    marginVertical: width * 0.06,
  },
  logo: {
    marginBottom: width * 0.13
  },
  baseText: {
    fontSize: width * 0.067,
    lineHeight: 32,
    color: 'rgb(89,89,89)'
  },
  loginButton: {
    marginVertical: width * 0.03,
    backgroundColor: 'rgb(255,197,61)',
    height: 40
  },
  titleStyle: {
    color: 'rgba(0,0,0,0.85)',
    fontSize: width*0.04
  },
  inputContainer:{
    marginVertical: width * 0.03,
    backgroundColor: 'rgb(255,255,255)',
    borderColor: 'rgb(217,217,217)',
    borderWidth: 1
   },
   forgotPass:{
     color: 'rgb(140,140,140)',
     fontSize:14
   }
});
