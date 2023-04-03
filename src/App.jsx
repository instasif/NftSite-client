import React from 'react';
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './router/routes/Route';


const App = () => {
  return (
    <div>
      <RouterProvider router={router} />
      <Toaster position="bottom-center" reverseOrder={false} />
    </div>
  );
};

export default App;