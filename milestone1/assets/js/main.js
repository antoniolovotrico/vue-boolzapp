// Initialize Vue Istance
let app = new Vue ({
    el: "#app",
    data: {
        // insert in data image and name of my contact
        userImg: "./assets/img/avatar_2.jpg",
        myName: "Antonio",
        contacts: [ 
            {
                name: "roberto",
                avatar: "./assets/img/avatar_1.jpg",
                
                visible: true,
                messages: [
                    {
                        date: dayjs().format("H:mm"),
                        text: "gnegne?",
                        status: "sent"
                    },
                    {
                        date: dayjs().format("H:mm"),
                        text: "yuppyyyy",
                        status: "received"
                    }
                ]
             
            },
            {
                name: "alfredo",
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
                name: "ennio",
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
                name: "marco",
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
                name: "paola",
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
                name: "francesco",
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
                name: "andrea",
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
                name: "marta",
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
    },
})