import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string
    logo: string

    colors: {
      primary: string
      secundary: string

      background: string
      li: string
      text: string
      inputColor: string
      inputPlaceholder: string
      strongSchedule: string
      appointmentBackground: string
      dayPicker: string
      dayAvailableBackground: string
      dayAvailableBackgroundHover: string
    }
  }
}
