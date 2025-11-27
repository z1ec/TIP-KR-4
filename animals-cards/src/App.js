import React from 'react';
import './App.css';
import AnimalCard from './AnimalCard';

function App() {
  const [animals, setAnimals] = React.useState([
    {
      id: 1,
      name: 'Лиса',
      imageUrl: 'https://animaljournal.ru/articles/wild/psovie/lisa_obiknovennaya/lisica_obiknovennaya_zver.jpg'
    },
    {
      id: 2,
      name: 'Волк',
      imageUrl: 'https://zooparkvrn.ru/wp-content/uploads/2025/06/volk-1.jpg'
    },
    {
      id: 3,
      name: 'Медведь',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9e/Ours_brun_parcanimalierpyrenees_1.jpg'
    },
    {
      id: 4,
      name: 'Олень',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTekZYvxorSceWKQFVhXDMB-5ugyWCybajApg&s'
    }
  ]);

  return (
    <div className="app">
      <h1>Удивительный мир животных</h1>
      {/* Контейнер для сетки карточек */}
      <div className="animal-list">
        {/* Проходим по массиву animals и для каждого объекта создаем компонент AnimalCard */}
        {animals.map(animal => (
          <AnimalCard
            key={animal.id} 
            name={animal.name}
            imageUrl={animal.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}

export default App;