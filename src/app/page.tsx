"use client"
import FiltrarStatus from "@/components/aulas/FiltrarStatus";
import ListaAulas from "@/components/aulas/ListaAulas";
import Estatistica from "@/components/shared/Estatistica";
import Titulo from "@/components/shared/Titulo";
import useAulas from "@/data/hook/useAulas";
import Duracao from "@/data/utils/Duracao";
import { IconClock, IconVideo } from "@tabler/icons-react";


export default function Home() {
  const { aulas, duracaoTotal, filtrarAulas } = useAulas()

  return (
    <div className="flex flex-col gap-10 p-10 h-screen">
      <div className="flex items-center justify-between">
        <Titulo
          icone={IconVideo}
          principal="Lista de Aulas"
          secundario="Aqui você encontra todas as aulas disponíveis"
        />
        <FiltrarStatus filtroMudou={filtrarAulas} />
      </div>
      <div className="flex flex-col gap-10">
        <div className="grid grid-cols-3 gap-5">
          <Estatistica
              icone={IconClock}
              valor={Duracao.formatar(duracaoTotal)}
              iconeCor="text-green-500"
              texto="Duração Total"
          />
        </div>
        <ListaAulas aulas={aulas}/>
      </div>
    </div>
    
  );
}
