import React from 'react';
import Top from '../components/Top';
import TaskList from '../components/TaskList';

export default function Home() {
  return <TaskList top={Top} />;
}
