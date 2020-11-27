export default{
        name: "TheCooperCar",
        props:["cooper"],
        data: function(){
            return {
                myModel: this.cooper.model,
                myPrice: this.cooper.price,
                myDesk: this.cooper.description,
                //program: "IDP" make your own data message
                myFeat: this.cooper.features
            }
        },

        template: 
        `<li @click="logClicked">
            <p> {{ cooper.model }} </p>
            <img class="showCooper" :src="'images/' + cooper.img1" alt='cooper.model + " img"'>
               <a href="" class="removeCooper">
               
                </a> 
                
        </li>`,

            created: function(){
                console.log(`created ${this.cooper.model} cars`);
            },

            methods:{
                logClicked(){
                    console.log(`fired from inside ${this.cooper.model} the component!`);
                }
                
            }
            
   
}
