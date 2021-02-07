<template>
	<div>
		<h6 class="text-uppercase text-secondary font-wight-bolder">Check Availability</h6>
		<div class="form-row">
			<div class="form-group col-md-6">
				<label for="from">From</label>
				<input type="text" v-model="from" name="from" @keyup.enter="check" class="form-control form-control-sm" placeholder="Start date">
			</div>

			<div class="form-group col-md-6">
				<label for="to">To</label>
				<input type="text" v-model="to" name="to" @keyup.enter="check" class="form-control form-control-sm" placeholder="End date">
			</div>
			<button class="btn-secondary btn-block" @click="check" :disabled="loading">Check!</button>
		</div>
	</div>
</template>

<style scoped>
	label{
		font-size: 0.7rem;
		text-transform: uppercase;
		color: grey;
		font-weight: bold;
	}
</style>

<script>
	export default{
		data(){
			return {
				from : null,
				to : null,
				loading : false,
				status : null,
				errors : null,
			};
		},
		methods:{
			check(){
				this.loading = true;
				this.errors = null;
				axios.get(
					`/api/bookables/${this.$route.params.id}/availability?from=${this.from}&to=${this.to}`
				).then(response=>{
					this.status = response.status;  //200
					 
				}).catch(error=>{
					if(422 === error.response.status){
						this.errors = error.response.data.errors;
						console.log(errors);
					}
					this.status = error.response.status;
				}).then(()=>(this.loading = false));
			}
		},
	}
</script>