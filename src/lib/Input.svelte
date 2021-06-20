<script>
	import { createEventDispatcher } from 'svelte';
	export let value;

	const dispatch = createEventDispatcher();

	function clearInput() {
		value = '';
		dispatch('clear');
	}
</script>

<section class="input-section">
	<div class="input-container">
		<input class="input" type="text" bind:value placeholder="Enter Vin Number" />
		<a href={''} class="input-icon" on:click={clearInput} class:hide={!value}>
			<img src="/x.svg" alt="Clear" />
		</a>
	</div>
	{#if value.length !== 17}
		<div class="input-count" class:warning={value.length > 17}>
			{value.length} / 17
		</div>
	{/if}
</section>

<style>
	.input-section {
		display: flex;
		justify-content: center;
		flex-wrap: wrap;
		margin: 10px;
	}
	.input-container {
		display: flex;
		align-items: center;
		position: relative;
	}
	.input {
		font-size: 130%;
		width: 250px;
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
		right: 10px;
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
		width: 300px;
		margin-top: 10px;
		width: 100%;
	}
	.warning {
		font-weight: 700;
		color: red;
	}
	.hide {
		display: none;
	}
</style>
