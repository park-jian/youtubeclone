import { createContext, useContext } from "react";
import YoutubeClient from "../api/youtubeClient";
import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";

//컨텍스트 생성
export const YoutubeApiContext = createContext(); //실제 데이터

//인스턴스 생성
//const client = new FakeYoutubeClient(); //mockdata
const client = new YoutubeClient(); //실제 데이터
const youtube = new Youtube(client);
export function YoutubeApiProvider({ children }) {
  return (
    //Provider안의 어떤 자식 컴포넌트에서도 useYoutubeApi 통해 이 value에 접근할 수 있다.
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}

export function useYoutubeApi() {
  return useContext(YoutubeApiContext);
}
