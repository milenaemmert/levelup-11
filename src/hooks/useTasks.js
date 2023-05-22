import { useState, useEffect } from 'react';
import { loadTasks } from '../services/loadData';

export default function useTasks() {
  const [title, setTitle] = useState('');
  const [imageTitle, setImageTitle] = useState('');
  const [list, setList] = useState([]);

  useEffect(() => {
    const loaded = loadTasks();
    setTitle(loaded.title);
    setImageTitle(loaded.image);
    setList(loaded.taskslist);
    
  }, []);

  return [ title, imageTitle, list]
}

  