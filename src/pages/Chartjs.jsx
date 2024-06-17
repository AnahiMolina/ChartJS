import Contenido from "../layouts/Contenido"
import Barras from "../components/chartjs/Barras"
import { useParams } from "react-router-dom"
import Lineas from "../components/chartjs/Lineas"
import Pie from "../components/chartjs/Pie"
import Donut from "../components/chartjs/Donut"


export default function Chartjs() {
  const { id } = useParams()
  const tipos = {
    barras: <Barras />,
    lineas: <Lineas />,
    pie: <Pie />,
    donut: <Donut />
  }
  return (
    <Contenido>
      {tipos[id] || <h1>No encontrado</h1>}
    </Contenido>
  )
}
