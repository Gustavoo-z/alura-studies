import { ITarefa } from "../../../types/tarefa";
import style from "./Item.module.scss";

interface ItemProps extends ITarefa {
  selecionarTarefa: (tarefaSelecionada: ITarefa) => void;
}

export default function Item({
  tarefa,
  tempo,
  selecionado,
  completado,
  id,
  selecionarTarefa,
}: ItemProps) {
  return (
    <li
      className={`${style.item} ${selecionado ? style.itemSelecionado : ""} ${completado ? style.itemCompletado : ""}`}
      onClick={() =>
        !completado && selecionarTarefa({ tarefa, tempo, selecionado, completado, id })
      }
    >
      <h3>{tarefa}</h3>
      <span>{tempo}</span>
      {completado && <span className={style.concluido} aria-label="Tarefa Completada"></span>}
    </li>
  );
}
