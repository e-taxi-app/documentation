---
sidebar_position: 6
---

# How to Change Fonts

Follow these steps to change the Google Font in your Next.js web application.

## Step 1: Choose your font

1. Go to [Google Fonts](https://fonts.google.com/) and pick a font
2. Note the exact font name (e.g., "Inter", "Roboto", "Poppins")

   :::caution IMPORTANT
   The font name must match Google Fonts exactly (case-sensitive)
   :::

## Step 2: Update the import

In `app/layout.js`, change line 1:

Replace `Manrope` with your font name

```javascript
import { Inter } from "next/font/google";
```

## Step 3: Update the font variable name

On line 7, change `const manrope` to match your font:

```javascript
const inter = Inter({
```

Use the same name as the import.

## Step 4: Configure font weights

On line 8, update the weight array with the weights you need:

```javascript
weight: ["300", "400", "500", "600", "700"],
```

Common options: `["300", "400", "500", "600", "700"]`

:::tip TIP
Only include weights you'll use. Fewer weights = smaller bundle size.
:::

## Step 5: Update the className

On line 37, change `${manrope.className}` to your new variable:

```javascript
${inter.className}
```

## Step 6: Test your changes

1. Save the file
2. Restart your dev server: `npm run dev`
3. Check your app to see the new font

:::info NOTE
Keep `subsets: ["latin"]` and `display: "swap"` as shown in the original configuration.
:::
