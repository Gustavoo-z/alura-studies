import { useState } from "react";
import Button from "../Button";
import style from "./Form.module.scss";

export default function Form() {
  const [tempo, setTempo] = useState("00:00:00");
  const [tarefa, setTarefa] = useState("");

  function adicionarTarefa() {
    console.log({
      tarefa,
      tempo,
    })
    setTarefa("");
    setTempo("00:00:00");
  }

  return (
    <form className={style.novaTarefa} onSubmit={(e) => {
      e.preventDefault();
      adicionarTarefa();
    }}>
      <div className={style.inputContainer}>
        <label htmlFor="tarefa">Adicione um novo estudo</label>
        <input
          type="text"
          name="tarefa"
          id="tarefa"
          value={tarefa}
          onChange={(e) => setTarefa(e.target.value)}
          placeholder="O que você quer estudar?"
          required
        />
      </div>
      <div className={style.inputContainer}>
        <label htmlFor="tempo">Tempo</label>
        <input
          type="time"
          name="tempo"
          id="tempo"
          step="1"
          value={tempo}
          onChange={(e) => setTempo(e.target.value)}
          min="00:00:00"
          max="01:30:00"
          required
        />
      </div>
      <Button>Adicionar</Button>
    </form>
  );
}
