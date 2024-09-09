interface image {
  url: string,
  height: number,
  width: number
}

interface artists {
  name: string
}

export interface item{
  id: number,
  added_at: string,
  track: {
    album: {
      name: string
      images: image[]
      artists: artists[]
    }
  }
}

export interface PopularSongsResponse {
  tracks: {
    href: string,
    limit: number,
    next: string,
    offset: number,
    previous: string,
    total: number,
    items: item[]
  }
}
