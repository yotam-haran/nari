<script>
    import MailForm from '$lib/MailFormInline.svelte';
    // import PerformanceList from '$lib/PerformanceList.svelte';
    import bioEn from '$lib/i18n/en/bio.json'
    import bioHe from '$lib/i18n/he/bio.json'
</script>

<div id='landing-page'>
    <div id='landing-page__content'>
        <div id='landing-page__wrapper'>
            <iframe id='landing-page-video' src="https://www.youtube.com/embed/HSyqVMcZG70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            <MailForm />
        </div>
        <hr style='width: 80%; border: none; height: 1px; background-color: #ccc; margin: 4rem auto 5rem' />
        <iframe id='landing-page-video' src="https://www.youtube.com/embed/kChNUffGC5M" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div id='landing-page__bio'>
            <div>
                <h2>About Us</h2>
                {bioEn.nari.short}
            </div>
            <div dir='rtl'>
                <h2>עלינו</h2>
                {bioHe.nari.short}
            </div>
        </div>
        <!-- <PerformanceList /> -->
    </div>
    <div id='landing-page__image'>
        <h1>
            <span class='en'>Nari Ensemble</span>
            <span class='he'>אנסמבל נארי</span>
        </h1>
        <img src='main-image.jpg' alt='Nari Baroque Ensemble' />
    </div>
</div>

<!-- <div id='landing-page'>
    <div id='landing-page__content'>
        <PerformanceList />
        <iframe id='landing-page-video' src="https://www.youtube.com/embed/HSyqVMcZG70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <MailForm />
    </div>
    <div id='landing-page__image'>
        <h1>
            <span class='en'>Nari Ensemble</span>
            <span class='he'>אנסמבל נארי</span>
        </h1>
        <img src='main-image.jpg' alt='Nari Baroque Ensemble' />
    </div>
</div> -->

<style lang="scss">
    #landing-page-video {
        display: block;
        width: 480px;
        aspect-ratio: 1.75;
        border-radius: 0.5rem;
        box-shadow: 0 0 0.5rem #aaa;
        margin: 2.5rem auto;
    }
    h1 {
        position: absolute;
        top: 2rem;
        display: flex;
        flex-direction: column;
        width: 25rem;
        line-height: 0.8;
        color: #fff;
        text-shadow: 1px 1px 0.1rem #191919; 
        transform: translateX(1rem);
    }
    h1 .en {
        font-family: 'Cairo', sans-serif;
        font-size: 3rem;
    }
    h1 .he {
        font-family: 'Bellefair', sans-serif;
        align-self: flex-end;
        font-size: 4rem;
    }

    #landing-page {
        display: flex;
        width: 100%;
        min-height: 100%;
        overflow: none;

        --cream: rgb(255, 246, 233);
    }
    #landing-page__image {
        width: 40vw;
        display: flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        z-index: 1;
        max-height: 100vh;
        user-select: none;
        position: fixed;
        top: 0;
        right: 0;
    }

    #landing-page__wrapper {
        width: 100%;
        display: flex;
        flex-direction: column;
    }

    /*
    #landing-page__image::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        display: block;
        background-color: rgba(255, 246, 233, 0.2);
    }
    */

    #landing-page__image img {
        height: 100vh;
    }

    #landing-page__content {
        width: 60vw;
        background-color: var(--cream);
        box-shadow: 4px 0 8px #aaa;
        z-index: 2;
    }

    #landing-page__bio {
        display: flex;
        gap: 4rem;
        padding: 2rem 6rem;
        font-size: .9rem;
        text-align: justify;
    }



    @media screen and (max-width: 1024px) {
        #landing-page {
            flex-direction: column-reverse;
            justify-content: flex-end;
            min-height: unset;
        }

        #landing-page__image img {
            width: 100%;
            height: unset;
        }

        #landing-page__image {
            flex: unset;
            position: static;
            height: unset;
            width: 100%;
        }

        #landing-page__content {
            width: 100%;
        }

        #landing-page-video {
            transform: translateX(-0.5rem);
        }

        #landing-page__bio {
            flex-direction: column;
        }

        #landing-page__wrapper {
            flex-direction: column-reverse;
        }

        hr {
            margin: 0 auto 3rem
        }
    }

    @media screen and (max-width: 600px) {
        h1 {
            width: 66vw;
            top: 1vw;
            transform: translateX(5vw);
        }

        h1 .en {
            font-size: 8vw;
        }

        h1 .he {
            font-size: 11vw;
        }

        #landing-page-video {
            width: 80%;
        }

        #landing-page__bio {
            padding: 2rem 3rem;
        }
    }

    @media screen and (max-width: 420px) {
        #landing-page-video {
            width: 90%;
            border-radius: 0;
            transform: translateX(.1rem);
        }
        
        #landing-page__bio {
            padding: 2rem;
        }
    }
</style>