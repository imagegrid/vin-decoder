<script lang="ts">
	let value = '';
	let vehicle: Vehicle;
	let history: History;

	import Loading from '$lib/Loading.svelte';
	import Results from '$lib/Results.svelte';
	import History from '$lib/History.svelte';
	import Input from '$lib/Input.svelte';
	import nhtsa from '$lib/nhtsa';

	async function handleChange(val: string) {
		if (val) {
			val = val.replace(/[\W_]*/g, '');
			value = val.toUpperCase();
			if (val.length === 17) {
				vehicle = null;
				vehicle = await nhtsa.getVehicle(val);
				console.log(vehicle);

				history.addHistory(val);
			} else {
				vehicle = null;
			}
		}
	}

	function clear() {
		value = '';
		vehicle = null;
	}

	$: if (value) {
		handleChange(value);
	}
</script>

<Input bind:value on:clear={clear} />

{#if vehicle}
	<Results {vehicle} />
{:else if value.length === 17}
	<Loading />
{/if}

<History bind:this={history} bind:value />

<style>
</style>
