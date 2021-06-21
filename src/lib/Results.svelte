<script lang="ts">
	export let vehicle: Vehicle;

	const {
		ModelYear,
		Make,
		Model,
		Trim,
		Doors,
		BodyClass,
		DisplacementL,
		FuelTypePrimary,
		EngineCylinders,
		EngineConfiguration,
		DriveType,
		PlantCity,
		PlantCountry,
		ErrorCode
	} = vehicle;
</script>

{#if ErrorCode !== '0'}
	<p>Vin not found</p>
{/if}
<section>
	{#if Make}
		<img src={`logos/${Make.toLowerCase()}-logo.png`} alt={Make} />
	{/if}
	<h1>{ModelYear} {Make} {Model} {Trim}</h1>
	<p>{Doors} {BodyClass}</p>
</section>

{#if DisplacementL || EngineCylinders}
	<section>
		<h2>Engine</h2>
		<p>
			{parseFloat(DisplacementL) ? parseFloat(DisplacementL).toFixed(2) : DisplacementL} Liter
			{EngineConfiguration === 'V-Shaped' ? 'V' : `${EngineConfiguration} `}{EngineCylinders}
		</p>
		<p>{FuelTypePrimary}</p>
	</section>
{/if}

{#if DriveType}
	<section>
		<h2>DriveTrain</h2>
		<p>{DriveType}</p>
	</section>
{/if}

{#if PlantCountry}
	<section class="plant">
		<p>Built in {PlantCity}, {PlantCountry}</p>
	</section>
{/if}

<style>
	h1,
	h2 {
		margin: 0.25em;
	}
	h1 {
		font-size: 32px;
		line-height: 1.2;
	}
	h2 {
		font-size: 25px;
		line-height: 1.2;
	}
	p {
		margin: 0;
	}
	.plant p {
		font-size: 25px;
		margin: 40px 0;
		font-weight: 700;
	}
</style>
