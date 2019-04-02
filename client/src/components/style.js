import { createGlobalStyle } from "styled-components";
export const GloalStyle = createGlobalStyle`
	html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {

	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}

@font-face {
  font-family: "iconfont";
  src: url("./statics/iconfont/iconfont.eot?t=1551764921889"); /* IE9 */
  src: url("./statics/iconfont/iconfont.eot?t=1551764921889#iefix") format("embedded-opentype"),
    /* IE6-IE8 */
      url("data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAO0AAsAAAAAB+QAAANlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCDHAqDIIJ3ATYCJAMQCwoABCAFhG0HRRvmBhEVnJnIvjiwjZkHtwCP0mVC/SF3xGY7pRgb7PcgoDqrGsnNTlbySdRLTgIE3G1t2qH6RkUolsR1++mfJ3lSRriQLmFEhayQjfp6/784nDYtgfmW5TLHOA8DjLd1gY09ROICSdAbxm4iaIjrIQCTYIlEqTKVamGgAd0EIDq1b9scI6NEN2QKDATWirHaQUzDgiHHy0vAVP598ZH0DJBYFKBvtTalW1HsTcCbbDXMPkwjioA1nR4wJoECEoEG0a7S2AIVBRMpTK+xJhsYGEiYqirpTba9wj6K0IB/eSBQSBBWQLojAJlKSMGbAEyBgDdJzCpRtpyGBPggYwzAARgAbALgAu0t0ShXD8Pwsjk6uvSdPden7tw53nXmzPKsNWu2V6O5WWxDRb1ZxXv4uJh1HGuZHW31G8wJNhf51mt+0DYRTGEeMydcaXjdusN5bKHau9YxbH1p35OJlnfu1Ll7t+7t27Vv3WqC+LUEPW2/c6f/hAnfePjGtV61Z8+fN8tzyYjiIyLi63rGpnfLSZvhmVDXI654ZzNiYMSFeZ6xJbpmlxjheWGOZyEd+tyhD8falL0eW+p6a2d7VfJOhyJVa8sSLdoXuav/FOnZ63RuirAUT+4aV6e9U2NbxWL5r5rU7XXRz+uPf9SnqGCuDpitzpxWsyGN0oh0VhI7a/AAuXKllHkDVLqslCtUmrKm90vTaezv+b7hw8b9qZM3/zWMboCG8olKAHt1TMHD1ANV6P/9ButS17SmLoW+GTYNwL1Vyftlu52mm4ifwOrM+lu1dASANjlApbXLwqKI7m40qTfcSwImJmCXre6eTCH28tJBYOCVgKQAQaAwiERqbCJYsJEJVgyKgkmCspNteOiBQmgHIN5oCQSutoLEmaOgkLn6IjX2Bxbe/mDl2hJMdfKY0yY6diUVvWEN1Qc4yEBIY05knjA+Oq9pDsffUCf2QJ5k+cgRB9QpBkzPWJgRkEoPB2kz7DqBUeWOwZLGbCzTlKpelATpZ05JCnkG1UDlA7BADIjmN67w+RMUPXQ8bcjqUd8gNeH6QS6RdUAehUOnrFu5ZPIUFYwhgCjRAwdJjzoYFGCsbnWHApNoBvhHpVTJRV2FyfLi/g0XACbwFJ0USmhhwRy5Yi/G+WLtV5V9HJgYdTYDAAAA")
      format("woff2"),
    url("./statics/iconfont/iconfont.woff?t=1551764921889") format("woff"),
    url("./statics/iconfont/iconfont.ttf?t=1551764921889") format("truetype"),
    /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
      url("./statics/iconfont/iconfont.svg?t=1551764921889#iconfont") format("svg"); /* iOS 4.1- */
}

.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

`;
