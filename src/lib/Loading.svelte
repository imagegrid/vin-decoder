<div class="loading" />

<style>
	.loading {
		display: inline-block;
		width: 40px;
		height: 40px;
		border: 3px solid rgba(230, 230, 230, 1);
		border-radius: 50%;
		border-top-color: #777;
		animation: spin 1s linear infinite;
		-webkit-animation: spin 1s linear infinite;
	}

	@keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
	@-webkit-keyframes spin {
		to {
			-webkit-transform: rotate(360deg);
		}
	}
</style>
