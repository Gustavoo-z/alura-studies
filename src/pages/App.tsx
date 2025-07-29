import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import style from './App.module.scss';
import { ITarefa } from "../types/tarefa";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List tarefas={tarefas} />
      <Cronometro />
      <button onClick={() => setTarefas(t => [...t, { tarefa: "Teste", tempo: "00:01:00" }])}>
  Adicionar teste
</button>
    </div>
  );
}

export default App;
