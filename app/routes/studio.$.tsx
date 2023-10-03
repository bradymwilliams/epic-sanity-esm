import { ClientOnly } from 'remix-utils'
import { Studio } from 'sanity'
import config from '#sanity.config.ts'

export default function StudioPage() {
	return (
		<ClientOnly>
			{() => (
				<Studio
					config={config}
					// To enable guests view-only access to your Studio,
					// uncomment this line!
					// unstable_noAuthBoundary
				/>
			)}
		</ClientOnly>
	)
}
