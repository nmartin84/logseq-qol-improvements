function main() {
    logseq.provideStyle(String.raw`
    .block-properties {
        background: transparent;
        padding: 0px;
        margin: 0px;
        border: 0px solid !important;
    }
    .block-properties .tag:hover {
        color: var(--ls-active-primary-color);
    }
    .block-properties .page-reference .bracket {
        display: none;
    }
    .page-property-key {
        color: var(--ls-primary-text-color) !important;
        font-weight: 700;
    }
    .block-properties > div > .mr-1:not(.inline) {
        color: var(--ls-primary-text-color) !important;
    }
    .page-property-key:hover {
        background: #e4f2ff !important;
    }
    .color-level .block-properties {
        background: transparent !important;
    }

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
