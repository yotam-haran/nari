<script>
    import InfoIcon from './InfoIcon.svelte';
    import MusicNote from './MusicNote.svelte';
</script>
<nav>
    <InfoIcon className='icon' />
    <MusicNote className='icon' />
</nav>

<style lang='scss'>
    nav {
        background-color: #fff;
        height: var(--nav-height);
        position: sticky;
        top: 0;
        z-index: 10;
        box-shadow: .2rem .2rem .4rem rgba(0,0,0,0.4);
    }

    :global(nav .icon) {
        width: 2rem;
        user-select: none;
    }
</style>