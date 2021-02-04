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
			<button class="btn-secondary btn-block" @click="check">Check!</button>
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
			};
		},
		methods:{
			check(){
				alert('here we are');
			}
		},
	}
</script>