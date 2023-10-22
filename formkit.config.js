import { id } from '@formkit/i18n'
import { generateClasses } from '@formkit/themes'
import { genesisIcons } from '@formkit/icons'
import myTailwindTheme from './tailwind-theme'

const config = {
  locales: { id },
  locale: 'id',
  icons:{
    ...genesisIcons
  },
  config: {
    classes: generateClasses(myTailwindTheme),
  }
}

export default config