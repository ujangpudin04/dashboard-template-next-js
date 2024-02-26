// Next Imports
import Link from 'next/link'
import { useParams } from 'next/navigation'

// Third-party Imports
import { useKBar } from 'kbar'
import classnames from 'classnames'

const noResultData = [
  {
    label: 'Analytics',
    href: '/dashboards/analytics',
    icon: 'ri-bar-chart-line'
  },
  {
    label: 'User Profile',
    href: '/pages/user-profile',
    icon: 'ri-user-3-line'
  },
  {
    label: 'CRM',
    href: '/dashboards/crm',
    icon: 'ri-pie-chart-2-line'
  }
]

const NoResult = props => {
  // Props
  const { query } = props

  // Hooks
  const { query: kbarQuery } = useKBar()
  const { lang: locale } = useParams()

  return (
    <div className='flex items-center justify-center grow flex-wrap plb-14 pli-16 overflow-y-auto overflow-x-hidden'>
      <div className='flex flex-col items-center'>
        <i className='ri-file-forbid-line text-[64px] mbe-2.5' />
        <p className='text-lg font-medium leading-[1.55556] mbe-11'>{`No result for "${query}"`}</p>
        <p className='text-[15px] leading-[1.4667] mbe-4 text-textDisabled'>Try searching for</p>
        <ul className='flex flex-col gap-4'>
          {noResultData.map((item, index) => (
            <li key={index} className='flex items-center'>
              <Link
                href={`/${locale}/${item.href}`}
                className='flex items-center gap-2 hover:text-primary focus-visible:text-primary focus-visible:outline-0'
                onClick={kbarQuery.toggle}
              >
                <i className={classnames(item.icon, 'text-xl')} />
                <p className='text-[15px] leading-[1.4667] truncate'>{item.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default NoResult
