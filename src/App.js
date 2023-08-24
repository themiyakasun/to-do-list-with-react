import React from 'react';
import { useState } from 'react';

import List from './components/List';
import Alert from './components/Alert';

const App = () => {
  const [name, setName] = useState('');
  const [list, setList] = useState([]);
  const [alert, setAlert] = useState({
    show: true,
    msg: 'Error',
    type: 'danger',
  });

  const handleSubmit = (e) => {
    if (!name) {
      setAlert({ show: true, msg: 'enter a value', type: 'danger' });
    } else {
      setAlert({ show: true, msg: 'Item added to list', type: 'success' });
      const newItem = {
        id: new Date().getTime().toString(),
        title: name,
      };
      setList([...list, newItem]);
      setName('');
    }
  };

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type });
  };

  const handleClear = () => {
    setAlert({ show: true, msg: 'Items cleared', type: 'danger' });
    setList([]);
  };

  const removeItem = (id) => {
    setAlert({ show: true, msg: 'Item removed', type: 'danger' });
    setList(list.filter((item) => item.id !== id));
  };

  return (
    <div>
      <section className='text-center'>
        <div className='absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] w-[600px] border-2 shadow-md'>
          {alert.show && <Alert {...alert} removeAlert={showAlert} />}
          <h1 className='text-3xl mb-5 font-bold text-[#7d7d7d]'>
            THINGS TO DO
          </h1>
          <div className='w-[500px] h-[60px] flex px-5'>
            <input
              type='text'
              placeholder='Add New'
              className='w-full h-full border-2 border-slate-200 contrast-more:border-slate-400 text-xl px-3'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button
              className='w-[100px] h-full border-2 border-slate-200 bg-black text-white text-lg'
              onClick={handleSubmit}
            >
              Add
            </button>
          </div>
          <List items={list} removeItem={removeItem} />

          <button className='bg-[#ed6b5c] p-2 my-3' onClick={handleClear}>
            Clear All
          </button>
        </div>
      </section>
    </div>
  );
};

export default App;
