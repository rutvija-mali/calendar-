import CalendarView from './components/CalendarView';

function App() {
  return (
    <div className="h-screen flex flex-col">
      <header className='p-4 flex justify-between items-center'>
        <span className="text-gray-900  text-4xl font-bold  font-playfair ">Calendar </span>
        <span className=" font-bold text-pink-500 ">+ New event</span>
      </header>
      <main className="flex-1">
        <CalendarView />
      </main>
    </div>
  );
}

export default App;
