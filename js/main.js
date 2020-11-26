(() => {
    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            message: "Hello from Vue!",
            anotherMessage: "more text, so simple! much winning",
            removeAformat: true,
            showBioData: false,

            profs: [
                { name: "Justin", role: "coordinator", nickname: "nitsuJ"},
                { name: "John", role: "prof", nickname: "super chill" },
                { name: "Joe", role: "prof", nickname: "Teddy Bear" }
                
            ]
        },
         
        mounted: function (){
            console.log("vue is mounted!");
            //alert("error 404");
            this.profs.push({name: "Jarrod", role: "supermodel prof", nickname:"Zoolander"})
        },

        updated: function() {
            console.log('Vue just updated a DOM');
        },

        methods: {
            logClicked() {
                console.log("clicked on a list item");
            },

            clickHeader() {
                console.log("clicked on the header");
            },
            removeProf(target) {
                //remove this from the professors array
                console.log('clicked to remove prof', target, target.name);

                this.showBioData = this.showBioData ? false : true
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();