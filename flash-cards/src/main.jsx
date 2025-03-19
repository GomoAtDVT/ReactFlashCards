import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css';
import FlashCardDisplay from './flash-card-display.jsx';
import './flash-card-display.css';
import App from './App.jsx';




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <FlashCardDisplay /> */}

    {/* <Router>
      <Routes>
        <Route path="/flash-card-display" element={<FlashCardDisplay />} />
        <Route path="/App" element={<App />} />
      </Routes>
    </Router> */}
  </StrictMode>,
)
