let app = new Vue ({
    el: "#app",
    data: {
        userImg: "./assets/img/avatar_2.jpg",
        myName: "Antonio",
        contacts: [ 
            {
                name: "Roberto",
                avatar: "./assets/img/avatar_1.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Alfredo",
                avatar: "./assets/img/avatar_3.jpg",
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
               
            },
            {
                name: "Ennio",
                avatar: "./assets/img/avatar_4.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Marco",
                avatar: "./assets/img/avatar_5.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Paola",
                avatar: "./assets/img/avatar_6.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Francesco",
                avatar: "./assets/img/avatar_7.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Andrea",
                avatar: "./assets/img/avatar_8.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "Marta",
                avatar: "./assets/img/avatar_9.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "How do you feel carring the world on your shoulder?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "I feel like always mate",
                        status: "received"
                    }
                ]
             
            },  
        ]    

        
    }
})