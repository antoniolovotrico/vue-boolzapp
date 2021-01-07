// Initialize Vue Istance
let app = new Vue ({
    el: "#app",
    data: {
        // insert in data image and name of my contact
        userImg: "./assets/img/avatar_2.jpg",
        myName: "Antonio",
        // insert in data new message plugged with v-model input message
        newMess:"",
        // add index called active contact to data to show active contac when clicked
        activeContacts: -1,
        // add data visib to show image of no contacts selected
        visib: false,
        // insert in data new message plugged with v-model input search
        search: "",
        // data list of my contacts
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
    updated() {
        this.$nextTick(() => this.scrollFunc());
    },
    methods: {
        //this function will show the chat box of contact clicked based on his index
        activeFunc:function(i)
        {
            this.activeContacts = i;
            this.visib = true;
            
            
        },
        //this function will auto answer ok when we send a message
        autoFunc:function()
        {       
            let message = {text:"ok" ,date: dayjs().format("H:mm"),status: "received"};
            this.
            filteredContacts[this.activeContacts].
            messages.
            push(message);
        },
        //this is the function to send message
        messFunc:function()
        {
            let message = {text:this.newMess ,date: dayjs().format("H:mm"),status: "sent"};
            this.
            filteredContacts[this.activeContacts].
            messages.
            push(message);
            setTimeout(this.autoFunc, 1000);
            this.newMess="";  
         },
         //  this is the function to automaticcaly scroll down to the last message
         scrollFunc:function()
         {
             var container = this.$el.querySelector("#chat_box");
             container.scrollTop = container.scrollHeight;    
         }
       
    },
    computed: {
        //this function will search and show only contacts with letters in common with our digits in search input
        filteredContacts:function()
        {
            var self=this;
            this.visib = false;
            return this.contacts.filter(function(cont){
                return cont.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;   
            });
        }
    }       
})