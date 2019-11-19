/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const [email, setEmail] = useState('');

  function handleEmailChange(e) {
    setEmail();
  }
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Login Page</Text>
              <Text style={styles.sectionDescription}>
                Please key in your{' '}
                <Text style={styles.highlight}>Email Address </Text>:
              </Text>
              <View style={styles.fixToText}>
                <TextInput style={styles.TextInput} value="email" />
                <TouchableOpacity>
                  <View style={styles.button}>
                    <Text
                      style={styles.highlight}
                      // onPress={() => Alert.alert('Right button pressed')}
                    >
                      Login
                    </Text>
                    {/* //  */}
                  </View>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: '#f1f1f1',
    borderWidth: 1,
    borderRadius: 20,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  TextInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
  },
  fixToText: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    marginBottom: 45,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  button: {
    borderWidth: 1,
    borderRadius: 20,
    borderColor: Colors.dark,
    backgroundColor: '#d3d3d3',
    padding: 10,
    marginTop: 40,
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default App;
