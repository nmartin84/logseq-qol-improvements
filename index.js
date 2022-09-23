function main() {
    logseq.provideStyle(String.raw`
    .block-properties {
        background: transparent;
        padding: 0px;
        margin: 0px;
    }
    .block-properties .tag {
        color: var(--ls-secondary-text-color);
    }
    .block-properties .tag:hover {
        color: var(--ls-active-primary-color);
    }
    .block-properties .page-reference .bracket {
        display: none;
    }
    .page-property-key {
        font-weight: 700;
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
