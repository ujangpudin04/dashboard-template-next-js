'use client'

// MUI Imports
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import FormControlLabel from '@mui/material/FormControlLabel'

// Hook Imports
import { useSettings } from '@core/hooks/useSettings'

const SettingsContentWidth = () => {
  // Hooks
  const { settings, updateSettings } = useSettings()

  const handleChange = (field, value) => {
    updateSettings({
      [field]: value
    })
  }

  return (
    <main className='p-4 flex-grow'>
      <div className='flex flex-col'>
        <p>Content:</p>
        <RadioGroup
          row
          value={settings.contentWidth}
          onChange={event => handleChange('contentWidth', event.target.value)}
        >
          <FormControlLabel value='compact' control={<Radio />} label='Compact' />
          <FormControlLabel value='wide' control={<Radio />} label='Wide' />
        </RadioGroup>
        <p>Value: {settings.contentWidth}</p>
      </div>
    </main>
  )
}

export default SettingsContentWidth
