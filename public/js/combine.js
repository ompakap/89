!function(t) {
    'use strict';
    'function' == typeof define && define.amd ? define(['jquery'], t) : 'undefined' != typeof exports ? module.exports = t(require('jquery')) : t(jQuery)
}(function(t) {
    'use strict';
    var e = window.Slick || {};
    e = function() {
        function e(e, o) {
            var a, n, r, s = this;
            if (s.defaults = {
                accessibility: !0,
                adaptiveHeight: !1,
                appendArrows: t(e),
                appendDots: t(e),
                arrows: !0,
                asNavFor: null ,
                prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
                nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
                autoplay: !1,
                autoplaySpeed: 3e3,
                centerMode: !1,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(t, e) {
                    return '<button type="button" data-role="none">' + (e + 1) + '</button>'
                },
                dots: !1,
                dotsClass: 'slick-dots',
                draggable: !0,
                easing: 'linear',
                edgeFriction: .35,
                fade: !1,
                focusOnSelect: !1,
                infinite: !0,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: !1,
                pauseOnHover: !0,
                pauseOnDotsHover: !1,
                respondTo: 'window',
                responsive: null ,
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
                waitForAnimate: !0
            },
            s.initials = {
                animating: !1,
                dragging: !1,
                autoPlayTimer: null ,
                currentDirection: 0,
                currentLeft: null ,
                currentSlide: 0,
                direction: 1,
                $dots: null ,
                listWidth: null ,
                listHeight: null ,
                loadIndex: 0,
                $nextArrow: null ,
                $prevArrow: null ,
                slideCount: null ,
                slideWidth: null ,
                $slideTrack: null ,
                $slides: null ,
                sliding: !1,
                slideOffset: 0,
                swipeLeft: null ,
                $list: null ,
                touchObject: {},
                transformsEnabled: !1,
                unslicked: !1
            },
            t.extend(s, s.initials),
            s.activeBreakpoint = null ,
            s.animType = null ,
            s.animProp = null ,
            s.breakpoints = [],
            s.breakpointSettings = [],
            s.cssTransitions = !1,
            s.hidden = 'hidden',
            s.paused = !1,
            s.positionProp = null ,
            s.respondTo = null ,
            s.rowCount = 1,
            s.shouldClick = !0,
            s.$slider = t(e),
            s.$slidesCache = null ,
            s.transformType = null ,
            s.transitionType = null ,
            s.visibilityChange = 'visibilitychange',
            s.windowWidth = 0,
            s.windowTimer = null ,
            a = t(e).data('slick') || {},
            s.options = t.extend({}, s.defaults, a, o),
            s.currentSlide = s.options.initialSlide,
            s.originalSettings = s.options,
            n = s.options.responsive || null ,
            n && n.length > -1) {
                s.respondTo = s.options.respondTo || 'window';
                for (r in n)
                    n.hasOwnProperty(r) && (s.breakpoints.push(n[r].breakpoint),
                    s.breakpointSettings[n[r].breakpoint] = n[r].settings);
                s.breakpoints.sort(function(t, e) {
                    return s.options.mobileFirst === !0 ? t - e : e - t
                })
            }
            ;'undefined' != typeof document.mozHidden ? (s.hidden = 'mozHidden',
            s.visibilityChange = 'mozvisibilitychange') : 'undefined' != typeof document.webkitHidden && (s.hidden = 'webkitHidden',
            s.visibilityChange = 'webkitvisibilitychange'),
            s.autoPlay = t.proxy(s.autoPlay, s),
            s.autoPlayClear = t.proxy(s.autoPlayClear, s),
            s.changeSlide = t.proxy(s.changeSlide, s),
            s.clickHandler = t.proxy(s.clickHandler, s),
            s.selectHandler = t.proxy(s.selectHandler, s),
            s.setPosition = t.proxy(s.setPosition, s),
            s.swipeHandler = t.proxy(s.swipeHandler, s),
            s.dragHandler = t.proxy(s.dragHandler, s),
            s.keyHandler = t.proxy(s.keyHandler, s),
            s.autoPlayIterator = t.proxy(s.autoPlayIterator, s),
            s.instanceUid = i++,
            s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/,
            s.init(!0),
            s.checkResponsive(!0)
        }
        ;var i = 0;
        return e
    }(),
    e.prototype.addSlide = e.prototype.slickAdd = function(e, i, o) {
        var s = this;
        if ('boolean' == typeof i)
            o = i,
            i = null ;
        else if (0 > i || i >= s.slideCount)
            return !1;
        s.unload(),
        'number' == typeof i ? 0 === i && 0 === s.$slides.length ? t(e).appendTo(s.$slideTrack) : o ? t(e).insertBefore(s.$slides.eq(i)) : t(e).insertAfter(s.$slides.eq(i)) : o === !0 ? t(e).prependTo(s.$slideTrack) : t(e).appendTo(s.$slideTrack),
        s.$slides = s.$slideTrack.children(this.options.slide),
        s.$slideTrack.children(this.options.slide).detach(),
        s.$slideTrack.append(s.$slides),
        s.$slides.each(function(e, i) {
            t(i).attr('data-slick-index', e)
        }),
        s.$slidesCache = s.$slides,
        s.reinit()
    }
    ,
    e.prototype.animateHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({
                height: e
            }, t.options.speed)
        }
    }
    ,
    e.prototype.animateSlide = function(e, i) {
        var s = {}
          , o = this;
        o.animateHeight(),
        o.options.rtl === !0 && o.options.vertical === !1 && (e = -e),
        o.transformsEnabled === !1 ? o.options.vertical === !1 ? o.$slideTrack.animate({
            left: e
        }, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({
            top: e
        }, o.options.speed, o.options.easing, i) : o.cssTransitions === !1 ? (o.options.rtl === !0 && (o.currentLeft = -o.currentLeft),
        t({
            animStart: o.currentLeft
        }).animate({
            animStart: e
        }, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function(t) {
                t = Math.ceil(t),
                o.options.vertical === !1 ? (s[o.animType] = 'translate(' + t + 'px, 0px)',
                o.$slideTrack.css(s)) : (s[o.animType] = 'translate(0px,' + t + 'px)',
                o.$slideTrack.css(s))
            },
            complete: function() {
                i && i.call()
            }
        })) : (o.applyTransition(),
        e = Math.ceil(e),
        o.options.vertical === !1 ? s[o.animType] = 'translate3d(' + e + 'px, 0px, 0px)' : s[o.animType] = 'translate3d(0px,' + e + 'px, 0px)',
        o.$slideTrack.css(s),
        i && setTimeout(function() {
            o.disableTransition(),
            i.call()
        }, o.options.speed))
    }
    ,
    e.prototype.asNavFor = function(e) {
        var o = this
          , i = o.options.asNavFor;
        i && null !== i && (i = t(i).not(o.$slider)),
        null !== i && 'object' == typeof i && i.each(function() {
            var i = t(this).slick('getSlick');
            i.unslicked || i.slideHandler(e, !0)
        })
    }
    ,
    e.prototype.applyTransition = function(t) {
        var e = this
          , i = {};
        e.options.fade === !1 ? i[e.transitionType] = e.transformType + ' ' + e.options.speed + 'ms ' + e.options.cssEase : i[e.transitionType] = 'opacity ' + e.options.speed + 'ms ' + e.options.cssEase,
        e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.autoPlay = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer),
        t.slideCount > t.options.slidesToShow && t.paused !== !0 && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }
    ,
    e.prototype.autoPlayClear = function() {
        var t = this;
        t.autoPlayTimer && clearInterval(t.autoPlayTimer)
    }
    ,
    e.prototype.autoPlayIterator = function() {
        var t = this;
        t.options.infinite === !1 ? 1 === t.direction ? (t.currentSlide + 1 === t.slideCount - 1 && (t.direction = 0),
        t.slideHandler(t.currentSlide + t.options.slidesToScroll)) : (t.currentSlide - 1 === 0 && (t.direction = 1),
        t.slideHandler(t.currentSlide - t.options.slidesToScroll)) : t.slideHandler(t.currentSlide + t.options.slidesToScroll)
    }
    ,
    e.prototype.buildArrows = function() {
        var e = this;
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow = t(e.options.prevArrow),
        e.$nextArrow = t(e.options.nextArrow),
        e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.appendTo(e.options.appendArrows),
        e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows),
        e.options.infinite !== !0 && e.$prevArrow.addClass('slick-disabled'))
    }
    ,
    e.prototype.buildDots = function() {
        var o, i, e = this;
        if (e.options.dots === !0 && e.slideCount > e.options.slidesToShow) {
            for (i = '<ul class="' + e.options.dotsClass + '">',
            o = 0; o <= e.getDotCount(); o += 1)
                i += '<li>' + e.options.customPaging.call(this, e, o) + '</li>';
            i += '</ul>',
            e.$dots = t(i).appendTo(e.options.appendDots),
            e.$dots.find('li').first().addClass('slick-active').attr('aria-hidden', 'false')
        }
    }
    ,
    e.prototype.buildOut = function() {
        var e = this;
        e.$slides = e.$slider.children(':not(.slick-cloned)').addClass('slick-slide'),
        e.slideCount = e.$slides.length,
        e.$slides.each(function(e, i) {
            t(i).attr('data-slick-index', e).data('originalStyling', t(i).attr('style') || '')
        }),
        e.$slidesCache = e.$slides,
        e.$slider.addClass('slick-slider'),
        e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(),
        e.$list = e.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(),
        e.$slideTrack.css('opacity', 0),
        (e.options.centerMode === !0 || e.options.swipeToSlide === !0) && (e.options.slidesToScroll = 1),
        t('img[data-lazy]', e.$slider).not('[src]').addClass('slick-loading'),
        e.setupInfinite(),
        e.buildArrows(),
        e.buildDots(),
        e.updateDots(),
        e.options.accessibility === !0 && e.$list.prop('tabIndex', 0),
        e.setSlideClasses('number' == typeof this.currentSlide ? this.currentSlide : 0),
        e.options.draggable === !0 && e.$list.addClass('draggable')
    }
    ,
    e.prototype.buildRows = function() {
        var s, i, o, n, l, e, r, t = this;
        if (n = document.createDocumentFragment(),
        e = t.$slider.children(),
        t.options.rows > 1) {
            for (r = t.options.slidesPerRow * t.options.rows,
            l = Math.ceil(e.length / r),
            s = 0; l > s; s++) {
                var d = document.createElement('div');
                for (i = 0; i < t.options.rows; i++) {
                    var a = document.createElement('div');
                    for (o = 0; o < t.options.slidesPerRow; o++) {
                        var c = s * r + (i * t.options.slidesPerRow + o);
                        e.get(c) && a.appendChild(e.get(c))
                    }
                    ;d.appendChild(a)
                }
                ;n.appendChild(d)
            }
            ;t.$slider.html(n),
            t.$slider.children().children().children().width(100 / t.options.slidesPerRow + '%').css({
                display: 'inline-block'
            })
        }
    }
    ,
    e.prototype.checkResponsive = function(e) {
        var s, o, r, i = this, n = !1, l = i.$slider.width(), a = window.innerWidth || t(window).width();
        if ('window' === i.respondTo ? r = a : 'slider' === i.respondTo ? r = l : 'min' === i.respondTo && (r = Math.min(a, l)),
        i.originalSettings.responsive && i.originalSettings.responsive.length > -1 && null !== i.originalSettings.responsive) {
            o = null ;
            for (s in i.breakpoints)
                i.breakpoints.hasOwnProperty(s) && (i.originalSettings.mobileFirst === !1 ? r < i.breakpoints[s] && (o = i.breakpoints[s]) : r > i.breakpoints[s] && (o = i.breakpoints[s]));
            null !== o ? null !== i.activeBreakpoint ? o !== i.activeBreakpoint && (i.activeBreakpoint = o,
            'unslick' === i.breakpointSettings[o] ? i.unslick(o) : (i.options = t.extend({}, i.originalSettings, i.breakpointSettings[o]),
            e === !0 && (i.currentSlide = i.options.initialSlide),
            i.refresh(e)),
            n = o) : (i.activeBreakpoint = o,
            'unslick' === i.breakpointSettings[o] ? i.unslick(o) : (i.options = t.extend({}, i.originalSettings, i.breakpointSettings[o]),
            e === !0 && (i.currentSlide = i.options.initialSlide),
            i.refresh(e)),
            n = o) : null !== i.activeBreakpoint && (i.activeBreakpoint = null ,
            i.options = i.originalSettings,
            e === !0 && (i.currentSlide = i.options.initialSlide),
            i.refresh(e),
            n = o),
            e || n === !1 || i.$slider.trigger('breakpoint', [i, n])
        }
    }
    ,
    e.prototype.changeSlide = function(e, i) {
        var n, r, a, o = this, s = t(e.target);
        switch (s.is('a') && e.preventDefault(),
        s.is('li') || (s = s.closest('li')),
        a = o.slideCount % o.options.slidesToScroll !== 0,
        n = a ? 0 : (o.slideCount - o.currentSlide) % o.options.slidesToScroll,
        e.data.message) {
        case 'previous':
            r = 0 === n ? o.options.slidesToScroll : o.options.slidesToShow - n,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide - r, !1, i);
            break;
        case 'next':
            r = 0 === n ? o.options.slidesToScroll : n,
            o.slideCount > o.options.slidesToShow && o.slideHandler(o.currentSlide + r, !1, i);
            break;
        case 'index':
            var l = 0 === e.data.index ? 0 : e.data.index || s.index() * o.options.slidesToScroll;
            o.slideHandler(o.checkNavigable(l), !1, i),
            s.children().trigger('focus');
            break;
        default:
            return
        }
    }
    ,
    e.prototype.checkNavigable = function(t) {
        var e, i, s = this;
        if (e = s.getNavigableIndexes(),
        i = 0,
        t > e[e.length - 1])
            t = e[e.length - 1];
        else
            for (var o in e) {
                if (t < e[o]) {
                    t = i;
                    break
                }
                ;i = e[o]
            }
        ;return t
    }
    ,
    e.prototype.cleanUpEvents = function() {
        var e = this;
        e.options.dots && null !== e.$dots && (t('li', e.$dots).off('click.slick', e.changeSlide),
        e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t('li', e.$dots).off('mouseenter.slick', t.proxy(e.setPaused, e, !0)).off('mouseleave.slick', t.proxy(e.setPaused, e, !1))),
        e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off('click.slick', e.changeSlide),
        e.$nextArrow && e.$nextArrow.off('click.slick', e.changeSlide)),
        e.$list.off('touchstart.slick mousedown.slick', e.swipeHandler),
        e.$list.off('touchmove.slick mousemove.slick', e.swipeHandler),
        e.$list.off('touchend.slick mouseup.slick', e.swipeHandler),
        e.$list.off('touchcancel.slick mouseleave.slick', e.swipeHandler),
        e.$list.off('click.slick', e.clickHandler),
        t(document).off(e.visibilityChange, e.visibility),
        e.$list.off('mouseenter.slick', t.proxy(e.setPaused, e, !0)),
        e.$list.off('mouseleave.slick', t.proxy(e.setPaused, e, !1)),
        e.options.accessibility === !0 && e.$list.off('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().off('click.slick', e.selectHandler),
        t(window).off('orientationchange.slick.slick-' + e.instanceUid, e.orientationChange),
        t(window).off('resize.slick.slick-' + e.instanceUid, e.resize),
        t('[draggable!=true]', e.$slideTrack).off('dragstart', e.preventDefault),
        t(window).off('load.slick.slick-' + e.instanceUid, e.setPosition),
        t(document).off('ready.slick.slick-' + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.cleanUpRows = function() {
        var e, t = this;
        t.options.rows > 1 && (e = t.$slides.children().children(),
        e.removeAttr('style'),
        t.$slider.html(e))
    }
    ,
    e.prototype.clickHandler = function(t) {
        var e = this;
        e.shouldClick === !1 && (t.stopImmediatePropagation(),
        t.stopPropagation(),
        t.preventDefault())
    }
    ,
    e.prototype.destroy = function() {
        var e = this;
        e.autoPlayClear(),
        e.touchObject = {},
        e.cleanUpEvents(),
        t('.slick-cloned', e.$slider).detach(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && 'object' != typeof e.options.prevArrow && e.$prevArrow.remove(),
        e.$nextArrow && 'object' != typeof e.options.nextArrow && e.$nextArrow.remove(),
        e.$slides && (e.$slides.removeClass('slick-slide slick-active slick-center slick-visible').removeAttr('aria-hidden').removeAttr('data-slick-index').each(function() {
            t(this).attr('style', t(this).data('originalStyling'))
        }),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slideTrack.detach(),
        e.$list.detach(),
        e.$slider.append(e.$slides)),
        e.cleanUpRows(),
        e.$slider.removeClass('slick-slider'),
        e.$slider.removeClass('slick-initialized'),
        e.unslicked = !0
    }
    ,
    e.prototype.disableTransition = function(t) {
        var e = this
          , i = {};
        i[e.transitionType] = '',
        e.options.fade === !1 ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }
    ,
    e.prototype.fadeSlide = function(t, e) {
        var i = this;
        i.cssTransitions === !1 ? (i.$slides.eq(t).css({
            zIndex: 1e3
        }),
        i.$slides.eq(t).animate({
            opacity: 1
        }, i.options.speed, i.options.easing, e)) : (i.applyTransition(t),
        i.$slides.eq(t).css({
            opacity: 1,
            zIndex: 1e3
        }),
        e && setTimeout(function() {
            i.disableTransition(t),
            e.call()
        }, i.options.speed))
    }
    ,
    e.prototype.filterSlides = e.prototype.slickFilter = function(t) {
        var e = this;
        null !== t && (e.unload(),
        e.$slideTrack.children(this.options.slide).detach(),
        e.$slidesCache.filter(t).appendTo(e.$slideTrack),
        e.reinit())
    }
    ,
    e.prototype.getCurrent = e.prototype.slickCurrentSlide = function() {
        var t = this;
        return t.currentSlide
    }
    ,
    e.prototype.getDotCount = function() {
        var t = this
          , i = 0
          , o = 0
          , e = 0;
        if (t.options.infinite === !0)
            for (; i < t.slideCount; )
                ++e,
                i = o + t.options.slidesToShow,
                o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        else if (t.options.centerMode === !0)
            e = t.slideCount;
        else
            for (; i < t.slideCount; )
                ++e,
                i = o + t.options.slidesToShow,
                o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return e - 1
    }
    ,
    e.prototype.getLeft = function(t) {
        var n, s, i, e = this, o = 0;
        return e.slideOffset = 0,
        s = e.$slides.first().outerHeight(),
        e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1,
        o = s * e.options.slidesToShow * -1),
        e.slideCount % e.options.slidesToScroll !== 0 && t + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (t > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (t - e.slideCount)) * e.slideWidth * -1,
        o = (e.options.slidesToShow - (t - e.slideCount)) * s * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1,
        o = e.slideCount % e.options.slidesToScroll * s * -1))) : t + e.options.slidesToShow > e.slideCount && (e.slideOffset = (t + e.options.slidesToShow - e.slideCount) * e.slideWidth,
        o = (t + e.options.slidesToShow - e.slideCount) * s),
        e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0,
        o = 0),
        e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0,
        e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)),
        n = e.options.vertical === !1 ? t * e.slideWidth * -1 + e.slideOffset : t * s * -1 + o,
        e.options.variableWidth === !0 && (i = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children('.slick-slide').eq(t) : e.$slideTrack.children('.slick-slide').eq(t + e.options.slidesToShow),
        n = i[0] ? -1 * i[0].offsetLeft : 0,
        e.options.centerMode === !0 && (i = e.options.infinite === !1 ? e.$slideTrack.children('.slick-slide').eq(t) : e.$slideTrack.children('.slick-slide').eq(t + e.options.slidesToShow + 1),
        n = i[0] ? -1 * i[0].offsetLeft : 0,
        n += (e.$list.width() - i.outerWidth()) / 2)),
        n
    }
    ,
    e.prototype.getOption = e.prototype.slickGetOption = function(t) {
        var e = this;
        return e.options[t]
    }
    ,
    e.prototype.getNavigableIndexes = function() {
        var i, t = this, e = 0, o = 0, s = [];
        for (t.options.infinite === !1 ? i = t.slideCount : (e = -1 * t.options.slidesToScroll,
        o = -1 * t.options.slidesToScroll,
        i = 2 * t.slideCount); i > e; )
            s.push(e),
            e = o + t.options.slidesToScroll,
            o += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow;
        return s
    }
    ,
    e.prototype.getSlick = function() {
        return this
    }
    ,
    e.prototype.getSlideCount = function() {
        var s, o, i, e = this;
        return i = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0,
        e.options.swipeToSlide === !0 ? (e.$slideTrack.find('.slick-slide').each(function(s, n) {
            return n.offsetLeft - i + t(n).outerWidth() / 2 > -1 * e.swipeLeft ? (o = n,
            !1) : void 0
        }),
        s = Math.abs(t(o).attr('data-slick-index') - e.currentSlide) || 1) : e.options.slidesToScroll
    }
    ,
    e.prototype.goTo = e.prototype.slickGoTo = function(t, e) {
        var i = this;
        i.changeSlide({
            data: {
                message: 'index',
                index: parseInt(t)
            }
        }, e)
    }
    ,
    e.prototype.init = function(e) {
        var i = this;
        t(i.$slider).hasClass('slick-initialized') || (t(i.$slider).addClass('slick-initialized'),
        i.buildRows(),
        i.buildOut(),
        i.setProps(),
        i.startLoad(),
        i.loadSlider(),
        i.initializeEvents(),
        i.updateArrows(),
        i.updateDots()),
        e && i.$slider.trigger('init', [i])
    }
    ,
    e.prototype.initArrowEvents = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.on('click.slick', {
            message: 'previous'
        }, t.changeSlide),
        t.$nextArrow.on('click.slick', {
            message: 'next'
        }, t.changeSlide))
    }
    ,
    e.prototype.initDotEvents = function() {
        var e = this;
        e.options.dots === !0 && e.slideCount > e.options.slidesToShow && t('li', e.$dots).on('click.slick', {
            message: 'index'
        }, e.changeSlide),
        e.options.dots === !0 && e.options.pauseOnDotsHover === !0 && e.options.autoplay === !0 && t('li', e.$dots).on('mouseenter.slick', t.proxy(e.setPaused, e, !0)).on('mouseleave.slick', t.proxy(e.setPaused, e, !1))
    }
    ,
    e.prototype.initializeEvents = function() {
        var e = this;
        e.initArrowEvents(),
        e.initDotEvents(),
        e.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, e.swipeHandler),
        e.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, e.swipeHandler),
        e.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, e.swipeHandler),
        e.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, e.swipeHandler),
        e.$list.on('click.slick', e.clickHandler),
        t(document).on(e.visibilityChange, t.proxy(e.visibility, e)),
        e.$list.on('mouseenter.slick', t.proxy(e.setPaused, e, !0)),
        e.$list.on('mouseleave.slick', t.proxy(e.setPaused, e, !1)),
        e.options.accessibility === !0 && e.$list.on('keydown.slick', e.keyHandler),
        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on('click.slick', e.selectHandler),
        t(window).on('orientationchange.slick.slick-' + e.instanceUid, t.proxy(e.orientationChange, e)),
        t(window).on('resize.slick.slick-' + e.instanceUid, t.proxy(e.resize, e)),
        t('[draggable!=true]', e.$slideTrack).on('dragstart', e.preventDefault),
        t(window).on('load.slick.slick-' + e.instanceUid, e.setPosition),
        t(document).on('ready.slick.slick-' + e.instanceUid, e.setPosition)
    }
    ,
    e.prototype.initUI = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(),
        t.$nextArrow.show()),
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.show(),
        t.options.autoplay === !0 && t.autoPlay()
    }
    ,
    e.prototype.keyHandler = function(t) {
        var e = this;
        37 === t.keyCode && e.options.accessibility === !0 ? e.changeSlide({
            data: {
                message: 'previous'
            }
        }) : 39 === t.keyCode && e.options.accessibility === !0 && e.changeSlide({
            data: {
                message: 'next'
            }
        })
    }
    ,
    e.prototype.lazyLoad = function() {
        function n(e) {
            t('img[data-lazy]', e).each(function() {
                var o = t(this)
                  , i = t(this).attr('data-lazy')
                  , e = document.createElement('img');
                e.onload = function() {
                    o.animate({
                        opacity: 1
                    }, 200)
                }
                ,
                e.src = i,
                o.css({
                    opacity: 0
                }).attr('src', i).removeAttr('data-lazy').removeClass('slick-loading')
            })
        }
        ;var r, o, i, s, e = this;
        e.options.centerMode === !0 ? e.options.infinite === !0 ? (i = e.currentSlide + (e.options.slidesToShow / 2 + 1),
        s = i + e.options.slidesToShow + 2) : (i = Math.max(0, e.currentSlide - (e.options.slidesToShow / 2 + 1)),
        s = 2 + (e.options.slidesToShow / 2 + 1) + e.currentSlide) : (i = e.options.infinite ? e.options.slidesToShow + e.currentSlide : e.currentSlide,
        s = i + e.options.slidesToShow,
        e.options.fade === !0 && (i > 0 && i--,
        s <= e.slideCount && s++)),
        r = e.$slider.find('.slick-slide').slice(i, s),
        n(r),
        e.slideCount <= e.options.slidesToShow ? (o = e.$slider.find('.slick-slide'),
        n(o)) : e.currentSlide >= e.slideCount - e.options.slidesToShow ? (o = e.$slider.find('.slick-cloned').slice(0, e.options.slidesToShow),
        n(o)) : 0 === e.currentSlide && (o = e.$slider.find('.slick-cloned').slice(-1 * e.options.slidesToShow),
        n(o))
    }
    ,
    e.prototype.loadSlider = function() {
        var t = this;
        t.setPosition(),
        t.$slideTrack.css({
            opacity: 1
        }),
        t.$slider.removeClass('slick-loading'),
        t.initUI(),
        'progressive' === t.options.lazyLoad && t.progressiveLazyLoad()
    }
    ,
    e.prototype.next = e.prototype.slickNext = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: 'next'
            }
        })
    }
    ,
    e.prototype.orientationChange = function() {
        var t = this;
        t.checkResponsive(),
        t.setPosition()
    }
    ,
    e.prototype.pause = e.prototype.slickPause = function() {
        var t = this;
        t.autoPlayClear(),
        t.paused = !0
    }
    ,
    e.prototype.play = e.prototype.slickPlay = function() {
        var t = this;
        t.paused = !1,
        t.autoPlay()
    }
    ,
    e.prototype.postSlide = function(t) {
        var e = this;
        e.$slider.trigger('afterChange', [e, t]),
        e.animating = !1,
        e.setPosition(),
        e.swipeLeft = null ,
        e.options.autoplay === !0 && e.paused === !1 && e.autoPlay()
    }
    ,
    e.prototype.prev = e.prototype.slickPrev = function() {
        var t = this;
        t.changeSlide({
            data: {
                message: 'previous'
            }
        })
    }
    ,
    e.prototype.preventDefault = function(t) {
        t.preventDefault()
    }
    ,
    e.prototype.progressiveLazyLoad = function() {
        var o, i, e = this;
        o = t('img[data-lazy]', e.$slider).length,
        o > 0 && (i = t('img[data-lazy]', e.$slider).first(),
        i.attr('src', i.attr('data-lazy')).removeClass('slick-loading').load(function() {
            i.removeAttr('data-lazy'),
            e.progressiveLazyLoad(),
            e.options.adaptiveHeight === !0 && e.setPosition()
        }).error(function() {
            i.removeAttr('data-lazy'),
            e.progressiveLazyLoad()
        }))
    }
    ,
    e.prototype.refresh = function(e) {
        var i = this
          , o = i.currentSlide;
        i.destroy(),
        t.extend(i, i.initials),
        i.init(),
        e || i.changeSlide({
            data: {
                message: 'index',
                index: o
            }
        }, !1)
    }
    ,
    e.prototype.reinit = function() {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass('slick-slide'),
        e.slideCount = e.$slides.length,
        e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll),
        e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0),
        e.setProps(),
        e.setupInfinite(),
        e.buildArrows(),
        e.updateArrows(),
        e.initArrowEvents(),
        e.buildDots(),
        e.updateDots(),
        e.initDotEvents(),
        e.options.focusOnSelect === !0 && t(e.$slideTrack).children().on('click.slick', e.selectHandler),
        e.setSlideClasses(0),
        e.setPosition(),
        e.$slider.trigger('reInit', [e])
    }
    ,
    e.prototype.resize = function() {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay),
        e.windowDelay = window.setTimeout(function() {
            e.windowWidth = t(window).width(),
            e.checkResponsive(),
            e.unslicked || e.setPosition()
        }, 50))
    }
    ,
    e.prototype.removeSlide = e.prototype.slickRemove = function(t, e, i) {
        var o = this;
        return 'boolean' == typeof t ? (e = t,
        t = e === !0 ? 0 : o.slideCount - 1) : t = e === !0 ? --t : t,
        o.slideCount < 1 || 0 > t || t > o.slideCount - 1 ? !1 : (o.unload(),
        i === !0 ? o.$slideTrack.children().remove() : o.$slideTrack.children(this.options.slide).eq(t).remove(),
        o.$slides = o.$slideTrack.children(this.options.slide),
        o.$slideTrack.children(this.options.slide).detach(),
        o.$slideTrack.append(o.$slides),
        o.$slidesCache = o.$slides,
        void o.reinit())
    }
    ,
    e.prototype.setCSS = function(t) {
        var s, o, e = this, i = {};
        e.options.rtl === !0 && (t = -t),
        s = 'left' == e.positionProp ? Math.ceil(t) + 'px' : '0px',
        o = 'top' == e.positionProp ? Math.ceil(t) + 'px' : '0px',
        i[e.positionProp] = t,
        e.transformsEnabled === !1 ? e.$slideTrack.css(i) : (i = {},
        e.cssTransitions === !1 ? (i[e.animType] = 'translate(' + s + ', ' + o + ')',
        e.$slideTrack.css(i)) : (i[e.animType] = 'translate3d(' + s + ', ' + o + ', 0px)',
        e.$slideTrack.css(i)))
    }
    ,
    e.prototype.setDimensions = function() {
        var t = this;
        t.options.vertical === !1 ? t.options.centerMode === !0 && t.$list.css({
            padding: '0px ' + t.options.centerPadding
        }) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow),
        t.options.centerMode === !0 && t.$list.css({
            padding: t.options.centerPadding + ' 0px'
        })),
        t.listWidth = t.$list.width(),
        t.listHeight = t.$list.height(),
        t.options.vertical === !1 && t.options.variableWidth === !1 ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow),
        t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children('.slick-slide').length))) : t.options.variableWidth === !0 ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth),
        t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children('.slick-slide').length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        t.options.variableWidth === !1 && t.$slideTrack.children('.slick-slide').width(t.slideWidth - e)
    }
    ,
    e.prototype.setFade = function() {
        var i, e = this;
        e.$slides.each(function(o, s) {
            i = e.slideWidth * o * -1,
            e.options.rtl === !0 ? t(s).css({
                position: 'relative',
                right: i,
                top: 0,
                zIndex: 800,
                opacity: 0
            }) : t(s).css({
                position: 'relative',
                left: i,
                top: 0,
                zIndex: 800,
                opacity: 0
            })
        }),
        e.$slides.eq(e.currentSlide).css({
            zIndex: 900,
            opacity: 1
        })
    }
    ,
    e.prototype.setHeight = function() {
        var t = this;
        if (1 === t.options.slidesToShow && t.options.adaptiveHeight === !0 && t.options.vertical === !1) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css('height', e)
        }
    }
    ,
    e.prototype.setOption = e.prototype.slickSetOption = function(t, e, i) {
        var o = this;
        o.options[t] = e,
        i === !0 && (o.unload(),
        o.reinit())
    }
    ,
    e.prototype.setPosition = function() {
        var t = this;
        t.setDimensions(),
        t.setHeight(),
        t.options.fade === !1 ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(),
        t.$slider.trigger('setPosition', [t])
    }
    ,
    e.prototype.setProps = function() {
        var t = this
          , e = document.body.style;
        t.positionProp = t.options.vertical === !0 ? 'top' : 'left',
        'top' === t.positionProp ? t.$slider.addClass('slick-vertical') : t.$slider.removeClass('slick-vertical'),
        (void 0 !== e.WebkitTransition || void 0 !== e.MozTransition || void 0 !== e.msTransition) && t.options.useCSS === !0 && (t.cssTransitions = !0),
        void 0 !== e.OTransform && (t.animType = 'OTransform',
        t.transformType = '-o-transform',
        t.transitionType = 'OTransition',
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.MozTransform && (t.animType = 'MozTransform',
        t.transformType = '-moz-transform',
        t.transitionType = 'MozTransition',
        void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)),
        void 0 !== e.webkitTransform && (t.animType = 'webkitTransform',
        t.transformType = '-webkit-transform',
        t.transitionType = 'webkitTransition',
        void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)),
        void 0 !== e.msTransform && (t.animType = 'msTransform',
        t.transformType = '-ms-transform',
        t.transitionType = 'msTransition',
        void 0 === e.msTransform && (t.animType = !1)),
        void 0 !== e.transform && t.animType !== !1 && (t.animType = 'transform',
        t.transformType = 'transform',
        t.transitionType = 'transition'),
        t.transformsEnabled = null !== t.animType && t.animType !== !1
    }
    ,
    e.prototype.setSlideClasses = function(t) {
        var s, i, o, n, e = this;
        e.$slider.find('.slick-slide').removeClass('slick-active').attr('aria-hidden', 'true').removeClass('slick-center'),
        i = e.$slider.find('.slick-slide'),
        e.options.centerMode === !0 ? (s = Math.floor(e.options.slidesToShow / 2),
        e.options.infinite === !0 && (t >= s && t <= e.slideCount - 1 - s ? e.$slides.slice(t - s, t + s + 1).addClass('slick-active').attr('aria-hidden', 'false') : (o = e.options.slidesToShow + t,
        i.slice(o - s + 1, o + s + 2).addClass('slick-active').attr('aria-hidden', 'false')),
        0 === t ? i.eq(i.length - 1 - e.options.slidesToShow).addClass('slick-center') : t === e.slideCount - 1 && i.eq(e.options.slidesToShow).addClass('slick-center')),
        e.$slides.eq(t).addClass('slick-center')) : t >= 0 && t <= e.slideCount - e.options.slidesToShow ? e.$slides.slice(t, t + e.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false') : i.length <= e.options.slidesToShow ? i.addClass('slick-active').attr('aria-hidden', 'false') : (n = e.slideCount % e.options.slidesToShow,
        o = e.options.infinite === !0 ? e.options.slidesToShow + t : t,
        e.options.slidesToShow == e.options.slidesToScroll && e.slideCount - t < e.options.slidesToShow ? i.slice(o - (e.options.slidesToShow - n), o + n).addClass('slick-active').attr('aria-hidden', 'false') : i.slice(o, o + e.options.slidesToShow).addClass('slick-active').attr('aria-hidden', 'false')),
        'ondemand' === e.options.lazyLoad && e.lazyLoad()
    }
    ,
    e.prototype.setupInfinite = function() {
        var i, o, s, e = this;
        if (e.options.fade === !0 && (e.options.centerMode = !1),
        e.options.infinite === !0 && e.options.fade === !1 && (o = null ,
        e.slideCount > e.options.slidesToShow)) {
            for (s = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow,
            i = e.slideCount; i > e.slideCount - s; i -= 1)
                o = i - 1,
                t(e.$slides[o]).clone(!0).attr('id', '').attr('data-slick-index', o - e.slideCount).prependTo(e.$slideTrack).addClass('slick-cloned');
            for (i = 0; s > i; i += 1)
                o = i,
                t(e.$slides[o]).clone(!0).attr('id', '').attr('data-slick-index', o + e.slideCount).appendTo(e.$slideTrack).addClass('slick-cloned');
            e.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                t(this).attr('id', '')
            })
        }
    }
    ,
    e.prototype.setPaused = function(t) {
        var e = this;
        e.options.autoplay === !0 && e.options.pauseOnHover === !0 && (e.paused = t,
        t ? e.autoPlayClear() : e.autoPlay())
    }
    ,
    e.prototype.selectHandler = function(e) {
        var i = this
          , s = t(e.target).is('.slick-slide') ? t(e.target) : t(e.target).parents('.slick-slide')
          , o = parseInt(s.attr('data-slick-index'));
        return o || (o = 0),
        i.slideCount <= i.options.slidesToShow ? (i.$slider.find('.slick-slide').removeClass('slick-active').attr('aria-hidden', 'true'),
        i.$slides.eq(o).addClass('slick-active').attr('aria-hidden', 'false'),
        i.options.centerMode === !0 && (i.$slider.find('.slick-slide').removeClass('slick-center'),
        i.$slides.eq(o).addClass('slick-center')),
        void i.asNavFor(o)) : void i.slideHandler(o)
    }
    ,
    e.prototype.slideHandler = function(t, e, o) {
        var s, n, l, r, a = null , i = this;
        return e = e || !1,
        i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === t || i.slideCount <= i.options.slidesToShow ? void 0 : (e === !1 && i.asNavFor(t),
        s = t,
        a = i.getLeft(s),
        r = i.getLeft(i.currentSlide),
        i.currentLeft = null === i.swipeLeft ? r : i.swipeLeft,
        i.options.infinite === !1 && i.options.centerMode === !1 && (0 > t || t > i.getDotCount() * i.options.slidesToScroll) ? void (i.options.fade === !1 && (s = i.currentSlide,
        o !== !0 ? i.animateSlide(r, function() {
            i.postSlide(s)
        }) : i.postSlide(s))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > t || t > i.slideCount - i.options.slidesToScroll) ? void (i.options.fade === !1 && (s = i.currentSlide,
        o !== !0 ? i.animateSlide(r, function() {
            i.postSlide(s)
        }) : i.postSlide(s))) : (i.options.autoplay === !0 && clearInterval(i.autoPlayTimer),
        n = 0 > s ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + s : s >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : s - i.slideCount : s,
        i.animating = !0,
        i.$slider.trigger('beforeChange', [i, i.currentSlide, n]),
        l = i.currentSlide,
        i.currentSlide = n,
        i.setSlideClasses(i.currentSlide),
        i.updateDots(),
        i.updateArrows(),
        i.options.fade === !0 ? (o !== !0 ? i.fadeSlide(n, function() {
            i.postSlide(n)
        }) : i.postSlide(n),
        void i.animateHeight()) : void (o !== !0 ? i.animateSlide(a, function() {
            i.postSlide(n)
        }) : i.postSlide(n))))
    }
    ,
    e.prototype.startLoad = function() {
        var t = this;
        t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(),
        t.$nextArrow.hide()),
        t.options.dots === !0 && t.slideCount > t.options.slidesToShow && t.$dots.hide(),
        t.$slider.addClass('slick-loading')
    }
    ,
    e.prototype.swipeDirection = function() {
        var s, o, i, t, e = this;
        return s = e.touchObject.startX - e.touchObject.curX,
        o = e.touchObject.startY - e.touchObject.curY,
        i = Math.atan2(o, s),
        t = Math.round(180 * i / Math.PI),
        0 > t && (t = 360 - Math.abs(t)),
        45 >= t && t >= 0 ? e.options.rtl === !1 ? 'left' : 'right' : 360 >= t && t >= 315 ? e.options.rtl === !1 ? 'left' : 'right' : t >= 135 && 225 >= t ? e.options.rtl === !1 ? 'right' : 'left' : e.options.verticalSwiping === !0 ? t >= 35 && 135 >= t ? 'left' : 'right' : 'vertical'
    }
    ,
    e.prototype.swipeEnd = function(t) {
        var i, e = this;
        if (e.dragging = !1,
        e.shouldClick = e.touchObject.swipeLength > 10 ? !1 : !0,
        void 0 === e.touchObject.curX)
            return !1;
        if (e.touchObject.edgeHit === !0 && e.$slider.trigger('edge', [e, e.swipeDirection()]),
        e.touchObject.swipeLength >= e.touchObject.minSwipe)
            switch (e.swipeDirection()) {
            case 'left':
                i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide + e.getSlideCount()) : e.currentSlide + e.getSlideCount(),
                e.slideHandler(i),
                e.currentDirection = 0,
                e.touchObject = {},
                e.$slider.trigger('swipe', [e, 'left']);
                break;
            case 'right':
                i = e.options.swipeToSlide ? e.checkNavigable(e.currentSlide - e.getSlideCount()) : e.currentSlide - e.getSlideCount(),
                e.slideHandler(i),
                e.currentDirection = 1,
                e.touchObject = {},
                e.$slider.trigger('swipe', [e, 'right'])
            }
        else
            e.touchObject.startX !== e.touchObject.curX && (e.slideHandler(e.currentSlide),
            e.touchObject = {})
    }
    ,
    e.prototype.swipeHandler = function(t) {
        var e = this;
        if (!(e.options.swipe === !1 || 'ontouchend'in document && e.options.swipe === !1 || e.options.draggable === !1 && -1 !== t.type.indexOf('mouse')))
            switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1,
            e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold,
            e.options.verticalSwiping === !0 && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold),
            t.data.action) {
            case 'start':
                e.swipeStart(t);
                break;
            case 'move':
                e.swipeMove(t);
                break;
            case 'end':
                e.swipeEnd(t)
            }
    }
    ,
    e.prototype.swipeMove = function(t) {
        var n, r, s, o, i, e = this;
        return i = void 0 !== t.originalEvent ? t.originalEvent.touches : null ,
        !e.dragging || i && 1 !== i.length ? !1 : (n = e.getLeft(e.currentSlide),
        e.touchObject.curX = void 0 !== i ? i[0].pageX : t.clientX,
        e.touchObject.curY = void 0 !== i ? i[0].pageY : t.clientY,
        e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curX - e.touchObject.startX, 2))),
        e.options.verticalSwiping === !0 && (e.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(e.touchObject.curY - e.touchObject.startY, 2)))),
        r = e.swipeDirection(),
        'vertical' !== r ? (void 0 !== t.originalEvent && e.touchObject.swipeLength > 4 && t.preventDefault(),
        o = (e.options.rtl === !1 ? 1 : -1) * (e.touchObject.curX > e.touchObject.startX ? 1 : -1),
        e.options.verticalSwiping === !0 && (o = e.touchObject.curY > e.touchObject.startY ? 1 : -1),
        s = e.touchObject.swipeLength,
        e.touchObject.edgeHit = !1,
        e.options.infinite === !1 && (0 === e.currentSlide && 'right' === r || e.currentSlide >= e.getDotCount() && 'left' === r) && (s = e.touchObject.swipeLength * e.options.edgeFriction,
        e.touchObject.edgeHit = !0),
        e.options.vertical === !1 ? e.swipeLeft = n + s * o : e.swipeLeft = n + s * (e.$list.height() / e.listWidth) * o,
        e.options.verticalSwiping === !0 && (e.swipeLeft = n + s * o),
        e.options.fade === !0 || e.options.touchMove === !1 ? !1 : e.animating === !0 ? (e.swipeLeft = null ,
        !1) : void e.setCSS(e.swipeLeft)) : void 0)
    }
    ,
    e.prototype.swipeStart = function(t) {
        var i, e = this;
        return 1 !== e.touchObject.fingerCount || e.slideCount <= e.options.slidesToShow ? (e.touchObject = {},
        !1) : (void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (i = t.originalEvent.touches[0]),
        e.touchObject.startX = e.touchObject.curX = void 0 !== i ? i.pageX : t.clientX,
        e.touchObject.startY = e.touchObject.curY = void 0 !== i ? i.pageY : t.clientY,
        void (e.dragging = !0))
    }
    ,
    e.prototype.unfilterSlides = e.prototype.slickUnfilter = function() {
        var t = this;
        null !== t.$slidesCache && (t.unload(),
        t.$slideTrack.children(this.options.slide).detach(),
        t.$slidesCache.appendTo(t.$slideTrack),
        t.reinit())
    }
    ,
    e.prototype.unload = function() {
        var e = this;
        t('.slick-cloned', e.$slider).remove(),
        e.$dots && e.$dots.remove(),
        e.$prevArrow && 'object' != typeof e.options.prevArrow && e.$prevArrow.remove(),
        e.$nextArrow && 'object' != typeof e.options.nextArrow && e.$nextArrow.remove(),
        e.$slides.removeClass('slick-slide slick-active slick-visible').attr('aria-hidden', 'true').css('width', '')
    }
    ,
    e.prototype.unslick = function(t) {
        var e = this;
        e.$slider.trigger('unslick', [e, t]),
        e.destroy()
    }
    ,
    e.prototype.updateArrows = function() {
        var e, t = this;
        e = Math.floor(t.options.slidesToShow / 2),
        t.options.arrows === !0 && t.options.infinite !== !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow.removeClass('slick-disabled'),
        t.$nextArrow.removeClass('slick-disabled'),
        0 === t.currentSlide ? (t.$prevArrow.addClass('slick-disabled'),
        t.$nextArrow.removeClass('slick-disabled')) : t.currentSlide >= t.slideCount - t.options.slidesToShow && t.options.centerMode === !1 ? (t.$nextArrow.addClass('slick-disabled'),
        t.$prevArrow.removeClass('slick-disabled')) : t.currentSlide >= t.slideCount - 1 && t.options.centerMode === !0 && (t.$nextArrow.addClass('slick-disabled'),
        t.$prevArrow.removeClass('slick-disabled')))
    }
    ,
    e.prototype.updateDots = function() {
        var t = this;
        null !== t.$dots && (t.$dots.find('li').removeClass('slick-active').attr('aria-hidden', 'true'),
        t.$dots.find('li').eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass('slick-active').attr('aria-hidden', 'false'))
    }
    ,
    e.prototype.visibility = function() {
        var t = this;
        document[t.hidden] ? (t.paused = !0,
        t.autoPlayClear()) : t.options.autoplay === !0 && (t.paused = !1,
        t.autoPlay())
    }
    ,
    t.fn.slick = function() {
        var s, i = this, o = arguments[0], r = Array.prototype.slice.call(arguments, 1), n = i.length, t = 0;
        for (t; n > t; t++)
            if ('object' == typeof o || 'undefined' == typeof o ? i[t].slick = new e(i[t],o) : s = i[t].slick[o].apply(i[t].slick, r),
            'undefined' != typeof s)
                return s;
        return i
    }
});
!function() {
    function d() {
        return function() {}
    }
    ;function l(t) {
        return function() {
            return this[t]
        }
    }
    ;function f(t) {
        return function() {
            return t
        }
    }
    ;function t(e, i, o) {
        if ('string' == typeof e) {
            if (0 === e.indexOf('#') && (e = e.slice(1)),
            t.Aa[e])
                return t.Aa[e];
            e = t.w(e)
        }
        ;if (!e || !e.nodeName)
            throw new TypeError('The element or ID supplied is not valid. (videojs)');
        return e.player || new t.Player(e,i,o)
    }
    ;function j() {}
    ;function P(e, i) {
        var o = Array.prototype.slice.call(i);
        e ? o.unshift(e.toUpperCase() + ':') : e = 'log',
        t.log.history.push(o),
        o.unshift('VIDEOJS:'),
        w[e].apply ? w[e].apply(w, o) : w[e](o.join(' '))
    }
    ;function x(t) {
        t.r('vjs-lock-showing')
    }
    ;function K(e, i, o, s) {
        return o !== n ? (e.b.style[i] = -1 !== ('' + o).indexOf('%') || -1 !== ('' + o).indexOf('px') ? o : 'auto' === o ? '' : o + 'px',
        s || e.k('resize'),
        e) : e.b ? (o = e.b.style[i],
        s = o.indexOf('px'),
        -1 !== s ? parseInt(o.slice(0, s), 10) : parseInt(e.b['offset' + t.$(i)], 10)) : 0
    }
    ;function Q(t) {
        var c, e, p, s, l, a, n, d;
        c = 0,
        e = r,
        t.d('touchstart', function(t) {
            1 === t.touches.length && (e = t.touches[0],
            c = (new Date).getTime(),
            s = o)
        }),
        t.d('touchmove', function(t) {
            1 < t.touches.length ? s = i : e && (a = t.touches[0].pageX - e.pageX,
            n = t.touches[0].pageY - e.pageY,
            d = Math.sqrt(a * a + n * n),
            d > 22 && (s = i))
        }),
        l = function() {
            s = i
        }
        ,
        t.d('touchleave', l),
        t.d('touchcancel', l),
        t.d('touchend', function(t) {
            e = r,
            s === o && (p = (new Date).getTime() - c,
            250 > p && (t.preventDefault(),
            this.k('tap')))
        })
    }
    ;function G(e, i) {
        var o, s, n, r;
        return o = e.b,
        s = t.od(o),
        r = n = o.offsetWidth,
        o = e.handle,
        e.j.Vd ? (r = s.top,
        s = i.changedTouches ? i.changedTouches[0].pageY : i.pageY,
        o && (o = o.w().offsetHeight,
        r += o / 2,
        n -= o),
        Math.max(0, Math.min(1, (r - s + n) / n))) : (n = s.left,
        s = i.changedTouches ? i.changedTouches[0].pageX : i.pageX,
        o && (o = o.w().offsetWidth,
        n += o / 2,
        r -= o),
        Math.max(0, Math.min(1, (s - n) / r)))
    }
    ;function nt(e, i) {
        e.V(i),
        i.d('click', t.bind(e, function() {
            x(this)
        }))
    }
    ;function O(t) {
        t.ra = o,
        t.za.o('vjs-lock-showing'),
        t.b.setAttribute('aria-pressed', o),
        t.O && 0 < t.O.length && t.O[0].w().focus()
    }
    ;function C(t) {
        t.ra = i,
        x(t.za),
        t.b.setAttribute('aria-pressed', i)
    }
    ;function it(e) {
        var s = {
            sources: [],
            tracks: []
        };
        if (t.l.B(s, t.Bb(e)),
        e.hasChildNodes()) {
            var o, n, i, r;
            for (e = e.childNodes,
            i = 0,
            r = e.length; r > i; i++)
                o = e[i],
                n = o.nodeName.toLowerCase(),
                'source' === n ? s.sources.push(t.Bb(o)) : 'track' === n && s.tracks.push(t.Bb(o))
        }
        ;return s
    }
    ;function N(e, s, n) {
        e.g && (e.ca = i,
        e.g.dispose(),
        e.Hb && (e.Hb = i,
        clearInterval(e.Ya)),
        e.Ib && H(e),
        e.g = i),
        'Html5' !== s && e.P && (t.f.mc(e.P),
        e.P = r),
        e.Ca = s,
        e.ca = i;
        var a = t.l.B({
            source: n,
            parentEl: e.b
        }, e.j[s.toLowerCase()]);
        n && (n.src == e.z.src && 0 < e.z.currentTime && (a.startTime = e.z.currentTime),
        e.z.src = n.src),
        e.g = new window.videojs[s](e,a),
        e.g.J(function() {
            if (this.c.Ea(),
            !this.n.progressEvents) {
                var e = this.c;
                e.Hb = o,
                e.Ya = setInterval(t.bind(e, function() {
                    this.z.sb < this.buffered().end(0) ? this.k('progress') : 1 == this.bufferedPercent() && (clearInterval(this.Ya),
                    this.k('progress'))
                }), 500),
                e.g && e.g.W('progress', function() {
                    this.n.progressEvents = o;
                    var t = this.c;
                    t.Hb = i,
                    clearInterval(t.Ya)
                })
            }
            ;this.n.timeupdateEvents || (e = this.c,
            e.Ib = o,
            e.d('play', e.Kc),
            e.d('pause', e.Ba),
            e.g && e.g.W('timeupdate', function() {
                this.n.timeupdateEvents = o,
                H(this.c)
            }))
        })
    }
    ;function H(t) {
        t.Ib = i,
        t.Ba(),
        t.p('play', t.Kc),
        t.p('pause', t.Ba)
    }
    ;function q(t, e) {
        e !== n && t.tc !== e && ((t.tc = e) ? (t.o('vjs-has-started'),
        t.k('firstplay')) : t.r('vjs-has-started'))
    }
    ;function c(e, i, o) {
        if (e.g && !e.g.ca)
            e.g.J(function() {
                this[i](o)
            });
        else
            try {
                e.g[i](o)
            } catch (s) {
                throw t.log(s),
                s
            }
    }
    ;function a(e, o) {
        if (e.g && e.g.ca)
            try {
                return e.g[o]()
            } catch (s) {
                throw e.g[o] === n ? t.log('Video.js: ' + o + ' method not defined for ' + e.Ca + ' playback technology.', s) : 'TypeError' == s.name ? (t.log('Video.js: ' + o + ' unavailable on ' + e.Ca + ' playback technology element.', s),
                e.g.ca = i) : t.log(s),
                s
            }
    }
    ;function I(e) {
        e.sd = i,
        t.p(document, 'keydown', e.pc),
        document.documentElement.style.overflow = e.kd,
        t.r(document.body, 'vjs-full-window'),
        e.k('exitFullWindow')
    }
    ;function F(t) {
        return t.m().g && t.m().g.n.playbackRate && t.m().options().playbackRates && 0 < t.m().options().playbackRates.length
    }
    ;function st() {
        var t = A[u]
          , e = t.charAt(0).toUpperCase() + t.slice(1);
        B['set' + e] = function(e) {
            return this.b.vjs_setProperty(t, e)
        }
    }
    ;function R(t) {
        B[t] = function() {
            return this.b.vjs_getProperty(t)
        }
    }
    ;function ot(e, i, o, n, s) {
        var a = e.Da = e.Da || [];
        s = s || {},
        s.kind = i,
        s.label = o,
        s.language = n,
        i = t.$(i || 'subtitles');
        var r = new window.videojs[i + 'Track'](e,s);
        a.push(r),
        r.Qa() && e.J(function() {
            setTimeout(function() {
                r.show()
            }, 0)
        })
    }
    ;function z(t, e, o) {
        for (var s, n, a = t.Da, r = 0, l = a.length; l > r; r++)
            s = a[r],
            s.id() === e ? (s.show(),
            n = s) : o && s.K() == o && 0 < s.mode() && s.disable();
        (e = n ? n.K() : o ? o : i) && t.k(e + 'trackchange')
    }
    ;function L(e) {
        0 === e.la && e.load(),
        0 === e.ka && (e.c.d('timeupdate', t.bind(e, e.update, e.T)),
        e.c.d('ended', t.bind(e, e.reset, e.T)),
        ('captions' === e.H || 'subtitles' === e.H) && e.c.ja('textTrackDisplay').V(e))
    }
    ;function D(t) {
        var e = t.split(':');
        t = 0;
        var s, o, i;
        return 3 == e.length ? (s = e[0],
        o = e[1],
        e = e[2]) : (s = 0,
        o = e[0],
        e = e[1]),
        e = e.split(/\s+/),
        e = e.splice(0, 1)[0],
        e = e.split(/\.|,/),
        i = parseFloat(e[1]),
        e = e[0],
        t += 3600 * parseFloat(s),
        t += 60 * parseFloat(o),
        t += parseFloat(e),
        i && (t += i / 1e3),
        t
    }
    ;function s(t, e) {
        var s = t.split('.')
          , i = Y;
        !(s[0]in i) && i.execScript && i.execScript('var ' + s[0]);
        for (var o; s.length && (o = s.shift()); )
            s.length || e === n ? i = i[o] ? i[o] : i[o] = {} : i[o] = e
    }
    ;var n = void 0, o = !0, r = null , i = !1, e;
    document.createElement('video'),
    document.createElement('audio'),
    document.createElement('track');
    var b = t;
    window.je = window.ke = t,
    t.Ub = '4.6',
    t.Pc = 'https:' == document.location.protocol ? 'https://' : 'http://',
    t.options = {
        techOrder: ['html5', 'flash'],
        html5: {},
        flash: {},
        width: 300,
        height: 150,
        defaultVolume: 0,
        playbackRates: [],
        children: {
            mediaLoader: {},
            posterImage: {},
            textTrackDisplay: {},
            loadingSpinner: {},
            bigPlayButton: {},
            controlBar: {},
            errorDisplay: {}
        },
        notSupportedMessage: 'No compatible source was found for this video.'
    },
    'GENERATED_CDN_VSN' !== t.Ub && (b.options.flash.swf = t.Pc + 'vjs.zencdn.net/' + t.Ub + '/video-js.swf'),
    t.Aa = {},
    'function' == typeof define && define.amd ? define([], function() {
        return b
    }) : 'object' == typeof exports && 'object' == typeof module && (module.exports = b),
    t.pa = t.CoreObject = d(),
    t.pa.extend = function(e) {
        var s, i;
        e = e || {},
        s = e.init || e.h || this.prototype.init || this.prototype.h || d(),
        i = function() {
            s.apply(this, arguments)
        }
        ,
        i.prototype = t.l.create(this.prototype),
        i.prototype.constructor = i,
        i.extend = t.pa.extend,
        i.create = t.pa.create;
        for (var o in e)
            e.hasOwnProperty(o) && (i.prototype[o] = e[o]);
        return i
    }
    ,
    t.pa.create = function() {
        var e = t.l.create(this.prototype);
        return this.apply(e, arguments),
        e
    }
    ,
    t.d = function(e, o, s) {
        var n = t.getData(e);
        n.D || (n.D = {}),
        n.D[o] || (n.D[o] = []),
        s.v || (s.v = t.v++),
        n.D[o].push(s),
        n.X || (n.disabled = i,
        n.X = function(i) {
            if (!n.disabled) {
                i = t.oc(i);
                var o = n.D[i.type];
                if (o)
                    for (var o = o.slice(0), s = 0, r = o.length; r > s && !i.wc(); s++)
                        o[s].call(e, i)
            }
        }
        ),
        1 == n.D[o].length && (document.addEventListener ? e.addEventListener(o, n.X, i) : document.attachEvent && e.attachEvent('on' + o, n.X))
    }
    ,
    t.p = function(e, i, o) {
        if (t.sc(e)) {
            var s = t.getData(e);
            if (s.D)
                if (i) {
                    var n = s.D[i];
                    if (n) {
                        if (o) {
                            if (o.v)
                                for (s = 0; s < n.length; s++)
                                    n[s].v === o.v && n.splice(s--, 1)
                        } else
                            s.D[i] = [];
                        t.jc(e, i)
                    }
                } else
                    for (n in s.D)
                        i = n,
                        s.D[i] = [],
                        t.jc(e, i)
        }
    }
    ,
    t.jc = function(e, o) {
        var s = t.getData(e);
        0 === s.D[o].length && (delete s.D[o],
        document.removeEventListener ? e.removeEventListener(o, s.X, i) : document.detachEvent && e.detachEvent('on' + o, s.X)),
        t.Eb(s.D) && (delete s.D,
        delete s.X,
        delete s.disabled),
        t.Eb(s) && t.Dc(e)
    }
    ,
    t.oc = function(t) {
        function l() {
            return o
        }
        ;function a() {
            return i
        }
        ;if (!t || !t.Fb) {
            var s = t || window.event;
            t = {};
            for (var e in s)
                'layerX' !== e && 'layerY' !== e && 'keyboardEvent.keyLocation' !== e && ('returnValue' == e && s.preventDefault || (t[e] = s[e]));
            if (t.target || (t.target = t.srcElement || document),
            t.relatedTarget = t.fromElement === t.target ? t.toElement : t.fromElement,
            t.preventDefault = function() {
                s.preventDefault && s.preventDefault(),
                t.returnValue = i,
                t.rd = l,
                t.defaultPrevented = o
            }
            ,
            t.rd = a,
            t.defaultPrevented = i,
            t.stopPropagation = function() {
                s.stopPropagation && s.stopPropagation(),
                t.cancelBubble = o,
                t.Fb = l
            }
            ,
            t.Fb = a,
            t.stopImmediatePropagation = function() {
                s.stopImmediatePropagation && s.stopImmediatePropagation(),
                t.wc = l,
                t.stopPropagation()
            }
            ,
            t.wc = a,
            t.clientX != r) {
                e = document.documentElement;
                var n = document.body;
                t.pageX = t.clientX + (e && e.scrollLeft || n && n.scrollLeft || 0) - (e && e.clientLeft || n && n.clientLeft || 0),
                t.pageY = t.clientY + (e && e.scrollTop || n && n.scrollTop || 0) - (e && e.clientTop || n && n.clientTop || 0)
            }
            ;t.which = t.charCode || t.keyCode,
            t.button != r && (t.button = 1 & t.button ? 0 : 4 & t.button ? 1 : 2 & t.button ? 2 : 0)
        }
        ;return t
    }
    ,
    t.k = function(e, s) {
        var n = t.sc(e) ? t.getData(e) : {}
          , r = e.parentNode || e.ownerDocument;
        return 'string' == typeof s && (s = {
            type: s,
            target: e
        }),
        s = t.oc(s),
        n.X && n.X.call(e, s),
        r && !s.Fb() && s.bubbles !== i ? t.k(r, s) : r || s.defaultPrevented || (n = t.getData(s.target),
        !s.target[s.type]) || (n.disabled = o,
        'function' == typeof s.target[s.type] && s.target[s.type](),
        n.disabled = i),
        !s.defaultPrevented
    }
    ,
    t.W = function(e, i, o) {
        function s() {
            t.p(e, i, s),
            o.apply(this, arguments)
        }
        ;s.v = o.v = o.v || t.v++,
        t.d(e, i, s)
    }
    ;
    var g = Object.prototype.hasOwnProperty;
    t.e = function(t, e) {
        var o, i;
        o = document.createElement(t || 'div');
        for (i in e)
            g.call(e, i) && (-1 !== i.indexOf('aria-') || 'role' == i ? o.setAttribute(i, e[i]) : o[i] = e[i]);
        return o
    }
    ,
    t.$ = function(t) {
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
    ,
    t.l = {},
    t.l.create = Object.create || function(t) {
        function e() {}
        ;return e.prototype = t,
        new e
    }
    ,
    t.l.wa = function(t, e, i) {
        for (var o in t)
            g.call(t, o) && e.call(i || this, o, t[o])
    }
    ,
    t.l.B = function(t, e) {
        if (!e)
            return t;
        for (var i in e)
            g.call(e, i) && (t[i] = e[i]);
        return t
    }
    ,
    t.l.fd = function(e, i) {
        var o, n, s;
        e = t.l.copy(e);
        for (o in i)
            g.call(i, o) && (n = e[o],
            s = i[o],
            e[o] = t.l.Sa(n) && t.l.Sa(s) ? t.l.fd(n, s) : i[o]);
        return e
    }
    ,
    t.l.copy = function(e) {
        return t.l.B({}, e)
    }
    ,
    t.l.Sa = function(t) {
        return !!t && 'object' == typeof t && '[object Object]' === t.toString() && t.constructor === Object
    }
    ,
    t.bind = function(e, i, o) {
        function s() {
            return i.apply(e, arguments)
        }
        ;return i.v || (i.v = t.v++),
        s.v = o ? o + '_' + i.v : i.v,
        s
    }
    ,
    t.ta = {},
    t.v = 1,
    t.expando = 'vdata' + (new Date).getTime(),
    t.getData = function(e) {
        var i = e[t.expando];
        return i || (i = e[t.expando] = t.v++,
        t.ta[i] = {}),
        t.ta[i]
    }
    ,
    t.sc = function(e) {
        return e = e[t.expando],
        !(!e || t.Eb(t.ta[e]))
    }
    ,
    t.Dc = function(e) {
        var o = e[t.expando];
        if (o) {
            delete t.ta[o];
            try {
                delete e[t.expando]
            } catch (i) {
                e.removeAttribute ? e.removeAttribute(t.expando) : e[t.expando] = r
            }
        }
    }
    ,
    t.Eb = function(t) {
        for (var e in t)
            if (t[e] !== r)
                return i;
        return o
    }
    ,
    t.o = function(t, e) {
        -1 == (' ' + t.className + ' ').indexOf(' ' + e + ' ') && (t.className = '' === t.className ? e : t.className + ' ' + e)
    }
    ,
    t.r = function(t, e) {
        var o, i;
        if (-1 != t.className.indexOf(e)) {
            for (o = t.className.split(' '),
            i = o.length - 1; i >= 0; i--)
                o[i] === e && o.splice(i, 1);
            t.className = o.join(' ')
        }
    }
    ,
    t.A = t.e('video'),
    t.M = navigator.userAgent,
    t.Uc = /iPhone/i.test(t.M),
    t.Tc = /iPad/i.test(t.M),
    t.Vc = /iPod/i.test(t.M),
    t.Sc = t.Uc || t.Tc || t.Vc;
    var et = t, V, E = t.M.match(/OS (\d+)_/i);
    V = E && E[1] ? E[1] : n,
    et.Zd = V,
    t.Rc = /Android/i.test(t.M);
    var rt = t, M, v = t.M.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i), k, J;
    v ? (k = v[1] && parseFloat(v[1]),
    J = v[2] && parseFloat(v[2]),
    M = k && J ? parseFloat(v[1] + '.' + v[2]) : k ? k : r) : M = r,
    rt.Tb = M,
    t.Wc = t.Rc && /webkit/i.test(t.M) && 2.3 > t.Tb,
    t.Xb = /Firefox/i.test(t.M),
    t.$d = /Chrome/i.test(t.M),
    t.ec = !!('ontouchstart'in window || window.Qc && document instanceof window.Qc),
    t.Bb = function(t) {
        var l, s, e, n;
        if (l = {},
        t && t.attributes && 0 < t.attributes.length) {
            s = t.attributes;
            for (var a = s.length - 1; a >= 0; a--)
                e = s[a].name,
                n = s[a].value,
                ('boolean' == typeof t[e] || -1 !== ',autoplay,controls,loop,muted,default,'.indexOf(',' + e + ',')) && (n = n !== r ? o : i),
                l[e] = n
        }
        ;return l
    }
    ,
    t.ce = function(t, e) {
        var i = '';
        return document.defaultView && document.defaultView.getComputedStyle ? i = document.defaultView.getComputedStyle(t, '').getPropertyValue(e) : t.currentStyle && (i = t['client' + e.substr(0, 1).toUpperCase() + e.substr(1)] + 'px'),
        i
    }
    ,
    t.Db = function(t, e) {
        e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
    }
    ,
    t.Na = {},
    t.w = function(t) {
        return 0 === t.indexOf('#') && (t = t.slice(1)),
        document.getElementById(t)
    }
    ,
    t.ya = function(t, e) {
        e = e || t;
        var s = Math.floor(t % 60)
          , o = Math.floor(t / 60 % 60)
          , i = Math.floor(t / 3600)
          , r = Math.floor(e / 60 % 60)
          , n = Math.floor(e / 3600);
        return (isNaN(t) || 1 / 0 === t) && (i = o = s = '-'),
        i = i > 0 || n > 0 ? i + ':' : '',
        i + (((i || r >= 10) && 10 > o ? '0' + o : o) + ':') + (10 > s ? '0' + s : s)
    }
    ,
    t.bd = function() {
        document.body.focus(),
        document.onselectstart = f(i)
    }
    ,
    t.Td = function() {
        document.onselectstart = f(o)
    }
    ,
    t.trim = function(t) {
        return (t + '').replace(/^\s+|\s+$/g, '')
    }
    ,
    t.round = function(t, e) {
        return e || (e = 0),
        Math.round(t * Math.pow(10, e)) / Math.pow(10, e)
    }
    ,
    t.yb = function(t, e) {
        return {
            length: 1,
            start: function() {
                return t
            },
            end: function() {
                return e
            }
        }
    }
    ,
    t.get = function(e, i, s, a) {
        var p, r, c, l;
        s = s || d(),
        'undefined' == typeof XMLHttpRequest && (window.XMLHttpRequest = function() {
            try {
                return new window.ActiveXObject('Msxml2.XMLHTTP.6.0')
            } catch (t) {}
            ;try {
                return new window.ActiveXObject('Msxml2.XMLHTTP.3.0')
            } catch (t) {}
            ;try {
                return new window.ActiveXObject('Msxml2.XMLHTTP')
            } catch (t) {}
            ;throw Error('This browser does not support XMLHttpRequest.')
        }
        ),
        r = new XMLHttpRequest,
        c = t.Fd(e),
        l = window.location,
        c.protocol + c.host === l.protocol + l.host || !window.XDomainRequest || 'withCredentials'in r ? (p = 'file:' == c.protocol || 'file:' == l.protocol,
        r.onreadystatechange = function() {
            4 === r.readyState && (200 === r.status || p && 0 === r.status ? i(r.responseText) : s(r.responseText))
        }
        ) : (r = new window.XDomainRequest,
        r.onload = function() {
            i(r.responseText)
        }
        ,
        r.onerror = s,
        r.onprogress = d(),
        r.ontimeout = s);
        try {
            r.open('GET', e, o),
            a && (r.withCredentials = o)
        } catch (n) {
            return void s(n)
        }
        ;try {
            r.send()
        } catch (n) {
            s(n)
        }
    }
    ,
    t.Kd = function(e) {
        try {
            var s = window.localStorage || i;
            s && (s.volume = e)
        } catch (o) {
            22 == o.code || 1014 == o.code ? t.log('LocalStorage Full (VideoJS)', o) : 18 == o.code ? t.log('LocalStorage not allowed (VideoJS)', o) : t.log('LocalStorage Error (VideoJS)', o)
        }
    }
    ,
    t.qc = function(e) {
        return e.match(/^https?:\/\//) || (e = t.e('div', {
            innerHTML: '<a href="' + e + '">x</a>'
        }).firstChild.href),
        e
    }
    ,
    t.Fd = function(e) {
        var i, o, r, n;
        n = 'protocol hostname port pathname search hash host'.split(' '),
        o = t.e('a', {
            href: e
        }),
        (r = '' === o.host && 'file:' !== o.protocol) && (i = t.e('div'),
        i.innerHTML = '<a href="' + e + '"></a>',
        o = i.firstChild,
        i.setAttribute('style', 'display:none; position:absolute;'),
        document.body.appendChild(i)),
        e = {};
        for (var s = 0; s < n.length; s++)
            e[n[s]] = o[n[s]];
        return r && document.body.removeChild(i),
        e
    }
    ;
    var w = window.console || {
        log: j,
        warn: j,
        error: j
    };
    t.log = function() {
        P(r, arguments)
    }
    ,
    t.log.history = [],
    t.log.error = function() {
        P('error', arguments)
    }
    ,
    t.log.warn = function() {
        P('warn', arguments)
    }
    ,
    t.od = function(e) {
        var o, i;
        return e.getBoundingClientRect && e.parentNode && (o = e.getBoundingClientRect()),
        o ? (e = document.documentElement,
        i = document.body,
        {
            left: t.round(o.left + (window.pageXOffset || i.scrollLeft) - (e.clientLeft || i.clientLeft || 0)),
            top: t.round(o.top + (window.pageYOffset || i.scrollTop) - (e.clientTop || i.clientTop || 0))
        }) : {
            left: 0,
            top: 0
        }
    }
    ,
    t.oa = {},
    t.oa.Jb = function(e, i) {
        var o, n, s;
        e = t.l.copy(e);
        for (o in i)
            i.hasOwnProperty(o) && (n = e[o],
            s = i[o],
            e[o] = t.l.Sa(n) && t.l.Sa(s) ? t.oa.Jb(n, s) : i[o]);
        return e
    }
    ,
    t.a = t.pa.extend({
        h: function(e, o, s) {
            if (this.c = e,
            this.j = t.l.copy(this.j),
            o = this.options(o),
            this.T = o.id || (o.el && o.el.id ? o.el.id : e.id() + '_component_' + t.v++),
            this.wd = o.name || r,
            this.b = o.el || this.e(),
            this.N = [],
            this.Oa = {},
            this.Pa = {},
            this.uc(),
            this.J(s),
            o.Ec !== i) {
                var n, a;
                n = t.bind(this.m(), this.m().reportUserActivity),
                this.d('touchstart', function() {
                    n(),
                    clearInterval(a),
                    a = setInterval(n, 250)
                }),
                e = function() {
                    n(),
                    clearInterval(a)
                }
                ,
                this.d('touchmove', n),
                this.d('touchend', e),
                this.d('touchcancel', e)
            }
        }
    }),
    e = t.a.prototype,
    e.dispose = function() {
        if (this.k({
            type: 'dispose',
            bubbles: i
        }),
        this.N)
            for (var e = this.N.length - 1; e >= 0; e--)
                this.N[e].dispose && this.N[e].dispose();
        this.Pa = this.Oa = this.N = r,
        this.p(),
        this.b.parentNode && this.b.parentNode.removeChild(this.b),
        t.Dc(this.b),
        this.b = r
    }
    ,
    e.c = o,
    e.m = l('c'),
    e.options = function(e) {
        return e === n ? this.j : this.j = t.oa.Jb(this.j, e)
    }
    ,
    e.e = function(e, i) {
        return t.e(e, i)
    }
    ,
    e.w = l('b'),
    e.ia = function() {
        return this.u || this.b
    }
    ,
    e.id = l('T'),
    e.name = l('wd'),
    e.children = l('N'),
    e.qd = function(t) {
        return this.Oa[t]
    }
    ,
    e.ja = function(t) {
        return this.Pa[t]
    }
    ,
    e.V = function(e, i) {
        var o, s;
        return 'string' == typeof e ? (s = e,
        i = i || {},
        o = i.componentClass || t.$(s),
        i.name = s,
        o = new window.videojs[o](this.c || this,i)) : o = e,
        this.N.push(o),
        'function' == typeof o.id && (this.Oa[o.id()] = o),
        (s = s || o.name && o.name()) && (this.Pa[s] = o),
        'function' == typeof o.el && o.el() && this.ia().appendChild(o.el()),
        o
    }
    ,
    e.removeChild = function(t) {
        if ('string' == typeof t && (t = this.ja(t)),
        t && this.N) {
            for (var s = i, e = this.N.length - 1; e >= 0; e--)
                if (this.N[e] === t) {
                    s = o,
                    this.N.splice(e, 1);
                    break
                }
            ;s && (this.Oa[t.id] = r,
            this.Pa[t.name] = r,
            (s = t.w()) && s.parentNode === this.ia() && this.ia().removeChild(t.w()))
        }
    }
    ,
    e.uc = function() {
        var s, o, e, n;
        if (s = this,
        o = this.options().children)
            if (o instanceof Array)
                for (var r = 0; r < o.length; r++)
                    e = o[r],
                    'string' == typeof e ? (n = e,
                    e = {}) : n = e.name,
                    s[n] = s.V(n, e);
            else
                t.l.wa(o, function(t, e) {
                    e !== i && (s[t] = s.V(t, e))
                })
    }
    ,
    e.S = f(''),
    e.d = function(e, i) {
        return t.d(this.b, e, t.bind(this, i)),
        this
    }
    ,
    e.p = function(e, i) {
        return t.p(this.b, e, i),
        this
    }
    ,
    e.W = function(e, i) {
        return t.W(this.b, e, t.bind(this, i)),
        this
    }
    ,
    e.k = function(e, i) {
        return t.k(this.b, e, i),
        this
    }
    ,
    e.J = function(t) {
        return t && (this.ca ? t.call(this) : (this.Za === n && (this.Za = []),
        this.Za.push(t))),
        this
    }
    ,
    e.Ea = function() {
        this.ca = o;
        var t = this.Za;
        if (t && 0 < t.length) {
            for (var e = 0, i = t.length; i > e; e++)
                t[e].call(this);
            this.Za = [],
            this.k('ready')
        }
    }
    ,
    e.o = function(e) {
        return t.o(this.b, e),
        this
    }
    ,
    e.r = function(e) {
        return t.r(this.b, e),
        this
    }
    ,
    e.show = function() {
        return this.b.style.display = 'block',
        this
    }
    ,
    e.G = function() {
        return this.b.style.display = 'none',
        this
    }
    ,
    e.disable = function() {
        this.G(),
        this.show = d()
    }
    ,
    e.width = function(t, e) {
        return K(this, 'width', t, e)
    }
    ,
    e.height = function(t, e) {
        return K(this, 'height', t, e)
    }
    ,
    e.jd = function(t, e) {
        return this.width(t, o).height(e)
    }
    ,
    t.s = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            Q(this),
            this.d('tap', this.q),
            this.d('click', this.q),
            this.d('focus', this.Va),
            this.d('blur', this.Ua)
        }
    }),
    e = t.s.prototype,
    e.e = function(e, i) {
        var o;
        return i = t.l.B({
            className: this.S(),
            role: 'button',
            'aria-live': 'polite',
            tabIndex: 0
        }, i),
        o = t.a.prototype.e.call(this, e, i),
        i.innerHTML || (this.u = t.e('div', {
            className: 'vjs-control-content'
        }),
        this.wb = t.e('span', {
            className: 'vjs-control-text',
            innerHTML: this.sa || 'Need Text'
        }),
        this.u.appendChild(this.wb),
        o.appendChild(this.u)),
        o
    }
    ,
    e.S = function() {
        return 'vjs-control ' + t.a.prototype.S.call(this)
    }
    ,
    e.q = d(),
    e.Va = function() {
        t.d(document, 'keyup', t.bind(this, this.da))
    }
    ,
    e.da = function(t) {
        (32 == t.which || 13 == t.which) && (t.preventDefault(),
        this.q())
    }
    ,
    e.Ua = function() {
        t.p(document, 'keyup', t.bind(this, this.da))
    }
    ,
    t.Q = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            this.ad = this.ja(this.j.barName),
            this.handle = this.ja(this.j.handleName),
            this.d('mousedown', this.Wa),
            this.d('touchstart', this.Wa),
            this.d('focus', this.Va),
            this.d('blur', this.Ua),
            this.d('click', this.q),
            this.c.d('controlsvisible', t.bind(this, this.update)),
            e.d(this.Ac, t.bind(this, this.update)),
            this.R = {}
        }
    }),
    e = t.Q.prototype,
    e.e = function(e, i) {
        return i = i || {},
        i.className += ' vjs-slider',
        i = t.l.B({
            role: 'slider',
            'aria-valuenow': 0,
            'aria-valuemin': 0,
            'aria-valuemax': 100,
            tabIndex: 0
        }, i),
        t.a.prototype.e.call(this, e, i)
    }
    ,
    e.Wa = function(e) {
        e.preventDefault(),
        t.bd(),
        this.R.move = t.bind(this, this.Kb),
        this.R.end = t.bind(this, this.Lb),
        t.d(document, 'mousemove', this.R.move),
        t.d(document, 'mouseup', this.R.end),
        t.d(document, 'touchmove', this.R.move),
        t.d(document, 'touchend', this.R.end),
        this.Kb(e)
    }
    ,
    e.Lb = function() {
        t.Td(),
        t.p(document, 'mousemove', this.R.move, i),
        t.p(document, 'mouseup', this.R.end, i),
        t.p(document, 'touchmove', this.R.move, i),
        t.p(document, 'touchend', this.R.end, i),
        this.update()
    }
    ,
    e.update = function() {
        if (this.b) {
            var e, i = this.Cb(), o = this.handle, n = this.ad;
            if (isNaN(i) && (i = 0),
            e = i,
            o) {
                e = this.b.offsetWidth;
                var s = o.w().offsetWidth;
                e = s ? s / e : 0,
                i *= 1 - e,
                e = i + e / 2,
                o.w().style.left = t.round(100 * i, 2) + '%'
            }
            ;n.w().style.width = t.round(100 * e, 2) + '%'
        }
    }
    ,
    e.Va = function() {
        t.d(document, 'keyup', t.bind(this, this.da))
    }
    ,
    e.da = function(t) {
        37 == t.which ? (t.preventDefault(),
        this.Gc()) : 39 == t.which && (t.preventDefault(),
        this.Hc())
    }
    ,
    e.Ua = function() {
        t.p(document, 'keyup', t.bind(this, this.da))
    }
    ,
    e.q = function(t) {
        t.stopImmediatePropagation(),
        t.preventDefault()
    }
    ,
    t.Y = t.a.extend(),
    t.Y.prototype.defaultValue = 0,
    t.Y.prototype.e = function(e, i) {
        return i = i || {},
        i.className += ' vjs-slider-handle',
        i = t.l.B({
            innerHTML: '<span class="vjs-control-text">' + this.defaultValue + '</span>'
        }, i),
        t.a.prototype.e.call(this, 'div', i)
    }
    ,
    t.ga = t.a.extend(),
    t.ga.prototype.e = function() {
        var e = this.options().kc || 'ul';
        return this.u = t.e(e, {
            className: 'vjs-menu-content'
        }),
        e = t.a.prototype.e.call(this, 'div', {
            append: this.u,
            className: 'vjs-menu'
        }),
        e.appendChild(this.u),
        t.d(e, 'click', function(t) {
            t.preventDefault(),
            t.stopImmediatePropagation()
        }),
        e
    }
    ,
    t.I = t.s.extend({
        h: function(e, i) {
            t.s.call(this, e, i),
            this.selected(i.selected)
        }
    }),
    t.I.prototype.e = function(e, i) {
        return t.s.prototype.e.call(this, 'li', t.l.B({
            className: 'vjs-menu-item',
            innerHTML: this.j.label
        }, i))
    }
    ,
    t.I.prototype.q = function() {
        this.selected(o)
    }
    ,
    t.I.prototype.selected = function(t) {
        t ? (this.o('vjs-selected'),
        this.b.setAttribute('aria-selected', o)) : (this.r('vjs-selected'),
        this.b.setAttribute('aria-selected', i))
    }
    ,
    t.L = t.s.extend({
        h: function(e, i) {
            t.s.call(this, e, i),
            this.za = this.va(),
            this.V(this.za),
            this.O && 0 === this.O.length && this.G(),
            this.d('keyup', this.da),
            this.b.setAttribute('aria-haspopup', o),
            this.b.setAttribute('role', 'button')
        }
    }),
    e = t.L.prototype,
    e.ra = i,
    e.va = function() {
        var e = new t.ga(this.c);
        if (this.options().title && e.ia().appendChild(t.e('li', {
            className: 'vjs-menu-title',
            innerHTML: t.$(this.options().title),
            Rd: -1
        })),
        this.O = this.createItems())
            for (var i = 0; i < this.O.length; i++)
                nt(e, this.O[i]);
        return e
    }
    ,
    e.ua = d(),
    e.S = function() {
        return this.className + ' vjs-menu-button ' + t.s.prototype.S.call(this)
    }
    ,
    e.Va = d(),
    e.Ua = d(),
    e.q = function() {
        this.W('mouseout', t.bind(this, function() {
            x(this.za),
            this.b.blur()
        })),
        this.ra ? C(this) : O(this)
    }
    ,
    e.da = function(t) {
        t.preventDefault(),
        32 == t.which || 13 == t.which ? this.ra ? C(this) : O(this) : 27 == t.which && this.ra && C(this)
    }
    ,
    t.F = function(e) {
        'number' == typeof e ? this.code = e : 'string' == typeof e ? this.message = e : 'object' == typeof e && t.l.B(this, e),
        this.message || (this.message = t.F.gd[this.code] || '')
    }
    ,
    t.F.prototype.code = 0,
    t.F.prototype.message = '',
    t.F.prototype.status = r,
    t.F.Ra = 'MEDIA_ERR_CUSTOM MEDIA_ERR_ABORTED MEDIA_ERR_NETWORK MEDIA_ERR_DECODE MEDIA_ERR_SRC_NOT_SUPPORTED MEDIA_ERR_ENCRYPTED'.split(' '),
    t.F.gd = {
        1: 'You aborted the video playback',
        2: 'A network error caused the video download to fail part-way.',
        3: 'The video playback was aborted due to a corruption problem or because the video used features your browser did not support.',
        4: 'The video could not be loaded, either because the server or network failed or because the format is not supported.',
        5: 'The video is encrypted and we do not have the keys to decrypt it.'
    };
    for (var m = 0; m < t.F.Ra.length; m++)
        t.F[t.F.Ra[m]] = m,
        t.F.prototype[t.F.Ra[m]] = m;
    var y, W, T, p;
    for (y = ['requestFullscreen exitFullscreen fullscreenElement fullscreenEnabled fullscreenchange fullscreenerror'.split(' '), 'webkitRequestFullscreen webkitExitFullscreen webkitFullscreenElement webkitFullscreenEnabled webkitfullscreenchange webkitfullscreenerror'.split(' '), 'webkitRequestFullScreen webkitCancelFullScreen webkitCurrentFullScreenElement webkitCancelFullScreen webkitfullscreenchange webkitfullscreenerror'.split(' '), 'mozRequestFullScreen mozCancelFullScreen mozFullScreenElement mozFullScreenEnabled mozfullscreenchange mozfullscreenerror'.split(' '), 'msRequestFullscreen msExitFullscreen msFullscreenElement msFullscreenEnabled MSFullscreenChange MSFullscreenError'.split(' ')],
    W = y[0],
    p = 0; p < y.length; p++)
        if (y[p][1]in document) {
            T = y[p];
            break
        }
    ;if (T)
        for (t.Na.Ab = {},
        p = 0; p < T.length; p++)
            t.Na.Ab[W[p]] = T[p];
    t.Player = t.a.extend({
        h: function(e, s, n) {
            this.P = e,
            e.id = e.id || 'vjs_video_' + t.v++,
            s = t.l.B(it(e), s),
            this.z = {},
            this.Bc = s.poster,
            this.xb = s.controls,
            e.controls = i,
            s.Ec = i,
            t.a.call(this, this, s, n),
            this.controls() ? this.o('vjs-controls-enabled') : this.o('vjs-controls-disabled'),
            t.Aa[this.T] = this,
            s.plugins && t.l.wa(s.plugins, function(t, e) {
                this[t](e)
            }, this);
            var r, l, p, a, d, c;
            r = t.bind(this, this.reportUserActivity),
            this.d('mousedown', function() {
                r(),
                clearInterval(l),
                l = setInterval(r, 250)
            }),
            this.d('mousemove', function(t) {
                (t.screenX != d || t.screenY != c) && (d = t.screenX,
                c = t.screenY,
                r())
            }),
            this.d('mouseup', function() {
                r(),
                clearInterval(l)
            }),
            this.d('keydown', r),
            this.d('keyup', r),
            p = setInterval(t.bind(this, function() {
                this.na && (this.na = i,
                this.userActive(o),
                clearTimeout(a),
                a = setTimeout(t.bind(this, function() {
                    this.na || this.userActive(i)
                }), 2e3))
            }), 250),
            this.d('dispose', function() {
                clearInterval(p),
                clearTimeout(a)
            })
        }
    }),
    e = t.Player.prototype,
    e.j = t.options,
    e.dispose = function() {
        this.k('dispose'),
        this.p('dispose'),
        t.Aa[this.T] = r,
        this.P && this.P.player && (this.P.player = r),
        this.b && this.b.player && (this.b.player = r),
        clearInterval(this.Ya),
        this.Ba(),
        this.g && this.g.dispose(),
        t.a.prototype.dispose.call(this)
    }
    ,
    e.e = function() {
        var s = this.b = t.a.prototype.e.call(this, 'div')
          , e = this.P;
        if (e.removeAttribute('width'),
        e.removeAttribute('height'),
        e.hasChildNodes()) {
            var i, a, r, l, n;
            for (i = e.childNodes,
            a = i.length,
            n = []; a--; )
                r = i[a],
                l = r.nodeName.toLowerCase(),
                'track' === l && n.push(r);
            for (i = 0; i < n.length; i++)
                e.removeChild(n[i])
        }
        ;return s.id = e.id,
        s.className = e.className,
        e.id += '_html5_api',
        e.className = 'vjs-tech',
        e.player = s.player = this,
        this.o('vjs-paused'),
        this.width(this.j.width, o),
        this.height(this.j.height, o),
        e.parentNode && e.parentNode.insertBefore(s, e),
        t.Db(e, s),
        this.b = s,
        this.d('loadstart', this.Bd),
        this.d('ended', this.xd),
        this.d('play', this.Nb),
        this.d('firstplay', this.zd),
        this.d('pause', this.Mb),
        this.d('progress', this.Cd),
        this.d('durationchange', this.yc),
        this.d('fullscreenchange', this.Ad),
        s
    }
    ,
    e.Kc = function() {
        this.lc && this.Ba(),
        this.lc = setInterval(t.bind(this, function() {
            this.k('timeupdate')
        }), 250)
    }
    ,
    e.Ba = function() {
        clearInterval(this.lc),
        this.k('timeupdate')
    }
    ,
    e.Bd = function() {
        this.error(r),
        this.paused() ? (q(this, i),
        this.W('play', function() {
            q(this, o)
        })) : this.k('firstplay')
    }
    ,
    e.tc = i,
    e.Nb = function() {
        t.r(this.b, 'vjs-paused'),
        t.o(this.b, 'vjs-playing')
    }
    ,
    e.zd = function() {
        this.j.starttime && this.currentTime(this.j.starttime),
        this.o('vjs-has-started')
    }
    ,
    e.Mb = function() {
        t.r(this.b, 'vjs-playing'),
        t.o(this.b, 'vjs-paused')
    }
    ,
    e.Cd = function() {
        1 == this.bufferedPercent() && this.k('loadedalldata')
    }
    ,
    e.xd = function() {
        this.j.loop && (this.currentTime(0),
        this.play())
    }
    ,
    e.yc = function() {
        var t = a(this, 'duration');
        t && (0 > t && (t = 1 / 0),
        this.duration(t),
        1 / 0 === t ? this.o('vjs-live') : this.r('vjs-live'))
    }
    ,
    e.Ad = function() {
        this.isFullscreen() ? this.o('vjs-fullscreen') : this.r('vjs-fullscreen')
    }
    ,
    e.play = function() {
        return c(this, 'play'),
        this
    }
    ,
    e.pause = function() {
        return c(this, 'pause'),
        this
    }
    ,
    e.paused = function() {
        return a(this, 'paused') === i ? i : o
    }
    ,
    e.currentTime = function(t) {
        return t !== n ? (c(this, 'setCurrentTime', t),
        this.Ib && this.k('timeupdate'),
        this) : this.z.currentTime = a(this, 'currentTime') || 0
    }
    ,
    e.duration = function(t) {
        return t !== n ? (this.z.duration = parseFloat(t),
        this) : (this.z.duration === n && this.yc(),
        this.z.duration || 0)
    }
    ,
    e.buffered = function() {
        var e = a(this, 'buffered')
          , o = e.length - 1
          , i = this.z.sb = this.z.sb || 0;
        return e && o >= 0 && e.end(o) !== i && (i = e.end(o),
        this.z.sb = i),
        t.yb(0, i)
    }
    ,
    e.bufferedPercent = function() {
        return this.duration() ? this.buffered().end(0) / this.duration() : 0
    }
    ,
    e.volume = function(e) {
        return e !== n ? (e = Math.max(0, Math.min(1, parseFloat(e))),
        this.z.volume = e,
        c(this, 'setVolume', e),
        t.Kd(e),
        this) : (e = parseFloat(a(this, 'volume')),
        isNaN(e) ? 1 : e)
    }
    ,
    e.muted = function(t) {
        return t !== n ? (c(this, 'setMuted', t),
        this) : a(this, 'muted') || i
    }
    ,
    e.ab = function() {
        return a(this, 'supportsFullScreen') || i
    }
    ,
    e.vc = i,
    e.isFullscreen = function(t) {
        return t !== n ? (this.vc = !!t,
        this) : this.vc
    }
    ,
    e.isFullScreen = function(e) {
        return t.log.warn('player.isFullScreen() has been deprecated, use player.isFullscreen() with a lowercase "s")'),
        this.isFullscreen(e)
    }
    ,
    e.requestFullscreen = function() {
        var e = t.Na.Ab;
        return this.isFullscreen(o),
        e ? (t.d(document, e.fullscreenchange, t.bind(this, function(o) {
            this.isFullscreen(document[e.fullscreenElement]),
            this.isFullscreen() === i && t.p(document, e.fullscreenchange, arguments.callee),
            this.k('fullscreenchange')
        })),
        this.b[e.requestFullscreen]()) : this.g.ab() ? c(this, 'enterFullScreen') : (this.sd = o,
        this.kd = document.documentElement.style.overflow,
        t.d(document, 'keydown', t.bind(this, this.pc)),
        document.documentElement.style.overflow = 'hidden',
        t.o(document.body, 'vjs-full-window'),
        this.k('enterFullWindow'),
        this.k('fullscreenchange')),
        this
    }
    ,
    e.exitFullscreen = function() {
        var e = t.Na.Ab;
        return this.isFullscreen(i),
        e ? document[e.exitFullscreen]() : this.g.ab() ? c(this, 'exitFullScreen') : (I(this),
        this.k('fullscreenchange')),
        this
    }
    ,
    e.pc = function(t) {
        27 === t.keyCode && (this.isFullscreen() === o ? this.exitFullscreen() : I(this))
    }
    ,
    e.src = function(e) {
        if (e === n)
            return a(this, 'src');
        if (e instanceof Array) {
            var o;
            e: {
                o = e;
                for (var r = 0, u = this.j.techOrder; r < u.length; r++) {
                    var l = t.$(u[r])
                      , s = window.videojs[l];
                    if (s) {
                        if (s.isSupported())
                            for (var d = 0, h = o; d < h.length; d++) {
                                var p = h[d];
                                if (s.canPlaySource(p)) {
                                    o = {
                                        source: p,
                                        g: l
                                    };
                                    break e
                                }
                            }
                    } else
                        t.log.error('The "' + l + '" tech is undefined. Skipped browser support check for that tech.')
                }
                ;o = i
            }
            ;o ? (e = o.source,
            o = o.g,
            o == this.Ca ? this.src(e) : N(this, o, e)) : (this.error({
                code: 4,
                message: this.options().notSupportedMessage
            }),
            this.Ea())
        } else
            e instanceof Object ? window.videojs[this.Ca].canPlaySource(e) ? this.src(e.src) : this.src([e]) : (this.z.src = e,
            this.ca ? (c(this, 'src', e),
            'auto' == this.j.preload && this.load(),
            this.j.autoplay && this.play()) : this.J(function() {
                this.src(e)
            }));
        return this
    }
    ,
    e.load = function() {
        return c(this, 'load'),
        this
    }
    ,
    e.currentSrc = function() {
        return a(this, 'currentSrc') || this.z.src || ''
    }
    ,
    e.Xa = function(t) {
        return t !== n ? (c(this, 'setPreload', t),
        this.j.preload = t,
        this) : a(this, 'preload')
    }
    ,
    e.autoplay = function(t) {
        return t !== n ? (c(this, 'setAutoplay', t),
        this.j.autoplay = t,
        this) : a(this, 'autoplay')
    }
    ,
    e.loop = function(t) {
        return t !== n ? (c(this, 'setLoop', t),
        this.j.loop = t,
        this) : a(this, 'loop')
    }
    ,
    e.poster = function(t) {
        return t === n ? this.Bc : (this.Bc = t,
        c(this, 'setPoster', t),
        void this.k('posterchange'))
    }
    ,
    e.controls = function(t) {
        return t !== n ? (t = !!t,
        this.xb !== t && ((this.xb = t) ? (this.r('vjs-controls-disabled'),
        this.o('vjs-controls-enabled'),
        this.k('controlsenabled')) : (this.r('vjs-controls-enabled'),
        this.o('vjs-controls-disabled'),
        this.k('controlsdisabled'))),
        this) : this.xb
    }
    ,
    t.Player.prototype.Sb,
    e = t.Player.prototype,
    e.usingNativeControls = function(t) {
        return t !== n ? (t = !!t,
        this.Sb !== t && ((this.Sb = t) ? (this.o('vjs-using-native-controls'),
        this.k('usingnativecontrols')) : (this.r('vjs-using-native-controls'),
        this.k('usingcustomcontrols'))),
        this) : this.Sb
    }
    ,
    e.ba = r,
    e.error = function(e) {
        return e === n ? this.ba : e === r ? (this.ba = e,
        this.r('vjs-error'),
        this) : (this.ba = e instanceof t.F ? e : new t.F(e),
        this.k('error'),
        this.o('vjs-error'),
        t.log.error('(CODE:' + this.ba.code + ' ' + t.F.Ra[this.ba.code] + ')', this.ba.message, this.ba),
        this)
    }
    ,
    e.ended = function() {
        return a(this, 'ended')
    }
    ,
    e.seeking = function() {
        return a(this, 'seeking')
    }
    ,
    e.na = o,
    e.reportUserActivity = function() {
        this.na = o
    }
    ,
    e.Rb = o,
    e.userActive = function(t) {
        return t !== n ? (t = !!t,
        t !== this.Rb && ((this.Rb = t) ? (this.na = o,
        this.r('vjs-user-inactive'),
        this.o('vjs-user-active'),
        this.k('useractive')) : (this.na = i,
        this.g && this.g.W('mousemove', function(t) {
            t.stopPropagation(),
            t.preventDefault()
        }),
        this.r('vjs-user-active'),
        this.o('vjs-user-inactive'),
        this.k('userinactive'))),
        this) : this.Rb
    }
    ,
    e.playbackRate = function(t) {
        return t !== n ? (c(this, 'setPlaybackRate', t),
        this) : this.g && this.g.n && this.g.n.playbackRate ? a(this, 'playbackRate') : 1
    }
    ,
    t.Ha = t.a.extend(),
    t.Ha.prototype.j = {
        ee: 'play',
        children: {
            playToggle: {},
            currentTimeDisplay: {},
            timeDivider: {},
            durationDisplay: {},
            remainingTimeDisplay: {},
            liveDisplay: {},
            progressControl: {},
            fullscreenToggle: {},
            volumeControl: {},
            muteToggle: {},
            playbackRateMenuButton: {}
        }
    },
    t.Ha.prototype.e = function() {
        return t.e('div', {
            className: 'vjs-control-bar'
        })
    }
    ,
    t.Yb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i)
        }
    }),
    t.Yb.prototype.e = function() {
        var e = t.a.prototype.e.call(this, 'div', {
            className: 'vjs-live-controls vjs-control'
        });
        return this.u = t.e('div', {
            className: 'vjs-live-display',
            innerHTML: '<span class="vjs-control-text">Stream Type </span>LIVE',
            'aria-live': 'off'
        }),
        e.appendChild(this.u),
        e
    }
    ,
    t.ac = t.s.extend({
        h: function(e, i) {
            t.s.call(this, e, i),
            e.d('play', t.bind(this, this.Nb)),
            e.d('pause', t.bind(this, this.Mb))
        }
    }),
    e = t.ac.prototype,
    e.sa = 'Play',
    e.S = function() {
        return 'vjs-play-control ' + t.s.prototype.S.call(this)
    }
    ,
    e.q = function() {
        this.c.paused() ? this.c.play() : this.c.pause()
    }
    ,
    e.Nb = function() {
        t.r(this.b, 'vjs-paused'),
        t.o(this.b, 'vjs-playing'),
        this.b.children[0].children[0].innerHTML = 'Pause'
    }
    ,
    e.Mb = function() {
        t.r(this.b, 'vjs-playing'),
        t.o(this.b, 'vjs-paused'),
        this.b.children[0].children[0].innerHTML = 'Play'
    }
    ,
    t.eb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            e.d('timeupdate', t.bind(this, this.fa))
        }
    }),
    t.eb.prototype.e = function() {
        var e = t.a.prototype.e.call(this, 'div', {
            className: 'vjs-current-time vjs-time-controls vjs-control'
        });
        return this.u = t.e('div', {
            className: 'vjs-current-time-display',
            innerHTML: '<span class="vjs-control-text">Current Time </span>0:00',
            'aria-live': 'off'
        }),
        e.appendChild(this.u),
        e
    }
    ,
    t.eb.prototype.fa = function() {
        var e = this.c.$a ? this.c.z.currentTime : this.c.currentTime();
        this.u.innerHTML = '<span class="vjs-control-text">Current Time </span>' + t.ya(e, this.c.duration())
    }
    ,
    t.fb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            e.d('timeupdate', t.bind(this, this.fa))
        }
    }),
    t.fb.prototype.e = function() {
        var e = t.a.prototype.e.call(this, 'div', {
            className: 'vjs-duration vjs-time-controls vjs-control'
        });
        return this.u = t.e('div', {
            className: 'vjs-duration-display',
            innerHTML: '<span class="vjs-control-text">Duration Time </span>0:00',
            'aria-live': 'off'
        }),
        e.appendChild(this.u),
        e
    }
    ,
    t.fb.prototype.fa = function() {
        var e = this.c.duration();
        e && (this.u.innerHTML = '<span class="vjs-control-text">Duration Time </span>' + t.ya(e))
    }
    ,
    t.gc = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i)
        }
    }),
    t.gc.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-time-divider',
            innerHTML: '<div><span>/</span></div>'
        })
    }
    ,
    t.mb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            e.d('timeupdate', t.bind(this, this.fa))
        }
    }),
    t.mb.prototype.e = function() {
        var e = t.a.prototype.e.call(this, 'div', {
            className: 'vjs-remaining-time vjs-time-controls vjs-control'
        });
        return this.u = t.e('div', {
            className: 'vjs-remaining-time-display',
            innerHTML: '<span class="vjs-control-text">Remaining Time </span>-0:00',
            'aria-live': 'off'
        }),
        e.appendChild(this.u),
        e
    }
    ,
    t.mb.prototype.fa = function() {
        this.c.duration() && (this.u.innerHTML = '<span class="vjs-control-text">Remaining Time </span>-' + t.ya(this.c.duration() - this.c.currentTime()))
    }
    ,
    t.Ia = t.s.extend({
        h: function(e, i) {
            t.s.call(this, e, i)
        }
    }),
    t.Ia.prototype.sa = 'Fullscreen',
    t.Ia.prototype.S = function() {
        return 'vjs-fullscreen-control ' + t.s.prototype.S.call(this)
    }
    ,
    t.Ia.prototype.q = function() {
        this.c.isFullscreen() ? (this.c.exitFullscreen(),
        this.wb.innerHTML = 'Fullscreen') : (this.c.requestFullscreen(),
        this.wb.innerHTML = 'Non-Fullscreen')
    }
    ,
    t.lb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i)
        }
    }),
    t.lb.prototype.j = {
        children: {
            seekBar: {}
        }
    },
    t.lb.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-progress-control vjs-control'
        })
    }
    ,
    t.cc = t.Q.extend({
        h: function(e, i) {
            t.Q.call(this, e, i),
            e.d('timeupdate', t.bind(this, this.ma)),
            e.J(t.bind(this, this.ma))
        }
    }),
    e = t.cc.prototype,
    e.j = {
        children: {
            loadProgressBar: {},
            playProgressBar: {},
            seekHandle: {}
        },
        barName: 'playProgressBar',
        handleName: 'seekHandle'
    },
    e.Ac = 'timeupdate',
    e.e = function() {
        return t.Q.prototype.e.call(this, 'div', {
            className: 'vjs-progress-holder',
            'aria-label': 'video progress bar'
        })
    }
    ,
    e.ma = function() {
        var e = this.c.$a ? this.c.z.currentTime : this.c.currentTime();
        this.b.setAttribute('aria-valuenow', t.round(100 * this.Cb(), 2)),
        this.b.setAttribute('aria-valuetext', t.ya(e, this.c.duration()))
    }
    ,
    e.Cb = function() {
        return this.c.currentTime() / this.c.duration()
    }
    ,
    e.Wa = function(e) {
        t.Q.prototype.Wa.call(this, e),
        this.c.$a = o,
        this.Wd = !this.c.paused(),
        this.c.pause()
    }
    ,
    e.Kb = function(t) {
        t = G(this, t) * this.c.duration(),
        t == this.c.duration() && (t -= .1),
        this.c.currentTime(t)
    }
    ,
    e.Lb = function(e) {
        t.Q.prototype.Lb.call(this, e),
        this.c.$a = i,
        this.Wd && this.c.play()
    }
    ,
    e.Hc = function() {
        this.c.currentTime(this.c.currentTime() + 5)
    }
    ,
    e.Gc = function() {
        this.c.currentTime(this.c.currentTime() - 5)
    }
    ,
    t.ib = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            e.d('progress', t.bind(this, this.update))
        }
    }),
    t.ib.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-load-progress',
            innerHTML: '<span class="vjs-control-text">Loaded: 0%</span>'
        })
    }
    ,
    t.ib.prototype.update = function() {
        this.b.style && (this.b.style.width = t.round(100 * this.c.bufferedPercent(), 2) + '%')
    }
    ,
    t.$b = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i)
        }
    }),
    t.$b.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-play-progress',
            innerHTML: '<span class="vjs-control-text">Progress: 0%</span>'
        })
    }
    ,
    t.Ka = t.Y.extend({
        h: function(e, i) {
            t.Y.call(this, e, i),
            e.d('timeupdate', t.bind(this, this.fa))
        }
    }),
    t.Ka.prototype.defaultValue = '00:00',
    t.Ka.prototype.e = function() {
        return t.Y.prototype.e.call(this, 'div', {
            className: 'vjs-seek-handle',
            'aria-live': 'off'
        })
    }
    ,
    t.Ka.prototype.fa = function() {
        var e = this.c.$a ? this.c.z.currentTime : this.c.currentTime();
        this.b.innerHTML = '<span class="vjs-control-text">' + t.ya(e, this.c.duration()) + '</span>'
    }
    ,
    t.ob = t.a.extend({
        h: function(e, o) {
            t.a.call(this, e, o),
            e.g && e.g.n && e.g.n.volumeControl === i && this.o('vjs-hidden'),
            e.d('loadstart', t.bind(this, function() {
                e.g.n && e.g.n.volumeControl === i ? this.o('vjs-hidden') : this.r('vjs-hidden')
            }))
        }
    }),
    t.ob.prototype.j = {
        children: {
            volumeBar: {}
        }
    },
    t.ob.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-volume-control vjs-control'
        })
    }
    ,
    t.nb = t.Q.extend({
        h: function(e, i) {
            t.Q.call(this, e, i),
            e.d('volumechange', t.bind(this, this.ma)),
            e.J(t.bind(this, this.ma))
        }
    }),
    e = t.nb.prototype,
    e.ma = function() {
        this.b.setAttribute('aria-valuenow', t.round(100 * this.c.volume(), 2)),
        this.b.setAttribute('aria-valuetext', t.round(100 * this.c.volume(), 2) + '%')
    }
    ,
    e.j = {
        children: {
            volumeLevel: {},
            volumeHandle: {}
        },
        barName: 'volumeLevel',
        handleName: 'volumeHandle'
    },
    e.Ac = 'volumechange',
    e.e = function() {
        return t.Q.prototype.e.call(this, 'div', {
            className: 'vjs-volume-bar',
            'aria-label': 'volume level'
        })
    }
    ,
    e.Kb = function(t) {
        this.c.muted() && this.c.muted(i),
        this.c.volume(G(this, t))
    }
    ,
    e.Cb = function() {
        return this.c.muted() ? 0 : this.c.volume()
    }
    ,
    e.Hc = function() {
        this.c.volume(this.c.volume() + .1)
    }
    ,
    e.Gc = function() {
        this.c.volume(this.c.volume() - .1)
    }
    ,
    t.hc = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i)
        }
    }),
    t.hc.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-volume-level',
            innerHTML: '<span class="vjs-control-text"></span>'
        })
    }
    ,
    t.pb = t.Y.extend(),
    t.pb.prototype.defaultValue = '00:00',
    t.pb.prototype.e = function() {
        return t.Y.prototype.e.call(this, 'div', {
            className: 'vjs-volume-handle'
        })
    }
    ,
    t.ha = t.s.extend({
        h: function(e, o) {
            t.s.call(this, e, o),
            e.d('volumechange', t.bind(this, this.update)),
            e.g && e.g.n && e.g.n.volumeControl === i && this.o('vjs-hidden'),
            e.d('loadstart', t.bind(this, function() {
                e.g.n && e.g.n.volumeControl === i ? this.o('vjs-hidden') : this.r('vjs-hidden')
            }))
        }
    }),
    t.ha.prototype.e = function() {
        return t.s.prototype.e.call(this, 'div', {
            className: 'vjs-mute-control vjs-control',
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }
    ,
    t.ha.prototype.q = function() {
        this.c.muted(this.c.muted() ? i : o)
    }
    ,
    t.ha.prototype.update = function() {
        var e = this.c.volume()
          , i = 3;
        for (0 === e || this.c.muted() ? i = 0 : .33 > e ? i = 1 : .67 > e && (i = 2),
        this.c.muted() ? 'Unmute' != this.b.children[0].children[0].innerHTML && (this.b.children[0].children[0].innerHTML = 'Unmute') : 'Mute' != this.b.children[0].children[0].innerHTML && (this.b.children[0].children[0].innerHTML = 'Mute'),
        e = 0; 4 > e; e++)
            t.r(this.b, 'vjs-vol-' + e);
        t.o(this.b, 'vjs-vol-' + i)
    }
    ,
    t.qa = t.L.extend({
        h: function(e, o) {
            t.L.call(this, e, o),
            e.d('volumechange', t.bind(this, this.update)),
            e.g && e.g.n && e.g.n.Nc === i && this.o('vjs-hidden'),
            e.d('loadstart', t.bind(this, function() {
                e.g.n && e.g.n.Nc === i ? this.o('vjs-hidden') : this.r('vjs-hidden')
            })),
            this.o('vjs-menu-button')
        }
    }),
    t.qa.prototype.va = function() {
        var e = new t.ga(this.c,{
            kc: 'div'
        })
          , i = new t.nb(this.c,t.l.B({
            Vd: o
        }, this.j.le));
        return e.V(i),
        e
    }
    ,
    t.qa.prototype.q = function() {
        t.ha.prototype.q.call(this),
        t.L.prototype.q.call(this)
    }
    ,
    t.qa.prototype.e = function() {
        return t.s.prototype.e.call(this, 'div', {
            className: 'vjs-volume-menu-button vjs-menu-button vjs-control',
            innerHTML: '<div><span class="vjs-control-text">Mute</span></div>'
        })
    }
    ,
    t.qa.prototype.update = t.ha.prototype.update,
    t.bc = t.L.extend({
        h: function(e, i) {
            t.L.call(this, e, i),
            this.Mc(),
            this.Lc(),
            e.d('loadstart', t.bind(this, this.Mc)),
            e.d('ratechange', t.bind(this, this.Lc))
        }
    }),
    e = t.bc.prototype,
    e.e = function() {
        var e = t.a.prototype.e.call(this, 'div', {
            className: 'vjs-playback-rate vjs-menu-button vjs-control',
            innerHTML: '<div class="vjs-control-content"><span class="vjs-control-text">Playback Rate</span></div>'
        });
        return this.xc = t.e('div', {
            className: 'vjs-playback-rate-value',
            innerHTML: 1
        }),
        e.appendChild(this.xc),
        e
    }
    ,
    e.va = function() {
        var o = new t.ga(this.m())
          , i = this.m().options().playbackRates;
        if (i)
            for (var e = i.length - 1; e >= 0; e--)
                o.V(new t.kb(this.m(),{
                    rate: i[e] + 'x'
                }));
        return o
    }
    ,
    e.ma = function() {
        this.w().setAttribute('aria-valuenow', this.m().playbackRate())
    }
    ,
    e.q = function() {
        for (var o = this.m().playbackRate(), e = this.m().options().playbackRates, i = e[0], t = 0; t < e.length; t++)
            if (e[t] > o) {
                i = e[t];
                break
            }
        ;this.m().playbackRate(i)
    }
    ,
    e.Mc = function() {
        F(this) ? this.r('vjs-hidden') : this.o('vjs-hidden')
    }
    ,
    e.Lc = function() {
        F(this) && (this.xc.innerHTML = this.m().playbackRate() + 'x')
    }
    ,
    t.kb = t.I.extend({
        kc: 'button',
        h: function(e, i) {
            var o = this.label = i.rate
              , s = this.Cc = parseFloat(o, 10);
            i.label = o,
            i.selected = 1 === s,
            t.I.call(this, e, i),
            this.m().d('ratechange', t.bind(this, this.update))
        }
    }),
    t.kb.prototype.q = function() {
        t.I.prototype.q.call(this),
        this.m().playbackRate(this.Cc)
    }
    ,
    t.kb.prototype.update = function() {
        this.selected(this.m().playbackRate() == this.Cc)
    }
    ,
    t.Ja = t.s.extend({
        h: function(e, i) {
            t.s.call(this, e, i),
            e.poster() && this.src(e.poster()),
            (!e.poster() || !e.controls()) && this.G(),
            e.d('posterchange', t.bind(this, function() {
                this.src(e.poster())
            })),
            e.d('play', t.bind(this, this.G))
        }
    });
    var X = 'backgroundSize'in t.A.style;
    t.Ja.prototype.e = function() {
        var e = t.e('div', {
            className: 'vjs-poster',
            tabIndex: -1
        });
        return X || e.appendChild(t.e('img')),
        e
    }
    ,
    t.Ja.prototype.src = function(t) {
        var e = this.w();
        t !== n && (X ? e.style.backgroundImage = 'url("' + t + '")' : e.firstChild.src = t)
    }
    ,
    t.Ja.prototype.q = function() {
        this.m().controls() && this.c.play()
    }
    ,
    t.Zb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            e.d('canplay', t.bind(this, this.G)),
            e.d('canplaythrough', t.bind(this, this.G)),
            e.d('playing', t.bind(this, this.G)),
            e.d('seeking', t.bind(this, this.show)),
            e.d('seeked', t.bind(this, this.G)),
            e.d('ended', t.bind(this, this.G)),
            e.d('waiting', t.bind(this, this.show))
        }
    }),
    t.Zb.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-loading-spinner'
        })
    }
    ,
    t.bb = t.s.extend(),
    t.bb.prototype.e = function() {
        return t.s.prototype.e.call(this, 'div', {
            className: 'vjs-big-play-button',
            innerHTML: '<span aria-hidden="true"></span>',
            'aria-label': 'play video'
        })
    }
    ,
    t.bb.prototype.q = function() {
        this.c.play()
    }
    ,
    t.gb = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            this.update(),
            e.d('error', t.bind(this, this.update))
        }
    }),
    t.gb.prototype.e = function() {
        var e = t.a.prototype.e.call(this, 'div', {
            className: 'vjs-error-display'
        });
        return this.u = t.e('div'),
        e.appendChild(this.u),
        e
    }
    ,
    t.gb.prototype.update = function() {
        this.m().error() && (this.u.innerHTML = this.m().error().message)
    }
    ,
    t.t = t.a.extend({
        h: function(e, o, s) {
            o = o || {},
            o.Ec = i,
            t.a.call(this, e, o, s);
            var r, n;
            n = this,
            r = this.m(),
            e = function() {
                if (r.controls() && !r.usingNativeControls()) {
                    var t;
                    n.d('mousedown', n.q),
                    n.d('touchstart', function(e) {
                        e.preventDefault(),
                        t = this.c.userActive()
                    }),
                    n.d('touchmove', function() {
                        t && this.m().reportUserActivity()
                    }),
                    Q(n),
                    n.d('tap', n.Dd)
                }
            }
            ,
            o = t.bind(n, n.Hd),
            this.J(e),
            r.d('controlsenabled', e),
            r.d('controlsdisabled', o),
            this.J(function() {
                this.networkState && 0 < this.networkState() && this.m().k('loadstart')
            })
        }
    }),
    e = t.t.prototype,
    e.Hd = function() {
        this.p('tap'),
        this.p('touchstart'),
        this.p('touchmove'),
        this.p('touchleave'),
        this.p('touchcancel'),
        this.p('touchend'),
        this.p('click'),
        this.p('mousedown')
    }
    ,
    e.q = function(t) {
        0 === t.button && this.m().controls() && (this.m().paused() ? this.m().play() : this.m().pause())
    }
    ,
    e.Dd = function() {
        this.m().userActive(!this.m().userActive())
    }
    ,
    e.Pb = d(),
    e.n = {
        volumeControl: o,
        fullscreenResize: i,
        playbackRate: i,
        progressEvents: i,
        timeupdateEvents: i
    },
    t.media = {},
    t.f = t.t.extend({
        h: function(e, s, n) {
            for (this.n.volumeControl = t.f.dd(),
            this.n.playbackRate = t.f.cd(),
            this.n.movingMediaElementInDOM = !t.Sc,
            this.n.fullscreenResize = o,
            t.t.call(this, e, s, n),
            n = t.f.hb.length - 1; n >= 0; n--)
                t.d(this.b, t.f.hb[n], t.bind(this, this.md));
            if ((s = s.source) && this.b.currentSrc !== s.src && (this.b.src = s.src),
            t.ec && e.options().nativeControlsForTouch !== i) {
                var a, r, c, l;
                a = this,
                r = this.m(),
                s = r.controls(),
                a.b.controls = !!s,
                c = function() {
                    a.b.controls = o
                }
                ,
                l = function() {
                    a.b.controls = i
                }
                ,
                r.d('controlsenabled', c),
                r.d('controlsdisabled', l),
                s = function() {
                    r.p('controlsenabled', c),
                    r.p('controlsdisabled', l)
                }
                ,
                a.d('dispose', s),
                r.d('usingcustomcontrols', s),
                r.usingNativeControls(o)
            }
            ;e.J(function() {
                this.P && this.j.autoplay && this.paused() && (delete this.P.poster,
                this.play())
            }),
            this.Ea()
        }
    }),
    e = t.f.prototype,
    e.dispose = function() {
        t.t.prototype.dispose.call(this)
    }
    ,
    e.e = function() {
        var s, o = this.c, e = o.P;
        e && this.n.movingMediaElementInDOM !== i || (e ? (s = e.cloneNode(i),
        t.f.mc(e),
        e = s,
        o.P = r) : e = t.e('video', {
            id: o.id() + '_html5_api',
            className: 'vjs-tech'
        }),
        e.player = o,
        t.Db(e, o.w())),
        s = ['autoplay', 'preload', 'loop', 'muted'];
        for (var n = s.length - 1; n >= 0; n--) {
            var a = s[n];
            o.j[a] !== r && (e[a] = o.j[a])
        }
        ;return e
    }
    ,
    e.md = function(t) {
        'error' == t.type ? this.m().error(this.error().code) : (t.bubbles = i,
        this.m().k(t))
    }
    ,
    e.play = function() {
        this.b.play()
    }
    ,
    e.pause = function() {
        this.b.pause()
    }
    ,
    e.paused = function() {
        return this.b.paused
    }
    ,
    e.currentTime = function() {
        return this.b.currentTime
    }
    ,
    e.Jd = function(e) {
        try {
            this.b.currentTime = e
        } catch (i) {
            t.log(i, 'Video is not ready. (Video.js)')
        }
    }
    ,
    e.duration = function() {
        return this.b.duration || 0
    }
    ,
    e.buffered = function() {
        return this.b.buffered
    }
    ,
    e.volume = function() {
        return this.b.volume
    }
    ,
    e.Pd = function(t) {
        this.b.volume = t
    }
    ,
    e.muted = function() {
        return this.b.muted
    }
    ,
    e.Md = function(t) {
        this.b.muted = t
    }
    ,
    e.width = function() {
        return this.b.offsetWidth
    }
    ,
    e.height = function() {
        return this.b.offsetHeight
    }
    ,
    e.ab = function() {
        return 'function' != typeof this.b.webkitEnterFullScreen || !/Android/.test(t.M) && /Chrome|Mac OS X 10.5/.test(t.M) ? i : o
    }
    ,
    e.nc = function() {
        var t = this.b;
        t.paused && t.networkState <= t.Yd ? (this.b.play(),
        setTimeout(function() {
            t.pause(),
            t.webkitEnterFullScreen()
        }, 0)) : t.webkitEnterFullScreen()
    }
    ,
    e.nd = function() {
        this.b.webkitExitFullScreen()
    }
    ,
    e.src = function(t) {
        this.b.src = t
    }
    ,
    e.load = function() {
        this.b.load()
    }
    ,
    e.currentSrc = function() {
        return this.b.currentSrc
    }
    ,
    e.poster = function() {
        return this.b.poster
    }
    ,
    e.Pb = function(t) {
        this.b.poster = t
    }
    ,
    e.Xa = function() {
        return this.b.Xa
    }
    ,
    e.Od = function(t) {
        this.b.Xa = t
    }
    ,
    e.autoplay = function() {
        return this.b.autoplay
    }
    ,
    e.Id = function(t) {
        this.b.autoplay = t
    }
    ,
    e.controls = function() {
        return this.b.controls
    }
    ,
    e.loop = function() {
        return this.b.loop
    }
    ,
    e.Ld = function(t) {
        this.b.loop = t
    }
    ,
    e.error = function() {
        return this.b.error
    }
    ,
    e.seeking = function() {
        return this.b.seeking
    }
    ,
    e.ended = function() {
        return this.b.ended
    }
    ,
    e.playbackRate = function() {
        return this.b.playbackRate
    }
    ,
    e.Nd = function(t) {
        this.b.playbackRate = t
    }
    ,
    e.networkState = function() {
        return this.b.networkState
    }
    ,
    t.f.isSupported = function() {
        try {
            t.A.volume = .5
        } catch (e) {
            return i
        }
        ;return !!t.A.canPlayType
    }
    ,
    t.f.tb = function(e) {
        try {
            return !!t.A.canPlayType(e.type)
        } catch (i) {
            return ''
        }
    }
    ,
    t.f.dd = function() {
        var e = t.A.volume;
        return t.A.volume = e / 2 + .1,
        e !== t.A.volume
    }
    ,
    t.f.cd = function() {
        var e = t.A.playbackRate;
        return t.A.playbackRate = e / 2 + .1,
        e !== t.A.playbackRate
    }
    ;
    var h, tt = /^application\/(?:x-|vnd\.apple\.)mpegurl/i, Z = /^video\/mp4/i;
    t.f.zc = function() {
        4 <= t.Tb && (h || (h = t.A.constructor.prototype.canPlayType),
        t.A.constructor.prototype.canPlayType = function(t) {
            return t && tt.test(t) ? 'maybe' : h.call(this, t)
        }
        ),
        t.Wc && (h || (h = t.A.constructor.prototype.canPlayType),
        t.A.constructor.prototype.canPlayType = function(t) {
            return t && Z.test(t) ? 'maybe' : h.call(this, t)
        }
        )
    }
    ,
    t.f.Ud = function() {
        var e = t.A.constructor.prototype.canPlayType;
        return t.A.constructor.prototype.canPlayType = h,
        h = r,
        e
    }
    ,
    t.f.zc(),
    t.f.hb = 'loadstart suspend abort error emptied stalled loadedmetadata loadeddata canplay canplaythrough playing waiting seeking seeked ended durationchange timeupdate progress play pause ratechange volumechange'.split(' '),
    t.f.mc = function(t) {
        if (t) {
            for (t.player = r,
            t.parentNode && t.parentNode.removeChild(t); t.hasChildNodes(); )
                t.removeChild(t.firstChild);
            if (t.removeAttribute('src'),
            'function' == typeof t.load)
                try {
                    t.load()
                } catch (e) {}
        }
    }
    ,
    t.i = t.t.extend({
        h: function(e, s, n) {
            t.t.call(this, e, s, n);
            var l = s.source;
            n = s.parentEl;
            var d = this.b = t.e('div', {
                id: e.id() + '_temp_flash'
            })
              , c = e.id() + '_flash_api';
            e = e.j;
            var h, r = t.l.B({
                readyFunction: 'videojs.Flash.onReady',
                eventProxyFunction: 'videojs.Flash.onEvent',
                errorEventProxyFunction: 'videojs.Flash.onError',
                autoplay: e.autoplay,
                preload: e.Xa,
                loop: e.loop,
                muted: e.muted
            }, s.flashVars), u = t.l.B({
                wmode: 'opaque',
                bgcolor: '#000000'
            }, s.params), p = t.l.B({
                id: c,
                name: c,
                'class': 'vjs-tech'
            }, s.attributes);
            if (l && (l.type && t.i.ud(l.type) ? (e = t.i.Ic(l.src),
            r.rtmpConnection = encodeURIComponent(e.vb),
            r.rtmpStream = encodeURIComponent(e.Qb)) : r.src = encodeURIComponent(t.qc(l.src))),
            this.setCurrentTime = function(t) {
                h = t,
                this.b.vjs_setProperty('currentTime', t)
            }
            ,
            this.currentTime = function() {
                return this.seeking() ? h : this.b.vjs_getProperty('currentTime')
            }
            ,
            t.Db(d, n),
            s.startTime && this.J(function() {
                this.load(),
                this.play(),
                this.currentTime(s.startTime)
            }),
            t.Xb && this.J(function() {
                t.d(this.w(), 'mousemove', t.bind(this, function() {
                    this.m().k({
                        type: 'mousemove',
                        bubbles: i
                    })
                }))
            }),
            s.iFrameMode !== o || t.Xb)
                t.i.ld(s.swf, d, r, u, p);
            else {
                var a = t.e('iframe', {
                    id: c + '_iframe',
                    name: c + '_iframe',
                    className: 'vjs-tech',
                    scrolling: 'no',
                    marginWidth: 0,
                    marginHeight: 0,
                    frameBorder: 0
                });
                r.readyFunction = 'ready',
                r.eventProxyFunction = 'events',
                r.errorEventProxyFunction = 'errors',
                t.d(a, 'load', t.bind(this, function() {
                    var i, e = a.contentWindow;
                    i = a.contentDocument ? a.contentDocument : a.contentWindow.document,
                    i.write(t.i.rc(s.swf, r, u, p)),
                    e.player = this.c,
                    e.ready = t.bind(this.c, function(e) {
                        var o = this.g;
                        o.b = i.getElementById(e),
                        t.i.ub(o)
                    }),
                    e.events = t.bind(this.c, function(t, e) {
                        this && 'flash' === this.Ca && this.k(e)
                    }),
                    e.errors = t.bind(this.c, function(e, i) {
                        t.log('Flash Error', i)
                    })
                })),
                d.parentNode.replaceChild(a, d)
            }
        }
    }),
    e = t.i.prototype,
    e.dispose = function() {
        t.t.prototype.dispose.call(this)
    }
    ,
    e.play = function() {
        this.b.vjs_play()
    }
    ,
    e.pause = function() {
        this.b.vjs_pause()
    }
    ,
    e.src = function(e) {
        if (e === n)
            return this.currentSrc();
        if (t.i.td(e) ? (e = t.i.Ic(e),
        this.ge(e.vb),
        this.he(e.Qb)) : (e = t.qc(e),
        this.b.vjs_src(e)),
        this.c.autoplay()) {
            var i = this;
            setTimeout(function() {
                i.play()
            }, 0)
        }
    }
    ,
    e.currentSrc = function() {
        var e = this.b.vjs_getProperty('currentSrc');
        if (e == r) {
            var o = this.rtmpConnection()
              , i = this.rtmpStream();
            o && i && (e = t.i.Qd(o, i))
        }
        ;return e
    }
    ,
    e.load = function() {
        this.b.vjs_load()
    }
    ,
    e.poster = function() {
        this.b.vjs_getProperty('poster')
    }
    ,
    e.Pb = d(),
    e.buffered = function() {
        return t.yb(0, this.b.vjs_getProperty('buffered'))
    }
    ,
    e.ab = f(i),
    e.nc = f(i);
    var B = t.i.prototype, A = 'rtmpConnection rtmpStream preload defaultPlaybackRate playbackRate autoplay loop mediaGroup controller controls volume muted defaultMuted'.split(' '), U = 'error networkState readyState seeking initialTime duration startOffsetTime paused played seekable ended videoTracks audioTracks videoWidth videoHeight textTracks'.split(' '), u;
    for (u = 0; u < A.length; u++)
        R(A[u]),
        st();
    for (u = 0; u < U.length; u++)
        R(U[u]);
    if (t.i.isSupported = function() {
        return 10 <= t.i.version()[0]
    }
    ,
    t.i.tb = function(e) {
        return e.type ? (e = e.type.replace(/;.*/, '').toLowerCase(),
        e in t.i.pd || e in t.i.Jc ? 'maybe' : void 0) : ''
    }
    ,
    t.i.pd = {
        'video/flv': 'FLV',
        'video/x-flv': 'FLV',
        'video/mp4': 'MP4',
        'video/m4v': 'MP4'
    },
    t.i.Jc = {
        'rtmp/mp4': 'MP4',
        'rtmp/flv': 'FLV'
    },
    t.i.onReady = function(e) {
        e = t.w(e);
        var o = e.player || e.parentNode.player
          , i = o.g;
        e.player = o,
        i.b = e,
        t.i.ub(i)
    }
    ,
    t.i.ub = function(e) {
        e.w().vjs_getProperty ? e.Ea() : setTimeout(function() {
            t.i.ub(e)
        }, 50)
    }
    ,
    t.i.onEvent = function(e, i) {
        t.w(e).player.k(i)
    }
    ,
    t.i.onError = function(e, i) {
        var s = t.w(e).player
          , o = 'FLASH: ' + i;
        'srcnotfound' == i ? s.error({
            code: 4,
            message: o
        }) : s.error(o)
    }
    ,
    t.i.version = function() {
        var e = '0,0,0';
        try {
            e = new window.ActiveXObject('ShockwaveFlash.ShockwaveFlash').GetVariable('$version').replace(/\D+/g, ',').match(/^,?(.+),?$/)[1]
        } catch (t) {
            try {
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin && (e = (navigator.plugins['Shockwave Flash 2.0'] || navigator.plugins['Shockwave Flash']).description.replace(/\D+/g, ',').match(/^,?(.+),?$/)[1])
            } catch (t) {}
        }
        ;return e.split(',')
    }
    ,
    t.i.ld = function(e, i, o, s, n) {
        e = t.i.rc(e, o, s, n),
        e = t.e('div', {
            innerHTML: e
        }).childNodes[0],
        o = i.parentNode,
        i.parentNode.replaceChild(e, i);
        var r = o.childNodes[0];
        setTimeout(function() {
            r.style.display = 'block'
        }, 1e3)
    }
    ,
    t.i.rc = function(e, i, o, s) {
        var a = ''
          , r = ''
          , n = '';
        return i && t.l.wa(i, function(t, e) {
            a += t + '=' + e + '&amp;'
        }),
        o = t.l.B({
            movie: e,
            flashvars: a,
            allowScriptAccess: 'always',
            allowNetworking: 'all'
        }, o),
        t.l.wa(o, function(t, e) {
            r += '<param name="' + t + '" value="' + e + '" />'
        }),
        s = t.l.B({
            data: e,
            width: '100%',
            height: '100%'
        }, s),
        t.l.wa(s, function(t, e) {
            n += t + '="' + e + '" '
        }),
        '<object type="application/x-shockwave-flash"' + n + '>' + r + '</object>'
    }
    ,
    t.i.Qd = function(t, e) {
        return t + '&' + e
    }
    ,
    t.i.Ic = function(t) {
        var i = {
            vb: '',
            Qb: ''
        };
        if (!t)
            return i;
        var o, e = t.indexOf('&');
        return -1 !== e ? o = e + 1 : (e = o = t.lastIndexOf('/') + 1,
        0 === e && (e = o = t.length)),
        i.vb = t.substring(0, e),
        i.Qb = t.substring(o, t.length),
        i
    }
    ,
    t.i.ud = function(e) {
        return e in t.i.Jc
    }
    ,
    t.i.Yc = /^rtmp[set]?:\/\//i,
    t.i.td = function(e) {
        return t.i.Yc.test(e)
    }
    ,
    t.Xc = t.a.extend({
        h: function(e, i, o) {
            if (t.a.call(this, e, i, o),
            e.j.sources && 0 !== e.j.sources.length)
                e.src(e.j.sources);
            else
                for (i = 0,
                o = e.j.techOrder; i < o.length; i++) {
                    var n = t.$(o[i])
                      , s = window.videojs[n];
                    if (s && s.isSupported()) {
                        N(e, n);
                        break
                    }
                }
        }
    }),
    t.Player.prototype.textTracks = function() {
        return this.Da = this.Da || []
    }
    ,
    t.C = t.a.extend({
        h: function(e, i) {
            t.a.call(this, e, i),
            this.T = i.id || 'vjs_' + i.kind + '_' + i.language + '_' + t.v++,
            this.Fc = i.src,
            this.hd = i['default'] || i.dflt,
            this.Sd = i.title,
            this.de = i.srclang,
            this.vd = i.label,
            this.aa = [],
            this.qb = [],
            this.ka = this.la = 0,
            this.c.d('fullscreenchange', t.bind(this, this.$c))
        }
    }),
    e = t.C.prototype,
    e.K = l('H'),
    e.src = l('Fc'),
    e.Qa = l('hd'),
    e.title = l('Sd'),
    e.label = l('vd'),
    e.ed = l('aa'),
    e.Zc = l('qb'),
    e.readyState = l('la'),
    e.mode = l('ka'),
    e.$c = function() {
        this.b.style.fontSize = this.c.isFullScreen() ? 140 * (screen.width / this.c.width()) + '%' : ''
    }
    ,
    e.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-' + this.H + ' vjs-text-track'
        })
    }
    ,
    e.show = function() {
        L(this),
        this.ka = 2,
        t.a.prototype.show.call(this)
    }
    ,
    e.G = function() {
        L(this),
        this.ka = 1,
        t.a.prototype.G.call(this)
    }
    ,
    e.disable = function() {
        2 == this.ka && this.G(),
        this.c.p('timeupdate', t.bind(this, this.update, this.T)),
        this.c.p('ended', t.bind(this, this.reset, this.T)),
        this.reset(),
        this.c.ja('textTrackDisplay').removeChild(this),
        this.ka = 0
    }
    ,
    e.load = function() {
        0 === this.la && (this.la = 1,
        t.get(this.Fc, t.bind(this, this.Ed), t.bind(this, this.yd)))
    }
    ,
    e.yd = function(t) {
        this.error = t,
        this.la = 3,
        this.k('error')
    }
    ,
    e.Ed = function(e) {
        var i, s;
        e = e.split('\n');
        for (var o = '', n = 1, r = e.length; r > n; n++)
            if (o = t.trim(e[n])) {
                for (-1 == o.indexOf('-->') ? (i = o,
                o = t.trim(e[++n])) : i = this.aa.length,
                i = {
                    id: i,
                    index: this.aa.length
                },
                s = o.split(' --> '),
                i.startTime = D(s[0]),
                i.xa = D(s[1]),
                s = []; e[++n] && (o = t.trim(e[n])); )
                    s.push(o);
                i.text = s.join('<br/>'),
                this.aa.push(i)
            }
        ;this.la = 2,
        this.k('loaded')
    }
    ,
    e.update = function() {
        if (0 < this.aa.length) {
            var e = this.c.options().trackTimeOffset || 0
              , e = this.c.currentTime() + e;
            if (this.Ob === n || e < this.Ob || this.Ta <= e) {
                var a, r, t, s, c = this.aa, d = this.c.duration(), l = 0, p = i, u = [];
                for (e >= this.Ta || this.Ta === n ? s = this.zb !== n ? this.zb : 0 : (p = o,
                s = this.Gb !== n ? this.Gb : c.length - 1); ; ) {
                    if (t = c[s],
                    t.xa <= e)
                        l = Math.max(l, t.xa),
                        t.Ma && (t.Ma = i);
                    else if (e < t.startTime) {
                        if (d = Math.min(d, t.startTime),
                        t.Ma && (t.Ma = i),
                        !p)
                            break
                    } else
                        p ? (u.splice(0, 0, t),
                        r === n && (r = s),
                        a = s) : (u.push(t),
                        a === n && (a = s),
                        r = s),
                        d = Math.min(d, t.xa),
                        l = Math.max(l, t.startTime),
                        t.Ma = o;
                    if (p) {
                        if (0 === s)
                            break;
                        s--
                    } else {
                        if (s === c.length - 1)
                            break;
                        s++
                    }
                }
                ;for (this.qb = u,
                this.Ta = d,
                this.Ob = l,
                this.zb = a,
                this.Gb = r,
                a = this.qb,
                r = '',
                e = 0,
                c = a.length; c > e; e++)
                    r += '<span class="vjs-tt-cue">' + a[e].text + '</span>';
                this.b.innerHTML = r,
                this.k('cuechange')
            }
        }
    }
    ,
    e.reset = function() {
        this.Ta = 0,
        this.Ob = this.c.duration(),
        this.Gb = this.zb = 0
    }
    ,
    t.Vb = t.C.extend(),
    t.Vb.prototype.H = 'captions',
    t.dc = t.C.extend(),
    t.dc.prototype.H = 'subtitles',
    t.Wb = t.C.extend(),
    t.Wb.prototype.H = 'chapters',
    t.fc = t.a.extend({
        h: function(e, i, o) {
            if (t.a.call(this, e, i, o),
            e.j.tracks && 0 < e.j.tracks.length) {
                i = this.c,
                e = e.j.tracks;
                for (var s = 0; s < e.length; s++)
                    o = e[s],
                    ot(i, o.kind, o.label, o.language, o)
            }
        }
    }),
    t.fc.prototype.e = function() {
        return t.a.prototype.e.call(this, 'div', {
            className: 'vjs-text-track-display'
        })
    }
    ,
    t.Z = t.I.extend({
        h: function(e, i) {
            var o = this.ea = i.track;
            i.label = o.label(),
            i.selected = o.Qa(),
            t.I.call(this, e, i),
            this.c.d(o.K() + 'trackchange', t.bind(this, this.update))
        }
    }),
    t.Z.prototype.q = function() {
        t.I.prototype.q.call(this),
        z(this.c, this.ea.T, this.ea.K())
    }
    ,
    t.Z.prototype.update = function() {
        this.selected(2 == this.ea.mode())
    }
    ,
    t.jb = t.Z.extend({
        h: function(e, s) {
            s.track = {
                K: function() {
                    return s.kind
                },
                m: e,
                label: function() {
                    return s.kind + ' off'
                },
                Qa: f(i),
                mode: f(i)
            },
            t.Z.call(this, e, s),
            this.selected(o)
        }
    }),
    t.jb.prototype.q = function() {
        t.Z.prototype.q.call(this),
        z(this.c, this.ea.T, this.ea.K())
    }
    ,
    t.jb.prototype.update = function() {
        for (var t, s = this.c.textTracks(), e = 0, r = s.length, n = o; r > e; e++)
            t = s[e],
            t.K() == this.ea.K() && 2 == t.mode() && (n = i);
        this.selected(n)
    }
    ,
    t.U = t.L.extend({
        h: function(e, i) {
            t.L.call(this, e, i),
            1 >= this.O.length && this.G()
        }
    }),
    t.U.prototype.ua = function() {
        var i, e = [];
        e.push(new t.jb(this.c,{
            kind: this.H
        }));
        for (var o = 0; o < this.c.textTracks().length; o++)
            i = this.c.textTracks()[o],
            i.K() === this.H && e.push(new t.Z(this.c,{
                track: i
            }));
        return e
    }
    ,
    t.Fa = t.U.extend({
        h: function(e, i, o) {
            t.U.call(this, e, i, o),
            this.b.setAttribute('aria-label', 'Captions Menu')
        }
    }),
    t.Fa.prototype.H = 'captions',
    t.Fa.prototype.sa = 'Captions',
    t.Fa.prototype.className = 'vjs-captions-button',
    t.La = t.U.extend({
        h: function(e, i, o) {
            t.U.call(this, e, i, o),
            this.b.setAttribute('aria-label', 'Subtitles Menu')
        }
    }),
    t.La.prototype.H = 'subtitles',
    t.La.prototype.sa = 'Subtitles',
    t.La.prototype.className = 'vjs-subtitles-button',
    t.Ga = t.U.extend({
        h: function(e, i, o) {
            t.U.call(this, e, i, o),
            this.b.setAttribute('aria-label', 'Chapters Menu')
        }
    }),
    e = t.Ga.prototype,
    e.H = 'chapters',
    e.sa = 'Chapters',
    e.className = 'vjs-chapters-button',
    e.ua = function() {
        for (var e, o = [], i = 0; i < this.c.textTracks().length; i++)
            e = this.c.textTracks()[i],
            e.K() === this.H && o.push(new t.Z(this.c,{
                track: e
            }));
        return o
    }
    ,
    e.va = function() {
        for (var e, n, o = this.c.textTracks(), i = 0, r = o.length, a = this.O = []; r > i; i++)
            if (e = o[i],
            e.K() == this.H && e.Qa()) {
                if (2 > e.readyState())
                    return this.ae = e,
                    void e.d('loaded', t.bind(this, this.va));
                n = e;
                break
            }
        ;if (o = this.za = new t.ga(this.c),
        o.ia().appendChild(t.e('li', {
            className: 'vjs-menu-title',
            innerHTML: t.$(this.H),
            Rd: -1
        })),
        n) {
            e = n.aa;
            for (var s, i = 0, r = e.length; r > i; i++)
                s = e[i],
                s = new t.cb(this.c,{
                    track: n,
                    cue: s
                }),
                a.push(s),
                o.V(s)
        }
        ;return 0 < this.O.length && this.show(),
        o
    }
    ,
    t.cb = t.I.extend({
        h: function(e, i) {
            var n = this.ea = i.track
              , o = this.cue = i.cue
              , s = e.currentTime();
            i.label = o.text,
            i.selected = o.startTime <= s && s < o.xa,
            t.I.call(this, e, i),
            n.d('cuechange', t.bind(this, this.update))
        }
    }),
    t.cb.prototype.q = function() {
        t.I.prototype.q.call(this),
        this.c.currentTime(this.cue.startTime),
        this.update(this.cue.startTime)
    }
    ,
    t.cb.prototype.update = function() {
        var e = this.cue
          , t = this.c.currentTime();
        this.selected(e.startTime <= t && t < e.xa)
    }
    ,
    t.l.B(t.Ha.prototype.j.children, {
        subtitlesButton: {},
        captionsButton: {},
        chaptersButton: {}
    }),
    'undefined' != typeof window.JSON && 'function' === window.JSON.parse)
        t.JSON = window.JSON;
    else {
        t.JSON = {};
        var S = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g;
        t.JSON.parse = function(t, e) {
            function o(t, i) {
                var r, a, s = t[i];
                if (s && 'object' == typeof s)
                    for (r in s)
                        Object.prototype.hasOwnProperty.call(s, r) && (a = o(s, r),
                        a !== n ? s[r] = a : delete s[r]);
                return e.call(t, i, s)
            }
            ;var i;
            if (t = String(t),
            S.lastIndex = 0,
            S.test(t) && (t = t.replace(S, function(t) {
                return '\\u' + ('0000' + t.charCodeAt(0).toString(16)).slice(-4)
            })),
            /^[\],:{}\s]*$/.test(t.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']').replace(/(?:^|:|,)(?:\s*\[)+/g, '')))
                return i = eval('(' + t + ')'),
                'function' == typeof e ? o({
                    '': i
                }, '') : i;
            throw new SyntaxError('JSON.parse(): invalid or malformed JSON data')
        }
    }
    ;t.ic = function() {
        var i, e, o = document.getElementsByTagName('video');
        if (o && 0 < o.length)
            for (var s = 0, a = o.length; a > s; s++) {
                if (!(e = o[s]) || !e.getAttribute) {
                    t.rb();
                    break
                }
                ;e.player === n && (i = e.getAttribute('data-setup'),
                i !== r && (i = t.JSON.parse(i || '{}'),
                b(e, i)))
            }
        else
            t.Oc || t.rb()
    }
    ,
    t.rb = function() {
        setTimeout(t.ic, 1)
    }
    ,
    'complete' === document.readyState ? t.Oc = o : t.W(window, 'load', function() {
        t.Oc = o
    }),
    t.rb(),
    t.Gd = function(e, i) {
        t.Player.prototype[e] = i
    }
    ;
    var Y = this;
    Y.Xd = o,
    s('videojs', t),
    s('_V_', t),
    s('videojs.options', t.options),
    s('videojs.players', t.Aa),
    s('videojs.TOUCH_ENABLED', t.ec),
    s('videojs.cache', t.ta),
    s('videojs.Component', t.a),
    t.a.prototype.player = t.a.prototype.m,
    t.a.prototype.options = t.a.prototype.options,
    t.a.prototype.init = t.a.prototype.h,
    t.a.prototype.dispose = t.a.prototype.dispose,
    t.a.prototype.createEl = t.a.prototype.e,
    t.a.prototype.contentEl = t.a.prototype.ia,
    t.a.prototype.el = t.a.prototype.w,
    t.a.prototype.addChild = t.a.prototype.V,
    t.a.prototype.getChild = t.a.prototype.ja,
    t.a.prototype.getChildById = t.a.prototype.qd,
    t.a.prototype.children = t.a.prototype.children,
    t.a.prototype.initChildren = t.a.prototype.uc,
    t.a.prototype.removeChild = t.a.prototype.removeChild,
    t.a.prototype.on = t.a.prototype.d,
    t.a.prototype.off = t.a.prototype.p,
    t.a.prototype.one = t.a.prototype.W,
    t.a.prototype.trigger = t.a.prototype.k,
    t.a.prototype.triggerReady = t.a.prototype.Ea,
    t.a.prototype.show = t.a.prototype.show,
    t.a.prototype.hide = t.a.prototype.G,
    t.a.prototype.width = t.a.prototype.width,
    t.a.prototype.height = t.a.prototype.height,
    t.a.prototype.dimensions = t.a.prototype.jd,
    t.a.prototype.ready = t.a.prototype.J,
    t.a.prototype.addClass = t.a.prototype.o,
    t.a.prototype.removeClass = t.a.prototype.r,
    t.a.prototype.buildCSSClass = t.a.prototype.S,
    t.Player.prototype.ended = t.Player.prototype.ended,
    s('videojs.MediaLoader', t.Xc),
    s('videojs.TextTrackDisplay', t.fc),
    s('videojs.ControlBar', t.Ha),
    s('videojs.Button', t.s),
    s('videojs.PlayToggle', t.ac),
    s('videojs.FullscreenToggle', t.Ia),
    s('videojs.BigPlayButton', t.bb),
    s('videojs.LoadingSpinner', t.Zb),
    s('videojs.CurrentTimeDisplay', t.eb),
    s('videojs.DurationDisplay', t.fb),
    s('videojs.TimeDivider', t.gc),
    s('videojs.RemainingTimeDisplay', t.mb),
    s('videojs.LiveDisplay', t.Yb),
    s('videojs.ErrorDisplay', t.gb),
    s('videojs.Slider', t.Q),
    s('videojs.ProgressControl', t.lb),
    s('videojs.SeekBar', t.cc),
    s('videojs.LoadProgressBar', t.ib),
    s('videojs.PlayProgressBar', t.$b),
    s('videojs.SeekHandle', t.Ka),
    s('videojs.VolumeControl', t.ob),
    s('videojs.VolumeBar', t.nb),
    s('videojs.VolumeLevel', t.hc),
    s('videojs.VolumeMenuButton', t.qa),
    s('videojs.VolumeHandle', t.pb),
    s('videojs.MuteToggle', t.ha),
    s('videojs.PosterImage', t.Ja),
    s('videojs.Menu', t.ga),
    s('videojs.MenuItem', t.I),
    s('videojs.MenuButton', t.L),
    s('videojs.PlaybackRateMenuButton', t.bc),
    t.L.prototype.createItems = t.L.prototype.ua,
    t.U.prototype.createItems = t.U.prototype.ua,
    t.Ga.prototype.createItems = t.Ga.prototype.ua,
    s('videojs.SubtitlesButton', t.La),
    s('videojs.CaptionsButton', t.Fa),
    s('videojs.ChaptersButton', t.Ga),
    s('videojs.MediaTechController', t.t),
    t.t.prototype.features = t.t.prototype.n,
    t.t.prototype.n.volumeControl = t.t.prototype.n.Nc,
    t.t.prototype.n.fullscreenResize = t.t.prototype.n.be,
    t.t.prototype.n.progressEvents = t.t.prototype.n.fe,
    t.t.prototype.n.timeupdateEvents = t.t.prototype.n.ie,
    t.t.prototype.setPoster = t.t.prototype.Pb,
    s('videojs.Html5', t.f),
    t.f.Events = t.f.hb,
    t.f.isSupported = t.f.isSupported,
    t.f.canPlaySource = t.f.tb,
    t.f.patchCanPlayType = t.f.zc,
    t.f.unpatchCanPlayType = t.f.Ud,
    t.f.prototype.setCurrentTime = t.f.prototype.Jd,
    t.f.prototype.setVolume = t.f.prototype.Pd,
    t.f.prototype.setMuted = t.f.prototype.Md,
    t.f.prototype.setPreload = t.f.prototype.Od,
    t.f.prototype.setAutoplay = t.f.prototype.Id,
    t.f.prototype.setLoop = t.f.prototype.Ld,
    t.f.prototype.enterFullScreen = t.f.prototype.nc,
    t.f.prototype.exitFullScreen = t.f.prototype.nd,
    t.f.prototype.playbackRate = t.f.prototype.playbackRate,
    t.f.prototype.setPlaybackRate = t.f.prototype.Nd,
    s('videojs.Flash', t.i),
    t.i.isSupported = t.i.isSupported,
    t.i.canPlaySource = t.i.tb,
    t.i.onReady = t.i.onReady,
    s('videojs.TextTrack', t.C),
    t.C.prototype.label = t.C.prototype.label,
    t.C.prototype.kind = t.C.prototype.K,
    t.C.prototype.mode = t.C.prototype.mode,
    t.C.prototype.cues = t.C.prototype.ed,
    t.C.prototype.activeCues = t.C.prototype.Zc,
    s('videojs.CaptionsTrack', t.Vb),
    s('videojs.SubtitlesTrack', t.dc),
    s('videojs.ChaptersTrack', t.Wb),
    s('videojs.autoSetup', t.ic),
    s('videojs.plugin', t.Gd),
    s('videojs.createTimeRange', t.yb),
    s('videojs.util', t.oa),
    t.oa.mergeOptions = t.oa.Jb
}();
!function(t) {
    'use strict';
    'function' == typeof define && define.amd ? define(['jquery', 'videojs', 'imagesloaded', 'jquery-ui'], t) : t(jQuery, videojs)
}(function(t, e) {
    t.BigVideo = function(i) {
        function v() {
            var i = t(window).width()
              , e = r.container.outerHeight() < t(window).height() ? r.container.outerHeight() : t(window).height()
              , a = i / e;
            r.container.is(t('body')) && t('html,body').css('height', t(window).height() > t('body').css('height', 'auto').height() ? '100%' : 'auto'),
            n > a ? 'video' == u ? (o.width(e * n).height(e),
            r.shrinkable ? t(s).css('top', -(i / n - e) / 2).css('left', 0).css('height', i / n) : t(s).css('top', 0).css('left', -(e * n - i) / 2).css('height', e),
            t(s + '_html5_api').css('width', e * n).css('height', e),
            t(s + '_flash_api').css('width', e * n).css('height', e)) : t('#big-video-image').css({
                width: 'auto',
                height: e,
                top: 0,
                left: -(e * n - i) / 2
            }) : 'video' == u ? (o.width(i).height(i / n),
            t(s).css('top', -(i / n - e) / 2).css('left', 0).css('height', i / n),
            t(s + '_html5_api').css('width', t(s + '_html5_api').parent().width() + 'px').css('height', 'auto'),
            t(s + '_flash_api').css('width', i).css('height', i / n)) : t('#big-video-image').css({
                width: i,
                height: 'auto',
                top: -(i / n - e) / 2,
                left: 0
            })
        }
        ;function x() {
            var e = '<div id="big-video-control-container"><div id="big-video-control"><a href="#" id="big-video-control-play"></a><div id="big-video-control-middle"><div id="big-video-control-bar"><div id="big-video-control-bound-left"></div><div id="big-video-control-progress"></div><div id="big-video-control-track"></div><div id="big-video-control-bound-right"></div></div></div><div id="big-video-control-timer"></div></div></div>';
            r.container.append(e),
            t('#big-video-control-container').css('display', 'none'),
            t('#big-video-control-timer').css('display', 'none'),
            t('#big-video-control-track').slider({
                animate: !0,
                step: .01,
                slide: function(e, i) {
                    m = !0,
                    t('#big-video-control-progress').css('width', i.value - .16 + '%'),
                    o.currentTime(i.value / 100 * o.duration())
                },
                stop: function(t, e) {
                    m = !1,
                    o.currentTime(e.value / 100 * o.duration())
                }
            }),
            t('#big-video-control-bar').click(function(e) {
                o.currentTime(e.offsetX / t(this).width() * o.duration())
            }),
            t('#big-video-control-play').click(function(t) {
                t.preventDefault(),
                k('toggle')
            }),
            o.on('timeupdate', function() {
                if (!m && o.currentTime() / o.duration()) {
                    var s = o.currentTime()
                      , i = Math.floor(s / 60)
                      , e = Math.floor(s) - 60 * i;
                    10 > e && (e = '0' + e);
                    var n = o.currentTime() / o.duration() * 100;
                    t('#big-video-control-track').slider('value', n),
                    t('#big-video-control-progress').css('width', n - .16 + '%'),
                    t('#big-video-control-timer').text(i + ':' + e + '/' + T)
                }
            })
        }
        ;function k(e) {
            var i = e || 'toggle';
            'toggle' == i && (i = d ? 'pause' : 'play'),
            'pause' == i ? (o.pause(),
            t('#big-video-control-play').css('background-position', '-16px'),
            d = !1) : 'play' == i ? (o.play(),
            t('#big-video-control-play').css('background-position', '0'),
            d = !0) : 'skip' == i && w()
        }
        ;function g() {
            o.play(),
            r.container.off('click', g)
        }
        ;function w() {
            l++,
            l === p.length && (l = 0),
            f(p[l])
        }
        ;function f(e) {
            t(s).css('display', 'block'),
            u = 'video',
            o.src(e),
            d = !0,
            c ? (t('#big-video-control-container').css('display', 'none'),
            o.ready(function() {
                o.volume(0)
            }),
            doLoop = !0) : (t('#big-video-control-container').css('display', 'block'),
            o.ready(function() {
                o.volume(C)
            }),
            doLoop = !1),
            t('#big-video-image').css('display', 'none'),
            t(s).css('display', 'block')
        }
        ;function S(e) {
            t('#big-video-image').remove(),
            o.pause(),
            t(s).css('display', 'none'),
            t('#big-video-control-container').css('display', 'none'),
            u = 'image';
            var i = t('<img id="big-video-image" src=' + e + ' />');
            h.append(i),
            t('#big-video-image').imagesLoaded(function() {
                n = t('#big-video-image').width() / t('#big-video-image').height(),
                v()
            })
        }
        ;var o, l, u, j = {
            useFlashForFirefox: !0,
            forceAutoplay: !1,
            controls: !1,
            doLoop: !1,
            container: t('body'),
            shrinkable: !1
        }, a = this, s = '#big-video-vid', h = t('<div class="big-video-wrap"></div>'), n = (t(''),
        16 / 9), T = 0, C = .8, b = !1, m = !1, d = !1, y = !1, c = !1, p = [], r = t.extend({}, j, i);
        a.init = function() {
            if (!b) {
                s += countVideo,
                r.container.prepend(h);
                var a = r.forceAutoplay ? 'autoplay' : '';
                o = t('<video id="' + s.substr(1) + '" class="video-js vjs-default-skin" height="1" width="1" preload="auto" data-setup="{}" ' + a + ' webkit-playsinline></video>'),
                o.css('position', 'absolute'),
                h.append(o);
                var i = ['html5', 'flash']
                  , l = navigator.userAgent.toLowerCase()
                  , c = -1 != l.indexOf('firefox');
                r.useFlashForFirefox && c && (i = ['flash', 'html5']),
                o = e(s.substr(1), {
                    controls: !1,
                    preload: 'auto',
                    techOrder: i
                }),
                r.controls && x(),
                v(),
                b = !0,
                d = !1,
                r.forceAutoplay && t('body').on('click', g),
                t('#big-video-vid_flash_api').attr('scale', 'noborder').attr('width', '100%').attr('height', '100%'),
                t(window).on('resize.bigvideo', function() {
                    v()
                }),
                o.on('loadedmetadata', function(e) {
                    n = document.getElementById(s.substr(1) + '_flash_api') ? document.getElementById(s.substr(1) + '_flash_api').vjs_getProperty('videoWidth') / document.getElementById(s.substr(1) + '_flash_api').vjs_getProperty('videoHeight') : t(s + '_html5_api').prop('videoWidth') / t(s + '_html5_api').prop('videoHeight'),
                    v();
                    var r = Math.round(o.duration())
                      , a = Math.floor(r / 60)
                      , i = r - 60 * a;
                    10 > i && (i = '0' + i),
                    T = a + ':' + i
                }),
                o.on('ended', function() {
                    r.doLoop && (o.currentTime(0),
                    o.play()),
                    y && w()
                })
            }
        }
        ,
        a.show = function(e, i) {
            if (void 0 === i && (i = {}),
            c = i.ambient === !0,
            (c || i.doLoop) && (r.doLoop = !0),
            'string' == typeof e) {
                var o = e.lastIndexOf('?') > 0 ? e.substring(e.lastIndexOf('.') + 1, e.lastIndexOf('?')) : e.substring(e.lastIndexOf('.') + 1);
                'jpg' == o || 'gif' == o || 'png' == o ? S(e) : ('mp4' == o || 'ogg' == o || 'ogv' == o || 'webm' == o) && (f(e),
                i.onShown && i.onShown(),
                y = !1)
            } else if (t.isArray(e))
                f(e);
            else {
                if ('object' != typeof e || !e.src || !e.type)
                    throw 'BigVideo.show received invalid input for parameter source';
                f([e])
            }
        }
        ,
        a.showPlaylist = function(e, i) {
            if (!t.isArray(e))
                throw 'BigVideo.showPlaylist parameter files accepts only arrays';
            void 0 === i && (i = {}),
            c = i.ambient === !0,
            (c || i.doLoop) && (r.doLoop = !0),
            p = e,
            l = 0,
            this.show(p[l]),
            i.onShown && i.onShown(),
            y = !0
        }
        ,
        a.getPlayer = function() {
            return o
        }
        ,
        a.remove = a.dispose = function() {
            b = !1,
            h.remove(),
            t(window).off('resize.bigvideo'),
            o && (o.off('loadedmetadata'),
            o.off('ended'),
            o.dispose())
        }
        ,
        a.triggerPlayer = function(t) {
            k(t)
        }
    }
});
!function(t, e) {
    var o = {
        ratio: 16 / 9,
        videoId: 'ZCAnLxRvNNc',
        mute: !0,
        repeat: !1,
        width: t(e).width(),
        wrapperZIndex: 99,
        start: 0,
        end: !1,
        onReadyApi: !1,
        onStateChangeApi: !1
    }
      , i = function(i, s) {
        var u = t(i).parent()
          , r = t(i)
          , l = 'tubularPlayer-' + r.attr('id');
        if ('string' == typeof s) {
            var c = r.data('tubularPlayer');
            try {
                switch (s) {
                case 'play':
                    c.playVideo();
                    break;
                case 'pause':
                    c.pauseVideo();
                    break;
                case 'stop':
                    c.stopVideo()
                }
            } catch (n) {}
        } else {
            var s = t.extend({}, o, s)
              , a = t('<div>', {
                id: 'tubularContainer-' + r.attr('id'),
                'class': 'tubular-panel'
            }).css({
                position: 'absolute',
                'z-index': 1,
                width: '100%',
                height: '100%'
            }).append(t('<div>', {
                id: l
            }).css({
                position: 'absolute'
            }))
              , p = function() {
                r.data('tubularPlayer', new YT.Player(l,{
                    width: s.width,
                    height: Math.ceil(s.width / s.ratio),
                    videoId: s.videoId,
                    playerVars: {
                        controls: 0,
                        showinfo: 0,
                        modestbranding: 1,
                        wmode: 'transparent',
                        end: s.end
                    },
                    events: {
                        onReady: function(t) {
                            d(),
                            s.mute && t.target.mute(),
                            s.onReadyApi && s.onReadyApi(t)
                        },
                        onStateChange: function(t) {
                            s.onStateChangeApi && s.onStateChangeApi(t),
                            0 === t.data && s.repeat && r.data('tubularPlayer').seekTo(s.start)
                        },
                        onError: function(t) {
                            a.hide()
                        }
                    }
                }))
            }
              , d = function() {
                var o, n, i = a.width(), e = a.height(), r = t('#' + l);
                i / s.ratio < e ? (o = Math.ceil(e * s.ratio),
                r.width(o).height(e).css({
                    left: (i - o) / 2,
                    top: 0
                })) : (n = Math.ceil(i / s.ratio),
                r.width(i).height(n).css({
                    left: 0,
                    top: (e - n) / 2
                }))
            }
            ;
            e.YT ? p() : (r.addClass('initTubular').data('initTubular', function() {
                p()
            }),
            e.onYouTubeIframeAPIReady || (e.onYouTubeIframeAPIReady = function() {
                t('body .initTubular').each(function(e, i) {
                    t(i).data('initTubular')()
                })
            }
            ,
            t('body').append(t('<script>', {
                src: 'https://www.youtube.com/iframe_api'
            })))),
            u.prepend(a),
            a.after(t('<div class="ytshield">').css({
                width: '100%',
                height: '100%',
                'z-index': 2,
                position: 'absolute',
                left: 0,
                top: 0
            })),
            r.css({
                position: 'relative',
                'z-index': s.wrapperZIndex
            }),
            t(e).on('resize.tubular', function() {
                d()
            })
        }
    }
    ;
    t.fn.tubular = function(e) {
        return this.each(function() {
            t.data(this, 'tubular_instantiated') || t.data(this, 'tubular_instantiated', i(this, e))
        })
    }
}(jQuery, window);
(function() {
    function e() {}
    ;function o(t, e) {
        for (var i = t.length; i--; )
            if (t[i].listener === e)
                return i;
        return -1
    }
    ;function i(t) {
        return function() {
            return this[t].apply(this, arguments)
        }
    }
    ;var t = e.prototype
      , s = this
      , n = s.EventEmitter;
    t.getListeners = function(t) {
        var o, e, i = this._getEvents();
        if ('object' == typeof t) {
            o = {};
            for (e in i)
                i.hasOwnProperty(e) && t.test(e) && (o[e] = i[e])
        } else
            o = i[t] || (i[t] = []);
        return o
    }
    ,
    t.flattenListeners = function(t) {
        var e, i = [];
        for (e = 0; t.length > e; e += 1)
            i.push(t[e].listener);
        return i
    }
    ,
    t.getListenersAsObject = function(t) {
        var i, e = this.getListeners(t);
        return e instanceof Array && (i = {},
        i[t] = e),
        i || e
    }
    ,
    t.addListener = function(t, e) {
        var s, i = this.getListenersAsObject(t), n = 'object' == typeof e;
        for (s in i)
            i.hasOwnProperty(s) && -1 === o(i[s], e) && i[s].push(n ? e : {
                listener: e,
                once: !1
            });
        return this
    }
    ,
    t.on = i('addListener'),
    t.addOnceListener = function(t, e) {
        return this.addListener(t, {
            listener: e,
            once: !0
        })
    }
    ,
    t.once = i('addOnceListener'),
    t.defineEvent = function(t) {
        return this.getListeners(t),
        this
    }
    ,
    t.defineEvents = function(t) {
        for (var e = 0; t.length > e; e += 1)
            this.defineEvent(t[e]);
        return this
    }
    ,
    t.removeListener = function(t, e) {
        var n, i, s = this.getListenersAsObject(t);
        for (i in s)
            s.hasOwnProperty(i) && (n = o(s[i], e),
            -1 !== n && s[i].splice(n, 1));
        return this
    }
    ,
    t.off = i('removeListener'),
    t.addListeners = function(t, e) {
        return this.manipulateListeners(!1, t, e)
    }
    ,
    t.removeListeners = function(t, e) {
        return this.manipulateListeners(!0, t, e)
    }
    ,
    t.manipulateListeners = function(t, e, i) {
        var o, s, n = t ? this.removeListener : this.addListener, r = t ? this.removeListeners : this.addListeners;
        if ('object' != typeof e || e instanceof RegExp)
            for (o = i.length; o--; )
                n.call(this, e, i[o]);
        else
            for (o in e)
                e.hasOwnProperty(o) && (s = e[o]) && ('function' == typeof s ? n.call(this, o, s) : r.call(this, o, s));
        return this
    }
    ,
    t.removeEvent = function(t) {
        var i, o = typeof t, e = this._getEvents();
        if ('string' === o)
            delete e[t];
        else if ('object' === o)
            for (i in e)
                e.hasOwnProperty(i) && t.test(i) && delete e[i];
        else
            delete this._events;
        return this
    }
    ,
    t.removeAllListeners = i('removeEvent'),
    t.emitEvent = function(t, e) {
        var i, n, o, r, s = this.getListenersAsObject(t);
        for (o in s)
            if (s.hasOwnProperty(o))
                for (n = s[o].length; n--; )
                    i = s[o][n],
                    i.once === !0 && this.removeListener(t, i.listener),
                    r = i.listener.apply(this, e || []),
                    r === this._getOnceReturnValue() && this.removeListener(t, i.listener);
        return this
    }
    ,
    t.trigger = i('emitEvent'),
    t.emit = function(t) {
        var e = Array.prototype.slice.call(arguments, 1);
        return this.emitEvent(t, e)
    }
    ,
    t.setOnceReturnValue = function(t) {
        return this._onceReturnValue = t,
        this
    }
    ,
    t._getOnceReturnValue = function() {
        return this.hasOwnProperty('_onceReturnValue') ? this._onceReturnValue : !0
    }
    ,
    t._getEvents = function() {
        return this._events || (this._events = {})
    }
    ,
    e.noConflict = function() {
        return s.EventEmitter = n,
        e
    }
    ,
    'function' == typeof define && define.amd ? define('eventEmitter/EventEmitter', [], function() {
        return e
    }) : 'object' == typeof module && module.exports ? module.exports = e : this.EventEmitter = e
}
).call(this),
function(t) {
    function s(e) {
        var i = t.event;
        return i.target = i.target || i.srcElement || e,
        i
    }
    ;var e = document.documentElement
      , i = function() {}
    ;
    e.addEventListener ? i = function(t, e, i) {
        t.addEventListener(e, i, !1)
    }
    : e.attachEvent && (i = function(t, e, i) {
        t[e + i] = i.handleEvent ? function() {
            var e = s(t);
            i.handleEvent.call(i, e)
        }
        : function() {
            var e = s(t);
            i.call(t, e)
        }
        ,
        t.attachEvent('on' + e, t[e + i])
    }
    );
    var o = function() {}
    ;
    e.removeEventListener ? o = function(t, e, i) {
        t.removeEventListener(e, i, !1)
    }
    : e.detachEvent && (o = function(t, e, i) {
        t.detachEvent('on' + e, t[e + i]);
        try {
            delete t[e + i]
        } catch (o) {
            t[e + i] = void 0
        }
    }
    );
    var n = {
        bind: i,
        unbind: o
    };
    'function' == typeof define && define.amd ? define('eventie/eventie', n) : t.eventie = n
}(this),
function(t, e) {
    'function' == typeof define && define.amd ? define(['eventEmitter/EventEmitter', 'eventie/eventie'], function(i, o) {
        return e(t, i, o)
    }) : 'object' == typeof exports ? module.exports = e(t, require('wolfy87-eventemitter'), require('eventie')) : t.imagesLoaded = e(t, t.EventEmitter, t.eventie)
}(window, function(t, e, i) {
    function a(t, e) {
        for (var i in e)
            t[i] = e[i];
        return t
    }
    ;function u(t) {
        return '[object Array]' === p.call(t)
    }
    ;function h(t) {
        var e = [];
        if (u(t))
            e = t;
        else if ('number' == typeof t.length)
            for (var i = 0, o = t.length; o > i; i++)
                e.push(t[i]);
        else
            e.push(t);
        return e
    }
    ;function o(t, e, i) {
        if (!(this instanceof o))
            return new o(t,e);
        'string' == typeof t && (t = document.querySelectorAll(t)),
        this.elements = h(t),
        this.options = a({}, this.options),
        'function' == typeof e ? i = e : a(this.options, e),
        i && this.on('always', i),
        this.getImages(),
        n && (this.jqDeferred = new n.Deferred);
        var s = this;
        setTimeout(function() {
            s.check()
        })
    }
    ;function r(t) {
        this.img = t
    }
    ;function s(t) {
        this.src = t,
        l[t] = this
    }
    ;var n = t.jQuery
      , c = t.console
      , d = c !== void 0
      , p = Object.prototype.toString;
    o.prototype = new e,
    o.prototype.options = {},
    o.prototype.getImages = function() {
        this.images = [];
        for (var o = 0, n = this.elements.length; n > o; o++) {
            var t = this.elements[o];
            'IMG' === t.nodeName && this.addImage(t);
            var e = t.nodeType;
            if (e && (1 === e || 9 === e || 11 === e))
                for (var s = t.querySelectorAll('img'), i = 0, r = s.length; r > i; i++) {
                    var a = s[i];
                    this.addImage(a)
                }
        }
    }
    ,
    o.prototype.addImage = function(t) {
        var e = new r(t);
        this.images.push(e)
    }
    ,
    o.prototype.check = function() {
        function n(i, s) {
            return e.options.debug && d && c.log('confirm', i, s),
            e.progress(i),
            o++,
            o === t && e.complete(),
            !0
        }
        ;var e = this
          , o = 0
          , t = this.images.length;
        if (this.hasAnyBroken = !1,
        !t)
            return this.complete(),
            void 0;
        for (var i = 0; t > i; i++) {
            var s = this.images[i];
            s.on('confirm', n),
            s.check()
        }
    }
    ,
    o.prototype.progress = function(t) {
        this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded;
        var e = this;
        setTimeout(function() {
            e.emit('progress', e, t),
            e.jqDeferred && e.jqDeferred.notify && e.jqDeferred.notify(e, t)
        })
    }
    ,
    o.prototype.complete = function() {
        var e = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = !0;
        var t = this;
        setTimeout(function() {
            if (t.emit(e, t),
            t.emit('always', t),
            t.jqDeferred) {
                var i = t.hasAnyBroken ? 'reject' : 'resolve';
                t.jqDeferred[i](t)
            }
        })
    }
    ,
    n && (n.fn.imagesLoaded = function(t, e) {
        var i = new o(this,t,e);
        return i.jqDeferred.promise(n(this))
    }
    ),
    r.prototype = new e,
    r.prototype.check = function() {
        var t = l[this.img.src] || new s(this.img.src);
        if (t.isConfirmed)
            return this.confirm(t.isLoaded, 'cached was confirmed'),
            void 0;
        if (this.img.complete && void 0 !== this.img.naturalWidth)
            return this.confirm(0 !== this.img.naturalWidth, 'naturalWidth'),
            void 0;
        var e = this;
        t.on('confirm', function(t, i) {
            return e.confirm(t.isLoaded, i),
            !0
        }),
        t.check()
    }
    ,
    r.prototype.confirm = function(t, e) {
        this.isLoaded = t,
        this.emit('confirm', this, e)
    }
    ;
    var l = {};
    return s.prototype = new e,
    s.prototype.check = function() {
        if (!this.isChecked) {
            var t = new Image;
            i.bind(t, 'load', this),
            i.bind(t, 'error', this),
            t.src = this.src,
            this.isChecked = !0
        }
    }
    ,
    s.prototype.handleEvent = function(t) {
        var e = 'on' + t.type;
        this[e] && this[e](t)
    }
    ,
    s.prototype.onload = function(t) {
        this.confirm(!0, 'onload'),
        this.unbindProxyEvents(t)
    }
    ,
    s.prototype.onerror = function(t) {
        this.confirm(!1, 'onerror'),
        this.unbindProxyEvents(t)
    }
    ,
    s.prototype.confirm = function(t, e) {
        this.isConfirmed = !0,
        this.isLoaded = t,
        this.emit('confirm', this, e)
    }
    ,
    s.prototype.unbindProxyEvents = function(t) {
        i.unbind(t.target, 'load', this),
        i.unbind(t.target, 'error', this)
    }
    ,
    o
});
var innerWidth = 0
  , innerHeight = 0
  , autoplaySpeedMSec = 2000
  , dataDealy = []
  , bannerSlickDotsIndex = 0
  , bannerSlickDotsCount = 1
  , statusVideoPlaying = !1
  , isMobile = !1
  , countVideo = 0
  , myPlayer = {};
