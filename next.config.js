// environment variables
const dotenv = require('dotenv')
dotenv.config({ path: './config/vars.env' })



// const withFonts = require('next-fonts')
// const withSass = require('@zeit/next-sass')
// const withCSS = require('@zeit/next-css')
// const withImages = require('next-images')
// const withVideos = require('next-videos')





const nextConfig = {
	// distDir: 'build',
	// reactStrictMode: true,
	// experimental: { eslint: true },
	// eslint: true
	// cssModules: true,

	// ignore build errors
	typescript: {
		ignoreBuildErrors: true
	}, 
	compiler: {
		styledComponents: true,
	},
	
	


	// env: {
	// 	REACT_APP_ABC:  process.env.REACT_APP_ABC,
	// 	REACT_APP_XYZ:  process.env.REACT_APP_XYZ,
	// },



	// redirects
	// rewrites: async () => [
	// 	{ source: '*', destination: '*' },
	// 	{ source: '*', destination: '*' },
	// 	{ source: '*', destination: '*' },
	// ],
}



module.exports = nextConfig