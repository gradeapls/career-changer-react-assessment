import React from 'react'
import ReactDOM from 'react-dom/client'
import { createRoot } from 'react-dom/client';

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  // <RouterProvider router={} />
)


const container = document.getElementById('myapp');
const root = createRoot(container);
root.render(<h1>Generation Thailand
  React - Assessment</h1>);