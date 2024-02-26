// Next Imports
import { redirect } from 'next/navigation'

// Third-party Imports
import { getServerSession } from 'next-auth'

// Lib Imports
import { authOptions } from '@/libs/auth'

export default async function Page({ params }) {
  // Vars
  const locale = params.lang ? `/${params.lang}` : ''

  // Default redirect URL
  let redirectURL = `${locale}/login`

  // Get the session from the server
  const session = await getServerSession(authOptions)

  // If session exists, get the redirect URL
  if (session) {
    redirectURL = `${locale}/dashboards/crm`
  }

  // Redirect user to respective home page
  redirect(redirectURL)
}
