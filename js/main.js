import { fetchData } from "./modules/TheDataMiner.js";

(() => {
    Vue.component("cooper-car", {
        props:["cooper"],

        template: `<li>
                
                <p> {{ cooper.model }}</p>
                <a href="" class="removeCooper">
                <img :src="'images/' + cooper.img1" alt="cooper img">
                </a>
                
            </li>`,

            created: function(){
                console.log(`created ${this.cooper.model} cars`);
            }
    });

    let vue_vm = new Vue({
        // link Vue to an element in our HTML
        //el: "#app",

        data: {
            content: "Mini Cooper Models",
            anotherMessage: "Discover More About Mini!",
            removeAformat: true,
            showBioData: false,
            coopers: [],
            currentCooperData: {}

        },
         
        mounted: function (){
            console.log("vue is mounted!");
            //alert("error 404");

            fetchData("./includes/index.php")
            .then(data => {
                data.forEach(cooper => this.coopers.push(cooper));
            })
            .catch(err => error(err));
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
            removeCooper (target) {
                //remove this from the professors array
                console.log('clicked to view mini coopers data', target, target.name);

                this.showBioData = this.showBioData ? false : true;

                this.currentCooperData = target;
            }
        }
    }).$mount("#app"); // also connects Vue to your wrapper in HTML
})();