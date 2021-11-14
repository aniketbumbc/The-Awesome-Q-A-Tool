import './App.css';
import Header from './components/Header/Header';
import Questions from './components/QAComponent/Questions';
import QuestionsList from './components/QuestionList/Questionslist';
import { Provider } from 'react-redux';
import { store } from './Redux/store';

const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Header />
        <QuestionsList />
        <Questions />
      </Provider>
    </div>
  );
};

export default App;
