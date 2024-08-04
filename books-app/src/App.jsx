// src/App.jsx
import './App.css';

const App = () => {
  const Books = [
    { name: 'Book1', Read: true },
    { name: 'Book2', Read: false },
    { name: 'Book3', Read: true },
  ];

  return (
    <>
      <h1>Books List</h1>
      <ul>
        {Books.map((Book, index) => (
          <li key={index} className={Book.Read ? 'completed' : 'not-completed'}>
            {Book.name}
          </li>
        ))}
      </ul>
    </>
  );
}



export default App;