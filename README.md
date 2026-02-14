# Stock Market Portfolio

Simple front-end that lists popular tickers, shows company summaries, and renders a price chart for the selected time range.

## Features
- Fetches stats, profile text, and historical price data from `https://stock-market-api-k9vl.onrender.com/`.
- Dynamic ticker list (AAPL, MSFT, GOOGL, AMZN, PYPL, TSLA, JPM, NVDA, NFLX, DIS) showing profit and book value.
- Detail pane with company summary.
- Line chart powered by Chart.js with time-range buttons (5y, 1y, 1mo, 3mo).

## Quick Start
1. Clone the repo:
   ```bash
   git clone https://github.com/Arjun2811/Stock-Market-Portfolio.git
   cd Stock-Market-Portfolio
   ```
2. Open `index.html` in a browser (or use a local server like VS Code Live Server). The page loads data directly from the hosted API and CDN Chart.js, so no build step is required.

## Project Structure
- `index.html` – layout, timeline buttons, script includes.
- `style.css` – basic styling for header, list, chart area, and details section.
- `file.js` – fetch logic, DOM rendering, and Chart.js configuration.

## Notes
- Requires network access to the onrender API and the Chart.js CDN.
- If the API is slow to wake, the first load may take a few seconds.

## Next Steps (ideas)
- Add loading/error states around fetch calls.
- Cache API responses per ticker to reduce repeat requests.
- Improve responsive layout for narrow screens.
