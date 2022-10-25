import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    author: "이정환",
    content: "하이 1",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 2,
    author: "신민철",
    content: "하이 2",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 3,
    author: "박서연",
    content: "하이 3",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 4,
    author: "김지환",
    content: "하이 4",
    emotion: 5,
    created_date: new Date().getTime(),
  },
  {
    id: 5,
    author: "도형림",
    content: "하이 5",
    emotion: 5,
    created_date: new Date().getTime(),
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
