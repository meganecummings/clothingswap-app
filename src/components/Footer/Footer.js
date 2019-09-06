import React from 'react';
import './Footer.css';

const Footer = () => {

    return ( 
        <div class="font-weight-light">
            <div class="margin-horizontal-auto">
                <div class="flexbox flex-wrap">
                    <div class="padding-left-broad border-box">
                        <p>
                        <a href="https://www.google.com/maps/place/255+Bush+St,+San+Francisco,+CA+94104/data=!4m2!3m1!1s0x80858089e67044ab:0x8e5e67ea563b049a?sa=X&ved=2ahUKEwjinsrm87zkAhUEzlkKHWmDDuwQ8gEwAHoECAoQAQ" target="_blank" rel="noopener noreferrer" >255 Bush Street, Floor 5<br/>San Francisco, CA<br/>94104<br/>United States </a>
                        </p>
                        <a class="inline-block" href="#newsletter">Subscribe to our newsletter</a>
                    </div>
                    <div class="flex-grow-1 padding-top-broadest padding-left-broad">
                        <div class="markdown flex-grow-1 max-width-small">
                            <p>
                            <a href="tel:+1-555-555-5555">(555) 555-5555</a> <br/> <a href="mailto:megcummings@gmail.com">megcummings@gmail.com</a>
                            </p>
                        </div>
                        <h6 class="font-base line-height-tightest font-weight-medium text-shorter text-current-from-lg margin-top-broadest margin-top-thin-from-xs margin-bottom-thinnest">Follow us</h6>
                        <div class="flexbox flex-wrap">
                            <div class="square-broadest square-broader-from-xs square-broad-from-sm padding-micro relative margin-top-thinner margin-left-thinner">
                                <a class="border-solid border-slimmer border-color-black border-radius-full width-full height-full bg-color-black-on-hover color-white-on-hover line-height-perfect absolute fill" href="https://www.facebook.com/tuxcreative" target="_blank" rel="noopener noreferrer">
                                <div class="absolute flexbox flex-center">
                                    <span class="relative">FB</span>
                                </div>
                                </a>
                            </div>
                            <div class="square-broadest square-broader-from-xs square-broad-from-sm padding-micro relative margin-top-thinner margin-left-thinner">
                                <a class="border-solid border-slimmer border-color-black border-radius-full width-full height-full bg-color-black-on-hover color-white-on-hover absolute fill" href="https://twitter.com/tuxcreative" target="_blank" rel="noopener noreferrer">
                                    <div class="absolute fill flexbox flex-center">
                                        <span class="relative">TW</span>
                                    </div>
                                </a>
                            </div>
                            <div class="square-broadest square-broader-from-xs square-broad-from-sm padding-micro relative margin-top-thinner margin-left-thinner">
                                <a class="border-solid border-slimmer border-color-black border-radius-full width-full height-full bg-color-black-on-hover color-white-on-hover transition-color-bg-color transition-duration-fastest transition-ease-out-quad line-height-perfect absolute fill" href="https://www.instagram.com/tuxcreative/" target="_blank" rel="noopener noreferrer">
                                    <div class="absolute fill flexbox flex-center">
                                        <span class="relative">INS</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <a class="padding-left-broad border-box padding-top-broadest font-base line-height-tighter font-weight-light text-current text-tall-from-xs text-taller-from-lg flex-align-self-start mother js-scroll-to-id-button" href="#top">
                        <i class="inline-block valign-middle margin-right-thinner width-1_2em">
                            <svg xmlns="http://www.w3.org/2000/svg" class="width-full height-1px overflow-visible padding-bottom-150" preserveAspectRatio="xMidYMin slice" viewBox="0 0 16 24">
                                <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M3 6l5-5 5 5M8 19V2" class="translate-y-minus-1_2-on-mother-hover transition-transform transition-duration-fastest transition-ease-out-quad">
                                </path>
                                <path fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" d="M1 23h14">
                                </path>
                            </svg>
                        </i>Top</a>
                    </div>
                    <div class="flexbox flex-wrap flex-justify-space-between margin-top-broader">
                    <div class="color-light-grey">Copyrights Meg 2019</div>
                </div>
            </div>
        </div>
    )
};

export default Footer;
