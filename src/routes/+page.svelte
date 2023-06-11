<script>
	import { urlLoad } from "./stores";
</script>

<div>
	<p>TEST (url should appear here when you click on a lick on search)</p>
	{#if $urlLoad}
	<p>VIDEO {$urlLoad.url}assd</p>
		<iframe
			title={$urlLoad.title}
			width="420"
			height="315"
			src={$urlLoad.url}
		/>
		
	{/if}
	<slot />
</div>
