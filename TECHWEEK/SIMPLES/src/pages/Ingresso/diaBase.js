const diaum = [
        {
            hora: "19:00",
            nome: "Google Cloud Palsetra"
        },
        {
            hora: "20:00",
            nome: "Google Cloud Palsetra"
        },
        {
            hora: "22:00",
            nome: "Google Cloud Palestra"
        }
    
]

const diadois = [
        {
            hora: "20:00",
            nome: "Google Cloud Palsetra"
        },
    {
            hora: "21:00",
            nome: "Google Cloud Palsetra"
        },
         {
            hora: "21:30",
            nome: "Google Cloud Palsetra"
        },
     {
            hora: "21:45",
            nome: "Google Cloud Palsetra"
        }
]

const diatres = [
           {
                hora: "19:00",
                nome: "Google Cloud Palsetra"
            }
        ]

const diaquatro = [
            {
                 hora: "19:00",
                 nome: "Google Cloud Palsetra"
             }
]

export function transferDayData(dia) {
    switch(dia) {

        case "17/08/2024":
            return diaum
            break

        case "18/08/2024":
            return diadois
            break

        case "19/08/2024":
            return diatres
            break


        case "20/08/2024":
            return diaquatro
            break

        default:
            return "Não foi encontrada nenhuma informação."
    }
}