import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Routing components
import Home from './pages/Home'; // Page components
import Profile from './pages/Profile';
import Settings from './pages/Settings';
import Inmate from './pages/Inmate';
import CheckoutForm from './components/CheckoutForm';
import Navbar from './components/Navbar';
import Footer from './components/Footer';


import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache, 
  createHttpLink
 } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';


// GraphQL endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Middleware for adding authorization to headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Apollo Client setup
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

// Main App component
function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <>
        {/* Google Fonts */}
        <link
        href='https://fonts.googleapis.com/css?family=Damion&display=swap'
        rel='stylesheet'
      />
      <link
        href='https://fonts.googleapis.com/css?family=Alatsi&display=swap'
        rel='stylesheet'
      />
          {/* Navbar */}
          <Navbar />
          {/* Routes */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/settings' element={<Settings />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/inmate/:inmateId' element={<Inmate />} />
            <Route path='/CheckoutForm' element={<CheckoutForm />} /> 
            <Route path='*' element={<h1 className='display-2'>Wrong page!</h1>} />
          </Routes>

        </>
      </Router> 
      <Footer />

    </ApolloProvider>
  );
}

export default App;
