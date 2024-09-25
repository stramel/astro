async function getInjectableWebAnalyticsContent({
  mode
}) {
  const base = `window.va = window.va || function () { (window.vaq = window.vaq || []).push(arguments); };`;
  if (mode === "development") {
    return `
			${base}
			var script = document.createElement('script');
			script.defer = true;
			script.src = 'https://cdn.vercel-insights.com/v1/script.debug.js';
			var head = document.querySelector('head');
			head.appendChild(script);
		`;
  }
  return `${base}
		var script = document.createElement('script');
		script.defer = true;
		script.src = '/_vercel/insights/script.js';
		var head = document.querySelector('head');
		head.appendChild(script);
	`;
}
export {
  getInjectableWebAnalyticsContent
};
//# sourceMappingURL=web-analytics.js.map
