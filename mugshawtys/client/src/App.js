import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Settings from './pages/Settings';
import Navbar from './components/Navbar';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink
 } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';



const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
          <Navbar />
          <Routes>
            <Route 
              path='/' 
              element={<Home />} 
            />
            <Route 
              path='/settings' 
              element={<Settings />} 
            />
            <Route 
              path='*'
              element={<h1 className='display-2'>Wrong page!</h1>}
            />
          </Routes>
        </>
      </Router>
    </ApolloProvider>
  );
}

export default App;