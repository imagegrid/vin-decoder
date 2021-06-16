<script lang="ts">
	let value = '';
	let vehicle: Vehicle;

	import { page } from '$app/stores';
	import nhtsa from '$lib/nhtsa';
	import Results from '$lib/Results.svelte';
	import { onMount } from 'svelte';

	async function handleChange() {
		if (value.length === 17) {
			vehicle = await nhtsa.getVehicle(value);
		} else {
			vehicle = null;
		}
	}
	function clearInput() {
		value = '';
		vehicle = null;
	}

	onMount(() => {
		if ($page.query.has('vin')) {
			value = $page.query.get('vin');
			handleChange();
		}
	});
</script>

<section class="input-section">
	<div class="input-container">
		<input
			class="input"
			type="text"
			bind:value
			on:input={handleChange}
			placeholder="Enter Vin Number"
		/>
		{#if value.length > 0}
			<a href={''} class="input-icon" on:click={clearInput}><img src="/x.svg" alt="Clear" /></a>
		{/if}
	</div>
	{#if value.length !== 17}
		<div class="input-count" class:warning={value.length > 17}>
			{value.length} / 17
		</div>
	{/if}
</section>

{#if vehicle}
	<Results {vehicle} />
{/if}

<style>
	@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
	@import url('../app.css');

	.input-section {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 10px;
	}
	.input-container {
		position: relative;
		width: 300px;
	}
	.input {
		font-size: 150%;
		padding: 12px;
		border-radius: 5px;
		border: 1px solid rgb(128, 128, 128);
	}
	.input-icon {
		display: block;
		background-color: rgb(212, 212, 212);
		padding: 4px;
		margin: 0;
		border-radius: 30px;
		width: 18px;
		height: 18px;
		right: 25px;
		top: 15px;
		position: absolute;
	}
	.input-icon:hover {
		background-color: rgb(177, 177, 177);
	}
	.input-icon img {
		width: 18px;
		height: 18px;
	}
	.input-count {
		margin-top: 10px;
		width: 100%;
	}
	.warning {
		font-weight: 700;
		color: red;
	}
</style>
