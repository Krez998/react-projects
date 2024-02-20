import { questions } from "../App";

 const Game = (props) => {
  const percentage = Math.round((props.step / questions.length) * 100);

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{props.question.title}</h1>
      <ul>
        {props.question.variants.map((text, index) => (
          <li onClick={() => props.onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  );
  
}

export default Game;
