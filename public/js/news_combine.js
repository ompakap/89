(function (e) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], e)
    } else if (typeof exports !== 'undefined') {
        module.exports = e(require('jquery'))
    } else {
        e(jQuery)
    }
}(function (e) {
    'use strict';
    var i = window.Slick || {};
    i = (function () {
        var t = 0;

        function i(i, o) {
            var s = this,
                n;
            s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: e(i),
                appendDots: e(i),
                arrows: !0,
                asNavFor: null,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3000,
                centerMode: !1,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function (e, i) {
                    return '<button type="button" data-role="none" role="button" aria-required="false" tabindex="0">' + (i + 1) + '</button>'
                },
                dots: !1,
                dotsClass: 'slick-dots',
                draggable: !0,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: !1,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: !0,
                swipeToSlide: !1,
                touchMove: !0,
                touchThreshold: 5,
                useCSS: !0,
                variableWidth: !1,
                vertical: !1,
                verticalSwiping: !1,
                waitForAnimate: !0,
                zIndex: 1000
            };
            s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null,
                $list: null,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            };
            e.extend(s, s.initials);
            s.activeBreakpoint = null;
            s.animType = null;
            s.animProp = null;
            s.breakpoints = [];
            s.breakpointSettings = [];
            s.cssTransitions = !1;
            s.hidden = 'hidden';
            s.paused = !1;
            s.positionProp = null;
            s.respondTo = null;
            s.rowCount = 1;
            s.shouldClick = !0;
            s.$slider = e(i);
            s.$slidesCache = null;
            s.transformType = null;
            s.transitionType = null;
            s.visibilityChange = 'visibilitychange';
            s.windowWidth = 0;
            s.windowTimer = null;
            n = e(i).data('slick') || {};
            s.options = e.extend({}, s.defaults, n, o);
            s.currentSlide = s.options.initialSlide;
            s.originalSettings = s.options;
            if (typeof document.mozHidden !== 'undefined') {
                s.hidden = 'mozHidden';
                s.visibilityChange = 'mozvisibilitychange'
            } else if (typeof document.webkitHidden !== 'undefined') {
                s.hidden = 'webkitHidden';
                s.visibilityChange = 'webkitvisibilitychange'
            };
            s.autoPlay = e.proxy(s.autoPlay, s);
            s.autoPlayClear = e.proxy(s.autoPlayClear, s);
            s.changeSlide = e.proxy(s.changeSlide, s);
            s.clickHandler = e.proxy(s.clickHandler, s);
            s.selectHandler = e.proxy(s.selectHandler, s);
            s.setPosition = e.proxy(s.setPosition, s);
            s.swipeHandler = e.proxy(s.swipeHandler, s);
            s.dragHandler = e.proxy(s.dragHandler, s);
            s.keyHandler = e.proxy(s.keyHandler, s);
            s.autoPlayIterator = e.proxy(s.autoPlayIterator, s);
            s.instanceUid = t++;
            s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;
            s.registerBreakpoints();
            s.init(!0);
            s.checkResponsive(!0)
        };
        return i
    }());
    i.prototype.addSlide = i.prototype.slickAdd = function (i, t, o) {
        var s = this;
        if (typeof (t) === 'boolean') {
            o = t;
            t = null
        } else if (t < 0 || (t >= s.slideCount)) {
            return !1
        };
        s.unload();
        if (typeof (t) === 'number') {
            if (t === 0 && s.$slides.length === 0) {
                e(i).appendTo(s.$slideTrack)
            } else if (o) {
                e(i).insertBefore(s.$slides.eq(t))
            } else {
                e(i).insertAfter(s.$slides.eq(t))
            }
        } else {
            if (o === !0) {
                e(i).prependTo(s.$slideTrack)
            } else {
                e(i).appendTo(s.$slideTrack)
            }
        };
        s.$slides = s.$slideTrack.children(this.options.slide);
        s.$slideTrack.children(this.options.slide).detach();
        s.$slideTrack.append(s.$slides);
        s.$slides.each(function (i, t) {
            e(t).attr('data-slick-index', i)
        });
        s.$slidesCache = s.$slides;
        s.reinit()
    };
    i.prototype.animateHeight = function () {
        var e = this;
        if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.animate({
                height: i
            }, e.options.speed)
        }
    };
    i.prototype.animateSlide = function (i, t) {
        var o = {},
            s = this;
        s.animateHeight();
        if (s.options.rtl === !0 && s.options.vertical === !1) {
            i = -i
        };
        if (s.transformsEnabled === !1) {
            if (s.options.vertical === !1) {
                s.$slideTrack.animate({
                    left: i
                }, s.options.speed, s.options.easing, t)
            } else {
                s.$slideTrack.animate({
                    top: i
                }, s.options.speed, s.options.easing, t)
            }
        } else {
            if (s.cssTransitions === !1) {
                if (s.options.rtl === !0) {
                    s.currentLeft = -(s.currentLeft)
                };
                e({
                    animStart: s.currentLeft
                }).animate({
                    animStart: i
                }, {
                    duration: s.options.speed,
                    easing: s.options.easing,
                    step: function (e) {
                        e = Math.ceil(e);
                        if (s.options.vertical === !1) {
                            o[s.animType] = 'translate(' + e + 'px, 0px)';
                            s.$slideTrack.css(o)
                        } else {
                            o[s.animType] = 'translate(0px,' + e + 'px)';
                            s.$slideTrack.css(o)
                        }
                    },
                    complete: function () {
                        if (t) {
                            t.call()
                        }
                    }
                })
            } else {
                s.applyTransition();
                i = Math.ceil(i);
                if (s.options.vertical === !1) {
                    o[s.animType] = 'translate3d(' + i + 'px, 0px, 0px)'
                } else {
                    o[s.animType] = 'translate3d(0px,' + i + 'px, 0px)'
                };
                s.$slideTrack.css(o);
                if (t) {
                    setTimeout(function () {
                        s.disableTransition();
                        t.call()
                    }, s.options.speed)
                }
            }
        }
    };
    i.prototype.asNavFor = function (i) {
        var s = this,
            t = s.options.asNavFor;
        if (t && t !== null) {
            t = e(t).not(s.$slider)
        };
        if (t !== null && typeof t === 'object') {
            t.each(function () {
                var t = e(this).slick('getSlick');
                if (!t.unslicked) {
                    t.slideHandler(i, !0)
                }
            })
        }
    };
    i.prototype.applyTransition = function (e) {
        var i = this,
            t = {};
        if (i.options.fade === !1) {
            t[i.transitionType] = i.transformType + ' ' + i.options.speed + 'ms ' + i.options.cssEase
        } else {
            t[i.transitionType] = 'opacity ' + i.options.speed + 'ms ' + i.options.cssEase
        };
        if (i.options.fade === !1) {
            i.$slideTrack.css(t)
        } else {
            i.$slides.eq(e).css(t)
        }
    };
    i.prototype.autoPlay = function () {
        var e = this;
        if (e.autoPlayTimer) {
            clearInterval(e.autoPlayTimer)
        };
        if (e.slideCount > e.options.slidesToShow && e.paused !== !0) {
            e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)
        }
    };
    i.prototype.autoPlayClear = function () {
        var e = this;
        if (e.autoPlayTimer) {
            clearInterval(e.autoPlayTimer)
        }
    };
    i.prototype.autoPlayIterator = function () {
        var e = this;
        if (e.options.infinite === !1) {
            if (e.direction === 1) {
                if ((e.currentSlide + 1) === e.slideCount - 1) {
                    e.direction = 0
                };
                e.slideHandler(e.currentSlide + e.options.slidesToScroll)
            } else {
                if ((e.currentSlide - 1 === 0)) {
                    e.direction = 1
                };
                e.slideHandler(e.currentSlide - e.options.slidesToScroll)
            }
        } else {
            e.slideHandler(e.currentSlide + e.options.slidesToScroll)
        }
    };
    i.prototype.buildArrows = function () {
        var i = this;
        if (i.options.arrows === !0) {
            i.$prevArrow = e(i.options.prevArrow).addClass('slick-arrow');
            i.$nextArrow = e(i.options.nextArrow).addClass('slick-arrow');
            if (i.slideCount > i.options.slidesToShow) {
                i.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                i.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                if (i.htmlExpr.test(i.options.prevArrow)) {
                    i.$prevArrow.prependTo(i.options.appendArrows)
                };
                if (i.htmlExpr.test(i.options.nextArrow)) {
                    i.$nextArrow.appendTo(i.options.appendArrows)
                };
                if (i.options.infinite !== !0) {
                    i.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true')
                }
            } else {
                i.$prevArrow.add(i.$nextArrow).addClass('slick-hidden').attr({
                    'aria-disabled': 'true',
                    'tabindex': '-1'
                })
            }
        }
    };
    i.prototype.buildDots = function () {
        var i = this,
            s, t;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            t = '<ul class="' + i.options.dotsClass + '">';
            for (s = 0; s <= i.getDotCount(); s += 1) {
                t += '<li>' + i.options.customPaging.call(this, i, s) + '</li>'
            };
            t += '</ul>';
            i.$dots = e(t).appendTo(i.options.appendDots);
            i.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false')
        }
    };
    i.prototype.buildOut = function () {
        var i = this;
        i.$slides = i.$slider.children(i.options.slide + ':not(.slick-cloned)').addClass('slick-slide');
        i.slideCount = i.$slides.length;
        i.$slides.each(function (i, t) {
            e(t).attr('data-slick-index', i).data('originalStyling', e(t).attr('style') || '')
        });
        i.$slidesCache = i.$slides;
        i.$slider.addClass('slick-slider');
        i.$slideTrack = (i.slideCount === 0) ? e('<div class="slick-track"/>').appendTo(i.$slider) : i.$slides.wrapAll('<div class="slick-track"/>').parent();
        i.$list = i.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent();
        i.$slideTrack.css('opacity', 0);
        if (i.options.centerMode === !0 || i.options.swipeToSlide === !0) {
            i.options.slidesToScroll = 1
        };
        e('img[data-lazy]', i.$slider).not('[src]').addClass('slick-loading');
        i.setupInfinite();
        i.buildArrows();
        i.buildDots();
        i.updateDots();
        i.setSlideClasses(typeof i.currentSlide === 'number' ? i.currentSlide : 0);
        if (i.options.draggable === !0) {
            i.$list.addClass('draggable')
        }
    };
    i.prototype.buildRows = function () {
        var e = this,
            s, o, i, l, d, t, n;
        l = document.createDocumentFragment();
        t = e.$slider.children();
        if (e.options.rows > 1) {
            n = e.options.slidesPerRow * e.options.rows;
            d = Math.ceil(t.length / n);
            for (s = 0; s < d; s++) {
                var r = document.createElement('div');
                for (o = 0; o < e.options.rows; o++) {
                    var a = document.createElement('div');
                    for (i = 0; i < e.options.slidesPerRow; i++) {
                        var c = (s * n + ((o * e.options.slidesPerRow) + i));
                        if (t.get(c)) {
                            a.appendChild(t.get(c))
                        }
                    };
                    r.appendChild(a)
                };
                l.appendChild(r)
            };
            e.$slider.html(l);
            e.$slider.children().children().children().css({
                'width': (100 / e.options.slidesPerRow) + '%',
                'display': 'inline-block'
            })
        }
    };
    i.prototype.checkResponsive = function (i, s) {
        var t = this,
            n, o, r, l = !1,
            d = t.$slider.width(),
            a = window.innerWidth || e(window).width();
        if (t.respondTo === 'window') {
            r = a
        } else if (t.respondTo === 'slider') {
            r = d
        } else if (t.respondTo === 'min') {
            r = Math.min(a, d)
        };
        if (t.options.responsive && t.options.responsive.length && t.options.responsive !== null) {
            o = null;
            for (n in t.breakpoints) {
                if (t.breakpoints.hasOwnProperty(n)) {
                    if (t.originalSettings.mobileFirst === !1) {
                        if (r < t.breakpoints[n]) {
                            o = t.breakpoints[n]
                        }
                    } else {
                        if (r > t.breakpoints[n]) {
                            o = t.breakpoints[n]
                        }
                    }
                }
            };
            if (o !== null) {
                if (t.activeBreakpoint !== null) {
                    if (o !== t.activeBreakpoint || s) {
                        t.activeBreakpoint = o;
                        if (t.breakpointSettings[o] === 'unslick') {
                            t.unslick(o)
                        } else {
                            t.options = e.extend({}, t.originalSettings, t.breakpointSettings[o]);
                            if (i === !0) {
                                t.currentSlide = t.options.initialSlide
                            };
                            t.refresh(i)
                        };
                        l = o
                    }
                } else {
                    t.activeBreakpoint = o;
                    if (t.breakpointSettings[o] === 'unslick') {
                        t.unslick(o)
                    } else {
                        t.options = e.extend({}, t.originalSettings, t.breakpointSettings[o]);
                        if (i === !0) {
                            t.currentSlide = t.options.initialSlide
                        };
                        t.refresh(i)
                    };
                    l = o
                }
            } else {
                if (t.activeBreakpoint !== null) {
                    t.activeBreakpoint = null;
                    t.options = t.originalSettings;
                    if (i === !0) {
                        t.currentSlide = t.options.initialSlide
                    };
                    t.refresh(i);
                    l = o
                }
            };
            if (!i && l !== !1) {
                t.$slider.trigger('breakpoint', [t, l])
            }
        }
    };
    i.prototype.changeSlide = function (i, t) {
        var s = this,
            o = e(i.target),
            n, l, r;
        if (o.is('a')) {
            i.preventDefault()
        };
        if (!o.is('li')) {
            o = o.closest('li')
        };
        r = (s.slideCount % s.options.slidesToScroll !== 0);
        n = r ? 0 : (s.slideCount - s.currentSlide) % s.options.slidesToScroll;
        switch (i.data.message) {
        case 'previous':
            l = n === 0 ? s.options.slidesToScroll : s.options.slidesToShow - n;
            if (s.slideCount > s.options.slidesToShow) {
                s.slideHandler(s.currentSlide - l, !1, t)
            };
            break;
        case 'next':
            l = n === 0 ? s.options.slidesToScroll : n;
            if (s.slideCount > s.options.slidesToShow) {
                s.slideHandler(s.currentSlide + l, !1, t)
            };
            break;
        case 'index':
            var a = i.data.index === 0 ? 0 : i.data.index || o.index() * s.options.slidesToScroll;
            s.slideHandler(s.checkNavigable(a), !1, t);
            o.children().trigger('focus');
            break;
        default:
            return
        }
    };
    i.prototype.checkNavigable = function (e) {
        var o = this,
            i, t;
        i = o.getNavigableIndexes();
        t = 0;
        if (e > i[i.length - 1]) {
            e = i[i.length - 1]
        } else {
            for (var s in i) {
                if (e < i[s]) {
                    e = t;
                    break
                };
                t = i[s]
            }
        };
        return e
    };
    i.prototype.cleanUpEvents = function () {
        var i = this;
        if (i.options.dots && i.$dots !== null) {
            e('li', i.$dots).off('click.slick', i.changeSlide);
            if (i.options.pauseOnDotsHover === !0 && i.options.autoplay === !0) {
                e('li', i.$dots).off('mouseenter.slick', e.proxy(i.setPaused, i, !0)).off('mouseleave.slick', e.proxy(i.setPaused, i, !1))
            }
        };
        if (i.options.arrows === !0 && i.slideCount > i.options.slidesToShow) {
            i.$prevArrow && i.$prevArrow.off('click.slick', i.changeSlide);
            i.$nextArrow && i.$nextArrow.off('click.slick', i.changeSlide)
        };
        i.$list.off('touchstart.slick mousedown.slick', i.swipeHandler);
        i.$list.off('touchmove.slick mousemove.slick', i.swipeHandler);
        i.$list.off('touchend.slick mouseup.slick', i.swipeHandler);
        i.$list.off('touchcancel.slick mouseleave.slick', i.swipeHandler);
        i.$list.off('click.slick', i.clickHandler);
        e(document).off(i.visibilityChange, i.visibility);
        i.$list.off('mouseenter.slick', e.proxy(i.setPaused, i, !0));
        i.$list.off('mouseleave.slick', e.proxy(i.setPaused, i, !1));
        if (i.options.accessibility === !0) {
            i.$list.off('keydown.slick', i.keyHandler)
        };
        if (i.options.focusOnSelect === !0) {
            e(i.$slideTrack).children().off('click.slick', i.selectHandler)
        };
        e(window).off('orientationchange.slick.slick-' + i.instanceUid, i.orientationChange);
        e(window).off('resize.slick.slick-' + i.instanceUid, i.resize);
        e('[draggable!=true]', i.$slideTrack).off('dragstart', i.preventDefault);
        e(window).off('load.slick.slick-' + i.instanceUid, i.setPosition);
        e(document).off('ready.slick.slick-' + i.instanceUid, i.setPosition)
    };
    i.prototype.cleanUpRows = function () {
        var i = this,
            e;
        if (i.options.rows > 1) {
            e = i.$slides.children().children();
            e.removeAttr('style');
            i.$slider.html(e)
        }
    };
    i.prototype.clickHandler = function (e) {
        var i = this;
        if (i.shouldClick === !1) {
            e.stopImmediatePropagation();
            e.stopPropagation();
            e.preventDefault()
        }
    };
    i.prototype.destroy = function (i) {
        var t = this;
        t.autoPlayClear();
        t.touchObject = {};
        t.cleanUpEvents();
        e('.slick-cloned', t.$slider).detach();
        if (t.$dots) {
            t.$dots.remove()
        };
        if (t.options.arrows === !0) {
            if (t.$prevArrow && t.$prevArrow.length) {
                t.$prevArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
                if (t.htmlExpr.test(t.options.prevArrow)) {
                    t.$prevArrow.remove()
                }
            };
            if (t.$nextArrow && t.$nextArrow.length) {
                t.$nextArrow.removeClass('slick-disabled slick-arrow slick-hidden').removeAttr('aria-hidden aria-disabled tabindex').css('display', '');
                if (t.htmlExpr.test(t.options.nextArrow)) {
                    t.$nextArrow.remove()
                }
            }
        };
        if (t.$slides) {
            t.$slides.removeClass('slick-slide slick-active slick-center slick-visible slick-current').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function () {
                e(this).attr('style', e(this).data('originalStyling'))
            });
            t.$slideTrack.children(this.options.slide).detach();
            t.$slideTrack.detach();
            t.$list.detach();
            t.$slider.append(t.$slides)
        };
        t.cleanUpRows();
        t.$slider.removeClass('slick-slider');
        t.$slider.removeClass('slick-initialized');
        t.unslicked = !0;
        if (!i) {
            t.$slider.trigger('destroy', [t])
        }
    };
    i.prototype.disableTransition = function (e) {
        var i = this,
            t = {};
        t[i.transitionType] = '';
        if (i.options.fade === !1) {
            i.$slideTrack.css(t)
        } else {
            i.$slides.eq(e).css(t)
        }
    };
    i.prototype.fadeSlide = function (e, i) {
        var t = this;
        if (t.cssTransitions === !1) {
            t.$slides.eq(e).css({
                zIndex: t.options.zIndex
            });
            t.$slides.eq(e).animate({
                opacity: 1
            }, t.options.speed, t.options.easing, i)
        } else {
            t.applyTransition(e);
            t.$slides.eq(e).css({
                opacity: 1,
                zIndex: t.options.zIndex
            });
            if (i) {
                setTimeout(function () {
                    t.disableTransition(e);
                    i.call()
                }, t.options.speed)
            }
        }
    };
    i.prototype.fadeSlideOut = function (e) {
        var i = this;
        if (i.cssTransitions === !1) {
            i.$slides.eq(e).animate({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            }, i.options.speed, i.options.easing)
        } else {
            i.applyTransition(e);
            i.$slides.eq(e).css({
                opacity: 0,
                zIndex: i.options.zIndex - 2
            })
        }
    };
    i.prototype.filterSlides = i.prototype.slickFilter = function (e) {
        var i = this;
        if (e !== null) {
            i.unload();
            i.$slideTrack.children(this.options.slide).detach();
            i.$slidesCache.filter(e).appendTo(i.$slideTrack);
            i.reinit()
        }
    };
    i.prototype.getCurrent = i.prototype.slickCurrentSlide = function () {
        var e = this;
        return e.currentSlide
    };
    i.prototype.getDotCount = function () {
        var e = this,
            t = 0,
            s = 0,
            i = 0;
        if (e.options.infinite === !0) {
            while (t < e.slideCount) {
                ++i;
                t = s + e.options.slidesToShow;
                s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
            }
        } else if (e.options.centerMode === !0) {
            i = e.slideCount
        } else {
            while (t < e.slideCount) {
                ++i;
                t = s + e.options.slidesToShow;
                s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
            }
        };
        return i - 1
    };
    i.prototype.getLeft = function (e) {
        var i = this,
            o, n, s = 0,
            t;
        i.slideOffset = 0;
        n = i.$slides.first().outerHeight(!0);
        if (i.options.infinite === !0) {
            if (i.slideCount > i.options.slidesToShow) {
                i.slideOffset = (i.slideWidth * i.options.slidesToShow) * -1;
                s = (n * i.options.slidesToShow) * -1
            };
            if (i.slideCount % i.options.slidesToScroll !== 0) {
                if (e + i.options.slidesToScroll > i.slideCount && i.slideCount > i.options.slidesToShow) {
                    if (e > i.slideCount) {
                        i.slideOffset = ((i.options.slidesToShow - (e - i.slideCount)) * i.slideWidth) * -1;
                        s = ((i.options.slidesToShow - (e - i.slideCount)) * n) * -1
                    } else {
                        i.slideOffset = ((i.slideCount % i.options.slidesToScroll) * i.slideWidth) * -1;
                        s = ((i.slideCount % i.options.slidesToScroll) * n) * -1
                    }
                }
            }
        } else {
            if (e + i.options.slidesToShow > i.slideCount) {
                i.slideOffset = ((e + i.options.slidesToShow) - i.slideCount) * i.slideWidth;
                s = ((e + i.options.slidesToShow) - i.slideCount) * n
            }
        };
        if (i.slideCount <= i.options.slidesToShow) {
            i.slideOffset = 0;
            s = 0
        };
        if (i.options.centerMode === !0 && i.options.infinite === !0) {
            i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2) - i.slideWidth
        } else if (i.options.centerMode === !0) {
            i.slideOffset = 0;
            i.slideOffset += i.slideWidth * Math.floor(i.options.slidesToShow / 2)
        };
        if (i.options.vertical === !1) {
            o = ((e * i.slideWidth) * -1) + i.slideOffset
        } else {
            o = ((e * n) * -1) + s
        };
        if (i.options.variableWidth === !0) {
            if (i.slideCount <= i.options.slidesToShow || i.options.infinite === !1) {
                t = i.$slideTrack.children('.slick-slide').eq(e)
            } else {
                t = i.$slideTrack.children('.slick-slide').eq(e + i.options.slidesToShow)
            };
            o = t[0] ? t[0].offsetLeft * -1 : 0;
            if (i.options.centerMode === !0) {
                if (i.options.infinite === !1) {
                    t = i.$slideTrack.children('.slick-slide').eq(e)
                } else {
                    t = i.$slideTrack.children('.slick-slide').eq(e + i.options.slidesToShow + 1)
                };
                o = t[0] ? t[0].offsetLeft * -1 : 0;
                o += (i.$list.width() - t.outerWidth()) / 2
            }
        };
        return o
    };
    i.prototype.getOption = i.prototype.slickGetOption = function (e) {
        var i = this;
        return i.options[e]
    };
    i.prototype.getNavigableIndexes = function () {
        var e = this,
            i = 0,
            s = 0,
            o = [],
            t;
        if (e.options.infinite === !1) {
            t = e.slideCount
        } else {
            i = e.options.slidesToScroll * -1;
            s = e.options.slidesToScroll * -1;
            t = e.slideCount * 2
        }
        while (i < t) {
            o.push(i);
            i = s + e.options.slidesToScroll;
            s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow
        };
        return o
    };
    i.prototype.getSlick = function () {
        return this
    };
    i.prototype.getSlideCount = function () {
        var i = this,
            s, o, t;
        t = i.options.centerMode === !0 ? i.slideWidth * Math.floor(i.options.slidesToShow / 2) : 0;
        if (i.options.swipeToSlide === !0) {
            i.$slideTrack.find('.slick-slide').each(function (s, n) {
                if (n.offsetLeft - t + (e(n).outerWidth() / 2) > (i.swipeLeft * -1)) {
                    o = n;
                    return !1
                }
            });
            s = Math.abs(e(o).attr('data-slick-index') - i.currentSlide) || 1;
            return s
        } else {
            return i.options.slidesToScroll
        }
    };
    i.prototype.goTo = i.prototype.slickGoTo = function (e, i) {
        var t = this;
        t.changeSlide({
            data: {
                message: 'index',
                index: parseInt(e)
            }
        }, i)
    };
    i.prototype.init = function (i) {
        var t = this;
        if (!e(t.$slider).hasClass('slick-initialized')) {
            e(t.$slider).addClass('slick-initialized');
            t.buildRows();
            t.buildOut();
            t.setProps();
            t.startLoad();
            t.loadSlider();
            t.initializeEvents();
            t.updateArrows();
            t.updateDots()
        };
        if (i) {
            t.$slider.trigger('init', [t])
        };
        if (t.options.accessibility === !0) {
            t.initADA()
        }
    };
    i.prototype.initArrowEvents = function () {
        var e = this;
        if (e.options.arrows === !0 && e.slideCount > e.options.slidesToShow) {
            e.$prevArrow.on('click.slick', {
                message: 'previous'
            }, e.changeSlide);
            e.$nextArrow.on('click.slick', {
                message: 'next'
            }, e.changeSlide)
        }
    };
    i.prototype.initDotEvents = function () {
        var i = this;
        if (i.options.dots === !0 && i.slideCount > i.options.slidesToShow) {
            e('li', i.$dots).on('click.slick', {
                message: 'index'
            }, i.changeSlide)
        };
        if (i.options.dots === !0 && i.options.pauseOnDotsHover === !0 && i.options.autoplay === !0) {
            e('li', i.$dots).on('mouseenter.slick', e.proxy(i.setPaused, i, !0)).on('mouseleave.slick', e.proxy(i.setPaused, i, !1))
        }
    };
    i.prototype.initializeEvents = function () {
        var i = this;
        i.initArrowEvents();
        i.initDotEvents();
        i.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, i.swipeHandler);
        i.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, i.swipeHandler);
        i.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, i.swipeHandler);
        i.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, i.swipeHandler);
        i.$list.on('click.slick', i.clickHandler);
        e(document).on(i.visibilityChange, e.proxy(i.visibility, i));
        i.$list.on('mouseenter.slick', e.proxy(i.setPaused, i, !0));
        i.$list.on('mouseleave.slick', e.proxy(i.setPaused, i, !1));
        if (i.options.accessibility === !0) {
            i.$list.on('keydown.slick', i.keyHandler)
        };
        if (i.options.focusOnSelect === !0) {
            e(i.$slideTrack).children().on('click.slick', i.selectHandler)
        };
        e(window).on('orientationchange.slick.slick-' + i.instanceUid, e.proxy(i.orientationChange, i));
        e(window).on('resize.slick.slick-' + i.instanceUid, e.proxy(i.resize, i));
        e('[draggable!=true]', i.$slideTrack).on('dragstart', i.preventDefault);
        e(window).on('load.slick.slick-' + i.instanceUid, i.setPosition);
        e(document).on('ready.slick.slick-' + i.instanceUid, i.setPosition)
    };
    i.prototype.initUI = function () {
        var e = this;
        if (e.options.arrows === !0 && e.slideCount > e.options.slidesToShow) {
            e.$prevArrow.show();
            e.$nextArrow.show()
        };
        if (e.options.dots === !0 && e.slideCount > e.options.slidesToShow) {
            e.$dots.show()
        };
        if (e.options.autoplay === !0) {
            e.autoPlay()
        }
    };
    i.prototype.keyHandler = function (e) {
        var i = this;
        if (!e.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (e.keyCode === 37 && i.options.accessibility === !0) {
                i.changeSlide({
                    data: {
                        message: 'previous'
                    }
                })
            } else if (e.keyCode === 39 && i.options.accessibility === !0) {
                i.changeSlide({
                    data: {
                        message: 'next'
                    }
                })
            }
        }
    };
    i.prototype.lazyLoad = function () {
        var i = this,
            l, o, t, s;

        function n(i) {
            e('img[data-lazy]', i).each(function () {
                var i = e(this),
                    s = e(this).attr('data-lazy'),
                    t = document.createElement('img');
                t.onload = function () {
                    i.animate({
                        opacity: 0
                    }, 100, function () {
                        i.attr('src', s).animate({
                            opacity: 1
                        }, 200, function () {
                            i.removeAttr('data-lazy').removeClass('slick-loading')
                        })
                    })
                };
                t.src = s
            })
        };
        if (i.options.centerMode === !0) {
            if (i.options.infinite === !0) {
                t = i.currentSlide + (i.options.slidesToShow / 2 + 1);
                s = t + i.options.slidesToShow + 2
            } else {
                t = Math.max(0, i.currentSlide - (i.options.slidesToShow / 2 + 1));
                s = 2 + (i.options.slidesToShow / 2 + 1) + i.currentSlide
            }
        } else {
            t = i.options.infinite ? i.options.slidesToShow + i.currentSlide : i.currentSlide;
            s = t + i.options.slidesToShow;
            if (i.options.fade === !0) {
                if (t > 0) t--;
                if (s <= i.slideCount) s++
            }
        };
        l = i.$slider.find('.slick-slide').slice(t, s);
        n(l);
        if (i.slideCount <= i.options.slidesToShow) {
            o = i.$slider.find('.slick-slide');
            n(o)
        } else if (i.currentSlide >= i.slideCount - i.options.slidesToShow) {
            o = i.$slider.find('.slick-cloned').slice(0, i.options.slidesToShow);
            n(o)
        } else if (i.currentSlide === 0) {
            o = i.$slider.find('.slick-cloned').slice(i.options.slidesToShow * -1);
            n(o)
        }
    };
    i.prototype.loadSlider = function () {
        var e = this;
        e.setPosition();
        e.$slideTrack.css({
            opacity: 1
        });
        e.$slider.removeClass('slick-loading');
        e.initUI();
        if (e.options.lazyLoad === 'progressive') {
            e.progressiveLazyLoad()
        }
    };
    i.prototype.next = i.prototype.slickNext = function () {
        var e = this;
        e.changeSlide({
            data: {
                message: 'next'
            }
        })
    };
    i.prototype.orientationChange = function () {
        var e = this;
        e.checkResponsive();
        e.setPosition()
    };
    i.prototype.pause = i.prototype.slickPause = function () {
        var e = this;
        e.autoPlayClear();
        e.paused = !0
    };
    i.prototype.play = i.prototype.slickPlay = function () {
        var e = this;
        e.paused = !1;
        e.autoPlay()
    };
    i.prototype.postSlide = function (e) {
        var i = this;
        i.$slider.trigger('afterChange', [i, e]);
        i.animating = !1;
        i.setPosition();
        i.swipeLeft = null;
        if (i.options.autoplay === !0 && i.paused === !1) {
            i.autoPlay()
        };
        if (i.options.accessibility === !0) {
            i.initADA()
        }
    };
    i.prototype.prev = i.prototype.slickPrev = function () {
        var e = this;
        e.changeSlide({
            data: {
                message: 'previous'
            }
        })
    };
    i.prototype.preventDefault = function (e) {
        e.preventDefault()
    };
    i.prototype.progressiveLazyLoad = function () {
        var i = this,
            s, t;
        s = e('img[data-lazy]', i.$slider).length;
        if (s > 0) {
            t = e('img[data-lazy]', i.$slider).first();
            t.attr('src', t.attr('data-lazy')).removeClass('slick-loading').load(function () {
                t.removeAttr('data-lazy');
                i.progressiveLazyLoad();
                if (i.options.adaptiveHeight === !0) {
                    i.setPosition()
                }
            }).error(function () {
                t.removeAttr('data-lazy');
                i.progressiveLazyLoad()
            })
        }
    };
    i.prototype.refresh = function (i) {
        var t = this,
            s = t.currentSlide;
        t.destroy(!0);
        e.extend(t, t.initials, {
            currentSlide: s
        });
        t.init();
        if (!i) {
            t.changeSlide({
                data: {
                    message: 'index',
                    index: s
                }
            }, !1)
        }
    };
    i.prototype.registerBreakpoints = function () {
        var i = this,
            n, o, s, t = i.options.responsive || null;
        if (e.type(t) === 'array' && t.length) {
            i.respondTo = i.options.respondTo || 'window';
            for (n in t) {
                s = i.breakpoints.length - 1;
                o = t[n].breakpoint;
                if (t.hasOwnProperty(n)) {
                    while (s >= 0) {
                        if (i.breakpoints[s] && i.breakpoints[s] === o) {
                            i.breakpoints.splice(s, 1)
                        };
                        s--
                    };
                    i.breakpoints.push(o);
                    i.breakpointSettings[o] = t[n].settings
                }
            };
            i.breakpoints.sort(function (e, t) {
                return (i.options.mobileFirst) ? e - t : t - e
            })
        }
    };
    i.prototype.reinit = function () {
        var i = this;
        i.$slides = i.$slideTrack.children(i.options.slide).addClass('slick-slide');
        i.slideCount = i.$slides.length;
        if (i.currentSlide >= i.slideCount && i.currentSlide !== 0) {
            i.currentSlide = i.currentSlide - i.options.slidesToScroll
        };
        if (i.slideCount <= i.options.slidesToShow) {
            i.currentSlide = 0
        };
        i.registerBreakpoints();
        i.setProps();
        i.setupInfinite();
        i.buildArrows();
        i.updateArrows();
        i.initArrowEvents();
        i.buildDots();
        i.updateDots();
        i.initDotEvents();
        i.checkResponsive(!1, !0);
        if (i.options.focusOnSelect === !0) {
            e(i.$slideTrack).children().on('click.slick', i.selectHandler)
        };
        i.setSlideClasses(0);
        i.setPosition();
        i.$slider.trigger('reInit', [i]);
        if (i.options.autoplay === !0) {
            i.focusHandler()
        }
    };
    i.prototype.resize = function () {
        var i = this;
        if (e(window).width() !== i.windowWidth) {
            clearTimeout(i.windowDelay);
            i.windowDelay = window.setTimeout(function () {
                i.windowWidth = e(window).width();
                i.checkResponsive();
                if (!i.unslicked) {
                    i.setPosition()
                }
            }, 50)
        }
    };
    i.prototype.removeSlide = i.prototype.slickRemove = function (e, i, s) {
        var t = this;
        if (typeof (e) === 'boolean') {
            i = e;
            e = i === !0 ? 0 : t.slideCount - 1
        } else {
            e = i === !0 ? --e : e
        };
        if (t.slideCount < 1 || e < 0 || e > t.slideCount - 1) {
            return !1
        };
        t.unload();
        if (s === !0) {
            t.$slideTrack.children().remove()
        } else {
            t.$slideTrack.children(this.options.slide).eq(e).remove()
        };
        t.$slides = t.$slideTrack.children(this.options.slide);
        t.$slideTrack.children(this.options.slide).detach();
        t.$slideTrack.append(t.$slides);
        t.$slidesCache = t.$slides;
        t.reinit()
    };
    i.prototype.setCSS = function (e) {
        var i = this,
            t = {},
            o, s;
        if (i.options.rtl === !0) {
            e = -e
        };
        o = i.positionProp == 'left' ? Math.ceil(e) + 'px' : '0px';
        s = i.positionProp == 'top' ? Math.ceil(e) + 'px' : '0px';
        t[i.positionProp] = e;
        if (i.transformsEnabled === !1) {
            i.$slideTrack.css(t)
        } else {
            t = {};
            if (i.cssTransitions === !1) {
                t[i.animType] = 'translate(' + o + ', ' + s + ')';
                i.$slideTrack.css(t)
            } else {
                t[i.animType] = 'translate3d(' + o + ', ' + s + ', 0px)';
                i.$slideTrack.css(t)
            }
        }
    };
    i.prototype.setDimensions = function () {
        var e = this;
        if (e.options.vertical === !1) {
            if (e.options.centerMode === !0) {
                e.$list.css({
                    padding: ('0px ' + e.options.centerPadding)
                })
            }
        } else {
            e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow);
            if (e.options.centerMode === !0) {
                e.$list.css({
                    padding: (e.options.centerPadding + ' 0px')
                })
            }
        };
        e.listWidth = e.$list.width();
        e.listHeight = e.$list.height();
        if (e.options.vertical === !1 && e.options.variableWidth === !1) {
            e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow);
            e.$slideTrack.width(Math.ceil((e.slideWidth * e.$slideTrack.children('.slick-slide').length)))
        } else if (e.options.variableWidth === !0) {
            e.$slideTrack.width(5000 * e.slideCount)
        } else {
            e.slideWidth = Math.ceil(e.listWidth);
            e.$slideTrack.height(Math.ceil((e.$slides.first().outerHeight(!0) * e.$slideTrack.children('.slick-slide').length)))
        };
        var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
        if (e.options.variableWidth === !1) e.$slideTrack.children('.slick-slide').width(e.slideWidth - i)
    };
    i.prototype.setFade = function () {
        var i = this,
            t;
        i.$slides.each(function (s, o) {
            t = (i.slideWidth * s) * -1;
            if (i.options.rtl === !0) {
                e(o).css({
                    position: 'relative',
                    right: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            } else {
                e(o).css({
                    position: 'relative',
                    left: t,
                    top: 0,
                    zIndex: i.options.zIndex - 2,
                    opacity: 0
                })
            }
        });
        i.$slides.eq(i.currentSlide).css({
            zIndex: i.options.zIndex - 1,
            opacity: 1
        })
    };
    i.prototype.setHeight = function () {
        var e = this;
        if (e.options.slidesToShow === 1 && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
            var i = e.$slides.eq(e.currentSlide).outerHeight(!0);
            e.$list.css('height', i)
        }
    };
    i.prototype.setOption = i.prototype.slickSetOption = function (i, t, o) {
        var s = this,
            n, l;
        if (i === 'responsive' && e.type(t) === 'array') {
            for (l in t) {
                if (e.type(s.options.responsive) !== 'array') {
                    s.options.responsive = [t[l]]
                } else {
                    n = s.options.responsive.length - 1;
                    while (n >= 0) {
                        if (s.options.responsive[n].breakpoint === t[l].breakpoint) {
                            s.options.responsive.splice(n, 1)
                        };
                        n--
                    };
                    s.options.responsive.push(t[l])
                }
            }
        } else {
            s.options[i] = t
        };
        if (o === !0) {
            s.unload();
            s.reinit()
        }
    };
    i.prototype.setPosition = function () {
        var e = this;
        e.setDimensions();
        e.setHeight();
        if (e.options.fade === !1) {
            e.setCSS(e.getLeft(e.currentSlide))
        } else {
            e.setFade()
        };
        e.$slider.trigger('setPosition', [e])
    };
    i.prototype.setProps = function () {
        var e = this,
            i = document.body.style;
        e.positionProp = e.options.vertical === !0 ? 'top' : 'left';
        if (e.positionProp === 'top') {
            e.$slider.addClass('slick-vertical')
        } else {
            e.$slider.removeClass('slick-vertical')
        };
        if (i.WebkitTransition !== undefined || i.MozTransition !== undefined || i.msTransition !== undefined) {
            if (e.options.useCSS === !0) {
                e.cssTransitions = !0
            }
        };
        if (e.options.fade) {
            if (typeof e.options.zIndex === 'number') {
                if (e.options.zIndex < 3) {
                    e.options.zIndex = 3
                }
            } else {
                e.options.zIndex = e.defaults.zIndex
            }
        };
        if (i.OTransform !== undefined) {
            e.animType = 'OTransform';
            e.transformType = '-o-transform';
            e.transitionType = 'OTransition';
            if (i.perspectiveProperty === undefined && i.webkitPerspective === undefined) e.animType = !1
        };
        if (i.MozTransform !== undefined) {
            e.animType = 'MozTransform';
            e.transformType = '-moz-transform';
            e.transitionType = 'MozTransition';
            if (i.perspectiveProperty === undefined && i.MozPerspective === undefined) e.animType = !1
        };
        if (i.webkitTransform !== undefined) {
            e.animType = 'webkitTransform';
            e.transformType = '-webkit-transform';
            e.transitionType = 'webkitTransition';
            if (i.perspectiveProperty === undefined && i.webkitPerspective === undefined) e.animType = !1
        };
        if (i.msTransform !== undefined) {
            e.animType = 'msTransform';
            e.transformType = '-ms-transform';
            e.transitionType = 'msTransition';
            if (i.msTransform === undefined) e.animType = !1
        };
        if (i.transform !== undefined && e.animType !== !1) {
            e.animType = 'transform';
            e.transformType = 'transform';
            e.transitionType = 'transition'
        };
        e.transformsEnabled = (e.animType !== null && e.animType !== !1)
    };
    i.prototype.setSlideClasses = function (e) {
        var i = this,
            o, t, s, n;
        t = i.$slider.find('.slick-slide').removeClass('slick-active slick-center slick-current').attr('aria-hidden', 'true');
        i.$slides.eq(e).addClass('slick-current');
        if (i.options.centerMode === !0) {
            o = Math.floor(i.options.slidesToShow / 2);
            if (i.options.infinite === !0) {
                if (e >= o && e <= (i.slideCount - 1) - o) {
                    i.$slides.slice(e - o, e + o + 1).addClass('slick-active').attr('aria-hidden', 'false')
                } else {
                    s = i.options.slidesToShow + e;
                    t.slice(s - o + 1, s + o + 2).addClass('slick-active').attr('aria-hidden', 'false')
                };
                if (e === 0) {
                    t.eq(t.length - 1 - i.options.slidesToShow).addClass('slick-center')
                } else if (e === i.slideCount - 1) {
                    t.eq(i.options.slidesToShow).addClass('slick-center')
                }
            };
            i.$slides.eq(e).addClass('slick-center')
        } else {
            if (e >= 0 && e <= (i.slideCount - i.options.slidesToShow)) {
                i.$slides.slice(e, e + i.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false')
            } else if (t.length <= i.options.slidesToShow) {
                t.addClass('slick-active').attr('aria-hidden', 'false')
            } else {
                n = i.slideCount % i.options.slidesToShow;
                s = i.options.infinite === !0 ? i.options.slidesToShow + e : e;
                if (i.options.slidesToShow == i.options.slidesToScroll && (i.slideCount - e) < i.options.slidesToShow) {
                    t.slice(s - (i.options.slidesToShow - n), s + n).addClass('slick-active').attr('aria-hidden', 'false')
                } else {
                    t.slice(s, s + i.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false')
                }
            }
        };
        if (i.options.lazyLoad === 'ondemand') {
            i.lazyLoad()
        }
    };
    i.prototype.setupInfinite = function () {
        var i = this,
            t, s, o;
        if (i.options.fade === !0) {
            i.options.centerMode = !1
        };
        if (i.options.infinite === !0 && i.options.fade === !1) {
            s = null;
            if (i.slideCount > i.options.slidesToShow) {
                if (i.options.centerMode === !0) {
                    o = i.options.slidesToShow + 1
                } else {
                    o = i.options.slidesToShow
                };
                for (t = i.slideCount; t > (i.slideCount - o); t -= 1) {
                    s = t - 1;
                    e(i.$slides[s]).clone(!0).attr('id', '').attr('data-slick-index', s - i.slideCount).prependTo(i.$slideTrack).addClass('slick-cloned')
                };
                for (t = 0; t < o; t += 1) {
                    s = t;
                    e(i.$slides[s]).clone(!0).attr('id', '').attr('data-slick-index', s + i.slideCount).appendTo(i.$slideTrack).addClass('slick-cloned')
                };
                i.$slideTrack.find('.slick-cloned').find('[id]').each(function () {
                    e(this).attr('id', '')
                })
            }
        }
    };
    i.prototype.setPaused = function (e) {
        var i = this;
        if (i.options.autoplay === !0 && i.options.pauseOnHover === !0) {
            i.paused = e;
            if (!e) {
                i.autoPlay()
            } else {
                i.autoPlayClear()
            }
        }
    };
    i.prototype.selectHandler = function (i) {
        var s = this,
            o = e(i.target).is('.slick-slide') ? e(i.target) : e(i.target).parents('.slick-slide'),
            t = parseInt(o.attr('data-slick-index'));
        if (!t) t = 0;
        if (s.slideCount <= s.options.slidesToShow) {
            s.setSlideClasses(t);
            s.asNavFor(t);
            return
        };
        s.slideHandler(t)
    };
    i.prototype.slideHandler = function (e, t, n) {
        var s, o, r, l, a = null,
            i = this;
        t = t || !1;
        if (i.animating === !0 && i.options.waitForAnimate === !0) {
            return
        };
        if (i.options.fade === !0 && i.currentSlide === e) {
            return
        };
        if (i.slideCount <= i.options.slidesToShow) {
            return
        };
        if (t === !1) {
            i.asNavFor(e)
        };
        s = e;
        a = i.getLeft(s);
        l = i.getLeft(i.currentSlide);
        i.currentLeft = i.swipeLeft === null ? l : i.swipeLeft;
        if (i.options.infinite === !1 && i.options.centerMode === !1 && (e < 0 || e > i.getDotCount() * i.options.slidesToScroll)) {
            if (i.options.fade === !1) {
                s = i.currentSlide;
                if (n !== !0) {
                    i.animateSlide(l, function () {
                        i.postSlide(s)
                    })
                } else {
                    i.postSlide(s)
                }
            };
            return
        } else if (i.options.infinite === !1 && i.options.centerMode === !0 && (e < 0 || e > (i.slideCount - i.options.slidesToScroll))) {
            if (i.options.fade === !1) {
                s = i.currentSlide;
                if (n !== !0) {
                    i.animateSlide(l, function () {
                        i.postSlide(s)
                    })
                } else {
                    i.postSlide(s)
                }
            };
            return
        };
        if (i.options.autoplay === !0) {
            clearInterval(i.autoPlayTimer)
        };
        if (s < 0) {
            if (i.slideCount % i.options.slidesToScroll !== 0) {
                o = i.slideCount - (i.slideCount % i.options.slidesToScroll)
            } else {
                o = i.slideCount + s
            }
        } else if (s >= i.slideCount) {
            if (i.slideCount % i.options.slidesToScroll !== 0) {
                o = 0
            } else {
                o = s - i.slideCount
            }
        } else {
            o = s
        };
        i.animating = !0;
        i.$slider.trigger('beforeChange', [i, i.currentSlide, o]);
        r = i.currentSlide;
        i.currentSlide = o;
        i.setSlideClasses(i.currentSlide);
        i.updateDots();
        i.updateArrows();
        if (i.options.fade === !0) {
            if (n !== !0) {
                i.fadeSlideOut(r);
                i.fadeSlide(o, function () {
                    i.postSlide(o)
                })
            } else {
                i.postSlide(o)
            };
            i.animateHeight();
            return
        };
        if (n !== !0) {
            i.animateSlide(a, function () {
                i.postSlide(o)
            })
        } else {
            i.postSlide(o)
        }
    };
    i.prototype.startLoad = function () {
        var e = this;
        if (e.options.arrows === !0 && e.slideCount > e.options.slidesToShow) {
            e.$prevArrow.hide();
            e.$nextArrow.hide()
        };
        if (e.options.dots === !0 && e.slideCount > e.options.slidesToShow) {
            e.$dots.hide()
        };
        e.$slider.addClass('slick-loading')
    };
    i.prototype.swipeDirection = function () {
        var o, s, t, e, i = this;
        o = i.touchObject.startX - i.touchObject.curX;
        s = i.touchObject.startY - i.touchObject.curY;
        t = Math.atan2(s, o);
        e = Math.round(t * 180 / Math.PI);
        if (e < 0) {
            e = 360 - Math.abs(e)
        };
        if ((e <= 45) && (e >= 0)) {
            return (i.options.rtl === !1 ? 'left' : 'right')
        };
        if ((e <= 360) && (e >= 315)) {
            return (i.options.rtl === !1 ? 'left' : 'right')
        };
        if ((e >= 135) && (e <= 225)) {
            return (i.options.rtl === !1 ? 'right' : 'left')
        };
        if (i.options.verticalSwiping === !0) {
            if ((e >= 35) && (e <= 135)) {
                return 'left'
            } else {
                return 'right'
            }
        };
        return 'vertical'
    };
    i.prototype.swipeEnd = function (e) {
        var i = this,
            t;
        i.dragging = !1;
        i.shouldClick = (i.touchObject.swipeLength > 10) ? !1 : !0;
        if (i.touchObject.curX === undefined) {
            return !1
        };
        if (i.touchObject.edgeHit === !0) {
            i.$slider.trigger('edge', [i, i.swipeDirection()])
        };
        if (i.touchObject.swipeLength >= i.touchObject.minSwipe) {
            switch (i.swipeDirection()) {
            case 'left':
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) : i.currentSlide + i.getSlideCount();
                i.slideHandler(t);
                i.currentDirection = 0;
                i.touchObject = {};
                i.$slider.trigger('swipe', [i, 'left']);
                break;
            case 'right':
                t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) : i.currentSlide - i.getSlideCount();
                i.slideHandler(t);
                i.currentDirection = 1;
                i.touchObject = {};
                i.$slider.trigger('swipe', [i, 'right']);
                break
            }
        } else {
            if (i.touchObject.startX !== i.touchObject.curX) {
                i.slideHandler(i.currentSlide);
                i.touchObject = {}
            }
        }
    };
    i.prototype.swipeHandler = function (e) {
        var i = this;
        if ((i.options.swipe === !1) || ('ontouchend' in document && i.options.swipe === !1)) {
            return
        } else if (i.options.draggable === !1 && e.type.indexOf('mouse') !== -1) {
            return
        };
        i.touchObject.fingerCount = e.originalEvent && e.originalEvent.touches !== undefined ? e.originalEvent.touches.length : 1;
        i.touchObject.minSwipe = i.listWidth / i.options.touchThreshold;
        if (i.options.verticalSwiping === !0) {
            i.touchObject.minSwipe = i.listHeight / i.options.touchThreshold
        };
        switch (e.data.action) {
        case 'start':
            i.swipeStart(e);
            break;
        case 'move':
            i.swipeMove(e);
            break;
        case 'end':
            i.swipeEnd(e);
            break
        }
    };
    i.prototype.swipeMove = function (e) {
        var i = this,
            r = !1,
            n, l, o, s, t;
        t = e.originalEvent !== undefined ? e.originalEvent.touches : null;
        if (!i.dragging || t && t.length !== 1) {
            return !1
        };
        n = i.getLeft(i.currentSlide);
        i.touchObject.curX = t !== undefined ? t[0].pageX : e.clientX;
        i.touchObject.curY = t !== undefined ? t[0].pageY : e.clientY;
        i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curX - i.touchObject.startX, 2)));
        if (i.options.verticalSwiping === !0) {
            i.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(i.touchObject.curY - i.touchObject.startY, 2)))
        };
        l = i.swipeDirection();
        if (l === 'vertical') {
            return
        };
        if (e.originalEvent !== undefined && i.touchObject.swipeLength > 4) {
            e.preventDefault()
        };
        s = (i.options.rtl === !1 ? 1 : -1) * (i.touchObject.curX > i.touchObject.startX ? 1 : -1);
        if (i.options.verticalSwiping === !0) {
            s = i.touchObject.curY > i.touchObject.startY ? 1 : -1
        };
        o = i.touchObject.swipeLength;
        i.touchObject.edgeHit = !1;
        if (i.options.infinite === !1) {
            if ((i.currentSlide === 0 && l === 'right') || (i.currentSlide >= i.getDotCount() && l === 'left')) {
                o = i.touchObject.swipeLength * i.options.edgeFriction;
                i.touchObject.edgeHit = !0
            }
        };
        if (i.options.vertical === !1) {
            i.swipeLeft = n + o * s
        } else {
            i.swipeLeft = n + (o * (i.$list.height() / i.listWidth)) * s
        };
        if (i.options.verticalSwiping === !0) {
            i.swipeLeft = n + o * s
        };
        if (i.options.fade === !0 || i.options.touchMove === !1) {
            return !1
        };
        if (i.animating === !0) {
            i.swipeLeft = null;
            return !1
        };
        i.setCSS(i.swipeLeft)
    };
    i.prototype.swipeStart = function (e) {
        var i = this,
            t;
        if (i.touchObject.fingerCount !== 1 || i.slideCount <= i.options.slidesToShow) {
            i.touchObject = {};
            return !1
        };
        if (e.originalEvent !== undefined && e.originalEvent.touches !== undefined) {
            t = e.originalEvent.touches[0]
        };
        i.touchObject.startX = i.touchObject.curX = t !== undefined ? t.pageX : e.clientX;
        i.touchObject.startY = i.touchObject.curY = t !== undefined ? t.pageY : e.clientY;
        i.dragging = !0
    };
    i.prototype.unfilterSlides = i.prototype.slickUnfilter = function () {
        var e = this;
        if (e.$slidesCache !== null) {
            e.unload();
            e.$slideTrack.children(this.options.slide).detach();
            e.$slidesCache.appendTo(e.$slideTrack);
            e.reinit()
        }
    };
    i.prototype.unload = function () {
        var i = this;
        e('.slick-cloned', i.$slider).remove();
        if (i.$dots) {
            i.$dots.remove()
        };
        if (i.$prevArrow && i.htmlExpr.test(i.options.prevArrow)) {
            i.$prevArrow.remove()
        };
        if (i.$nextArrow && i.htmlExpr.test(i.options.nextArrow)) {
            i.$nextArrow.remove()
        };
        i.$slides.removeClass('slick-slide slick-active slick-visible slick-current').attr('aria-hidden', 'true').css('width', '')
    };
    i.prototype.unslick = function (e) {
        var i = this;
        i.$slider.trigger('unslick', [i, e]);
        i.destroy()
    };
    i.prototype.updateArrows = function () {
        var e = this,
            i;
        i = Math.floor(e.options.slidesToShow / 2);
        if (e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && !e.options.infinite) {
            e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            if (e.currentSlide === 0) {
                e.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                e.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
            } else if (e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1) {
                e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
            } else if (e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0) {
                e.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                e.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false')
            }
        }
    };
    i.prototype.updateDots = function () {
        var e = this;
        if (e.$dots !== null) {
            e.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true');
            e.$dots.find('li').eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false')
        }
    };
    i.prototype.visibility = function () {
        var e = this;
        if (document[e.hidden]) {
            e.paused = !0;
            e.autoPlayClear()
        } else {
            if (e.options.autoplay === !0) {
                e.paused = !1;
                e.autoPlay()
            }
        }
    };
    i.prototype.initADA = function () {
        var i = this;
        i.$slides.add(i.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });
        i.$slideTrack.attr('role', 'listbox');
        i.$slides.not(i.$slideTrack.find('.slick-cloned')).each(function (t) {
            e(this).attr({
                'role': 'option',
                'aria-describedby': 'slick-slide' + i.instanceUid + t + ''
            })
        });
        if (i.$dots !== null) {
            i.$dots.attr('role', 'tablist').find('li').each(function (t) {
                e(this).attr({
                    'role': 'presentation',
                    'aria-selected': 'false',
                    'aria-controls': 'navigation' + i.instanceUid + t + '',
                    'id': 'slick-slide' + i.instanceUid + t + ''
                })
            }).first().attr('aria-selected', 'true').end().find('button').attr('role', 'button').end().closest('div').attr('role', 'toolbar')
        };
        i.activateADA()
    };
    i.prototype.activateADA = function () {
        var e = this,
            i = e.$slider.find('*').is(':focus');
        e.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false',
            'tabindex': '0'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });
        (i) && e.$slideTrack.find('.slick-active').focus()
    };
    i.prototype.focusHandler = function () {
        var i = this;
        i.$slider.on('focus.slick blur.slick', '*', function (t) {
            t.stopImmediatePropagation();
            var s = e(this);
            setTimeout(function () {
                if (i.isPlay) {
                    if (s.is(':focus')) {
                        i.autoPlayClear();
                        i.paused = !0
                    } else {
                        i.paused = !1;
                        i.autoPlay()
                    }
                }
            }, 0)
        })
    };
    e.fn.slick = function () {
        var t = this,
            s = arguments[0],
            n = Array.prototype.slice.call(arguments, 1),
            l = t.length,
            e = 0,
            o;
        for (e; e < l; e++) {
            if (typeof s == 'object' || typeof s == 'undefined') t[e].slick = new i(t[e], s);
            else o = t[e].slick[s].apply(t[e].slick, n);
            if (typeof o != 'undefined') return o
        };
        return t
    }
}));
! function (e, i) {
    function u(e, i, t) {
        var l = e.children(),
            n = !1;
        e.empty();
        for (var o = 0, a = l.length; a > o; o++) {
            var r = l.eq(o);
            if (e.append(r), t && e.append(t), s(e, i)) {
                r.remove(), n = !0;
                break
            };
            t && t.detach()
        };
        return n
    };

    function d(i, t, o, r, n) {
        var l = !1,
            c = 'a, table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style',
            a = 'script, .dotdotdot-keep';
        return i.contents().detach().each(function () {
            var f = this,
                p = e(f);
            if ('undefined' == typeof f) return !0;
            if (p.is(a)) i.append(p);
            else {
                if (l) return !0;
                i.append(p), !n || p.is(r.after) || p.find(r.after).length || i[i.is(c) ? 'after' : 'append'](n), s(o, r) && (l = 3 == f.nodeType ? h(p, t, o, r, n) : d(p, t, o, r, n), l || (p.detach(), l = !0)), l || n && n.detach()
            }
        }), t.addClass('is-truncated'), l
    };

    function h(i, l, c, f, g) {
        var d = i[0];
        if (!d) return !1;
        var w = n(d),
            b = -1 !== w.indexOf(' ') ? ' ' : '　',
            h = 'letter' == f.wrap ? '' : b,
            a = w.split(h),
            m = -1,
            v = -1,
            u = 0,
            p = a.length - 1;
        for (f.fallbackToLetter && 0 == u && 0 == p && (h = '', a = w.split(h), p = a.length - 1); p >= u && (0 != u || 0 != p);) {
            var T = Math.floor((u + p) / 2);
            if (T == v) break;
            v = T, o(d, a.slice(0, v + 1).join(h) + f.ellipsis), c.children().each(function () {
                e(this).toggle().toggle()
            }), s(c, f) ? (p = v, f.fallbackToLetter && 0 == u && 0 == p && (h = '', a = a[0].split(h), m = -1, v = -1, u = 0, p = a.length - 1)) : (m = v, u = v)
        };
        if (-1 == m || 1 == a.length && 0 == a[0].length) {
            var k = i.parent();
            i.detach();
            var y = g && g.closest(k).length ? g.length : 0;
            k.contents().length > y ? d = t(k.contents().eq(-1 - y), l) : (d = t(k, l, !0), y || k.detach()), d && (w = r(n(d), f), o(d, w), y && g && e(d).parent().append(g))
        } else w = r(a.slice(0, m + 1).join(h), f), o(d, w);
        return !0
    };

    function s(e, i) {
        return e.innerHeight() > i.maxHeight
    };

    function r(i, t) {
        for (; e.inArray(i.slice(-1), t.lastCharacter.remove) > -1;) i = i.slice(0, -1);
        return e.inArray(i.slice(-1), t.lastCharacter.noEllipsis) < 0 && (i += t.ellipsis), i
    };

    function a(e) {
        return {
            width: e.innerWidth(),
            height: e.innerHeight()
        }
    };

    function o(e, i) {
        e.innerText ? e.innerText = i : e.nodeValue ? e.nodeValue = i : e.textContent && (e.textContent = i)
    };

    function n(e) {
        return e.innerText ? e.innerText : e.nodeValue ? e.nodeValue : e.textContent ? e.textContent : ''
    };

    function l(e) {
        do e = e.previousSibling; while (e && 1 !== e.nodeType && 3 !== e.nodeType);
        return e
    };

    function t(i, s, o) {
        var n, r = i && i[0];
        if (r) {
            if (!o) {
                if (3 === r.nodeType) return r;
                if (e.trim(i.text())) return t(i.contents().last(), s)
            };
            for (n = l(r); !n;) {
                if (i = i.parent(), i.is(s) || !i.length) return !1;
                n = l(i[0])
            };
            if (n) return t(e(n), s)
        };
        return !1
    };

    function c(i, t) {
        return i ? 'string' == typeof i ? (i = e(i, t), i.length ? i : !1) : i.jquery ? i : !1 : !1
    };

    function p(e) {
        for (var s = e.innerHeight(), o = ['paddingTop', 'paddingBottom'], t = 0, n = o.length; n > t; t++) {
            var i = parseInt(e.css(o[t]), 10);
            isNaN(i) && (i = 0), s -= i
        };
        return s
    };
    if (!e.fn.dotdotdot) {
        e.fn.dotdotdot = function (i) {
            if (0 == this.length) return e.fn.dotdotdot.debug('No element found for "' + this.selector + '".'), this;
            if (this.length > 1) return this.each(function () {
                e(this).dotdotdot(i)
            });
            var t = this;
            t.data('dotdotdot') && t.trigger('destroy.dot'), t.data('dotdotdot-style', t.attr('style') || ''), t.css('word-wrap', 'break-word'), 'nowrap' === t.css('white-space') && t.css('white-space', 'normal'), t.bind_events = function () {
                return t.bind('update.dot', function (i, a) {
                    switch (t.removeClass('is-truncated'), i.preventDefault(), i.stopPropagation(), typeof o.height) {
                    case 'number':
                        o.maxHeight = o.height;
                        break;
                    case 'function':
                        o.maxHeight = o.height.call(t[0]);
                        break;
                    default:
                        o.maxHeight = p(t)
                    };
                    o.maxHeight += o.tolerance, 'undefined' != typeof a && (('string' == typeof a || 'nodeType' in a && 1 === a.nodeType) && (a = e('<div />').append(a).contents()), a instanceof e && (r = a)), l = t.wrapInner('<div class="dotdotdot" />').children(), l.contents().detach().end().append(r.clone(!0)).find('br').replaceWith('<br />').end().css({
                        height: 'auto',
                        width: 'auto',
                        border: 'none',
                        padding: 0,
                        margin: 0
                    });
                    var f = !1,
                        c = !1;
                    return n.afterElement && (f = n.afterElement.clone(!0), f.show(), n.afterElement.detach()), s(l, o) && (c = 'children' == o.wrap ? u(l, o, f) : d(l, t, l, o, f)), l.replaceWith(l.contents()), l = null, e.isFunction(o.callback) && o.callback.call(t[0], c, r), n.isTruncated = c, c
                }).bind('isTruncated.dot', function (e, i) {
                    return e.preventDefault(), e.stopPropagation(), 'function' == typeof i && i.call(t[0], n.isTruncated), n.isTruncated
                }).bind('originalContent.dot', function (e, i) {
                    return e.preventDefault(), e.stopPropagation(), 'function' == typeof i && i.call(t[0], r), r
                }).bind('destroy.dot', function (e) {
                    e.preventDefault(), e.stopPropagation(), t.unwatch().unbind_events().contents().detach().end().append(r).attr('style', t.data('dotdotdot-style') || '').data('dotdotdot', !1)
                }), t
            }, t.unbind_events = function () {
                return t.unbind('.dot'), t
            }, t.watch = function () {
                if (t.unwatch(), 'window' == o.watch) {
                    var i = e(window),
                        l = i.width(),
                        s = i.height();
                    i.bind('resize.dot' + n.dotId, function () {
                        l == i.width() && s == i.height() && o.windowResizeFix || (l = i.width(), s = i.height(), f && clearInterval(f), f = setTimeout(function () {
                            t.trigger('update.dot')
                        }, 100))
                    })
                } else h = a(t), f = setInterval(function () {
                    if (t.is(':visible')) {
                        var e = a(t);
                        (h.width != e.width || h.height != e.height) && (t.trigger('update.dot'), h = e)
                    }
                }, 500);
                return t
            }, t.unwatch = function () {
                return e(window).unbind('resize.dot' + n.dotId), f && clearInterval(f), t
            };
            var r = t.contents(),
                o = e.extend(!0, {}, e.fn.dotdotdot.defaults, i),
                n = {},
                h = {},
                f = null,
                l = null;
            return o.lastCharacter.remove instanceof Array || (o.lastCharacter.remove = e.fn.dotdotdot.defaultArrays.lastCharacter.remove), o.lastCharacter.noEllipsis instanceof Array || (o.lastCharacter.noEllipsis = e.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis), n.afterElement = c(o.after, t), n.isTruncated = !1, n.dotId = v++, t.data('dotdotdot', !0).bind_events().trigger('update.dot'), o.watch && t.watch(), t
        }, e.fn.dotdotdot.defaults = {
            ellipsis: '... ',
            wrap: 'word',
            fallbackToLetter: !0,
            lastCharacter: {},
            tolerance: 0,
            callback: null,
            after: null,
            height: null,
            watch: !1,
            windowResizeFix: !0
        }, e.fn.dotdotdot.defaultArrays = {
            lastCharacter: {
                remove: [' ', '　', ',', ';', '.', '!', '?'],
                noEllipsis: []
            }
        }, e.fn.dotdotdot.debug = function () {};
        var v = 1,
            w = e.fn.html;
        e.fn.html = function (t) {
            return t != i && !e.isFunction(t) && this.data('dotdotdot') ? this.trigger('update', [t]) : w.apply(this, arguments)
        };
        var f = e.fn.text;
        e.fn.text = function (t) {
            return t != i && !e.isFunction(t) && this.data('dotdotdot') ? (t = e('<div />').text(t).html(), this.trigger('update', [t])) : f.apply(this, arguments)
        }
    }
}(jQuery);
var limit = 7,
    now_page = 1,
    adapH = !1,
    ArrowMainShow = !1;
