import { AnimatePresence } from 'framer-motion';
import './App.css';
import TickTockTodos from './components/TickTockTodos';
import { ModalProvider } from './contexts/ModalContext';
import { TodosProvider } from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <ModalProvider>
        <TodosProvider>
          <TickTockTodos />
        </TodosProvider>
      </ModalProvider>
    </div>
  );
}

export default App;
