import { questions } from "../App";

const Result = (props) => {
  const answerWord =
    props.correct === 1
      ? "ответ"
      : props.correct === 2 || props.correct === 3
      ? "ответа"
      : "ответов";

  return (
    <div className="result">
      {props.correct < 4 ? (
        <img
          src="https://avatars.mds.yandex.net/i?id=d40d039af70e2f5196af2e1b265ea3aaf30a92b1-8187583-images-thumbs&n=13"
          alt="sad smile"
        ></img>
      ) : (
        <img
          src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
          alt="winner"
        />
      )}
      <h2>
        Вы отгадали {props.correct} {answerWord} из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  );
};

export default Result;
