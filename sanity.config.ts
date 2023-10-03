/**
 * import { dashboardTool } from '#node_modules/@sanity/dashboard/lib/index.esm.js'
 * ================================================
 * This import results in the following error:
SyntaxError: The requested module '@sanity/dashboard' does not provide an export named 'dashboardTool'
/Users/bw/dev/sandbox/sanity-test/sanity.config.ts:2
*/

/**
 * import { dashboardTool } from '@sanity/dashboard'
 * ================================================
 * This import results in the following error:
TypeError: styled is not a function
TypeError: styled is not a function
*/
import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from '#sanity/schemas/index.ts'

const config = defineConfig({
	name: 'default',
	title: 'Epic Test',

	projectId: '6h1mv88x',
	dataset: 'development',
	basePath: '/studio',

	plugins: [
		deskTool(),
		visionTool(),
		dashboardTool({
			widgets: [],
		}),
	],

	schema: {
		types: schemaTypes,
	},
})

export default config
