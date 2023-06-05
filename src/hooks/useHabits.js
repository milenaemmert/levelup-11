import { useState, useEffect } from 'react';
import { loadHabits } from '../services/loadData';

export default function useTasks() {
  const [title, setTitle] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const loaded = loadHabits();
    setTitle(loaded.title);
    setImageTitle(loaded.image);
    setList(loaded.habitsList);
    
  }, []);

  return [ title, imageTitle, list]
}

  