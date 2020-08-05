import React, { useState, useCallback, FormEvent } from "react";
import PageHeader from "../../components/PageHeader";

import "./styles.css";
import TeacherItem, { TeacherProps } from "../../components/TeacherItem";
import Input from "../../components/Input";
import Select from "../../components/Select";
import api from "../../services/api";

function TeacherList() {
  const [subject, setSubject] = useState("");
  const [weekday, setWeekday] = useState("");
  const [time, setTime] = useState("");

  const [teachers, setTeachers] = useState([]);

  const handleSearchTeachers = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();

      const response = await api.get("classes", {
        params: {
          subject,
          week_day: weekday,
          time,
        },
      });

      setTeachers(response.data);
    },
    [subject, time, weekday]
  );

  return (
    <div id="page-teacher-list" className="container">
      <PageHeader title="Estes são os proffys disponíveis.">
        <form id="search-teachers" onSubmit={handleSearchTeachers}>
          <Select
            name="subject"
            label="Matéria"
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
            }}
            options={[
              { value: "Artes", label: "Artes" },
              { value: "Biologia", label: "Biologia" },
              { value: "Física", label: "Física" },
              { value: "Geografia", label: "Geografia" },
              { value: "História", label: "História" },
              { value: "Matemática", label: "Matemática" },
              { value: "Gramática", label: "Gramática" },
              { value: "Química", label: "Química" },
              { value: "Sociologia", label: "Sociologia" },
              { value: "Filosofia", label: "Filosofia" },
              { value: "Literatura", label: "Literatura" },
              { value: "Redação", label: "Redação" },
              { value: "Educação Física", label: "Educação Físicas" },
            ]}
          />
          <Select
            name="week_day"
            label="Dia da semana"
            value={weekday}
            onChange={(e) => {
              setWeekday(e.target.value);
            }}
            options={[
              { value: "0", label: "Domingo" },
              { value: "1", label: "Segunda-feira" },
              { value: "2", label: "Terça-feira" },
              { value: "3", label: "Quarta-feira" },
              { value: "4", label: "Quinta-feira" },
              { value: "5", label: "Sexta-feira" },
              { value: "6", label: "Sábado" },
            ]}
          />
          <Input
            name="time"
            label="Hora"
            type="time"
            value={time}
            onChange={(e) => {
              setTime(e.target.value);
            }}
          />

          <button type="submit">Buscar</button>
        </form>
      </PageHeader>

      <main>
        {teachers.map((teacher: TeacherProps) => {
          return <TeacherItem key={teacher.id} teacher={teacher} />;
        })}
      </main>
    </div>
  );
}

export default TeacherList;
