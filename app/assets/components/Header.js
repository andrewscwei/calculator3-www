// © Andrew Wei
'use strict';

import m, { dom, DirtyType } from 'meno';
import getRect from 'meno/lib/utils/getRect';
import anime from 'animejs';

const $ = dom.getChild;
const NAV_NODES = [`prologue`, `scientific`, `graphing`, `programmer`, `extensions`, `epilogue`];

class Header extends m.Element(`calc3-header`) {
  static get extends() { return `header`; }

  get activeNode() { return this.get(`activeNode`, () => (null)); }
  set activeNode(val) { this.set(`activeNode`, val); }

  get nodes() { return $(this, `nav-nodes`); }

  get responsiveness() {
    return {
      resize: 10.0,
      scroll: 10.0
    };
  }

  get defaults() {
    return {
      state: {
        value: `none`,
        attributed: true,
        dirtyType: DirtyType.STATE
      }
    };
  }

  init() {
    const anchors = this.querySelectorAll(`[href^='#']`);

    anchors.forEach(anchor => {
      anchor.addEventListener(`click`, e => {
        e.preventDefault();
        const href = dom.getAttribute(e.currentTarget, `href`);
        if (!href) return;

        const element = document.getElementById(href.replace(`#`, ``));
        if (!element) return;

        const rect = getRect(element);
        const y = rect.top - 30;

        const scroll = {
          y: window.pageYOffset
        };

        anime({
          targets: scroll,
          y: y,
          duration: 350,
          easing: `easeInOutCubic`,
          update: () => window.scroll(0, scroll.y)
        });
      });
    });
  }

  update(info) {
    this.updateLayout(info[DirtyType.POSITION] || info[DirtyType.SIZE]);
  }

  updateLayout(info) {
    if (!info) return;

    const viewport = info.conductorRect;
    const threshold = viewport.height * 0.25;

    this.data.state = (viewport.top > threshold) ? `visible` : `hidden`;

    if (viewport.top + viewport.height <= viewport.height) {
      if (this.activeNode) dom.setAttribute(this.activeNode, `data-state`, `inactive`);
      this.activeNode = null;
    }
    else {
      const n = NAV_NODES.length - 1;

      for (let i = n; i >= 0; i--) {
        const section = document.getElementById(NAV_NODES[i]);

        if (!section) continue;

        if (viewport.top >= getRect(section).top + 10) {
          if (this.activeNode) dom.setAttribute(this.activeNode, `data-state`, `inactive`);
          this.activeNode = this.nodes[i];
          if (this.activeNode) dom.setAttribute(this.activeNode, `data-state`, `active`);
          break;
        }
      }
    }
  }
}

m.register(Header);
