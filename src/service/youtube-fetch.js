class YoutubeFetch {
  constructor(key){
    this.key = key;
    this.getRequestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
  }

  async mostPopular() {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=24&regionCode=KR&key=${this.key}`, this.getRequestOptions);
    const data = await response.json();
    return data.items;
  }

  async search(query) {
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&type=video&q=${query}&key=${this.key}`, this.getRequestOptions);
    const data = await response.json();
    return data.items.map(item => ({ ...item, id: item.id.videoId }));
  };
}

export default YoutubeFetch;