

let app = new Vue ({
    el: "#app",
    data: {
        userImg: "./assets/img/avatar_2.jpg",
        myName: "Antonio",
        newMess:"",
        arrMess: [],
        activeContacts: -1,
        visib: false,
        answMess: "ok",
        arrAnsw:[],
        search: "",
        contacts: [ 
            {
                name: "Roberto",
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

        
    },
    methods: {
        activeFunc(i){
            this.activeContacts = i;
            this.visib = true;
            console.log(this.activeContacts);
            // let act = this.contacts[i];
            // this.activeContacts.splice(0,1,act); 
            // this.arrMess.splice(0,5);
            // this.arrAnsw.splice(0,5);        
        },
        autoFunc(){
            
            let message = {text:"ok" ,date: dayjs().format("H:mm"),status: "received"};

            this.
            contacts[this.activeContacts].
            messages.
            push(message);
        },
        messFunc(){
            
            // let prova = this.contacts[this.activeContacts].messages;
            // console.log(prova);
            let message = {text:this.newMess ,date: dayjs().format("H:mm"),status: "sent"};

            this.
            contacts[this.activeContacts].
            messages.
            push(message);
            // console.log(this.contacts[0].messages[2].newText);

            
            // let prova = this.activeContacts[0].messages;
           

            // prova.splice(2,0,{newText:this.newMess ,date: dayjs().format("H:mm"),status: "sent"});
            // console.log(this.activeContacts[0].messages[2].newText);
            
            setTimeout(this.autoFunc, 1000);
            // this.arrMess.push(this.newMess)
            // console.log(this.arrMess);
            
         },
        // searchFunc(){
        //     this.contacts.name.indexOf(search);
            
            
        

    }
})