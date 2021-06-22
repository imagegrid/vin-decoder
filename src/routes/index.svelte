<script lang="ts">
	let value = '';
	let vehicle: Vehicle;
	let history: History;

	import Loading from '$lib/Loading.svelte';
	import Results from '$lib/Results.svelte';
	import History from '$lib/History.svelte';
	import Input from '$lib/Input.svelte';
	import nhtsa from '$lib/nhtsa';

	async function getVehicle(vin: string) {
		vehicle = null;
		if (vin) {
			if (vin.length === 17) {
				vehicle = await nhtsa.getVehicle(vin);
				addHistory(vehicle);
			}
		}
	}
	function addHistory(vehicle: Vehicle) {
		if (vehicle && vehicle.ErrorCode === '0') {
			history.addHistory({
				ModelYear: vehicle.ModelYear,
				Make: vehicle.Make,
				Model: vehicle.Model,
				Vin: vehicle.VIN
			});
		}
	}
	function historyClicked(e) {
		value = e.detail;
	}

	function clear() {
		value = '';
		vehicle = null;
	}

	$: getVehicle(value);
</script>

<Input bind:value on:clear={clear} />

{#if vehicle}
	<Results {vehicle} />
{:else if value.length === 17}
	<Loading />
{/if}

<History bind:this={history} on:clicked={historyClicked} />
