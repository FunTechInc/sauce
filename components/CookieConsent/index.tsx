"use client";

import { useEffect } from "react";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./cookie.scss"; //override default css
import * as Cookie from "vanilla-cookieconsent";
import { Locale } from "@/i18n-config";

export const CookieConsent = ({ lang }: { lang: Locale }) => {
   useEffect(() => {
      Cookie.run({
         categories: {
            necessary: {
               enabled: true, // this category is enabled by default
               readOnly: true, // this category cannot be disabled
            },
            analytics: {
               readOnly: false,
               autoClear: {
                  cookies: [
                     {
                        name: /^(_ga)/, //regex
                     },
                     {
                        name: "_gid", //string
                     },
                  ],
               },
            },
         },
         guiOptions: {
            consentModal: {
               layout: "box",
               position: "bottom left",
            },
         },
         language: {
            default: "ja",
            autoDetect: "document",
            translations: {
               ja: {
                  consentModal: {
                     title: "タイトルタイトル",
                     description: "CookieCookieCookieCookieCookieCookie",
                     acceptAllBtn: "ACCEPT",
                     acceptNecessaryBtn: "REJECT",
                     showPreferencesBtn: "MANAGE",
                  },
                  preferencesModal: {
                     title: "Manage cookie preferences",
                     acceptAllBtn: "Accept all",
                     acceptNecessaryBtn: "Reject all",
                     savePreferencesBtn: "Accept current selection",
                     closeIconLabel: "Close modal",
                     sections: [
                        {
                           title: "Somebody said ... cookies?",
                           description: "I want one!",
                        },
                        {
                           title: "Strictly Necessary cookies",
                           description:
                              "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                           //this field will generate a toggle linked to the 'necessary' category
                           linkedCategory: "necessary",
                        },
                        {
                           title: "Performance and Analytics",
                           description:
                              "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                           linkedCategory: "analytics",
                        },
                        {
                           title: "More information",
                           description:
                              'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                        },
                     ],
                  },
               },
               en: {
                  consentModal: {
                     title: "Hello traveller, it's cookie time!",
                     description: "CookieCookieCookieCookieCookieCookie",
                     acceptAllBtn: "Accept all",
                     acceptNecessaryBtn: "Reject all",
                     showPreferencesBtn: "Manage Individual preferences",
                  },
                  preferencesModal: {
                     title: "Manage cookie preferences",
                     acceptAllBtn: "Accept all",
                     acceptNecessaryBtn: "Reject all",
                     savePreferencesBtn: "Accept current selection",
                     closeIconLabel: "Close modal",
                     sections: [
                        {
                           title: "Somebody said ... cookies?",
                           description: "I want one!",
                        },
                        {
                           title: "Strictly Necessary cookies",
                           description:
                              "These cookies are essential for the proper functioning of the website and cannot be disabled.",
                           //this field will generate a toggle linked to the 'necessary' category
                           linkedCategory: "necessary",
                        },
                        {
                           title: "Performance and Analytics",
                           description:
                              "These cookies collect information about how you use our website. All of the data is anonymized and cannot be used to identify you.",
                           linkedCategory: "analytics",
                        },
                        {
                           title: "More information",
                           description:
                              'For any queries in relation to my policy on cookies and your choices, please <a href="#contact-page">contact us</a>',
                        },
                     ],
                  },
               },
            },
         },
      });
   }, [lang]);
   return null;
};
