import { useEffect, useRef } from 'react'
import Chart from 'chart.js/auto'
import ChartDataLabels from 'chartjs-plugin-datalabels'

export default function Donut() {

  const ref = useRef()

  const clasificasion = {
    comun: 1,
    moderado: 2,
    escaso: 3,
  }

  const gemas = [
    { nombre: "diamante", cantidad: 8 , categoria: clasificasion.escaso },
    { nombre: "rubi", cantidad: 10 , categoria: clasificasion.escaso },
    { nombre: "zafiro", cantidad: 15 , categoria: clasificasion.moderado },
    { nombre: "esmeralda", cantidad: 13 , categoria: clasificasion.moderado },
    { nombre: "amatista", cantidad: 17 , categoria: clasificasion.comun }
  ];
  
  let porcentajes = {
    diamante: 0,
    rubi: 0,
    zafiro: 0,
    esmeralda: 0,
    amatista: 0,
  };
  
  let cantidadTotal = 0;
  for (let i = 0; i < gemas.length; i++) {
    cantidadTotal += gemas[i].cantidad;
  }
  
  const nombresGemas = gemas.map(gema => gema.nombre);
    
  gemas.map(gema => {
    porcentajes[gema.nombre] = ((gema.cantidad / cantidadTotal * 100).toFixed(1));
  })
  
  console.log(nombresGemas)
  console.log(porcentajes)
  

  useEffect(() => {
    new Chart(
      ref.current,
      {
        type: "doughnut",
        plugins: [ChartDataLabels],
        data: {
          labels: nombresGemas,
          datasets: [{
            label: "Gemas",
            data: Object.values(porcentajes),
            backgroundColor: ['#00eeff','#ff0000','#0054c2', '#009e20', '#9e00b3']
          }]
        },
        options: {
          aspectRatio: 2,
          plugins: {
            datalabels: {
              color: "#0e1310",
              font: {
                size: 18
              }
            },
            title: {
              display: true,
              text: "Gráfica Donut",
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
