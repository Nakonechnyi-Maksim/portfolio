import { useRef, useState } from "react";
import "./App.css";

import ScrollBlock from "./scrollBlock";
import { ReactComponent as JavaScript } from "./image/js.svg";
import { ReactComponent as Html } from "./image/html.svg";
import { ReactComponent as Css } from "./image/css.svg";
import { ReactComponent as Git } from "./image/git.svg";
import { ReactComponent as React } from "./image/react.svg";
import { ReactComponent as Npm } from "./image/npm.svg";
import { ReactComponent as Telegram } from "./image/telegram.svg";
import { ReactComponent as GitHub } from "./image/github.svg";
import { ReactComponent as Gmail } from "./image/gmail.svg";
import { ReactComponent as Phone } from "./image/phone.svg";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [showTooltip, setShowTooltip] = useState(null);

  const aboutMe = useRef(null);
  const mySkills = useRef(null);
  const gitProj = useRef(null);
  const myContacts = useRef(null);

  function onMouseEnterHandler(target) {
    setShowTooltip(target);
  }

  function onMouseLeaveHandler() {
    setShowTooltip(null);
  }

  function modalActive() {
    if (!isActive) {
      setIsActive(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsActive(false);
      document.body.style.overflow = "";
    }
  }

  function ScrollToElem(elem) {
    const targets = {
      aboutMe: aboutMe.current,
      mySkills: mySkills.current,
      gitProj: gitProj.current,
      myContacts: myContacts.current,
    };
    const target = elem.target.getAttribute("data-value");
    const options = { behavior: "smooth", block: "center", inline: "center" };

    if (targets[target]) {
      targets[target].scrollIntoView(options);
    }
  }

  return (
    <div className="App">
      <header>
        <div>
          <ul>
            <li data-value="aboutMe" onClick={ScrollToElem}>
              Обо мне
            </li>
            <li data-value="mySkills" onClick={ScrollToElem}>
              Мой стек
            </li>
            <li data-value="gitProj" onClick={ScrollToElem}>
              Проекты
            </li>
            <li data-value="myContacts" onClick={ScrollToElem}>
              Мои контакты
            </li>
          </ul>
        </div>
      </header>
      <main>
        <ScrollBlock>
          <div ref={aboutMe} className="aboutMe">
            <div className="block">
              <h1>Обо мне</h1>
              <p>
                Привет, меня зовут Максим, и я фронтенд-разработчик с опытом в
                создании современных веб-приложений и интерактивных
                пользовательских интерфейсов. Моя страсть к веб-разработке
                началась несколько лет назад, и с тех пор я постоянно стремлюсь
                к совершенствованию своих навыков. Я специализируюсь в HTML, CSS
                и JavaScript, и у меня есть опыт работы с популярными
                фреймворками, такими как React. Я убежден, что веб-разработка -
                это постоянное обучение и адаптация к новым технологиям. Буду
                рад поделиться своими навыками и опытом с вами. Свяжитесь со
                мной, если я вас заинтересовал.
              </p>
            </div>
          </div>
        </ScrollBlock>
        <ScrollBlock>
          <div ref={mySkills} className="mySkills">
            <div className="block">
              <h1>Мой стек</h1>
              <ul>
                <li
                  onMouseEnter={() => onMouseEnterHandler(JavaScript)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <JavaScript />
                  <div
                    className={
                      showTooltip === JavaScript ? "tooltip active" : "tooltip"
                    }
                  >
                    JavaScript
                  </div>
                </li>
                <li
                  onMouseEnter={() => onMouseEnterHandler(Html)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Html />
                  <div
                    className={
                      showTooltip === Html ? "tooltip active" : "tooltip"
                    }
                  >
                    HTML
                  </div>
                </li>
                <li
                  onMouseEnter={() => onMouseEnterHandler(Css)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Css />
                  <div
                    className={
                      showTooltip === Css ? "tooltip active" : "tooltip"
                    }
                  >
                    CSS
                  </div>
                </li>
                <li
                  onMouseEnter={() => onMouseEnterHandler(Git)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Git />
                  <div
                    className={
                      showTooltip === Git ? "tooltip active" : "tooltip"
                    }
                  >
                    Git
                  </div>
                </li>
                <li
                  onMouseEnter={() => onMouseEnterHandler(React)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <React />
                  <div
                    className={
                      showTooltip === React ? "tooltip active" : "tooltip"
                    }
                  >
                    React
                  </div>
                </li>
                <li
                  onMouseEnter={() => onMouseEnterHandler(Npm)}
                  onMouseLeave={onMouseLeaveHandler}
                >
                  <Npm />
                  <div
                    className={
                      showTooltip === Npm ? "tooltip active" : "tooltip"
                    }
                  >
                    Npm
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ScrollBlock>
        <ScrollBlock>
          <div ref={gitProj} className="gitProj">
            <div className="block">
              <h1>Мои проекты</h1>
              <ul className="proj">
                <li>
                  <h1>
                    <a
                      href="https://nakonechnyi-maksim.github.io/pizza/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Пицца
                    </a>
                  </h1>
                  <p>Макет сайта пиццерии</p>
                </li>
                <li>
                  <h1>
                    <a
                      href="https://github.com/Nakonechnyi-Maksim/todo"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ToDo лист
                    </a>
                  </h1>
                  <p>Простой ToDo лист</p>
                </li>
                <li>
                  <h1>
                    <a
                      href="https://github.com/Nakonechnyi-Maksim/calculator"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Калькулятор
                    </a>
                  </h1>
                  <p>Калькулятор с базовыми математическими функциями</p>
                </li>
              </ul>
            </div>
          </div>
        </ScrollBlock>
        <ScrollBlock>
          <div ref={myContacts} className="myContacts">
            <div className="block">
              <h1>Мои контакты</h1>
              <ul>
                <li>
                  <a
                    href="https://t.me/kavo_i_wo"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <Telegram />
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/Nakonechnyi-Maksim"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <GitHub />
                  </a>
                </li>
                <li>
                  <a href="mailto:nakonechnyi1234567890@gmail.com">
                    <Gmail />
                  </a>
                </li>
                <li onClick={modalActive}>
                  <Phone />
                  <div className={isActive ? "modal active" : "modal"}>
                    <div
                      className="modal__content"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <span>
                        +79885927200 <br /> +79608663927
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </ScrollBlock>
      </main>
    </div>
  );
}

export default App;
