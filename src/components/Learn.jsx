import { useState } from "react";

// status -> empty, success, error, submitting
const Learn = () => {
  const [answer, setAnswer] = useState('');
  const [error, setError] = useState(null);
  const [status, setStatus] = useState('typing'); // typing, success, submitting

  const handleTextAreaChange = (e) => {
    setAnswer(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    try {
      await submitForm(answer);
      setStatus('success');
    }
    catch (err) {
      setStatus('typing');
      setError(err);
    }
  }

  if (status === 'success') {
    return <h1>That's right!</h1>
  }

  return (
    <div>
      <h1>
        City Quiz
      </h1>
      <p>
        In which city is the billboard that turns air into drinkable water?
      </p>
      <form onSubmit={ handleSubmit }>
        <textarea
          value={answer}
          onChange={handleTextAreaChange}
          disabled={status === 'submitting'} />
        <br/>
        <button type="submit" disabled = {status === 'submitting' || answer.length === 0}>
          Submit
        </button>
        {
          error !== null &&
          <p className="Error">
              {error.message}
          </p>
        }
      </form>

    </div>
  );
}

function submitForm(answer) {

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let isAnswerCorrect = answer.toLowerCase() !== 'lima';
      if (!isAnswerCorrect) {
        resolve();
      }
      else {
        reject(new Error('Good guess! but wrong answer. Please try again'));
      }
    }, 1500);
  });

}

export default Learn;
