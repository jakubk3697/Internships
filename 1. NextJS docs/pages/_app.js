// This file is used to initialize pages. You can do the following:
//  - Import global CSS
//  - Set up a React component which will be common across all pages
//  - Persist layout between page changes
//  - Add global metadata
//  - Add global analytics

export default function App({ Component, pageProps }) {
    return <Component {...pageProps} />;
}