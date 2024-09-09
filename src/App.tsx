import { useEffect, useRef, useState } from 'react';
import '../src/index.css';
import { SongList } from './lib/spotify/components/SongList';
import spotify from './lib/spotify/client/client';
import { item } from './lib/spotify/types/client';

export default function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [popularSongs, setPopularSongs] = useState<item[]>([])
  const [isPlay, setIsPlay] = useState(false);
  const [selectedSong, setSelectedSong] = useState<item>();
  const audioRef = useRef<HTMLAudioElement>(null)

  useEffect(() => {
    fetchPopularSongs()
  },[])
  
  const fetchPopularSongs = async () => {
    setIsLoading(true)

    const result = await spotify.getPopularSongs()
    const popularSongs = result.tracks.items
    setPopularSongs(popularSongs)

    setIsLoading(false)
  }

  const handleSongSelected = async (song: item) => {
    setSelectedSong(song)

    if (audioRef.current) {
      audioRef.current.src =  song.track.preview_url;
      audioRef.current.play()
      setIsPlay(true) 
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-white">
      <main className="flex-1 p-8 mb-20">
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-4xl font-bold">Music App</h1>
        </header>
        <section>
          <h2 className="text-2xl font-semibold mb-5">Search for a song</h2>
          <SongList isLoading={isLoading} songs={popularSongs} onSongSelected={handleSongSelected } />
        </section>
      </main>
      <audio ref={audioRef}></audio>
    </div>
  );
}
