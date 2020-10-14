import { container, selectors } from 'promptu'
import React, { forwardRef, PureComponent, Ref } from 'react'
import { connect } from 'react-redux'
import styled from 'styled-components'
import $$Background from '../assets/extensions@3x.png'
import { AppState } from '../store'
import { I18nState } from '../store/i18n'
import { media } from '../styles/theme'

interface StateProps {
  i18n: I18nState
}

interface DispatchProps {}

interface OwnProps {
  frame: number
  forwardedRef?: Ref<HTMLDivElement>
}

export interface Props extends StateProps, DispatchProps, OwnProps {}

export interface State {}

class Extensions extends PureComponent<Props, State> {
  render() {
    const { i18n, forwardedRef } = this.props
    const { ltxt, locale } = i18n

    return (
      <StyledRoot ref={forwardedRef}>
        <StyledBackground>
          <span>
            <h2 dangerouslySetInnerHTML={{ __html: ltxt('extensions-title') }}/>
            <h4 dangerouslySetInnerHTML={{ __html: ltxt('extensions-subtitle') }}/>
          </span>
        </StyledBackground>
        <StyledContent>
          {[...Array(2)].map((v, i) => (
            <article key={`copy-${i}`}>
              <h3 dangerouslySetInnerHTML={{ __html: ltxt(`extensions-feature-${i+1}-title`) }}/>
              <span dangerouslySetInnerHTML={{ __html: ltxt(`extensions-feature-${i+1}-description`) }}/>
            </article>
          ))}
        </StyledContent>
      </StyledRoot>
    )
  }
}

export default connect(
  (state: AppState): StateProps => ({
    i18n: state.i18n,
  }),
  undefined,
  undefined,
  { forwardRef: true },
)(forwardRef<HTMLDivElement, Props>((props, ref) => <Extensions {...props} forwardedRef={ref}/>))

const StyledContent = styled.div`
  ${container.fvtl}
  ${selectors.eblc} { margin: 0 0 3rem 0; }
  background: ${props => props.theme.colors.black};
  padding: 3rem 2rem;
  position: relative;
  width: 100%;

  > article {
    ${container.fvtl}
    color: ${props => props.theme.colors.white};
    max-width: 26rem;
    width: 100%;

    h3 {
      + * { margin-top: 1.2rem }
    }

    span {
      ${props => props.theme.fonts.p1}
    }
  }

  @media ${media.wide} {
    ${container.fhtc}
    ${selectors.eblc} { margin: 0 12% 0 0; }
    padding: 5rem 8%;

    > article {
      ${container.fvtc}
      width: 30%;
      max-width: 30rem;
      text-align: center;
    }
  }
`

const StyledBackground = styled.div`
  ${container.fvcc}
  background-color: ${props => props.theme.colors.red};
  background-image: url(${$$Background});
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: contain;
  height: 60vw;
  position: relative;
  width: 100%;

  > span {
    ${container.fvtc}
    color: ${props => props.theme.colors.white};
  }
`;

const StyledRoot = styled.div`
  ${container.fvtc}
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  width: 94%;

  > * { flex: 0 0 auto; }

  @media ${media.wide} {
    ${container.fvbc}
    width: 94%;
  }
`
