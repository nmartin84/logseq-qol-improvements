function main() {
    logseq.provideStyle(String.raw`
    .block-properties {
        background: transparent;
        padding: 0px;
        margin: 0px;
    }
    .block-properties .page-reference .bracket {
        display: none;
    }
    .page-property-key {
        font-weight: 700;
    }
    .color-level .block-properties {
        background: transparent !important;
    }

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
