import { align, animations, container, media, selectors } from 'promptu';
import React, { PropsWithChildren, ReactElement } from 'react';
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { Action, bindActionCreators, Dispatch } from 'redux';
import styled from 'styled-components';
import { AppState } from '../store';
import { I18nState } from '../store/i18n';
import { getLocalizedPath } from '../utils/i18n';
import Monogram from './Monogram';

interface StateProps {
  i18n: I18nState;
}

interface DispatchProps {}

type OwnProps = PropsWithChildren<{
  isCollapsed: boolean;
}>;

interface Props extends StateProps, DispatchProps, OwnProps {}

function Header({ i18n, isCollapsed }: Props): ReactElement {
  const { ltxt, locale } = i18n;

  return (
    <StyledRoot isCollapsed={isCollapsed}>
      <StyledBacking isVisible={isCollapsed}/>
      <Link to={getLocalizedPath('/', locale)}>
        <StyledMonogram/>
        <h1>{ltxt('app-name')}</h1>
      </Link>
      <StyledNavigation>
        <NavLink to='/#scientific'>{ltxt('scientific-title')}</NavLink>
        <NavLink to='/#graphing'>{ltxt('graphing-title')}</NavLink>
        <NavLink to='/#programmer'>{ltxt('programmer-title')}</NavLink>
      </StyledNavigation>
    </StyledRoot>
  );
}

export default connect(
  (state: AppState): StateProps => ({
    i18n: state.i18n,
  }),
  (dispatch: Dispatch<Action>): DispatchProps => bindActionCreators({

  }, dispatch),
)(Header);

const StyledBacking = styled.div<{ isVisible: boolean }>`
  ${align.tl}
  ${animations.transition(['opacity', 'transform'], 200)}
  background: ${props => props.theme.colors.black};
  height: 100%;
  opacity: ${props => props.isVisible ? 1 : 0};
  transform: ${props => props.isVisible ? 'translate3d(0, 0, 0)' : 'translate3d(0, -100%, 0)'};
  width: 100%;
`;

const StyledMonogram = styled(Monogram)`
  margin-right: 1.6rem;
`;

const StyledNavigation = styled.nav`
  ${container.fhcr}
  position: relative;

  @media ${media.lttablet} {
    display: none;
  }

  ${selectors.eblc} {
    margin-right: 2rem;
  }

  a {
    ${props => props.theme.fonts.n1}
    ${animations.transition('opacity', 100)}
    color: ${props => props.theme.colors.white};
    opacity: 0.6;

    ${selectors.hwot} {
      opacity: 1;
    }
  }
`;

const StyledRoot = styled.header<{ isCollapsed: boolean }>`
  ${container.fhcs}
  ${align.ftl}
  ${animations.transition('opacity', 0.2)}
  height: ${props => props.isCollapsed ? '7rem' : '10rem'};
  padding: 3rem 5%;
  width: 100%;
  z-index: 1000;

  @media ${media.gtmobile} {
    height: ${props => props.isCollapsed ? '7rem' : '10rem'};
  }

  > a {
    ${container.fhcl}
    height: 100%;
    color: ${props => props.theme.colors.white};
    position: relative;

    h1 {
      ${props => props.theme.fonts.t1}
    }

    ${selectors.hwot} {
      opacity: 0.8;
    }
  }
`;
