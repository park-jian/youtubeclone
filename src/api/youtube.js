
export default class Youtube {
  constructor(apiClient) {
    this.apiClient = apiClient;
  }
  //class안의 멤버함수가 private이면 #을 붙인다. 
  //private함수이면 클래스 내부에서는 호출이 가능하지만 클래스 외부에서는 호출할 수 없다.
  //searchByKeyword : 키워드가 있다면, mostPopular : 키워드가 없다면 
  //search.json의 id가 객체로 되어 있다.
  async search(keyword) {
    return keyword ? this.#searchByKeyword(keyword) : this.#mostPopular();
  }
  //id에 해당하는 channel에 더 상세 정보를 가져오는 함수 (channel.json에서 정보를 가져옴)
  async channelImageURL(id) {
    return this.apiClient.channels({params: {part: 'snippet', id}})
    .then(res => res.data.items[0].snippet.thumbnails.default.url);
  }

  //연관된 동영상도 불러오기
  async relatedVideos(id) {
    return this.apiClient.search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        relatedToVideoId: id
      },
    })
    .then((res) => 
    res.data.items.map((item) => ({...item, id: item.id.videoId})));

  }
  async #searchByKeyword(keyword) {
    return this.apiClient
    .search({
      params: {
        part: 'snippet',
        maxResults: 25,
        type: 'video',
        q: keyword
      },
    })
    .then((res) => 
    res.data.items.map((item) => ({...item, id: item.id.videoId})));
  }

  async #mostPopular() {
    return this.apiClient
    .videos({
      params: {
        part: 'snippet',
        maxResults: 25,
        chart: 'mostPopular'
      },
    })
    .then((res) => res.data.items)
  }
}