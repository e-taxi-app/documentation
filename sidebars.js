// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  docs: [
    {
      type: "doc",
      id: "intro",
      label: "Introduction",
    },

    {
      type: "category",
      label: "Setup Admin Panel",
      items: ["admin-panel/prerequisite", "admin-panel/installation-steps"],
    },
    {
      type: "category",
      label: "Additional Panel Configuration",
      items: [
        "admin-panel-config/general-settings",
        // "admin-panel-config/webhook-configuration",
        // "admin-panel-config/MSG91-setups",
      ],
    },
    {
      type: "category",
      label: "Setup Mobile Application",
      items: [
        "mobile-app/setup-jdk",
        "mobile-app/change-package-name",
        "mobile-app/change-app-version",
        "mobile-app/integrate-firebase",
        "mobile-app/firebase-otp",
        "mobile-app/email-password-signin",
        "mobile-app/google-signin",
        "mobile-app/apple-signin",
        "mobile-app/notification-fcm",
        // "mobile-app/deep-link",
        "mobile-app/google-map",
        "mobile-app/integrate-admin-panel",
        "mobile-app/change-app-logo",
        "mobile-app/change-app-name",
        "mobile-app/change-splash-image",
        "mobile-app/asset-image",
        "mobile-app/change-country-code",
        "mobile-app/run-app",
        "mobile-app/change-app-theme",
        "mobile-app/change-font",
        "mobile-app/add-language",
        "mobile-app/change-default-language",
        // "mobile-app/admob-settings",
        // "mobile-app/in-app-purchase-setup",
        "mobile-app/generate-release-version",
        "mobile-app/app-deployment",
      ],
    },
    // {
    //   type: "category",
    //   label: "Setup Web Application",
    //   items: [
    //     "web-setup/install-video",
    //     "web-setup/how-to-setup",
    //     "web-setup/set-domain-url",
    //     "web-setup/integrate-firebase",
    //     "web-setup/change-app-name",
    //     "web-setup/change-fonts",
    //     "web-setup/get-place-api-key",
    //     "web-setup/web-settings",
    //     "web-setup/setup-sitemap",
    //     "web-setup/add-adsense",
    //     "web-setup/run-app",
    //     "web-setup/deploy-to-server",
    //     "web-setup/update-site",
    //   ],
    // },
    {
      type: "doc",
      id: "change-log",
      label: "ChangeLog",
    },
    {
      type: "doc",
      id: "features",
      label: "Features",
    },
    {
      type: "doc",
      id: "support/index",
      label: "Support",
    },
    {
      type: "doc",
      id: "faqs/index",
      label: "FAQs",
    },
    {
      type: "doc",
      id: "rating/index",
      label: "Rating",
    },
    {
      type: "doc",
      id: "contact/index",
      label: "Contact Us",
    },
  ],
};

export default sidebars;
