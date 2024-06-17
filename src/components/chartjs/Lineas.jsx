import { useEffect, useRef } from 'react'
import { Chart } from 'chart.js/auto'


export default function Lineas() {
  const ref = useRef()
  const plantas2023 = [
    { nombre: "violeta", color: "morado" },
    { nombre: "cactus", color: "verde" },
    { nombre: "rosa", color: "rojo" },
    { nombre: "suculenta", color: "verde" },
    { nombre: "girasol", color: "rojo" },
    { nombre: "girasol", color: "verde" },
    { nombre: "girasol", color: "verde" },
    { nombre: "alcatraz", color: "blanco" },
  ]

  const plantas2024 = [
    { nombre: "violeta", color: "morado" },
    { nombre: "cactus", color: "verde" },
    { nombre: "rosa", color: "blanco" },
    { nombre: "rosa", color: "azul" },
    { nombre: "rosa", color: "gris" },
    { nombre: "suculenta", color: "verde" },
    { nombre: "suculenta", color: "azul" },
    { nombre: "girasol", color: "rojo" },
    { nombre: "girasol", color: "amarillo" },
    { nombre: "alcatraz", color: "blanco" },
  ]

  useEffect(() => {
    new Chart(
      ref.current,
      {
        type: 'line',
        data: {
          labels: plantas2023.map((val) => val["nombre"])
            .filter((val, i, self) => self.indexOf(val) == i),
          datasets: [
            {
              label: "Plantas 2023",
              data: plantas2023.map(val => val["nombre"])
                .reduce((val, i) => {
                  const count = val[i] || 0;
                  val[i] = count + 1;
                  return val
                }, {})
            },
            {
              label: "Plantas 2024",
              data: plantas2024.map(val => val["nombre"])
                .reduce((val, i) => {
                  const count = val[i] || 0;
                  val[i] = count + 1;
                  return val
                }, {})
            }
          ]
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: "Gráfica de Líneas",
              font: {
                size: 30
              }
            }
          }
        }
      }
    )
  }, [])

  return (
    <>
      <canvas ref={ref} className='mt-4'></canvas>
    </>
  )
}
