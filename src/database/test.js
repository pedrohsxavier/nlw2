const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    // Inserção de dados
    // proffy = {
    //     name: 'Pedro Xavier',
    //     avatar: 'https://avatars3.githubusercontent.com/u/48462107?s=460&u=755413ff8e41d31c7bf44796df7faf7ca72da87b&v=4',
    //     whatsapp: '999887766',
    //     bio: 'Um pequeno aprendiz do conhecimento.'
    // }
    
    proffyValue = {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "8999888777",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
    }

    classValue = {
        subject: 1,
        cost: "20"
        // proffy_id virá pelo banco de dados
    }

    classScheduleValues = [
        // class_id virá pelo banco de dados após o cadstro da class
        {
            weekday: 1,
            time_from: 720,
            time_to: 1220
        },
        {
            weekday: 0,
            time_from: 520,
            time_to: 1220
        }
    ]

    // await createProffy(db, {proffyValue, classValue, classScheduleValues})

    // Consulta dos dados no banco
    const selectedProffys = await db.all("SELECT * FROM proffys")
    
    const selectedClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    // console.log(selectedClassesAndProffys)

    const selectedClasseschedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = 1
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "520"
    `)

    // console.log(selectedClasseschedules)

})