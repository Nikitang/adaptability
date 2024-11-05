import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const element = document.getElementById('root') as HTMLElement;

const root = ReactDOM.createRoot(element);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
