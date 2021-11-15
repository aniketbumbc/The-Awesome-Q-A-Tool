import './App.css';
import Header from './components/Header/Header';
import AddQuestion from './components/AddQuestion/AddQuestion';
import QuestionsList from './components/QuestionList/Questionslist';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <QuestionsList />
        <AddQuestion />
      </Provider>
    </div>
  );
};

export default App;
