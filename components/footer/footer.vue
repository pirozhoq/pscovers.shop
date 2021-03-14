<template>
	<footer class="footer">
		<div class="wrap">
			<div class="footer_wrap">
				<div class="footer_block">
					<p class="footer_title">Наклейки Playstation</p>
					<ul class="footer_list">
						<li><a href="#">Playstation 5</a></li>
						<li><a href="#">Playstation 5 digital edition</a></li>
						<li><a href="#">Playstation 4</a></li>
						<li><a href="#">Playstation 4 pro</a></li>
						<li><a href="#">Playstation 4 slim</a></li>
					</ul>
				</div>
				<div class="footer_block"></div>
				<div class="footer_block"></div>
				<div class="footer_block"></div>
			</div>
		</div>
	</footer>
</template>

<script>
	export default {}
</script>

<style>
	.footer {
		padding: 30px 0;
		color: #ffffff;
		background: #012E89;
		box-shadow: 0 0 5px 0 #ccc;
	}
	.footer_wrap {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: flex-start;
		margin: 0 -10px;
	}
	.footer_block {
		width: calc((100% - 80px) / 4);
		margin: 0 10px 20px;
	}
	.footer_title {
		margin: 0 0 15px;
		font-size: 20px;
		font-weight: 700;
		line-height: 25px;
	}
	.footer_list {
		margin: 0;
		padding: 0;
		list-style: none;
	}
	.footer_list li {
		margin: 0 0 10px;
		font-size: 15px;
		line-height: 20px;
	}
	.footer_list a {
		text-decoration: none;
	}
	.footer_list a:hover {
		border-bottom: 1px solid;
	}
</style>
