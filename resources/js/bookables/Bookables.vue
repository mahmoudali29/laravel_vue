<template>
	<div>
        <!--v-if  only for one item not for loop-->
        <div class="row mb-4" v-for="row in rows" :key="'row'+row">
            <div class="col d-flex align-items-stretch" v-for="(bookable ,column)  in bookablesInRow(row)" :key="'row' + row + column">
                <!-- <BookableListItem  :title="bookable.title" :description="bookable.description" :id="bookable.id" ></BookableListItem> -->

                <BookableListItem  v-bind="bookable" ></BookableListItem>
            </div>
             
            <div class="col" v-for = "p in placeholdersInRow(row)" :key="'placeholder' + row + p"></div>
        </div>
        <div v-if="loading">Data is Loading ... </div>
        <div v-else>
            
        </div>
		

       

	</div>
</template>

<script>
	import BookableListItem from "./BookableListItem" ;

	export default {
        components:{
    		BookableListItem,
    	},
        data(){
            return {
                bookables : null,
                loading  : false,
                columns : 3,
            };
        },
        computed : {
            rows(){
                return this.bookables == null ? 0 : Math.ceil(this.bookables.length/this.columns);
            }
        },
        methods : {
            bookablesInRow(row){
                return this.bookables.slice((row-1) *this.columns,row*this.columns)
            },
            placeholdersInRow(row){
                return this.columns - this.bookablesInRow(row).length;
            }
        },
        created(){
            // console.log(this.bookable1);
            // console.log(this.bookable2);
            this.loading  = true;

            
            const p = new Promise((resolve,reject)=>{
                console.log(resolve);
                console.log(reject);
                setTimeout(()=>resolve('hello'),3000);
            }).then((result) =>console.log("Sucess "+result))
            .catch((result) =>console.log("Error "+result));;
            console.log(p);

            const request = axios.get('/api/bookables').then(response => {
                // console.log(response);
                this.bookables = response.data.data;
                this.loading = false;
            });

            // setTimeout(()=>{
            //     this.bookables = 
            //     [
            //         {
            //             id : 1,
            //             title : "Cheap Villa",
            //             content:"A very cheap villa"
            //         },
            //         {
            //             id : 2,
            //             title : "Cheap Villa 2",
            //             content:"A very cheap villa 2"
            //         },
            //         {
            //             id : 2,
            //             title : "Cheap Villa 2",
            //             content:"A very cheap villa 2"
            //         },
            //         {
            //             id : 2,
            //             title : "Cheap Villa 2",
            //             content:"A very cheap villa 2"
            //         },
            //         {
            //             id : 2,
            //             title : "Cheap Villa 2",
            //             content:"A very cheap villa 2"
            //         },
            //         {
            //             id : 2,
            //             title : "Cheap Villa 2",
            //             content:"A very cheap villa 2"
            //         },
            //         {
            //             id : 2,
            //             title : "Cheap Villa 2",
            //             content:"A very cheap villa 2"
            //         },

            //     ];
            //     // this.bookable3 = {
            //     //     title : "Expensive Villa",
            //     //     content:"A very Expensive villa"
            //     // };
            //     this.loading = false;
            // },2000);

            // setTimeout(()=>{
            //     this.bookable1.title = "This will change";
            // },8000);

            // setTimeout(()=>{
            //     this.bookable3.title = "This will not  change";
            // },12000);
        },
    }
</script>