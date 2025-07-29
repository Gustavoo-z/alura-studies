import { ITarefa } from "../../types/tarefa";
import Item from "./Item";
import style from "./List.module.scss";

export default function List({ tarefas }: { tarefas: ITarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2> Estudos do dia </h2>
      <ul>
        {tarefas.map((item, index) => (
          <Item
            {...item}
            key={index}
          />
        ))}
      </ul>
    </aside>
  );
}
