import { Link } from "react-router-dom";

function Result({ title, color, icon, correctAnswerCount, questions }) {
  return (
    <div className="test-container result-container">
      <div className="home-content">
        <h1 className="home-title">
          <span>Tabriklayman savollar tugaDi</span>
          <span>Sizning balingiz...</span>
        </h1>
      </div>
      <div className="test-completed">
        <div className="test-completed-body">
          <div className="menu-item header-logo">
            <figure style={{ backgroundColor: color }}>
              <img src={`.${icon}`} className="icon-me"/>
            </figure>
            <span>{title}</span>
          </div>
          <div className="big-text">{correctAnswerCount}</div>
          <p>to'g'ri javob {questions}</p>
        </div>
        <Link className="btn" to="/">
           Qayta boshlash
        </Link>
      </div>
    </div>
  );
}

export default Result;