import React, { useState } from 'react';
import Modal from './modal/Modal';

const Preplay = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState('');

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);

    let computerChoice = randomChoice();
    setComputerSelect(computerChoice);

    const gameResult = judgement(choice[userChoice], computerChoice);
    setResult(gameResult);
  };

  const randomChoice = () => {
    let itemArray = Object.keys(choice);
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final];
  };

  const choice = {
    rock: {
      name: 'Rock',
      img: 'src/assets/image/rock.png',
    },
    scissors: {
      name: 'Scissors',
      img: 'src/assets/image/scissors.png',
    },
    paper: {
      name: 'Paper',
      img: 'src/assets/image/paper.png',
    },
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return 'TIE';
    } else if (
      (user.name === 'Scissors' && computer.name === 'Rock') ||
      (user.name === 'Rock' && computer.name === 'Paper') ||
      (user.name === 'Paper' && computer.name === 'Scissors')
    ) {
      return 'LOSE';
    } else {
      return 'WIN';
    }
  };

  return (
    <>
      <div className='flex flex-col items-center bg-yellow-100 h-screen'>
        <div>Rock, Scissors, Paper Game!</div>
        <div className='flex flex-row'>
          <img src='src\assets\image\rock.png' />
          <img src='src\assets\image\scissors.png' />
          <img src='src\assets\image\paper.png' />
        </div>
        <div>
          <button onClick={openModal} className='w-20 bg-lime-400'>
            Play
          </button>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <div className='flex justify-center'>
              <button onClick={() => play('rock')} className='w-20 h-20 bg-red-100 rounded-full mx-2'>
                Rock
              </button>
              <button onClick={() => play('scissors')} className='w-20 bg-blue-100 rounded-full mx-2'>
                Scissors
              </button>
              <button onClick={() => play('paper')} className='w-20 bg-yellow-100 rounded-full mx-2'>
                Paper
              </button>
            </div>
            <div className='flex'>
              <div>Computer</div>
              {computerSelect && <img src={computerSelect.img} alt={computerSelect.name} />}
              <div>You</div>
              {userSelect && <img src={userSelect.img} alt={userSelect.name} />}
            </div>
            {result && <div>{result}</div>}
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Preplay;
