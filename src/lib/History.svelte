<script lang="ts">
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	let history: HistoryItem[] = [];

	export function addHistory(item: HistoryItem) {
		history = history.filter((e) => e.Vin !== item.Vin);
		history = [item, ...history];
		localStorage.setItem('history', JSON.stringify(history));
	}
	function formatVin(value: string): string {
		let vin = value.replace(/[\W_]*/g, '');
		return vin.toUpperCase();
	}
	function clearHistory() {
		history = [];
		localStorage.removeItem('history');
	}
	onMount(() => {
		const item = localStorage.getItem('history') || '[]';
		history = JSON.parse(item);
	});
</script>

<section class="last-viewed">
	<h2>Vin Search History</h2>
	{#each history as item}
		<ul>
			<li>
				{item.ModelYear}
				{item.Make}
				{item.Model} -
				<a href={''} on:click={() => dispatch('clicked', item.Vin)}>{formatVin(item.Vin)}</a>
			</li>
		</ul>
	{/each}
	<a href={''} on:click={clearHistory}>Clear History</a>
</section>
