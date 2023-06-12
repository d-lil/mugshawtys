import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Inmate from './pages/Inmate';
import CheckoutForm from './components/CheckoutForm';
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
        <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
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
              path='/profile'
              element={<Profile />}
            />
            <Route
              path='/inmate/:inmateId'
              element={<Inmate />}
            />
             <Route path='/CheckoutForm' element={<CheckoutForm />} /> 
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