$(document).ready(function () {
    mobileLineAppVisible();
    $(window).resize(function () {
        mobileLineAppVisible()
    });
    $('.bx_popup_shield').hide();
    if ($('#mode_get_list').size() > 0 && $('#mode_get_list').val() == 'news_list') {
        getItem(1);
        $('.load_more').click(function () {
            now_page = $('#now_page').val();
            getItem(now_page)
        })
    } else {
        initAdaptiveHeight();
        initSlide();
        $('.text_fd img').addClass('img-responsive')
    };
    $('.sub_hero_banner').on('click', function (e, i, t) {
        e.preventDefault();
        $('.slider-for').slick('slickGoTo', $(this).attr('data-slick-index'));
        $('.sub_hero_banner').removeClass('slick-current');
        $(this).addClass('slick-current');
        $('.thumb-dim').removeClass('active');
        $('.slick-current .thumb-dim').addClass('active')
    });
    $('.body-news').delegate('.link-news--detail', 'click', function (e) {
        e.preventDefault();
        window.location.href = $(this).attr('data-link')
    });
    $('.news_item_child--title, .news_item_first--title').dotdotdot();
    $('.c_box_more_text--title').dotdotdot();
    $(window).resize(function () {
        initAdaptiveHeight()
    });
    if ($('.c_box_more--content .link_more_news').size() > 0) {
        $('.c_box_more--content .link_more_news').each(function () {})
    }
});
$(window).resize(function () {
    $('.news_item_child--title, .news_item_first--title').dotdotdot();
    $('.c_box_more_text--title').dotdotdot()
});

