

let app = new Vue ({
    el: "#app",
    data: {
        userImg: "./assets/img/avatar_2.jpg",
        myName: "Antonio",
        newMess:"",
        activeContacts: -1,
        visib: false,
        attiv: true,
        search: "",
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
    methods: {
        activeFunc(i){
            this.activeContacts = i;
            this.visib = true;
            console.log(this.activeContacts);
               
        },
        autoFunc(){
            
            let message = {text:"ok" ,date: dayjs().format("H:mm"),status: "received"};

            this.
            contacts[this.activeContacts].
            messages.
            push(message);
        },
        messFunc(){
            
        
            let message = {text:this.newMess ,date: dayjs().format("H:mm"),status: "sent"};

            this.
            contacts[this.activeContacts].
            messages.
            push(message);
            
            setTimeout(this.autoFunc, 1000);
            
            this.newMess="";
            
            
         },
         outFunc(){
             this.attiv = true;
         },
         seleFunc(){
            this.attiv = false;
         }
        // searchFunc(){
        //     this.contacts.forEach(element => {
        //         let {name,avatar,visible,messages} = element;
        //         //console.log(name);

        //         let nameSplit = name.split;
        //         //console.log(nameSplit);
        //         let searchSplit = this.search.split;
        //         //console.log(searchSplit);
        //         searchSplit.forEach(element => {
        //             if (element == nameSplit[0]){
        //            console.log(name);
        //             }
                    
        //         });    
        //         });
        //     }
        //     this.contacts.name.indexOf(search);
            
            
        

    }
})