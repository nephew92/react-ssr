import { BrowserRouter } from 'react-router-dom';

import { createRoot } from 'react-dom/client';

import RootModule from '@/modules/root/client';

import "./sass/bootstrap.scss"

createRoot(document.getElementById('root'))
  .render(<>
    <BrowserRouter>
      <RootModule />
    </BrowserRouter>
  </>)
