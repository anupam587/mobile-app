import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Platform } from 'react-native';

import SubscriptionOverviewScreen, {
  screenOptions as SubscriptionOverviewScreenOptions
} from '../screens/subscriptions/SubscriptionOverview';
import SubscriptionDetailScreen, {
  screenOptions as SubscriptionDetailScreenOptions
} from '../screens/subscriptions/SubscriptionDetail';
import CartScreen, {
  screenOptions as cartScreenOptions
} from '../screens/subscriptions/Cart';

import AuthScreen, {
  screenOptions as authScreenOptions
} from '../screens/user/AuthScreen';
import Colors from '../constants/Colors';

const defaultNavOptions = {
  headerStyle: {
    backgroundColor: Platform.OS === 'android' ? Colors.primary : ''
  },
  headerTitleStyle: {
    fontFamily: 'open-sans-bold'
  },
  headerBackTitleStyle: {
    fontFamily: 'open-sans'
  },
  headerTintColor: Platform.OS === 'android' ? 'white' : Colors.primary
};

const SubscriptionsStackNavigator = createStackNavigator();

export const SubscriptionsNavigator = () => {
  return (
    <SubscriptionsStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <SubscriptionsStackNavigator.Screen
        name="SubscriptionsOverview"
        component={SubscriptionOverviewScreen}
        options={SubscriptionOverviewScreenOptions}
      />
      <SubscriptionsStackNavigator.Screen
        name="SubscriptionDetail"
        component={SubscriptionDetailScreen}
        options={SubscriptionDetailScreenOptions}
      />
      <SubscriptionsStackNavigator.Screen
        name="Cart"
        component={CartScreen}
        options={cartScreenOptions}
      />
    </SubscriptionsStackNavigator.Navigator>
  );
};


const AuthStackNavigator = createStackNavigator();

export const AuthNavigator = () => {
  return (
    <AuthStackNavigator.Navigator screenOptions={defaultNavOptions}>
      <AuthStackNavigator.Screen
        name="Auth"
        component={AuthScreen}
        options={authScreenOptions}
      />
    </AuthStackNavigator.Navigator>
  );
};

