import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./List.module.scss";

interface Props {
  tarefas: ITarefa[];
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function List({ tarefas, selecionarTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item) => (
          <Item {...item} key={item.id} selecionarTarefa={selecionarTarefa} />
        ))}
      </ul>
    </aside>
  );
}
