function main() {
    logseq.provideStyle(String.raw`
    .block-properties {
        background: transparent;
        padding: 0px;
        margin: 0px;
    }
    .page-property-key {
        font-weight: 700;
    }
    .color-level .block-properties {
        background: transparent;
    }

    `);
}

// bootstrap
logseq.ready(main).catch(console.error)
