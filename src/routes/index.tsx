import React from 'react';
import { View, ActivityIndicator, StatusBar } from 'react-native';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';

import { useAuth } from '../hooks/auth';

const Routes: React.FC = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#999" />
      </View>
    );
  }

  return user ? (
    <>
      <StatusBar
        backgroundColor={user ? '#28262e' : '#312e38'}
        barStyle="light-content"
        translucent
      />
      <AppRoutes />
    </>
  ) : (
      <AuthRoutes />
    );
};

export default Routes;
