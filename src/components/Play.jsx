import React, { useState } from 'react';
import Modal from './modal/Modal';

const Play = () => {
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
      img: 'src/assets/rock.png',
    },
    scissors: {
      name: 'Scissors',
      img: 'src/assets/scissors.png',
    },
    paper: {
      name: 'Paper',
      img: 'src/assets/paper.png',
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
        <div className='text-center mt-20'>
          <div className=' text-2xl font-bold'>Rock, Scissors, Paper Game!</div>
          <div className='flex mt-28 mb-20 justify-center'>
            <div style={{ maxWidth: '80%', display: 'flex', justifyContent: 'center' }}>
              <img style={{ maxWidth: '40%' }} src='src\assets\rock.png' />
              <img style={{ maxWidth: '40%' }} src='src\assets\scissors.png' />
              <img style={{ maxWidth: '40%' }} src='src\assets\paper.png' />
            </div>
          </div>

          <div>
            <button onClick={openModal} className='w-20 bg-lime-400 mt-10'>
              Play
            </button>
          </div>
          <Modal isOpen={isModalOpen} closeModal={closeModal}>
            <div className='flex justify-center mt-5'>
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
            <div className='text-center'>
              <div className='flex justify-around mt-10'>
                <div className='flex flex-col mb-5'>
                  <div>Computer</div>
                  {computerSelect && <img src={computerSelect.img} alt={computerSelect.name} />}
                </div>
                <div className='flex flex-col'>
                  <div>You</div>
                  {userSelect && <img src={userSelect.img} alt={userSelect.name} />}
                </div>
              </div>
              {result && <div className='text-2xl mt-5 font-bold'>{result}</div>}
            </div>
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Play;
