<script>
    import { format, parse, compareAsc } from 'date-fns';

    const programs = {
        'love-and-prejudice': { he: 'אהבה ודעה קדומה', en: 'Love and Prejudice' }
    }

    const locations = {
        JMC: { location: { he: 'המרכז למוסיקה ירושלים', en: 'Jerusalem Music Centre' }, mapsRef: 'nteBbNkoerzX1SUT8', tix: 'https://jmc.pres.ws/order/246' },
        naan: { location: { he: 'בית ניגונים, נען', en: `Beit Nigunim, Na'an` }, mapsRef: 'meFwJXmauKj1yFiK8', tix: 'https://tickchak.co.il/24090' },
        hecht: { location: { he: 'בית הכט, חיפה', en: `Hecht House, Haifa` }, mapsRef: 'iWeMF12W7yB2MTXG6', tix: 'https://www.hastudio-tr.co.il/events/512/' },
    }

    const now = new Date();
    let performances = [
        { program: 'love-and-prejudice', datetime: '10-12-2021 12:00', location: 'JMC' },
        { program: 'love-and-prejudice', datetime: '22-02-2022 20:00', location: 'naan' },
        { program: 'love-and-prejudice', datetime: '02-04-2022 20:00', location: 'hecht' },
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
            datetime: {
                he: translateMonth(format(p.datetime, 'd בLLL yyy ב-HH:mm')),
                en: format(p.datetime, 'LLLL do, yyyy @ HH:mm'),
                global: format(p.datetime, 'd/M/yyyy, HH:mm')
            },
            ...locations[p.location]
        }))
    });

    const performancesTitle = { en: 'Upcoming Performances', he: 'הופעות קרובות' };
</script>

<div id='performance-list'>
    {#each ['en', 'he'] as locale}
        <h2 class={locale} style={locale === 'en' ? 'grid-column: span 2' : ''}>
            {performancesTitle[locale]}
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

<div id='performance-list' class='mobile'>
    <h2>
        {#each ['en', 'he'] as locale}
            <div>{performancesTitle[locale]}</div>
        {/each}
    </h2>
    {#each performances.future as performance}
        <div class='list-item'>
            {#each ['en', 'he'] as locale}
                <a href={`https://goo.gl/maps/${performance.mapsRef}`} rel='noreferrer' target='_blank'>{performance.location[locale]}</a>
            {/each}
            <div style='display: flex; flex-direction: column; align-items: center; margin: .2rem 0;'>
                <div>{programs[performance.program].en}</div>
                <div>{programs[performance.program].he}</div>
            </div>
            <div class='item-time'>
                {performance.datetime.global}
            </div>
            {#if performance.tix}
                <a class='tix-icon' href={performance.tix} rel='noreferrer' target='_blank'>
                    <img src='tix.svg' alt='Tickets icon' />
                </a>
            {/if}
        </div>
    {/each}
</div>

<style>
    #performance-list {
        margin: 3rem auto 2rem;
        width: 30rem;
        display: grid;
        grid-template-columns: 1fr 60px 1fr;
    }

    #performance-list.mobile {
        display: none;
    }

    #performance-list .he {
        direction: rtl;
    }

    .list-item {
        margin-bottom: 1rem;
        display: flex;
        flex-direction: column;
    }

    .list-item a:not(.tix-icon) {
        text-decoration: none;
        color: rgb(48, 8, 160);
        margin-bottom: 0.2rem;
        width: fit-content;
        transition: text-shadow 0.2s;
    }

    .list-item a:not(.tix-icon):hover {
        text-shadow: 1px 0 3px #bbb;
    }

    .list-item a:not(.tix-icon):active, .list-item a:not(.tix-icon):focus-visible {
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
        }

        /* #performance-list:not(.mobile) {
            display: none;
        }

        h2 {
            display: flex;
            flex-direction: column;
            width: 70vw;
            margin: 0 auto;
            font-size: 5vw;
        }

        h2 > :last-child {
            align-self: flex-end;
            letter-spacing: .25rem;
        }

        .item-time {
            font-size: 2.4vw;
        } */
    }

    @media screen and (max-width: 560px) {
        #performance-list.mobile {
            display: flex;
            flex-direction: column;
        }

        #performance-list:not(.mobile) {
            display: none;
        }

        h2 {
            display: flex;
            flex-direction: column;
            width: 70vw;
            margin: 0 auto;
            font-size: 5vw;
            line-height: 5vw;
        }

        h2 > :last-child {
            align-self: flex-end;
            letter-spacing: .2rem;
        }

        .item-time {
            font-size: 2.4vw;
        }

        .list-item {
            align-items: center;;
            line-height: 4vw;
            position: relative;
            font-size: 4vw;
            width: fit-content;
            margin: 2rem auto 0;
            letter-spacing: .1rem;
        }

        .tix-icon {
            width: 11vw;
            transform: rotate(-40deg);
            position: absolute;
            right: -17vw;
            top: .5rem;
        }

        .item-time {
            margin: .3rem 0 1rem;
            font-size: 4vw;
            letter-spacing: initial;
        }
    }
</style>