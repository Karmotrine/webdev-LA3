<script>
	import { urlLoad } from "./stores";
</script>

<div>
	<p>TEST (url should appear here when you click on a lick on search): {$urlLoad}</p>
	<slot/>
</div>