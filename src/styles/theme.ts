import * as promptu from 'promptu'
import { css } from 'styled-components'

export const colors = {
  background: '#111',
  purple: '#7d24e2',
  blue: '#00a5e3',
  green: '#7d24e2',
  red: '#ea5252',
  white: '#fff',
  black: '#000',
  darkGrey: '#666',
}

export const layout = {
  wide: promptu.media.gtw(__APP_CONFIG__.wideLayoutMinWidth),
}

export const fonts = {
  t1: css`
    font-family: ProximaNova, sans-serif;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 140%;
    text-transform: uppercase;

    @media ${layout.wide} {
      font-size: 3rem;
    }
  `,
  t2: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .3rem;
    line-height: 140%;
    text-transform: uppercase;
  `,
  t3: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .2rem;
    line-height: 140%;
    text-transform: uppercase;
  `,
  h1: css`
    font-family: ProximaNova, sans-serif;
    font-size: 2.2rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: .1rem;
    line-height: 120%;
    text-transform: none;

    strong, b { font-weight: 700; }
    em, i { font-style: italic; }

    @media ${promptu.media.gtmobile} {
      font-size: 2.4rem;
    }

    @media ${promptu.media.gttablet} {
      font-size: 4rem;
    }
  `,
  h2: css`
    font-family: ProximaNova, sans-serif;
    font-size: 3rem;
    font-weight: 700;
    line-height: 120%;
    letter-spacing: .2rem;
    text-transform: uppercase;

    @media ${layout.wide} {
      font-size: 3.4rem;
    }
  `,
  h3: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .2rem;
    line-height: 120%;
    text-transform: uppercase;

    + * { margin-top: 1.2rem }
  `,
  h4: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 700;
    letter-spacing: .1rem;
    line-height: 130%;
    text-transform: uppercase;

    strong, b { font-weight: 700; }
    em, i { font-style: italic; }
  `,
  p1: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 130%;
    text-transform: none;

    strong, b { font-weight: 700; }
    em, i { font-style: italic; }
  `,
  n1: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: normal;
    line-height: 120%;
    text-transform: none;

    strong, b { font-weight: 700; }
    em, i { font-style: italic; }
  `,
  f1: css`
    font-family: ProximaNova, sans-serif;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    letter-spacing: .04rem;
    line-height: 120%;
    text-transform: none;
  `,
}
