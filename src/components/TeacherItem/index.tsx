import React from "react";

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";

const TeacherItem: React.FC = () => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars1.githubusercontent.com/u/62630564?s=460&u=0bd409e66cbd825a73e3e04424d878ead6eca9a9&v=4"
          alt="Beatriz Murase"
        />
        <div>
          <strong>Beatriz Murase</strong>
          <span>Química</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de química avançada.
        <br /> <br />
        Apaixonada por explodir coisas em laboratório e por mudar a vida das
        pessoas através de experiências. Mais de 200.000 pessoas já passaram por
        uma das minhas explosões.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="WhatsApp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
};

export default TeacherItem;
