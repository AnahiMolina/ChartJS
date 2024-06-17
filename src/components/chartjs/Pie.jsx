import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function Pie() {

  const ref = useRef()

  const dificultades = {
    facil: 1,
    intermedia: 2,
    dificil: 3,
    complicado: 4,
  }

  const idiomas = [
    { nombre: "Español", dificultad: dificultades.facil },
    { nombre: "Inglés", dificultad: dificultades.intermedia },
    { nombre: "Francés", dificultad: dificultades.intermedia },
    { nombre: "Alemán", dificultad: dificultades.dificil },
    { nombre: "Mandarín", dificultad: dificultades.complicado },
    { nombre: "Ruso", dificultad: dificultades.dificil },
    { nombre: "Japones", dificultad: dificultades.complicado },
    { nombre: "Hindi", dificultad: dificultades.complicado },
    { nombre: "Italiano", dificultad: dificultades.facil }
  ]

  let cantidades = {
    facil: 0,
    intermedia: 0,
    dificil: 0,
    complicado: 0,
  }

  for (let index = 0; index < idiomas.length; index++) {
    switch (idiomas[index].dificultad) {
      case dificultades.facil:
        cantidades.facil = cantidades.facil + 1
        break;
      case dificultades.intermedia:
        cantidades.intermedia = cantidades.intermedia + 1
        break
      case dificultades.dificil:
        cantidades.dificil = cantidades.dificil + 1
        break
      case dificultades.complicado:
        cantidades.complicado = cantidades.complicado + 1
        break
      default:
        break;
    }

  }

  let porcentajes = {
    facil: 0,
    intermedia: 0,
    dificil: 0,
    complicado: 0,
  }


  porcentajes.facil = Number((cantidades.facil / idiomas.length * 100).toFixed(2))
  porcentajes.intermedia = Number((cantidades.intermedia / idiomas.length * 100).toFixed(2))
  porcentajes.dificil = Number((cantidades.dificil / idiomas.length * 100).toFixed(2))
  porcentajes.complicado = Number((cantidades.complicado / idiomas.length * 100).toFixed(2))

  console.log(porcentajes)

  useEffect(() => {
    new Chart(
      ref.current,
      {
        type: "pie",
        plugins: [ChartDataLabels],
        data: {
          labels: Object.keys(dificultades),
          datasets: [{
            label: "Idiomas",
            data: Object.values(porcentajes),
            backgroundColor: ['#0e8967', '#0b674d', '#074434', '#04221a']
          }]
        },
        options: {
          aspectRatio: 2,
          plugins: {
            datalabels: {
              color: "#000000",
              font: {
                size: 18
              }
            },
            title: {
              display: true,
              text: "Gráfica Pie",
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
