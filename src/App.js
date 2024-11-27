import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; // Importing QueryClient and QueryClientProvider

import UserForm from './components/UserForm/UserForm';
import ProductCard from './components/ProductCard/ProductCard';
import FetchData from './components/FetchData/FetchData';
import CustomHook from './components/CustomHook/CustomHook';
import CountIntervals from './components/CountIntervals/CountIntervals';
import QueryFetchData from './components/QueryFetchData/QueryFetchData';

// Create a QueryClient instance
const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}> {/* Wrap your components with QueryClientProvider */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/user-form">User Form</Link>
              </li>
              <li>
                <Link to="/product-card">Product Card</Link>
              </li>
              <li>
                <Link to="/fetch-data">Fetch Data</Link>
              </li>
              <li>
                <Link to="/custom-hook">Hook Example</Link>
              </li>
              <li>
                <Link to="/count-intervals">Count Intervals</Link>
              </li>
              <li>
                <Link to="/query-fetch-data">Query Fetch Data</Link>
              </li>
            </ul>
          </nav>

          <div className="main-content">
            <Routes>
              <Route path="/" element={<h1>Welcome to the Home Page</h1>} />
              <Route path="/user-form" element={<UserForm />} />
              <Route path="/product-card" element={<ProductCard quantity="2" />} />
              <Route path="/fetch-data" element={<FetchData />} />
              <Route path="/custom-hook" element={<CustomHook />} />
              <Route path="/count-intervals" element={<CountIntervals />} />
              <Route path="/query-fetch-data" element={<QueryFetchData />} />
            </Routes>
          </div>
        </div>
      </Router>
    </QueryClientProvider>
  );
};

export default App;
