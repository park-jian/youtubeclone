import React from "react";
import { formatAgo } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const handleClick = (e) => {
    //정보를 전할때는 두번째 인자에 state를 통해서 전달한다. key, value 모두 video이기 때문에 하나만 써준다.
    navigate(`/videos/watch/${video.id}`, { state: { video } });
  };
  const isList = type === "list";
  return (
    <li className={isList ? "flex gap-1 m-2" : ""} onClick={handleClick}>
      <img
        className={isList ? "w-60 mr-2" : "w-full"}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="font-semibold my-2 line-clamp-2">{title}</p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
