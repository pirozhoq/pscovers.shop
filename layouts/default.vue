<template>
	<div>
		<Header />
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
	import { Header } from '~/components/header/header';
	import { Footer } from '~/components/footer/footer';

	export default {
		components: {
			Header,
			Footer
		}
	}
</script>

<style>
	@font-face {
		font-family: 'Play';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp0y2knT.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	@font-face {
		font-family: 'Play';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpQy2knT.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	@font-face {
		font-family: 'Play';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCp4y2knT.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	@font-face {
		font-family: 'Play';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/play/v12/6ae84K2oVqwItm4TCpAy2g.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459WRhyzbi.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459W1hyzbi.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wdhyzbi.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 400;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gTD_u50.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3g3D_u50.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gfD_u50.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 500;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_ZpC3gnD_g.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gTD_u50.woff2) format('woff2');
		unicode-range: U+0460-052F, U+1C80-1C88, U+20B4, U+2DE0-2DFF, U+A640-A69F, U+FE2E-FE2F;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3g3D_u50.woff2) format('woff2');
		unicode-range: U+0400-045F, U+0490-0491, U+04B0-04B1, U+2116;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gfD_u50.woff2) format('woff2');
		unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
	}
	@font-face {
		font-family: 'Montserrat';
		font-style: normal;
		font-weight: 700;
		font-display: swap;
		src: url(https://fonts.gstatic.com/s/montserrat/v15/JTURjIg1_i6t8kCHKm45_dJE3gnD_g.woff2) format('woff2');
		unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
	}

	html {
		font-family: 'Montserrat';
		font-size: 16px;
		font-style: normal;
		line-height: 1;
		word-spacing: 1px;
		-ms-text-size-adjust: 100%;
		-webkit-text-size-adjust: 100%;
		-moz-osx-font-smoothing: grayscale;
		-webkit-font-smoothing: antialiased;
		box-sizing: border-box;
		background: #ffffff;
	}

	*,
	*::before,
	*::after {
		box-sizing: border-box;
		outline: none;
	}

	body {
		box-sizing: content-box;
		margin: 0;
		background: #fafafa;
	}

	a {
		color: inherit;
		border: none;
	}
	input, textarea, option, select, button {
		border: none;
		font-family: inherit;
		font-size: inherit;
		line-height: inherit;
	}
	button {
		user-select: none;
		cursor: pointer;
	}

	img {
		box-sizing: content-box;
		max-width: 100%;
		height: auto;
		max-height: 100%;
	}

	.wrap {
		max-width: 1000px;
		margin: 0 auto;
		padding: 0 15px;
	}
	.wrap::before {
		position: absolute;
		top: 0;
		bottom: 0;
		right: 100%;
		z-index: -1;
		width: 100px;
		background: linear-gradient(to left, rgba(17,125,16,1) 0%, rgba(17,125,16,0.738) 19%, rgba(17,125,16,0.541) 34%, rgba(17,125,16,0.382) 47%, rgba(17,125,16,0.278) 56.5%, rgba(17,125,16,0.194) 65%, rgba(17,125,16,0.126) 73%, rgba(17,125,16,0.075) 80.2%, rgba(17,125,16,0.042) 86.1%, rgba(17,125,16,0.021) 91%, rgba(17,125,16,0.008) 95.2%, rgba(17,125,16,0.002) 98.2%, transparent 100%);
		background: linear-gradient(to left, rgba(1,46,137,1) 0%, rgba(1,46,137,0.738) 19%, rgba(1,46,137,0.541) 34%, rgba(1,46,137,0.382) 47%, rgba(1,46,137,0.278) 56.5%, rgba(1,46,137,0.194) 65%, rgba(1,46,137,0.126) 73%, rgba(1,46,137,0.075) 80.2%, rgba(1,46,137,0.042) 86.1%, rgba(1,46,137,0.021) 91%, rgba(1,46,137,0.008) 95.2%, rgba(1,46,137,0.002) 98.2%, transparent 100%);
	}
	.wrap::after {
		position: absolute;
		top: 0;
		bottom: 0;
		left: 100%;
		z-index: -1;
		width: 100px;
		background: linear-gradient(to right, rgba(17,125,16,1) 0%, rgba(17,125,16,0.738) 19%, rgba(17,125,16,0.541) 34%, rgba(17,125,16,0.382) 47%, rgba(17,125,16,0.278) 56.5%, rgba(17,125,16,0.194) 65%, rgba(17,125,16,0.126) 73%, rgba(17,125,16,0.075) 80.2%, rgba(17,125,16,0.042) 86.1%, rgba(17,125,16,0.021) 91%, rgba(17,125,16,0.008) 95.2%, rgba(17,125,16,0.002) 98.2%, transparent 100%);
		background: linear-gradient(to right, rgba(1,46,137,1) 0%, rgba(1,46,137,0.738) 19%, rgba(1,46,137,0.541) 34%, rgba(1,46,137,0.382) 47%, rgba(1,46,137,0.278) 56.5%, rgba(1,46,137,0.194) 65%, rgba(1,46,137,0.126) 73%, rgba(1,46,137,0.075) 80.2%, rgba(1,46,137,0.042) 86.1%, rgba(1,46,137,0.021) 91%, rgba(1,46,137,0.008) 95.2%, rgba(1,46,137,0.002) 98.2%, transparent 100%);
	}

	.title {
		margin: 0 0 20px;
		font-family: 'Play';
		font-size: 30px;
		font-weight: 700;
		line-height: 35px;
	}

	.image {
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.image img {
		flex: 0 0 auto;
		display: block;
		max-height: 100%;
	}

	.main {
		padding: 20px 0;
	}
</style>
