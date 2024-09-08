import '../src/index.css';
import spotify from './lib/client';
import { SongList } from './lib/components/SongList';

export default function App() {
  spotify.test()

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1 p-8 mb-20">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Music App</h1>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-5">Search for a song</h2>
          <SongList isLoading={false}/>
        </section>
      </main>
    </div>
  );
}
