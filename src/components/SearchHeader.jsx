import { React, useState } from "react";
import { BsList, BsYoutube, BsSearch } from "react-icons/bs";
import { Avatar, AvatarBadge } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SearchHeader() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //원하는 곳으로 이동하기 위해 navigate를 사용한다.
    navigate(`/videos/${text}`);
  };
  return (
    <header>
      <div>
        <BsList />
        <BsYoutube />
        <h1>Youtube</h1>
      </div>
      <form onSubmit={{ handleSubmit }}>
        <input
          type="text"
          placeholder="search..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button>
          <BsSearch />
        </button>

        <Avatar
          id="img"
          name="Dan abrahmov"
          src="https://bit.ly/dan-abramov"
          alt="아바타 이미지"
        ></Avatar>
      </form>
    </header>
  );
}
