import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  //videos 베열을 useQuery를 통해 가져온다. useQuery 첫번째 인자는 캐시키(키들을 연속으로 정의 가능), 두번째 인자는 어떻게 가져오느냐를 콜백함수로 전달해준다.
  // ['videos', keyword] 는 videos 키 안에 keyword별로 캐시가 되도록 한다.
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword), {
    staleTime: 1000 * 60 * 1,
  });
  return (
    <>
      <div>Videos {keyword ? `🔍${keyword}` : `🔥`}</div>
      {isLoading && <p>Loading...</p>}
      {error && <p>Something is wrong</p>}
      {videos && (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-2 gap-y-4">
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
