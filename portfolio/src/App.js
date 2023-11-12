import { useRef, useState } from "react";
import "./App.css";
import img from "./image/Йа.png";
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

  const aboutMe = useRef(null);
  const mySkills = useRef(null);
  const gitProj = useRef(null);
  const myContacts = useRef(null);

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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
                tempora praesentium minima dolorum perferendis suscipit incidunt
                aperiam consequuntur exercitationem quisquam architecto dolores
                fugit, nesciunt voluptatem libero expedita earum non natus
                doloremque quas. Nisi obcaecati omnis magnam modi vitae optio
                eligendi, esse dolor vero recusandae eos, atque vel dolorum.
                Esse, sit?
              </p>
            </div>
            <div className="block">
              <img src={img} alt="Йа" />
            </div>
          </div>
        </ScrollBlock>
        <ScrollBlock>
          <div ref={mySkills} className="mySkills">
            <div className="block">
              <h1>Мой стек</h1>
              <ul>
                <li>
                  <JavaScript />
                </li>
                <li>
                  <Html />
                </li>
                <li>
                  <Css />
                </li>
                <li>
                  <Git />
                </li>
                <li>
                  <React />
                </li>
                <li>
                  <Npm />
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
                  <h1>Пицца</h1>
                  <p>
                    <a href="https://nakonechnyi-maksim.github.io/pizza/">
                      Макет сайта пиццерии
                    </a>
                  </p>
                </li>
                <li>
                  <h1>ToDo лист</h1>
                  <p>
                    <a href="https://github.com/Nakonechnyi-Maksim/todo">
                      Простой ToDo лист
                    </a>
                  </p>
                </li>
                <li>
                  <h1>Калькулятор</h1>
                  <p>
                    <a href="https://github.com/Nakonechnyi-Maksim/calculator">
                      Калькулятор с базовыми математическими функциями
                    </a>
                  </p>
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
