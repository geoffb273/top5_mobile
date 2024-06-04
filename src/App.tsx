import { Auth0Provider } from 'react-native-auth0';
import { AUTH0_CLIENT_ID, AUTH0_DOMAIN } from './constants/configConstants';
import { AuthProvider } from './provider/AuthProvider';
import { ApolloProvider, gql } from '@apollo/client';
import { graphqlClient } from './graphql/client';
import { NavigationContainer } from '@react-navigation/native';
import { RootNavigator } from './navigators/RootNavigator';
import { SafeAreaProvider } from 'react-native-safe-area-context';

gql`
  query GetUser($id: String!) {
    getUser(id: $id) {
      id
    }
  }
`;

export default function App() {
  return (
    <NavigationContainer>
      <ApolloProvider client={graphqlClient}>
        <Auth0Provider clientId={AUTH0_CLIENT_ID} domain={AUTH0_DOMAIN}>
          <AuthProvider>
            <SafeAreaProvider>
              <RootNavigator />
            </SafeAreaProvider>
          </AuthProvider>
        </Auth0Provider>
      </ApolloProvider>
    </NavigationContainer>
  );
}