var videoFullScreen = !1, nowPlay, nowVideo, played = !1, actionPc = !1, arrYT = [], cloneYt, options_yt, load_des = 0, load_mob = 0;
$(document).ready(function() {
    swicthImage();
    $(window).resize(function() {
        swicthImage()
    });
    if (navigator.userAgent.match(/(iPod|iPhone)/)) {
        $('.btnPlayVideo').css('background', 'none')
    }
    ;isMobile = DetectMobile();
    if (isMobile) {
        $('body').addClass('mobile-device')
    }
    ;var i = $('#banner-slick');
    i.on('init', function(t, e) {});
    var e = '';
    e += '<nav class="nav-growpop">';
    e += '<a class="prev slick-prev" href="javascript:void(0)">';
    e += '<span class="icon-wrap"><div height="30" width="18" class="icon"></div></span>';
    e += '</a>';
    e += '</nav>';
    var t = '';
    t += '<nav class="nav-growpop">';
    t += '<a class="next slick-next" href="javascript:void(0)" >';
    t += '<span class="icon-wrap"><div height="30" width="18" class="icon"></div></span>';
    t += '</a>';
    t += '</nav>';
    i.slick({
        dots: !1,
        infinite: !0,
        autoPlay: !1,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: !0,
        prevArrow: e,
        nextArrow: t,
    }).on('beforeChange', function(t, e, i, o) {
        var n = $('.banner-list').eq(o)
          , s = n.find('.slide-banner-list').data('type');
        if (s == 'video' || s == 'youtube') {
            $('.banner-list').eq(o).find('.display-description').hide()
        } else {
            $('.banner-list').eq(o).find('.display-description').show()
        }
        ;if (checkType() == 'image' && !played) {
            clearAutoPlay()
        } else {
            if (checkType() == 'youtube' && isMobile) {
                $('.banner-list').eq(i).removeClass('playing')
            }
            ;checkToPauseVideo()
        }
    }).on('afterChange', function(t, e, i) {
        if (checkType() == 'image') {
            clearAutoPlay();
            playAuto()
        } else {
            checkToPlayVideo()
        }
    });
    initSlide()
});
function setImageDevice() {
    if (islandscape($('#banner-mom'))) {
        $.each($('#banner-slick .banner-list'), function(t, e) {
            var i = $('#banner-slick').find('.banner-list').eq(t)
              , o = i.find('.images-list-lanscape').attr('src');
            if (o == '') {
                var s = i.find('.image_hide_pc').val();
                i.find('.images-list-lanscape').attr('src', s)
            }
        })
    } else {
        $.each($('#banner-slick .banner-list'), function(t, e) {
            var i = $('#banner-slick').find('.banner-list').eq(t)
              , o = i.find('.images-list-portrait').attr('src');
            if (o == '') {
                var s = i.find('.image_hide_mb').val();
                i.find('.images-list-portrait').attr('src', s)
            }
        })
    }
}
;function initSlide() {
    if ($('#banner-mom .banner-list').length > 0) {
        setImageDevice();
        if (isMobile) {
            $('#banner-slick').addClass('mobile_sty')
        }
        ;if (islandscape($('#banner-mom'))) {
            $('#banner-slick .banner-list .images-list-lanscape').css('opacity', 1)
        } else {
            $('#banner-slick .banner-list .images-list-portrait').css('opacity', 1)
        }
        ;var e = getNowElement().find('.slide-banner-list')
          , t = e.data('type');
        if (t == 'image' && !played) {
            playAuto()
        } else {
            checkToPlayVideo()
        }
        ;$(window).load(function() {
            resizeImages();
            resizeTitleBanner()
        });
        $(window).resize(function() {
            setImageDevice();
            if (islandscape($('#banner-mom'))) {
                $('#banner-slick .banner-list .images-list-lanscape').css('opacity', 1);
                $('#banner-slick .banner-list .images-list-portrait').css('opacity', 0)
            } else {
                $('#banner-slick .banner-list .images-list-lanscape').css('opacity', 0);
                $('#banner-slick .banner-list .images-list-portrait').css('opacity', 1)
            }
            ;resizeImages();
            resizeTitleBanner()
        })
    } else {
        $('#banner-mom').addClass('important')
    }
}
;function setBtnDetail(t) {
    var h = $(t).find('.slick-slide.slick-active')
      , s = h.index()
      , c = $(t).find('.banner-list').size()
      , p = ''
      , d = ''
      , l = ''
      , a = ''
      , i = ''
      , e = ''
      , o = $(t).find('.banner-list');
    if (s == 0) {
        i = o.eq(c - 1);
        e = o.eq(1)
    } else if (s == c - 1) {
        i = o.eq(s - 1);
        e = o.eq(0)
    } else {
        i = o.eq(s - 1);
        e = o.eq(s + 1)
    }
    ;d = i.find('.title_banner').val();
    p = e.find('.title_banner').val();
    l = i.find('.image_hide_pc').val();
    a = e.find('.image_hide_pc').val();
    var n = e.index();
    $('.slick-next .btn_slide_detail').hide();
    if ($(t).find('.btn_right_detail' + n).size() > 0) {
        $('.btn_right_detail' + n).show()
    } else {
        var f = '<div class="btn_slide_detail btn_right_detail' + n + '"><div class="bg_shield"></div><div class="next_detail"></div></div>';
        $(t).find('.slick-next').append(f);
        $(t).find('.slick-next .btn_right_detail' + n).css({
            'background': 'url("' + a + '") no-repeat scroll center center transparent',
            'background-size': 'cover'
        });
        $(t).find('.slick-next .btn_right_detail' + n + ' .next_detail').html(p)
    }
    ;var r = i.index();
    $('.slick-prev .btn_slide_detail').hide();
    if ($(t).find('.btn_left_detail' + r).size() > 0) {
        $('.btn_left_detail' + r).show()
    } else {
        var u = '<div class="btn_slide_detail btn_left_detail' + r + '"><div class="bg_shield"></div><div class="prev_detail"></div></div>';
        $(t).find('.slick-prev').append(u);
        $(t).find('.slick-prev .btn_left_detail' + r).css({
            'background': 'url("' + l + '") no-repeat scroll center center transparent',
            'background-size': 'cover'
        });
        $(t).find('.slick-prev .btn_left_detail' + r + ' .prev_detail').html(d)
    }
}
;function checkToPauseVideo() {
    if (checkType() == 'video') {
        if (!isMobile || media == 'tablet' || navigator.userAgent.match(/Android/i)) {
            myPlayer[nowPlay][nowVideo].pause()
        }
    } else {
        getNowElement().find('.player_list').tubular('pause')
    }
}
;function playPauseVideo() {
    var t = getNowElement().find('.slide-banner-list')
      , e = '#' + t.attr('id');
    t.parent().addClass('playing');
    myPlayer['video'][e].play();
    played = !1
}
;function loadVideo(t, e) {
    var i = e.attr('id');
    if (typeof (i) == 'undefined') {
        fadePlayBtn('fadeOut');
        return
    }
    ;if (i.indexOf('#') == -1)
        i = '#' + i;
    nowPlay = t;
    if (t == 'video') {
        nowVideo = i;
        if ($(i).find('.big-video-wrap').size() > 0) {
            return
        }
        ;var s = e.data('source')
          , l = '#' + e.parent().attr('id')
          , o = new $.BigVideo({
            container: $(i),
            doLoop: (!moreContent() && !isMobile)
        });
        o.init();
        o.show(s);
        if (typeof (myPlayer[t]) != 'object')
            myPlayer[t] = {};
        myPlayer[t][i] = o.getPlayer();
        countVideo++;
        myPlayer[t][i].ready(function() {
            myPlayer[t][i].on('play', function() {
                e.parent().addClass('playing');
                clearAutoPlay();
                played = !0;
                this.volume(0)
            });
            myPlayer[t][i].on('pause', function() {
                if (isMobile) {
                    played = !1;
                    clearAutoPlay();
                    playAuto();
                    e.parent().removeClass('playing')
                } else {
                    myPlayer[t][i].currentTime(0)
                }
            });
            myPlayer[t][i].on('ended', function() {
                myPlayer[t][i].currentTime(0);
                slickNext()
            })
        })
    } else if (t == 'youtube') {
        var n = $(i).data('source')
          , a = $(i).prev('.player_list').attr('id')
          , r = {
            videoId: n
        };
        if (getNowElement().find('.tubular-panel').length > 0) {
            return
        }
        ;$('.banner-list').find('.player_list').each(function() {
            var t = $(this).attr('id')
              , e = $(this).data('source');
            options_yt = {
                videoId: e,
                mute: !0,
                onStateChangeApi: function(e) {
                    if (e.data == 0) {
                        getNowElement().removeClass('playing');
                        slickNext();
                        played = !1
                    }
                    ;if (e.data == 1) {
                        getNowElement().addClass('playing');
                        if (isMobile || media == 'tablet') {
                            clearAutoPlay()
                        }
                        ;played = !0
                    }
                    ;if (e.data == 2) {
                        if (isMobile) {
                            getNowElement().removeClass('playing');
                            played = !1;
                            clearAutoPlay();
                            playAuto()
                        } else {
                            arrYT[t].seekTo(0)
                        }
                    }
                }
            };
            if (!isMobile) {
                options_yt['onReadyApi'] = function(e) {
                    arrYT[t] = e.target;
                    if (getNowElement().find('.player_list').attr('id') == t && !isMobile) {
                        arrYT[t].playVideo()
                    }
                }
            }
            ;if (!moreContent()) {
                options_yt['repeat'] = !0
            }
            ;$('#' + t).tubular(options_yt)
        })
    }
}
;function checkToPlayVideo() {
    loadVideo(checkType(), getNowElement().find('.slide-banner-list'));
    if (checkType() == 'video') {
        if (!isMobile) {
            clearAutoPlay();
            myPlayer[nowPlay][nowVideo].currentTime(0);
            myPlayer[nowPlay][nowVideo].play()
        } else {
            clearAutoPlay();
            playAuto()
        }
    } else if (checkType() == 'youtube') {
        if (!isMobile) {
            getNowElement().find('.player_list').tubular('play');
            clearAutoPlay()
        } else {
            clearAutoPlay();
            playAuto()
        }
    }
}
;function moreContent() {
    return ($('#banner-mom').find('.banner-list').length > 1) ? !0 : !1
}
;function getNowElement() {
    return $('#banner-mom').find('.slick-active')
}
;function checkType() {
    return getNowElement().find('.slide-banner-list').data('type')
}
;function getDelay() {
    return (getNowElement().data('delay') == 0) ? 1 : getNowElement().data('delay')
}
;function slickNext() {
    $('#banner-slick').slick('slickNext')
}
;var interval;
function playAuto() {
    interval = setInterval(function() {
        if (!played || checkType() == 'image') {
            slickNext()
        }
    }, getDelay() * 1000)
}
;function clearAutoPlay() {
    if (interval) {
        clearInterval(interval)
    }
}
;function destroyPlayer(t) {
    if (!moreContent() && !isMobile)
        return;
    if (myPlayer[nowPlay] && played) {
        if (nowPlay == 'video') {
            if (typeof (myPlayer['video'][nowVideo].pause) == 'function') {
                if (typeof (t) == 'undefined')
                    myPlayer['video'][nowVideo].pause()
            }
        } else if (nowPlay == 'youtube') {
            myPlayer['youtube'].destroy()
        }
    }
    ;played = !1
}
;function resizeImages() {
    $.each($('.sty_banner'), function(t, e) {
        var i = $(e)
          , l = $(e).children()
          , s = i.height()
          , o = i.width();
        if ($(e).children().size() > 0) {
            if ($(window).width() > 767) {
                ratio = 2.06
            } else {
                ratio = 0.67
            }
            ;var c = s * ratio, n, r;
            if (c <= o) {
                n = o / ratio;
                r = o
            } else {
                n = s;
                r = c
            }
            ;if (o <= 767) {
                s = s;
                n = n
            }
            ;if (islandscape(i)) {
                i.find('.images-list-lanscape').show();
                i.find('.images-list-portrait').hide();
                i.find('.images-title-lanscape').show();
                i.find('.images-title-portrait').hide();
                if (isMobile) {
                    i.find('.images-list-lanscape').addClass('show-slide-image').removeClass('hide-slide-image');
                    i.find('.images-list-portrait').addClass('hide-slide-image').removeClass('show-slide-image')
                }
            } else {
                i.find('.images-list-lanscape').hide();
                i.find('.images-list-lanscape.sty-crop').show();
                i.find('.images-list-portrait').show();
                i.find('.images-title-lanscape').hide();
                i.find('.images-title-portrait').show();
                if (isMobile) {
                    i.find('.images-list-lanscape').addClass('hide-slide-image').removeClass('show-slide-image');
                    i.find('.images-list-portrait').addClass('show-slide-image').removeClass('hide-slide-image')
                }
            }
            ;i.find('.images-list-lanscape').css({
                'height': n,
                'width': r
            });
            i.find('.images-list-portrait').css({
                'height': n,
                'width': r
            });
            if (o <= 767) {
                var a = o * 1.484;
                l.css({
                    'height': a
                });
                i.css({
                    'height': a
                });
                i.find('.btnPlayVideo').css({
                    'height': a
                });
                i.find('.bx-item').css({
                    'height': a
                });
                i.find('.vjs-tech').css({
                    'height': a
                })
            } else {
                l.css({
                    'height': s
                });
                i.css({
                    'height': s
                })
            }
            ;if (r >= o) {
                i.find('.images-list').css('margin-left', -((r - o) / 2));
                i.find('.mobile-detect').css('margin-left', -((r - o) / 2));
                i.find('.images-list').css('margin-top', -((n - s) / 2));
                i.find('.mobile-detect').css('margin-top', -((n - s) / 2))
            }
        }
    })
}
;function resizeTitleBanner() {
    $.each($('.sty_banner'), function(t, e) {
        var o = $(e)
          , i = o.find('.banner-list');
        if (i.find('.display-description').size() > 0) {
            $.each(i.find('.display-description'), function(t, e) {
                var s = i.find('.display-description').eq(t);
                s.css('width', 'auto');
                s.css('height', 'auto');
                s.find('img').css('width', 'auto');
                s.find('img').css('height', 'auto');
                s.hide();
                var l = s.width()
                  , c = s.height()
                  , n = o.width()
                  , r = l
                  , a = c;
                if (n < 768) {
                    if (l > n - ((n * 30) / 100)) {
                        if (n < 361) {
                            r = n - ((n * 30) / 100)
                        } else {
                            r = n - ((n * 35) / 100)
                        }
                        ;s.width(r);
                        a = s.height()
                    }
                }
                ;s.find('img').width(r);
                s.css('margin-left', (r / 2) * -1);
                s.css('margin-top', (a / 2) * -1);
                s.css('opacity', 1);
                s.fadeIn()
            })
        }
    })
}
;function islandscape(t) {
    return $(window).width() > 767
}
;function swicthImage() {
    var e = $(window).width()
      , t = $('.ctl_main_ctn .bx-banner #banner-mom #banner-slick .banner-list');
    if (e < 768) {
        if (load_mob == 0) {
            t.each(function() {
                _this = $(this);
                var a = _this.find('.image_hide_mb')
                  , l = _this.find('.title_banner')
                  , r = _this.find('.set_class')
                  , t = a.val()
                  , e = l.val()
                  , i = r.val()
                  , n = '<img class="images-list slide-banner-list images-list-portrait" width="640" height="950" data-type="image" src="' + t + '" alt="' + e + '"/>'
                  , o = '<img class="images-list-portrait ' + i + '" width="640" height="950" style="display:none;" src="' + t + '" alt="' + e + '"/>'
                  , s = '<img class="images-list-portrait ' + i + '" width="640" height="950" style="display:none;" src="' + t + '" alt="' + e + '"/>';
                _this.find('#img_xs').append(n);
                _this.find('#img_youtube_source_xs').append(o);
                _this.find('#img_file_mp4_xs').append(s)
            });
            load_mob++
        }
    } else {
        if (load_des == 0) {
            t.each(function() {
                _this = $(this);
                var a = _this.find('.image_hide_pc')
                  , l = _this.find('.title_banner')
                  , r = _this.find('.set_class')
                  , t = a.val()
                  , e = l.val()
                  , i = r.val()
                  , n = '<img class="images-list slide-banner-list images-list-lanscape" width="1280" height="620" data-type="image" src="' + t + '" alt="' + e + '"/>'
                  , o = '<img class="images-list-lanscape ' + i + '" width="1280" height="620" style="display:none;" src="' + t + '" alt="' + e + '"/>'
                  , s = '<img class="images-list-lanscape ' + i + '" width="1280" height="620" style="display:none;" src="' + t + '" alt="' + e + '"/>';
                _this.find('#img_lg').append(n);
                _this.find('#img_youtube_source_lg').append(o);
                _this.find('#img_file_mp4_lg').append(s)
            });
            load_des++
        }
    }
}
;var checkSubscribe = !1;
$(document).ready(function() {
    if ($('#val_check_show_popup').val() != 'T') {
        popupSubscribe('show');
        $('#frm_newsletter, #frm_pu_newsletter').submit(function(t) {
            t.preventDefault();
            submitNewsletterForm($(this))
        })
    }
    ;initBannerNews();
    initBannerProduct();
    initBannerPromotion();
    $(window).resize(function() {
        initBannerNews();
        initBannerPromotion()
    })
});
function checkClosePopup() {
    var t = ($('#inp_check_show_popup').is(':checked')) ? 'T' : 'F';
    if (t) {
        $.ajax({
            url: BASE_LANG + 'newsletter_cmd.php',
            type: 'POST',
            dataType: 'JSON',
            data: {
                'cmd': 'close_popup',
                'check_show_popup': t
            },
            success: function(t) {}
        })
    }
}
;function popupSubscribe(t) {
    if ($('#bx_pu_ssc').size() == 0) {
        var i = 'Enter your email address'
          , e = '';
        e += '<div id="bx_pu_ssc" class="bx_popup fade in">';
        e += '<div class="bx_pup_dialog">';
        e += '<div class="bx_pup_content pu_ssc">';
        e += '<button type="button" class="close" >×</button>';
        e += '<div class="tt_ssc">';
        e += '<div class="tt1"></div>';
        e += '<div class="tt2"><p>เพียงลงทะเบียนรับข่าวสาร</p></div>';
        e += '<div class="tt2"><p>คุณก็ไม่พลาดกับมิติใหม่แห่งผิวสวย</p></div>';
        e += '<div class="tt3">และสิทธิพิเศษก่อนใคร</div>';
        e += '</div>';
        e += '<form id="frm_pu_newsletter" name="frm_pu_newsletter">';
        e += '<input type="text" class="inp_ssc" autocomplete="off"name="email" placeholder="' + i + '">';
        e += '<input type="hidden" id="csrf_popup_newsletter" name="csrf_popup_newsletter" value="' + $('#csrf_pu_newsletter').val() + '" />';
        e += '<input type="submit"class="btn_ssc" value="SUBMIT" >';
        e += '</form>';
        e += '<div class="check_show_popup">';
        e += '<label>';
        e += '<input type="checkbox" name="inp_check_show_popup" id="inp_check_show_popup" value="T" /> ';
        e += '<span>ไม่แสดงกล่องนี้อีก</span>';
        e += '</label>';
        e += '</div>';
        e += '</div>';
        e += '</div>';
        e += '</div>';
        e += '<div class="bx_popup_shield pu_ssc"></div>';
        $('body').append(e);
        $('#bx_pu_ssc.bx_popup .close').click(function() {
            $('#bx_pu_ssc.bx_popup').hide();
            $('.bx_popup_shield.pu_ssc').hide();
            $('body').removeClass('dialog_show');
            checkClosePopup()
        })
    }
    ;if (t == 'show') {
        $('body').addClass('dialog_show');
        $('.bx_popup_shield.pu_ssc').show();
        $('#bx_pu_ssc.bx_popup').show()
    } else {
        $('#bx_pu_ssc.bx_popup').hide();
        $('.bx_popup_shield.pu_ssc').hide();
        $('body').removeClass('dialog_show')
    }
    ;$('.inp_ssc').placeholder()
}
;function initBannerPromotion() {
    var e = ''
      , i = '';
    e = $('.bx-promotion .pmt_url').val();
    i = $('.bx-promotion .pmt_target_url').val();
    if (i == '') {
        i = '_self'
    }
    ;var t = '';
    if ($(window).width() < 641) {
        if ($('.bx-promotion .show_promotion').find('.bn_pmt_mb').size() == 0) {
            var o = $('.bx-promotion .img_pmt_mb').val();
            if (e != '') {
                t = '<a class="url_pmt_mb" href="' + e + '" target="' + i + '" ><img width="395" height="458" class="bn_pmt_mb img-responsive" src="' + o + '" alt="promotion" /></a>'
            } else {
                t = '<img width="395" height="458" class="bn_pmt_mb img-responsive" src="' + o + '" alt="promotion" />'
            }
            ;$('.bx-promotion .show_promotion').append(t)
        }
        ;$('.bx-promotion .show_promotion').find('.bn_pmt').hide();
        $('.bx-promotion .show_promotion').find('.url_pmt').hide();
        $('.bx-promotion .show_promotion').find('.bn_pmt_mb').show();
        $('.bx-promotion .show_promotion').find('.url_pmt_mb').show()
    } else {
        if ($('.bx-promotion .show_promotion').find('.bn_pmt').size() == 0) {
            var o = $('.bx-promotion .img_pmt').val();
            if (e != '') {
                t = '<a class="url_pmt" href="' + e + '" target="' + i + '" ><img width="474" height="210" class="bn_pmt img-responsive" src="' + o + '" alt="promotion" /></a>'
            } else {
                t = '<img width="474" height="210" class="bn_pmt img-responsive" src="' + o + '" alt="promotion" />'
            }
            ;$('.bx-promotion .show_promotion').append(t)
        }
        ;$('.bx-promotion .show_promotion').find('.bn_pmt_mb').hide();
        $('.bx-promotion .show_promotion').find('.url_pmt_mb').hide();
        $('.bx-promotion .show_promotion').find('.bn_pmt').show();
        $('.bx-promotion .show_promotion').find('.url_pmt').show();
        var n = $('.bx-promotion').width()
          , s = $('.bx-promotion .show_promotion .bn_pmt').width();
        if (s > n) {
            $('.bx-promotion .show_promotion .bn_pmt').css('margin-left', ((s - n) / 2) * -1)
        } else {
            $('.bx-promotion .show_promotion .bn_pmt').css('margin-left', 0)
        }
    }
}
;function initBannerNews() {
    if ($(window).width() < 768) {
        if (!$('#bx_news_sl').hasClass('slick-slider')) {
            $('#bx_news_sl').slick({
                infinite: !0,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: !0,
                arrows: !1,
                autoplay: !0,
                autoplaySpeed: 3000
            })
        }
    } else {
        if ($('#bx_news_sl').hasClass('slick-slider')) {
            $('#bx_news_sl').slick('unslick')
        }
    }
}
;function initBannerProduct() {
    $('.bx-product').imagesLoaded(function() {
        var t = '';
        t += '<a class="prev slick-prev" href="javascript:void(0)">';
        t += '<span class="icon-wrap"><div height="30" width="18" class="icon"></div></span>';
        t += '</a>';
        var e = '';
        e += '<a class="next slick-next" href="javascript:void(0)" >';
        e += '<span class="icon-wrap"><div height="30" width="18" class="icon"></div></span>';
        e += '</a>';
        var o = 0
          , i = $(window).width();
        $('.product_slide').slick({
            infinite: !0,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1000,
            autoplay: !0,
            autoplaySpeed: 3000,
            responsive: [{
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        })
    })
}
;function validateEmail(t) {
    var e = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return e.test(t)
}
;function submitNewsletterForm(t) {
    var n = t.attr('id')
      , i = '';
    if (t.attr('id') == 'frm_pu_newsletter') {
        i = $('#csrf_pu_newsletter').val()
    } else if (t.attr('id') == 'frm_newsletter') {
        i = $('#csrf_newsletter').val()
    }
    ;if (!checkSubscribe) {
        checkSubscribe = !0;
        var o = t.find('.inp_ssc').val();
        if (o == '') {
            var e = 'กรุณากรอกอีเมล';
            if (LANG == 'eng') {
                e = 'Please enter your email'
            }
            ;alert(e);
            checkSubscribe = !1;
            return !1
        }
        ;if (!validateEmail(o)) {
            var e = 'รูปแบบอีเมลไม่ถูกต้อง';
            if (LANG == 'eng') {
                e = 'Invalid email address'
            }
            ;alert(e);
            checkSubscribe = !1;
            return !1
        }
        ;var s = ($('#inp_check_show_popup').is(':checked')) ? 'T' : 'F';
        $.ajax({
            url: BASE_LANG + 'newsletter_cmd.php',
            type: 'POST',
            dataType: 'JSON',
            data: {
                'cmd': 'newsletter',
                'email': o,
                'check_show_popup': s,
                'form_name': n,
                'csrf': i
            },
            success: function(e) {
                if (e.success == 'OK') {
                    var i = 'ขอบคุณสำหรับการติดตามข่าวสารของเรา!';
                    if (LANG == 'eng') {
                        i = 'Thanks for subscribing to our newsletter!'
                    }
                    ;alert(i);
                    t.find('.inp_ssc').val('')
                } else {
                    var i = 'อีเมลนี้ได้สมัครรับข่าวสารไปแล้ว!';
                    if (LANG == 'eng') {
                        i = 'This email have already signed up subscribe Enews.'
                    }
                    ;alert(i);
                    t.find('.inp_ssc').val('')
                }
                ;checkSubscribe = !1;
                $('.bx_pup_dialog .close').click()
            }
        })
    }
}
;