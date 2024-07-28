import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const CreateExam = () => {
  const { mid } = useParams();
  const [title, setTitle] = useState('');
  const [passingMarks, setPassingMarks] = useState(0);
  const [duration, setDuration] = useState(0);
  const [questions, setQuestions] = useState([{ question: '', mark: 0, answers: [{ answer: '', isCorrect: false }] }]);

  const handleInputChange = (index, event) => {
    const values = [...questions];
    values[index][event.target.name] = event.target.value;
    setQuestions(values);
  };

  const handleAnswerChange = (index, event, subIndex) => {
    const values = [...questions];
    values[index].answers[subIndex][event.target.name] = event.target.value;
    setQuestions(values);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { question: '', mark: 0, answers: [{ answer: '', isCorrect: false }] }]);
  };

  const handleAddAnswer = (index) => {
    const values = [...questions];
    values[index].answers.push({ answer: '', isCorrect: false });
    setQuestions(values);
  };

  const handleRemoveQuestion = (index) => {
    const values = [...questions];
    values.splice(index, 1);
    setQuestions(values);
  };

  const handleRemoveAnswer = (index, subIndex) => {
    const values = [...questions];
    values[index].answers.splice(subIndex, 1);
    setQuestions(values);
  };

  const handleSubmit = async () => {
    console.log({
      title: title,
      passingMarks: passingMarks,
      duration: duration,
      courseModule: mid,
      questions: questions
    });

    try {
      const response = await axios.post('http://localhost:8080/api/admin/', {
        title: title,
        passingMarks: passingMarks,
        duration: duration,
        CourseModule: String(mid),
        questions: questions
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='ml-[20%] flex-col flex w-full p-8 bg-gray-100 min-h-screen'>
      <div className='flex flex-col mb-4'>
        <label className='text-lg font-semibold mb-2'>Title</label>
        <input
          onChange={event => setTitle(event.target.value)}
          type="text"
          placeholder='Enter Title'
          className='w-[300px] h-[40px] border border-gray-300 rounded-md outline-none p-2'
        />
      </div>
      <div className='flex flex-col mb-4'>
        <label className='text-lg font-semibold mb-2'>Passing Marks</label>
        <input
          onChange={event => setPassingMarks(event.target.value)}
          type="number"
          placeholder='Enter Passing Marks'
          className='w-[300px] h-[40px] border border-gray-300 rounded-md outline-none p-2'
        />
      </div>
      <div className='flex flex-col mb-4'>
        <label className='text-lg font-semibold mb-2'>Duration (minutes)</label>
        <input
          onChange={event => setDuration(event.target.value)}
          type="number"
          placeholder='Enter Duration'
          className='w-[300px] h-[40px] border border-gray-300 rounded-md outline-none p-2'
        />
      </div>
      <div className='flex flex-col mb-6'>
        <label className='text-lg font-semibold mb-2'>Questions</label>
        {questions.map((question, index) => (
          <div key={index} className='flex flex-col mb-4 p-4 bg-white rounded-lg shadow-md'>
            <input
              type="text"
              name="question"
              placeholder='Enter Question'
              value={question.question}
              onChange={event => handleInputChange(index, event)}
              className='w-full h-[40px] mb-2 border border-gray-300 rounded-md outline-none p-2'
            />
            <input
              type="number"
              name="mark"
              placeholder='Enter Mark'
              value={question.mark}
              onChange={event => handleInputChange(index, event)}
              className='w-full h-[40px] mb-2 border border-gray-300 rounded-md outline-none p-2'
            />
            {question.answers.map((answer, subIndex) => (
              <div key={subIndex} className='flex items-center mb-2'>
                <input
                  type="text"
                  name="answer"
                  placeholder='Enter Answer'
                  value={answer.answer}
                  onChange={event => handleAnswerChange(index, event, subIndex)}
                  className='w-[250px] h-[40px] mr-2 border border-gray-300 rounded-md outline-none p-2'
                />
                <select
                  name="isCorrect"
                  value={answer.isCorrect}
                  onChange={event => handleAnswerChange(index, event, subIndex)}
                  className='w-[100px] h-[40px] mr-2 border border-gray-300 rounded-md outline-none p-2'
                >
                  <option value="">Select</option>
                  <option value={true}>True</option>
                  <option value={false}>False</option>
                </select>
                <button
                  type="button"
                  onClick={() => handleRemoveAnswer(index, subIndex)}
                  className='bg-red-500 text-white px-4 py-1 rounded-md'
                >
                  Remove
                </button>
              </div>
            ))}
            <button
              type="button"
              onClick={() => handleAddAnswer(index)}
              className='bg-blue-500 text-white px-4 py-2 rounded-md mt-2'
            >
              Add Answer
            </button>
            <button
              type="button"
              onClick={() => handleRemoveQuestion(index)}
              className='bg-red-500 text-white px-4 py-2 rounded-md mt-2'
            >
              Remove Question
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={handleAddQuestion}
          className='bg-green-500 text-white px-4 py-2 rounded-md mt-4'
        >
          Add Question
        </button>
      </div>
      <button
        onClick={handleSubmit}
        className='bg-purple-500 text-white px-6 py-2 rounded-md mt-4'
      >
        Create Exam
      </button>
    </div>
  );
};

export default CreateExam;
