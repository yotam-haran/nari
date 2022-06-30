<svelte:head>
    <script type='text/javascript' defer src='//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js'></script>
    <script type='text/javascript' defer>(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[0]='EMAIL';ftypes[0]='email';fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);</script>
</svelte:head>

<form autocomplete="off" action="https://gmail.us20.list-manage.com/subscribe/post?u=b16878b534bce3b1d71ab85fa&amp;id=c9778947ef" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" class="validate" target="_blank" novalidate>
    <h2>
        <div>Join our mailing list!</div>
        <div dir='rtl'>הצטרפו לרשימת הדיוור שלנו!</div>
    </h2>
    <div class="mc-field-group">
        <label>
            <div><span>Email Address</span><span>כתובת מייל</span></div>
            <input type="email" value="" name="EMAIL" class="required email" id="mce-EMAIL">
        </label>
    </div>
    <div class="mc-field-group">
        <label>
            <div><span>Full Name</span><span>שם מלא</span></div>
            <input dir="auto" type="text" value="" name="FNAME" class="required" id="mce-FNAME">
        </label>
    </div>
    <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups-->
    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_b16878b534bce3b1d71ab85fa_c9778947ef" tabindex="-1" value=""></div>
    <button type="submit" name="subscribe" id="mc-embedded-subscribe" class="button">
        <span>Subscribe</span>/<span>הרשמה</span>
    </button>
    <div id="mce-responses" class="clear foot">
        <div class="response" id="mce-error-response" style="display:none"></div>
        <div class="response" id="mce-success-response" style="display:none"></div>
    </div>
</form>

<style>
    form {
        padding: 1rem;
        width: fit-content;
        /* height: 28rem; */
        padding: 1rem 2rem;
        margin: 2rem auto;

        display: flex;
        flex-direction: column;
        align-items: center;
        border-radius: 0.5rem;
        position: relative;
    }

    h2 {
        display: flex;
        gap: 4rem;
        font-weight: 600;
        font-size: 1.2rem;
        line-height: 1.2;
        margin-bottom: 2rem;
        /* width: 400px; */
    }
    
    .mc-field-group {
        width: 80%;
        margin-bottom: 1rem;
    }

    .mc-field-group label {
        display: flex;
        flex-direction: column;
    }
    .mc-field-group label div {
        display: flex;
        justify-content: space-between;
        padding: 0 0.25rem;
    }
    .mc-field-group label input {
        margin-top: 0.4rem;
        padding: 0.5rem 1rem;
        font: inherit;
        border: 1px solid #ccc;
        border-radius: 0.5rem;
    }
    .mc-field-group label input:focus {
        outline: none;
        box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.3);
    }

    #mc-embedded-subscribe {
        background-color: rgba(255, 255, 255, 0.7);
        padding: 0.5rem 1rem;
        border-radius: 0.5rem;
        border: 1px solid #eee;
        font: inherit;
        font-weight: 600;
        cursor: pointer;
        box-shadow: 4px 4px 0.5rem rgba(0, 0, 0, 0.1);
        display: flex;
        width: 180px;
        justify-content: space-between;
        margin-top: 1.5rem;

        /* position: absolute;
        bottom: 2.2rem; */
    }

    #mc-embedded-subscribe:hover {
        box-shadow: 4px 4px 0.7rem rgba(0, 0, 0, 0.2);
    }
    #mc-embedded-subscribe:active {
        box-shadow: 4px 4px 0.4rem rgba(0, 0, 0, 0.15);
    }

    :global(#mce-success-response){
        color: #fff;
        background-color: rgb(170, 221, 137);
        padding: .75rem 1rem;
        border-radius: 0.5rem;
        margin-top: -2.5rem;
    }

    :global(#mce-error-response){
        color: #fff;
        background-color: rgb(235, 117, 101);
        padding: .75rem 1rem;
        border-radius: 0.5rem;
        text-align: center;
        margin-top: -3rem;
    }

    :global(#mce-error-response a){
        text-decoration: none;
        color: rgb(255, 210, 198);
    }

    :global(#mce-error-response a:hover){
        text-shadow: 1px 0 0 #fff;
    }

    :global(.mce_inline_error) {
        border-color: rgb(209, 31, 25) !important;
    }
    :global(.mce_inline_error:not(input)) {
        display: none !important;
    }

    @media screen and (max-width: 440px) {

    }
</style>