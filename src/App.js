import './App.css';
import Header from './components/Header/Header';
import Questions from './components/QAComponent/Questions';
import QuestionsList from './components/QuestionList/Questionslist';

const App = () => {
  return (
    <div>
      <Header />
      <QuestionsList />
      <Questions />
    </div>
  );
};

export default App;
