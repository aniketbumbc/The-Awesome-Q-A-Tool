import './InfoSection.css';

const InfoSection = ({ questionsCount }) => {
  return (
    <>
      <div className='divider'></div>
      <div className='info-container'>
        {questionsCount ? (
          <p className='info-text'>
            Here you can find {questionsCount} questions. Feel free to create
            your own questions!
          </p>
        ) : (
          <p className='info-text'>
            Here you can find no questions. Feel free to create your own
            questions!
          </p>
        )}
      </div>
    </>
  );
};

export default InfoSection;
