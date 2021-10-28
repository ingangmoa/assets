'use strict';

const isTouchDevices = ('ontouchstart' in window) || (window.DocumentTouch && document instanceof window.DocumentTouch);
const body = document.querySelector('body');

const delay = time => {
    return new Promise(resolve => setTimeout(resolve, time));
};

const triggerEvent = (typeEvent, elem, bubbles = true) => {
    let event;

    if (typeEvent === 'click') {
        event = new MouseEvent('click', {
            bubbles,
            cancelable: true,
            view: window
        });
    }

    const canceled = !elem.dispatchEvent(event);
};

const themeStyle = (a, b, cssVariable = true) => {
    const theme = document.querySelector('html').getAttribute('data-theme');

    const getStyle = color => {
        return getComputedStyle(document.documentElement).getPropertyValue(color);
    };

    if (typeof b !== 'undefined' && b !== '') {
        if (theme === 'light') {
            return cssVariable ? getStyle(a) : a;
        }

        if (theme === 'dark') {
            return cssVariable ? getStyle(b) : b;
        }
    }

    if ((typeof b === 'undefined' || b === '') && !cssVariable) {
        return a;
    }

    return getStyle(a);
};

const imgLoaded = imagesLoaded(document.querySelector('body'));
const timeline = new Timeline();
const creditCard = new CreditCard();

$(function () {
    if (isTouchDevices) document.querySelector('html').classList.add('is-touch');

    imgLoaded.on('always', () => {
        setTimeout(() => {
            body.classList.add('load');
            chart();
            timeline.init();
            fitty.fitAll();
        }, 300);
    });

    window.addEventListener('resize', () => {
        Echart.resize();
        timeline.resize();
    });

    document.querySelectorAll('[data-simplebar]').forEach(el => {
        const simpleBar = new SimpleBar(el);

        simpleBar.recalculate();
    });

    document.querySelectorAll('.js-dropdown-select').forEach(el => {
        const element = el;

        new DropdownSelect(element);
    });

    document.querySelectorAll('.items-more__button').forEach(el => {
        const button = el;

        if (button) {
            button.addEventListener('click', () => button.focus());
        }
    });

    document.querySelectorAll('[data-toggle-tab]').forEach(el => {
        el.addEventListener('click', event => {
            const button = event.currentTarget;
            const elementId = button.getAttribute('data-toggle-tab');
            const target = document.querySelector(`[href="${elementId}"]`);
            const tab = document.querySelector(elementId);

            if (target) {
                triggerEvent('click', target);

                return;
            }

            tab.parentNode.children.forEach(tabElement => {
                if (tabElement.classList.contains('tab-pane')) {
                    tabElement.classList.remove('active');
                }
            });

            tab.classList.add('active');
        });
    });

    document.querySelectorAll('.js-input-search').forEach(el => {
        el.addEventListener('input', event => {
            const input = event.target;
            const dropdown = input.nextElementSibling;

            if (input.value.length > 0) {
                dropdown.classList.add('show');
            } else {
                dropdown.classList.remove('show');
            }
        });
    });

    new HeaderSearch();
    new ModuleSearch();
    new Sidebar();
    new SidebarPanel();
    new SwitcherGroup();
    new CheckboxToggle();
    new Tag();
    tooltip();
    form();
    formEditor();
    map();
    new Checkboxes();
    new ImageUpload();
    new ProfileUpload();
    new DatePicker();
    new CalendarInline('#calendarOne');
    new CalendarFull();
    new ProductCart();
    new Inbox();
    new Chat();
    new Todo();
    new Pagination();
    new InputSelects('.js-input-select');
    new InputTags('.js-input-tags');
    new Modal();
    new AddProduct();
    new OrderTabs();
    new ScrollTo();
    scrolls();
}());
