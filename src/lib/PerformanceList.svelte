<script>
    import { format, parse, compareAsc } from 'date-fns';

    const locations = {
        JMC: { location: { he: 'המרכז למוסיקה ירושלים', en: 'Jerusalem Music Centre' }, mapsRef: 'nteBbNkoerzX1SUT8', tix: 'https://jmc.pres.ws/order/246' },
        naan: { location: { he: 'בית ניגונים, נען', en: `Beit Nigunim, Na'an` }, mapsRef: 'meFwJXmauKj1yFiK8', tix: 'https://forms.gle/ukd6tLha7RM9b2B78' },
        hecht: { location: { he: 'בית הכט, חיפה', en: `Hecht House, Haifa` }, mapsRef: 'iWeMF12W7yB2MTXG6' },
    }

    const now = new Date();
    let performances = [
        { program: 'love-and-prejudice', datetime: '10-12-2021 12:00', location: 'JMC' },
        { program: 'love-and-prejudice', datetime: '18-01-2022 20:00', location: 'naan' },
        { program: 'love-and-prejudice', datetime: '20-01-2022 20:00', location: 'hecht' },
    ];
    performances.forEach(p => p.datetime = parse(p.datetime, 'dd-MM-yyyy HH:mm', new Date()));
    performances = { future: performances.filter(p => compareAsc(p.datetime, now) >= 0), past: performances.filter(p => compareAsc(p.datetime, now) < 0) };
    Object.keys(performances).forEach(key => {
    const sortResult = {
        future: { true: 1, false: -1 },
        past: { true: -1, false: 1 }
    }

    const monthToHeb = { Jan: 'ינואר', Feb: 'פברואר', Mar: 'מרץ', Apr: 'אפריל', May: 'מאי', Jun: 'יוני', Jul: 'יולי', Aug: 'אוגוסט', Sep: 'ספטמבר', Oct: 'אוקטובר', Nov: 'נובמבר', Dec: 'דצמבר' }
    const translateMonth = str => {
        const [month] = str.match(/(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)/);
        return str.replace(month, monthToHeb[month]);
    }

    performances[key] = performances[key]
        .sort((a, b) => a.datetime > b.datetime ? sortResult[key].true : sortResult[key].false)
        .map(p => ({
            ...p,
            dateObj: p.datetime,
            datetime: { he: translateMonth(format(p.datetime, 'd בLLL yyy ב-HH:mm')), en: format(p.datetime, 'LLLL do, yyyy @ HH:mm') },
            ...locations[p.location]
        }))
    })
</script>

<div id='performance-list'>
    {#each ['en', 'he'] as locale}
        <h2 class={locale} style={locale === 'en' ? 'grid-column: span 2' : ''}>
            {locale === 'en' ? 'Upcoming Performances' : 'הופעות קרובות'}
        </h2>
    {/each}
    {#each performances.future as performance}
        {#each ['en', 'he'] as locale}
            <div class={`list-item ${locale}`}>
                <a href={`https://goo.gl/maps/${performance.mapsRef}`} rel='noreferrer' target='_blank'>{performance.location[locale]}</a>
                <div class='item-time'>
                    {performance.datetime[locale]}
                </div>
            </div>
            {#if locale === 'en'}
                {#if performance.tix}
                    <a class='tix-icon' href={performance.tix} rel='noreferrer' target='_blank'>
                        <img src='tix.svg' alt='Tickets icon' />
                    </a>
                {:else}
                    <div></div>
                {/if}
            {/if}
        {/each}
    {/each}
</div>

<style>
    #performance-list {
        margin: 3rem auto 2rem;
        width: 30rem;
        display: grid;
        grid-template-columns: 1fr 60px 1fr;
    }

    #performance-list .he {
        direction: rtl;
    }

    .list-item {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }

    .list-item a {
        text-decoration: none;
        color: rgb(48, 8, 160);
        margin-bottom: 0.2rem;
        width: fit-content;
        transition: text-shadow 0.2s;
    }
    .list-item a:hover {
        text-shadow: 1px 0 3px #bbb;
    }

    .list-item a:active, .list-item a:focus-visible {
        text-shadow: 1px 1px 1px #777;
    }

    .item-time {
        color: #979797;
        font-size: 0.9rem;
    }

    .tix-icon {
        width: 2rem;
        justify-self: center;
        --scale: 1;
        transform: translate(1.5rem, 0.3rem) rotate(-40deg) scale(var(--scale));
        cursor: pointer;
        transition: transform .2s;
    }
    .tix-icon:hover {
        --scale: 1.1;
    }
    .tix-icon:active, .tix-icon:focus-visible {
        outline: none;
        --scale: 1.2;
    }

    h2 {
        display: flex;
        font-size: 1.2rem;
    }

    @media screen and (max-width: 1000px) {
        #performance-list {
            transform: translateX(-0.5rem);
        }
    }

    @media screen and (max-width: 600px) {
        #performance-list {
            width: 80%;
            font-size: 2.7vw;
        }

        .item-time {
            font-size: 2.4vw;
        }
    }
</style>