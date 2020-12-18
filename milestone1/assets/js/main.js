let app = new Vue ({
    el: "#app",
    data: {
        contacts: [ 
            {
                name: "Roberto",
                avatar: "./assets/img/avatar_1.jpg",
                visible: true,
                messages: [
                    {
                        date: dayjs().format(),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format(),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Ennio",
                avatar: "./assets/img/avatar_2.jpg",
                visible: true,
                messages: [
                    {
                        date: dayjs().format(),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format(),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
               
            }  
        ]    

        
    }
})