export function codeblocks(node: HTMLElement) {
    const blocks = node.querySelectorAll('pre');

    blocks.forEach((pre) => {
        if (pre.querySelector('.copy-button')) return;

        pre.classList.add('relative');

        const button = document.createElement('button');
        button.className =
            'copy-button absolute right-3 top-3 rounded-md border border-slate-700 bg-slate-800 px-3 py-1 text-xs text-white hover:bg-slate-700';

        button.textContent = 'Copy';

        button.onclick = async () => {
            const code = pre.querySelector('code');

            if (!code) return;

            await navigator.clipboard.writeText(code.textContent ?? '');

            button.textContent = 'Copied!';

            setTimeout(() => {
                button.textContent = 'Copy';
            }, 2000);
        };

        pre.appendChild(button);
    });

    return {
        destroy() {}
    };
}