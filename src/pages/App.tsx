import { useState } from "react";
import Cronometro from "../components/Cronometro";
import Form from "../components/Form";
import List from "../components/List";
import style from './App.module.scss';
import { ITarefa } from "../types/tarefa";

function App() {
    const [tarefas, setTarefas] = useState<ITarefa[]>([])
    const [selecionado, setSelecionado] = useState<ITarefa>();

  function selecionarTarefa(tarefaSelecionada: ITarefa) {
    setSelecionado(tarefaSelecionada);
    setTarefas(tarefasAntigas => 
      tarefasAntigas.map(tarefa => ({
        ...tarefa,
        selecionado: tarefa.id === tarefaSelecionada.id ? true : false
      }))
    );
  }
  return (
    <div className={style.AppStyle}>
      <Form setTarefas={setTarefas} />
      <List selecionarTarefa={selecionarTarefa} tarefas={tarefas} />
      <Cronometro />
    </div>
  );
}

export default App;
