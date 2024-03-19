/* global gsap */

import '../css/global.css';
import { byId } from '../../lib/utils/selector-helpers';

const box = byId('box');
gsap.to(box, { x: 750, duration: 3 });
