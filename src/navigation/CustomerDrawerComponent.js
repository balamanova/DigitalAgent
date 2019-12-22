import React from 'react';
import { DrawerItems } from 'react-navigation-drawer';
import { View, Text, SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { Avatar } from 'react-native-elements';

const CustomerDrawerComponent = props => (
  <ScrollView>
    <SafeAreaView forceInset={{ top: 'always', horizontal: 'never' }}>
      <View
        style={{
          height: 120,
          backgroundColor: '#343434',
          flexDirection: 'row',
          fontFamily: 'System',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Avatar
          size="medium"
          overlayContainerStyle={{
            backgroundColor: '#faad14'
          }}
          titleStyle={{
            color: '#343434'
          }}
          rounded
          title="AK"
          activeOpacity={0.7}
        />
        <View
          style={{
            marginLeft: 16
          }}
        >
          <Text style={{ fontSize: 18, color: 'white' }}>Арсен Калимулдаевич</Text>
          <Text style={{ fontSize: 14, color: 'white' }}>Руководитель отделения</Text>
        </View>
      </View>
      <DrawerItems {...props} />
    </SafeAreaView>
  </ScrollView>
);

const styles = StyleSheet.create({});

export default CustomerDrawerComponent;