function mobileLineAppVisible() {
    if ($(window).width() < 768) {
        $('.c_box_link_socials.s_line').show()
    } else {
        $('.c_box_link_socials.s_line').hide()
    }
};

function initAdaptiveHeight() {
    if ($(window).width() < 768) {
        $('.slider-nav').hide();
        adapH = !0;
        ArrowMainShow = !0;
        $('.btn_slide_for--next').show();
        $('.btn_slide_for--prev').show()
    } else {
        $('.slider-nav').show();
        adapH = !1;
        ArrowMainShow = !1;
        $('.btn_slide_for--next').hide();
        $('.btn_slide_for--prev').hide()
    }
};

function initSlide() {
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: ArrowMainShow,
        fade: !0,
        adaptiveHeight: adapH,
        prevArrow: '<div class="glyphicon glyphicon-menu-left btn_slide_for--prev"></div>',
        nextArrow: '<div class="glyphicon glyphicon-menu-right btn_slide_for--next"></div>'
    });
    $('.slider-nav').slick({
        slidesToShow: 7,
        slidesToScroll: 1,
        dots: !1,
        centerMode: !1,
        centerPadding: '0px',
        focusOnSelect: !1,
        prevArrow: '<div class="glyphicon glyphicon-menu-left btn_slide--prev"></div>',
        nextArrow: '<div class="glyphicon glyphicon-menu-right btn_slide--next"></div>',
        responsive: [{
                breakpoint: 991,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $('.slick-current .thumb-dim').addClass('active')
};

function monthToString(e) {
    var i = e;
    if (e != '' && e != undefined) {
        if (e == 01) {
            i = 'JANUARY'
        } else if (e == 02) {
            i = 'FEBRUARY'
        } else if (e == 03) {
            i = 'MARCH'
        } else if (e == 04) {
            i = 'APRIL'
        } else if (e == 05) {
            i = 'MAY'
        } else if (e == 06) {
            i = 'JUNE'
        } else if (e == 07) {
            i = 'JULY'
        } else if (e == 08) {
            i = 'AUGUST'
        } else if (e == 09) {
            i = 'SEPTEMBER'
        } else if (e == 10) {
            i = 'OCTOBER'
        } else if (e == 11) {
            i = 'NOVEMBER'
        } else if (e == 12) {
            i = 'DECEMBER'
        }
    };
    return i
};

function dateToENG(e) {
    var t = '-',
        a = '';
    if (e != '' && e != undefined) {
        var r = e.split(' '),
            l = r[0],
            i = l.split('-'),
            n = i[2],
            o = i[1],
            s = i[0];
        t = n + '&nbsp;' + monthToString(o) + '&nbsp;' + s
    };
    return t
};

function getItem(e) {
    var o = 'news',
        r = $('#page').val(),
        l = $('#perpage').val(),
        i = '',
        t = '',
        n = '',
        s = 'No data.';
    $('.load_more').css('visibility', 'hidden');
    $('.img_loading').show();
    $.ajax({
        type: 'get',
        url: BASE_LANG + 'list_data_cmd.php',
        data: {
            'cmd': o,
            'page': e,
            'limit': limit,
            'lang': LANG.toUpperCase()
        },
        dataType: 'json',
        success: function (o) {
            var p = o.total,
                n = '',
                l = '',
                r = '',
                a = o.data_list,
                c = '',
                d = '';
            if (a.rs > 0) {
                $('.box-no-data').remove();
                $('#total_item_value').val(o.total);
                $.each(a.data, function (e, i) {
                    var a = i.image_use,
                        o = i.image_use_child,
                        d = i.title,
                        t = i.slug,
                        s = dateToENG(i.news_date);
                    if ($('.news_item').size() == 0) {
                        r = i.news_id;
                        l += '<div class="link-news--detail first" data-link="' + BASE_LANG + 'news_detail/' + r + '/' + encodeURIComponent(t) + '">';
                        l += '<div class="list_news_item first col-xs-12">';
                        l += '<div class="news_item first">';
                        l += '<div class="row row_no_margin">';
                        l += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_first--image">';
                        l += '<div class="dim_read--desc"><div class="helvethaica_x_li dim_read--text first">อ่านรายละเอียด <span class="sprite sprite-white gf"></span></div></div>';
                        l += '<img height="480" width="480" class="image_news" src="' + a + '" alt="' + a + '">';
                        l += '</div>';
                        l += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_first--text">';
                        l += '<div class="news_item_first--box_content">';
                        l += '<div class="helvethaica_xcond_med news_item_first--date">' + s + '</div>';
                        l += '<div class="news_item_first--line"></div>';
                        l += '<div class="helvethaica_x_li news_item_first--title">' + d + '</div>';
                        l += '</div>';
                        l += '</div>';
                        l += '</div>';
                        l += '</div>';
                        l += '</div>';
                        l += '</div>';
                        $('.body-news').html(l)
                    };
                    if (r != i.news_id) {
                        n += '<div class="link-news--detail ' + e + '" data-link="' + BASE_LANG + 'news_detail/' + i.news_id + '/' + encodeURIComponent(t) + '">';
                        n += '<div class="list_news_item col-xs-12 col-sm-6">';
                        n += '<div class="news_item ">';
                        n += '<div class="row row_no_margin">';
                        n += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_child--image">';
                        n += '<div class="dim_read--desc active"><div class="helvethaica_x_li dim_read--text">อ่านรายละเอียด <span class="sprite sprite-white gf"></span></div></div>';
                        n += '<img width="240" height="240" class="image_news" src="' + o + '" alt="' + o + '">';
                        n += '</div>';
                        n += '<div class="col-xs-12 col-sm-6 col-md-6 col-lg-6 col_no_padding news_item_child--text">';
                        n += '<div class="news_item_child--box_content">';
                        n += '<div class="helvethaica_xcond_med news_item_child--date">' + s + '</div>';
                        n += '<div class="news_item_child--line"></div>';
                        n += '<div class="helvethaica_x_li news_item_child--title">' + d + '</div>';
                        n += '</div>';
                        n += '</div>';
                        n += '</div>';
                        n += '</div>';
                        n += '</div>';
                        n += '</div>'
                    }
                });
                $('.link-news--detail:last').after(n);
                $('.link-news--detail:not(.first)').each(function (e, i) {
                    var t = e % 4;
                    if ((e % 2) == 0) {
                        $(this).find('.list_news_item').addClass('event');
                        $(this).addClass('event')
                    } else {
                        $(this).find('.list_news_item').addClass('odd');
                        $(this).addClass('odd')
                    };
                    if (t == 2 || t == 3) {
                        $(this).addClass('l')
                    } else {
                        $(this).addClass('r')
                    }
                });
                e++;
                $('#now_page').val(e);
                t = $('.news_item').size();
                i = $('#total_item_value').val();
                $('.news_item_child--title, .news_item_first--title').dotdotdot()
            } else {
                $('.box-no-data').remove();
                n += '<div class="box-no-data">';
                n += '<div class="news_item_no_data">';
                n += '<div class="no-data">' + s + '</div>';
                n += '</div>';
                n += '</div>'
            };
            $('.load_more').css('visibility', 'visible');
            $('.img_loading').hide();
            if (t < i) {
                $('.load_more').css('visibility', 'visible')
            } else {
                $('.load_more').css('visibility', 'hidden')
            }
        }
    })
};

function isOdd(e) {
    return e % 2
};
