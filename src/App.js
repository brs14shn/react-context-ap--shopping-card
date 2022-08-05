import './App.css';
import AppRouter from './router/AppRouter';
import CardContextProvider from './context/CardContextProvider';


function App() {
  return (
    <CardContextProvider>
     <AppRouter/>
    </CardContextProvider>
  
  );
}

export default App;
