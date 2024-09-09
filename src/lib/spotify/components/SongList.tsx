import { faSpider } from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { item } from '../types/client'

interface SongListProps {
  isLoading: boolean
  songs: item[]
}

export const SongList = ({isLoading, songs }: SongListProps) => {
  if (isLoading) {
    return (
      <div className="inset-0 flex justify-center items-center">
        <FontAwesomeIcon icon={faSpider} spin size="3x"></FontAwesomeIcon>
      </div>
    )
  }

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
      {
        songs.map((song)=>
        {
          return (
            <div key={song.id} className="flex-none cursor-pointer">
              <img src={song.track.album.images[0].url} alt="thumbnail" className="mb-2 rounded"/>
              <h3 className="text-lg font-semibold">{song.track.album.name}</h3>
                <p className="text-gray-400">{`By ${song.track.album.artists[0].name}`}</p>
            </div>
          )
        })
      }
    </div>
  )
}