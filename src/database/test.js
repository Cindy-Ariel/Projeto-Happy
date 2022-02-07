const Database = require("./db");
const saveOrphanage = require("./saveOrphanage");

Database.then(async db => {
    //inserir dados na tabela

    await saveOrphanage(db, {
        lat: "-19.9182312",
        lng: "-44.000836",
        name:"Lar das gorotas",
        about:"Presta assistencia a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidadr social.",
        whatsapp: "2555564646",
        images:[

           "https://images.unsplash.com/photo-1599663253408-ddd8dadac635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjQzMDU0ODEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",

           "https://images.unsplash.com/photo-1599663253408-ddd8dadac635?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8aWR8fHx8fHwxNjQzMDU0ODEy&ixlib=rb-1.2.1&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciencia para dar. ",
        opening_hours: "Horário de visita Das 18 até 8h",
        open_on_weekends: "2"

        })

    //consultar dados da tabela.
    const selectedOrphanages = await db.all("SELECT * FROM orphanages");
    console.log(selectedOrphanages);

    // //consultar somente 1 orphanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "2"')
    console.log(orphanage)


    // //deletar dado da tabela
    //console.log(await db.run("DELETE FROM orphanages"))
   
});

