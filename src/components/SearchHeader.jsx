import { React, useEffect, useState } from "react";
import { BsList, BsYoutube, BsSearch } from "react-icons/bs";
import { Avatar, AvatarBadge, usePanGesture } from "@chakra-ui/react";
import { useNavigate, Link, useParams } from "react-router-dom";

function SearchHeader(props) {
  const { keyword } = useParams();
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //원하는 곳으로 이동하기 위해 navigate를 사용한다.
    navigate(`/videos/${text}`);
  };
  //키워드가 변경 될 때마다 함수를 수행해줘
  useEffect(() => setText(keyword || ""), [keyword]);
  return (
    <header className="w-full flex p-4 text-2xl border-b border-zinc-600 mb-4">
      <div>
        <Link to="/" className="flex items-center">
          <BsList />
          <BsYoutube className="text-4xl text-brand" />
          <h1 className="font-bold ml-2 text-3xl">Youtube</h1>
        </Link>
      </div>
      <form className="w-full flex justify-center" onSubmit={handleSubmit}>
        <input
          className="w-7/12 p-2 outline-none bg-black text-gray-50"
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="bg-zinc-600 px-4">
          <BsSearch />
        </button>
        {/* <Avatar
          id="img"
          name="Dan abrahmov"
          src="https://bit.ly/dan-abramov"
          alt="아바타 이미지"
        ></Avatar> */}
      </form>
    </header>
  );
}

export default SearchHeader;
