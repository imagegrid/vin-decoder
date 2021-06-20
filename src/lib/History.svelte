<script lang="ts">
	import { onMount } from 'svelte';

	export let value;

	let history = [];

	export function addHistory(val: string) {
		history = history.filter((e) => e !== val);
		history = [val, ...history];
		localStorage.setItem('history', JSON.stringify(history));
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
	{#each history as vin}
		<ul>
			<li>
				<a
					href={''}
					on:click={() => {
						value = vin;
					}}
				>
					{vin}
				</a>
			</li>
		</ul>
	{/each}
	<a href={''} on:click={clearHistory}>Clear History</a>
</section>
