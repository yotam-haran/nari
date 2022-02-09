<script>
    import { browser } from '$app/env';
	import { createPopperActions } from 'svelte-popperjs';
	import GlobeIcon from './Icons/GlobeIcon.svelte';
    import { language, languages } from '../utils/language.js';

	const [popperRef, popperContent] = createPopperActions();
	const popperOptions = {
		placement: 'bottom-end',
		modifiers: [{ name: 'offset', options: { offset: [0, 4] } }]
	};

	let showTooltip = false;
	const buttonId = 'toggleLanguageSelector';
	const menuId = 'languageSelectorMenu';
	const onWindowClick = (event) => {
		if (!event.target.closest(`#${buttonId}`) && !event.target.closest(`#${menuId}`))
			showTooltip = false;
	};

	$: {
		if (typeof window !== 'undefined') {
			if (showTooltip) window.addEventListener('click', onWindowClick);
			else window.removeEventListener('click', onWindowClick);
		}
	}
</script>

{#if browser}
    <button
        use:popperRef
        on:click={() => (showTooltip = !showTooltip)}
        id={buttonId}
        dir={$language.dir}
    >
        <GlobeIcon />
        {$language.name[$language.id]}
        <!-- <FlagIL /> -->
    </button>
{/if}
{#if showTooltip}
	<div id={menuId} use:popperContent={popperOptions} dir={$language.dir.split('').reverse().join('')}>
		{#each languages as lang}
            {#if lang !== $language}
			    <div on:click={() => language.set(lang)}>
                    <svelte:component this={lang.Flag} />
                    {lang.name[lang.id]}
                </div>
            {/if}
		{/each}
	</div>
{/if}

<style>
	:root {
		--light-shadow: 0.2rem 0.2rem 0.5rem rgba(0, 0, 0, 0.7);
	}
	#toggleLanguageSelector {
		position: absolute;
		top: .5rem;
		right: .8rem;
		overflow: hidden;
		box-shadow: var(--light-shadow);
		display: flex;
        gap: .8rem;
		align-items: center;
		padding: .2rem .8rem;
		border-radius: .3rem;
		background-color: rgba(255, 255, 255, 0.7);
		font: inherit;
		font-weight: bold;
		font-size: 1.1rem;
		cursor: pointer;

		border: none;
	}

	:global(#toggleLanguageSelector svg) {
		width: 1.5rem;
        margin: 0 -.2rem;
	}

	#languageSelectorMenu {
		background-color: #fff;
		border-radius: 0.25rem;
		box-shadow: var(--light-shadow);
		overflow: hidden;
	}

	#languageSelectorMenu > div {
		padding: 0.5rem 1rem;
		min-width: 7.4rem;
		cursor: pointer;
        display: flex;
        align-items: center;
        gap: .7rem;
	}

	#languageSelectorMenu > div:hover {
		background-color: var(--cream);
	}

    :global(#languageSelectorMenu svg) {
		width: 1.5rem;
        border-radius: .2rem;
	}
</style>
