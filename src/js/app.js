/**
 * !(i)
 * The code is included in the final file only when a function is called, for example: FLSFunctions.spollers();
 * Or when the entire file is imported, for example: import "files/script.js";
 * Unused code does not end up in the final file.

 * If we want to add a module, we should uncomment it.
 */

import { SetVH } from './modules/SetVH.js';
import BaseHelpers from './helpers/BaseHelpers.js';
import { SmoothScroll } from './modules/SmoothScroll.js';
import HeaderSticky from './modules/HeaderSticky.js';
import HeaderBtnToggle from './modules/HeaderBtnToggle.js';
import ChatHeaderToggle from './modules/ChatHeaderToggle.js';
import PopupManager from './modules/PopupManager.js';
import SwiperSliderInit from './modules/SwiperSliderInit.js';
import FaqCard from './modules/FaqCard.js';
import FaqSettings from './modules/FaqSettings.js';
import ChatVersionToggle from './modules/ChatVersionToggle.js';
import { ChatHint } from './modules/ChatHint.js';
import { ChatHintButton } from './modules/ChatHintButton.js';
import TextareaAutoresizer from './modules/TextareaAutoresizer.js';
import { Tabs } from './modules/Tabs.js';
import TypeChatToggle from './modules/TypeChatToggle.js';
import ChatForm from './modules/ChatForm.js';

// set vh
SetVH();

// check webp/loaded page/device type
BaseHelpers.checkWebpSupport();
BaseHelpers.addTouchClass();
BaseHelpers.addLoadedClass();

document.addEventListener('DOMContentLoaded', function() {
  // nav active anchor
  const smoothScroll = new SmoothScroll('.js-anchor', '--scroll-offset', 650);

  // header sticky when scroll
  new HeaderSticky('.js-header-fixed');

  // header nav mobile toggle
  new HeaderBtnToggle();

  // chat header nav toggle
  new ChatHeaderToggle('.js-cosmo-header-toggle', '.cosmo-header');

  // modal init
  new PopupManager();

  // swiper sliders init
  new SwiperSliderInit(
    '.js-features-slider-init',
    '.js-features-slider-btn-prev',
    '.js-features-slider-btn-next',
    '.js-features-slider-pagination', 
    {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    }
  );

  new SwiperSliderInit(
    '.js-features-slider-mobile-init',
    '.js-features-slider-mobile-btn-prev',
    '.js-features-slider-mobile-btn-next',
    '.js-features-slider-mobile-pagination', 
    {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
    }
  );

  new SwiperSliderInit(
    '.js-reviews-slider-init',
    '.js-reviews-slider-btn-prev',
    '.js-reviews-slider-btn-next',
    '.js-reviews-slider-pagination', 
    {
      slidesPerView: 3,
      spaceBetween: 40,
      loop: true,
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        }
      }
    }
  );

  // faq card
  new FaqCard();

  // faq settings
  new FaqSettings();

  // chat version choose/toggle
  ChatVersionToggle();

  // chat hint
  new ChatHint('.js-chat-hint-wrapper', '.js-chat-hint', '.js-chat-hint-dropdown');
  new ChatHintButton('.js-chat-hint-btn', '.js-chat-textarea');

  // textarea autoresize
  new TextareaAutoresizer('.js-chat-textarea');

  // tabs
  new Tabs('.js-chat-tab-nav', '.js-chat-tab-content', 'is-active', 'is-show');

  // type chat toggle
  new TypeChatToggle();

  // type chat toggle
  new ChatForm();
});