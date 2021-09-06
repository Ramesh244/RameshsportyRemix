import {Component} from 'react'
import Player from '../Player'
import LoaderView from '../LoaderView'

import './index.css'

class GenreAlbumPlaylist extends Component {
  state = {
    musicList: [],
    displayInfo: {},
    isLoading: true,
  }

  componentDidMount() {
    this.getCategoryPlaylist()
  }

  getAccessToken = () => {
    const token = localStorage.getItem('pa_token', '')
    return token
  }

  sessionTimedOut = () => {
    const {history} = this.props
    localStorage.removeItem('pa_token')

    history.replace('/login')
  }

  getCategoryPlaylist = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const token = this.getAccessToken()

    const genreAlbumPlaylistApiUrl = `https://api.spotify.com/v1/playlists/${id}/tracks`

    const genreAlbumPlaylistOptions = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }

    const response = await fetch(
      genreAlbumPlaylistApiUrl,
      genreAlbumPlaylistOptions,
    )

    if (response.ok === true) {
      const data = await response.json()

      const updatedPlaylistInfo = {
        collaborative: data.collaborative,
        description: data.description,
        externalUrls: data.external_urls,
        href: data.href,
        id: data.id,
        images: data.images,
        name: data.name,
        owner: data.owner,
        primaryColor: data.primary_color,
        public: data.public,
        snapshotId: data.snapshot_id,
        type: data.type,
        uri: data.uri,
      }

      const updatedTracksData = data.items.map(item => ({
        album: item.track.album,
        artists: item.track.artists,
        availableMarkets: item.track.available_markets,
        discNumber: item.track.disc_number,
        durationMs: item.track.duration_ms,
        episode: item.track.episode,
        explicit: item.track.explicit,
        externalIds: item.track.external_ids,
        externalUrls: item.track.external_urls,
        href: item.track.href,
        id: item.track.id,
        isLocal: item.track.is_local,
        name: item.track.name,
        popularity: item.track.popularity,
        previewUrl: item.track.preview_url,
        track: item.track.track,
        trackNumber: item.track.track_number,
        type: item.track.type,
        uri: item.track.uri,
      }))

      this.setState({
        musicList: updatedTracksData,
        displayInfo: updatedPlaylistInfo,
        isLoading: false,
      })
    } else {
      this.sessionTimedOut()
    }
  }

  render() {
    const {isLoading, displayInfo, musicList} = this.state

    return (
      <div>
        {isLoading ? (
          <LoaderView />
        ) : (
          <Player
            displayInfo={displayInfo}
            musicList={musicList}
            section="Genre Category"
          />
        )}
      </div>
    )
  }
}

export default GenreAlbumPlaylist
